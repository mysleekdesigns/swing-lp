'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '@/lib/animations';
import { ShootingStars } from './ShootingStar';

// Easing functions for smooth transitions
const easeOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 3); // Cubic ease-out
};

const easeIn = (t: number): number => {
  return t * t * t; // Cubic ease-in
};

// Create circular star texture for glowing effect
function createStarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  // Create radial gradient for glowing star effect
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.5)');
  gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.2)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Constellation data - defining positions and connections for recognizable star patterns
interface Constellation {
  name: string;
  stars: { x: number; y: number; z: number }[];
  connections: [number, number][]; // Pairs of star indices to connect
}

// Helper: Calculate visible bounds at a given z-depth based on camera FOV
function getVisibleBounds(zDepth: number, cameraZ: number = 5, fov: number = 75) {
  const distance = Math.abs(zDepth - cameraZ);
  const vFov = (fov * Math.PI) / 180; // Convert to radians
  const height = 2 * Math.tan(vFov / 2) * distance;
  // Use actual window dimensions if available, otherwise assume 16:9 aspect ratio
  const aspectRatio = typeof window !== 'undefined'
    ? window.innerWidth / window.innerHeight
    : 16 / 9;
  const width = height * aspectRatio;
  return { width, height };
}

// Helper: Calculate bounding box of a constellation
interface ConstellationBounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
  centerX: number;
  centerY: number;
  centerZ: number;
  width: number;
  height: number;
  depth: number;
}

function getConstellationBounds(constellation: Constellation): ConstellationBounds {
  const xs = constellation.stars.map(s => s.x);
  const ys = constellation.stars.map(s => s.y);
  const zs = constellation.stars.map(s => s.z);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const minZ = Math.min(...zs);
  const maxZ = Math.max(...zs);

  return {
    minX, maxX, minY, maxY, minZ, maxZ,
    centerX: (minX + maxX) / 2,
    centerY: (minY + maxY) / 2,
    centerZ: (minZ + maxZ) / 2,
    width: maxX - minX,
    height: maxY - minY,
    depth: maxZ - minZ,
  };
}

// Helper: Generate random positions with minimum spacing
interface RandomPosition {
  x: number;
  y: number;
  z: number;
}

function generateRandomPositions(
  constellations: Constellation[],
  minSpacing: number = 8
): RandomPosition[] {
  const positions: RandomPosition[] = [];
  const bounds = constellations.map(c => getConstellationBounds(c));

  // Average z-depth for calculations
  const avgZ = -30;
  const { width: viewWidth, height: viewHeight } = getVisibleBounds(avgZ);

  // Use 80% of visible area to avoid edge clipping
  const rangeX = viewWidth * 0.8;
  const rangeY = viewHeight * 0.8;
  const rangeZ = 20; // z-depth range: -20 to -40

  for (let i = 0; i < constellations.length; i++) {
    const maxAttempts = 100;
    let placed = false;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      // Generate random position
      const candidatePos: RandomPosition = {
        x: (Math.random() - 0.5) * rangeX,
        y: (Math.random() - 0.5) * rangeY,
        z: -20 - Math.random() * rangeZ, // Between -20 and -40
      };

      // Check spacing against all previously placed constellations
      let hasCollision = false;
      for (let j = 0; j < positions.length; j++) {
        const distance = Math.sqrt(
          Math.pow(candidatePos.x - positions[j].x, 2) +
          Math.pow(candidatePos.y - positions[j].y, 2)
        );

        // Calculate required spacing based on both constellation sizes
        const requiredSpacing = minSpacing +
          (bounds[i].width + bounds[j].width) / 2;

        if (distance < requiredSpacing) {
          hasCollision = true;
          break;
        }
      }

      if (!hasCollision) {
        positions.push(candidatePos);
        placed = true;
        break;
      }
    }

    // Fallback: place in a grid if random placement fails
    if (!placed) {
      const cols = Math.ceil(Math.sqrt(constellations.length));
      const row = Math.floor(i / cols);
      const col = i % cols;
      const cellWidth = rangeX / cols;
      const cellHeight = rangeY / cols;

      positions.push({
        x: (col - cols / 2 + 0.5) * cellWidth,
        y: (row - cols / 2 + 0.5) * cellHeight,
        z: -20 - Math.random() * rangeZ,
      });
    }
  }

  return positions;
}

const CONSTELLATIONS: Constellation[] = [
  {
    name: 'Aries', // Small, scale ~0.6
    stars: [
      { x: -23, y: 17, z: -25 },    // Horn tip left
      { x: -22, y: 16, z: -25 },    // Base
      { x: -21, y: 17, z: -25 },    // Horn tip right
    ],
    connections: [
      [0, 1], [1, 2], // V-shape for ram's horns
    ],
  },
  {
    name: 'Taurus', // Medium, scale ~0.8
    stars: [
      { x: -15, y: 19, z: -30 },    // Left horn
      { x: -13.5, y: 17.5, z: -30 }, // Left head
      { x: -12, y: 17, z: -30 },    // Center/eye
      { x: -10.5, y: 17.5, z: -30 }, // Right head
      { x: -9, y: 19, z: -30 },     // Right horn
    ],
    connections: [
      [0, 1], [1, 2], [2, 3], [3, 4], // Bull's head
    ],
  },
  {
    name: 'Gemini', // Medium, scale ~0.8 - The Twins (Castor & Pollux)
    stars: [
      { x: -1.5, y: 19, z: -22 },     // Castor (left twin head)
      { x: -1.5, y: 17.5, z: -22 },   // Left twin shoulder
      { x: -1.5, y: 16, z: -22 },     // Left twin waist
      { x: -2, y: 14.5, z: -22 },     // Left twin foot
      { x: 1.5, y: 19, z: -22 },      // Pollux (right twin head)
      { x: 1.5, y: 17.5, z: -22 },    // Right twin shoulder
      { x: 1.5, y: 16, z: -22 },      // Right twin waist
      { x: 2, y: 14.5, z: -22 },      // Right twin foot
      { x: 0, y: 17.2, z: -22 },      // Connection point between twins
    ],
    connections: [
      [0, 1], [1, 2], [2, 3],         // Left twin (Castor)
      [4, 5], [5, 6], [6, 7],         // Right twin (Pollux)
      [1, 8], [8, 5],                 // Connection between twins
    ],
  },
  {
    name: 'Cancer', // Medium, scale ~0.7
    stars: [
      { x: 14, y: 16, z: -28 },     // Top
      { x: 13.3, y: 15, z: -28 },   // Left
      { x: 14.7, y: 15, z: -28 },   // Right
      { x: 14, y: 14, z: -28 },     // Bottom
      { x: 12.5, y: 16, z: -28 },   // Left claw
      { x: 15.5, y: 16, z: -28 },   // Right claw
    ],
    connections: [
      [0, 1], [1, 3], [3, 2], [2, 0], // Body
      [0, 4], [0, 5], // Claws
    ],
  },
  {
    name: 'Leo', // Large, scale ~1.0 - The Lion with Sickle
    stars: [
      { x: 18, y: 12, z: -35 },     // Epsilon Leonis (Sickle top)
      { x: 18.3, y: 11.2, z: -35 }, // Mu Leonis (Sickle)
      { x: 18.7, y: 10.5, z: -35 }, // Zeta Leonis (Sickle)
      { x: 19.2, y: 9.7, z: -35 },  // Gamma Leonis/Algieba (Sickle)
      { x: 19.5, y: 8.8, z: -35 },  // Eta Leonis (Sickle)
      { x: 19.8, y: 8, z: -35 },    // Regulus/Alpha Leonis (heart, Sickle bottom)
      { x: 20.5, y: 8.5, z: -35 },  // Body
      { x: 21, y: 9, z: -35 },      // Back
      { x: 21.5, y: 9.5, z: -35 },  // Hindquarters
      { x: 22, y: 10, z: -35 },     // Denebola (Beta Leonis - tail)
    ],
    connections: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], // The Sickle (head/mane)
      [5, 6], [6, 7], [7, 8], [8, 9],         // Body to tail
    ],
  },
  {
    name: 'Virgo', // Small, scale ~0.6
    stars: [
      { x: 25, y: 6.2, z: -26 },    // Top
      { x: 25, y: 5, z: -26 },      // Center
      { x: 24.4, y: 4.1, z: -26 },  // Left bottom
      { x: 25.6, y: 4.1, z: -26 },  // Right bottom
      { x: 25, y: 4.5, z: -26 },    // Mid point
    ],
    connections: [
      [0, 1], [1, 4], [4, 2], [4, 3], // Y-shape for maiden
    ],
  },
  {
    name: 'Libra', // Medium, scale ~0.8
    stars: [
      { x: -23, y: -1, z: -32 },    // Left scale
      { x: -21.5, y: 0, z: -32 },   // Left beam
      { x: -19.5, y: 0, z: -32 },   // Right beam
      { x: -18, y: -1, z: -32 },    // Right scale
      { x: -20.5, y: 1, z: -32 },   // Top center
    ],
    connections: [
      [0, 1], [1, 4], [4, 2], [2, 3], // Balance scales
    ],
  },
  {
    name: 'Scorpio', // Large, scale ~1.2 - The Scorpion
    stars: [
      { x: -13.5, y: -3.5, z: -38 }, // Graffias/Beta Sco (head/claw)
      { x: -13, y: -4, z: -38 },     // Delta Sco/Dschubba (head)
      { x: -12, y: -4.5, z: -38 },   // Pi Sco (head)
      { x: -11.5, y: -5, z: -38 },   // Antares/Alpha Sco (heart) - brightest
      { x: -11, y: -5.5, z: -38 },   // Tau Sco (body)
      { x: -10.5, y: -6, z: -38 },   // Epsilon Sco (body)
      { x: -10, y: -6.8, z: -38 },   // Mu Sco (tail start)
      { x: -9.5, y: -7.5, z: -38 },  // Theta Sco/Sargas (tail curve)
      { x: -9, y: -8.3, z: -38 },    // Kappa Sco (tail)
      { x: -8.5, y: -9, z: -38 },    // Iota Sco (tail)
      { x: -8, y: -9.5, z: -38 },    // Lambda Sco/Shaula (stinger tip)
      { x: -7.7, y: -9.8, z: -38 },  // Upsilon Sco/Lesath (stinger)
    ],
    connections: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], // Head to body
      [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],      // Curved tail to stinger
    ],
  },
  {
    name: 'Sagittarius', // Medium, scale ~0.8 - The Teapot Asterism
    stars: [
      { x: 3.5, y: -8, z: -24 },    // Alnasl/Gamma Sgr (spout tip)
      { x: 4.5, y: -7.5, z: -24 },  // Kaus Media/Delta Sgr (base left)
      { x: 5, y: -8.2, z: -24 },    // Kaus Australis/Epsilon Sgr (base bottom)
      { x: 5.7, y: -7.5, z: -24 },  // Ascella/Zeta Sgr (base right)
      { x: 6.2, y: -8, z: -24 },    // Phi Sgr (body right)
      { x: 5, y: -6.2, z: -24 },    // Kaus Borealis/Lambda Sgr (lid point)
      { x: 6.8, y: -7, z: -24 },    // Nunki/Sigma Sgr (handle top)
      { x: 6.5, y: -7.8, z: -24 },  // Tau Sgr (handle bottom)
    ],
    connections: [
      [0, 1], [1, 2], [2, 3], [3, 4], // Teapot body and spout
      [1, 5], [3, 5],                 // Lid
      [4, 7], [7, 6],                 // Handle
    ],
  },
  {
    name: 'Capricorn', // Small, scale ~0.5
    stars: [
      { x: 17, y: -10, z: -30 },    // Head
      { x: 17.5, y: -10.5, z: -30 }, // Back
      { x: 18, y: -11, z: -30 },    // Tail start
      { x: 18.2, y: -11.5, z: -30 }, // Tail curve
      { x: 18, y: -12, z: -30 },    // Tail end
    ],
    connections: [
      [0, 1], [1, 2], [2, 3], [3, 4], // Goat with curved tail
    ],
  },
  {
    name: 'Aquarius', // Small-medium, scale ~0.6
    stars: [
      { x: 7, y: -14.5, z: -36 },   // Wave 1 top
      { x: 7.6, y: -15, z: -36 },   // Wave 1 bottom
      { x: 8.2, y: -14.5, z: -36 }, // Wave 2 top
      { x: 8.8, y: -15, z: -36 },   // Wave 2 bottom
      { x: 7.6, y: -14, z: -36 },   // Water source
    ],
    connections: [
      [4, 0], [0, 1], [1, 2], [2, 3], // Water waves
    ],
  },
  {
    name: 'Pisces', // Medium, scale ~0.9
    stars: [
      { x: -20, y: -10, z: -27 },   // Left fish top
      { x: -19, y: -11, z: -27 },   // Left fish middle
      { x: -20, y: -12, z: -27 },   // Left fish bottom
      { x: -17.2, y: -11, z: -27 }, // Connection
      { x: -15.5, y: -10, z: -27 }, // Right fish top
      { x: -14.5, y: -11, z: -27 }, // Right fish middle
      { x: -15.5, y: -12, z: -27 }, // Right fish bottom
    ],
    connections: [
      [0, 1], [1, 2], [1, 3], [3, 5], [4, 5], [5, 6], // Two fish connected
    ],
  },
];

// Stars component - thousands of stars using BufferGeometry
function Stars() {
  const meshRef = useRef<THREE.Points>(null);
  const prefersReducedMotion = useReducedMotion();

  // Create star texture (only once)
  const starTexture = useMemo(() => createStarTexture(), []);

  // Generate star positions and properties
  const starData = useMemo(() => {
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 4); // RGBA for alpha-based twinkling
    const sizes = new Float32Array(starCount);
    const twinklePhases = new Float32Array(starCount); // Random phase offsets
    const twinkleFrequencies = new Float32Array(starCount); // Random twinkle speeds

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const i4 = i * 4;

      // Random positions in 3D space
      positions[i3] = (Math.random() - 0.5) * 100; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 100; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 100; // z

      // Star colors - mostly white with planet-like color tints
      const colorVariant = Math.random();
      if (colorVariant > 0.98) {
        // Uranus cyan (2% of stars)
        colors[i4] = 0.45;
        colors[i4 + 1] = 0.85;
        colors[i4 + 2] = 0.95;
      } else if (colorVariant > 0.95) {
        // Saturn/Venus yellow (3% of stars)
        colors[i4] = 1.0;
        colors[i4 + 1] = 0.9;
        colors[i4 + 2] = 0.65;
      } else if (colorVariant > 0.90) {
        // Earth/Neptune blue (5% of stars)
        colors[i4] = 0.35;
        colors[i4 + 1] = 0.55;
        colors[i4 + 2] = 1.0;
      } else if (colorVariant > 0.85) {
        // Mars red/orange (5% of stars)
        colors[i4] = 1.0;
        colors[i4 + 1] = 0.5;
        colors[i4 + 2] = 0.35;
      } else if (colorVariant > 0.80) {
        // Magenta/pink tint (5% of stars)
        colors[i4] = 1.0;
        colors[i4 + 1] = 0.7;
        colors[i4 + 2] = 0.9;
      } else if (colorVariant > 0.75) {
        // Purple tint (5% of stars)
        colors[i4] = 0.9;
        colors[i4 + 1] = 0.7;
        colors[i4 + 2] = 1.0;
      } else {
        // White/blue-white (75% of stars)
        const brightness = 0.8 + Math.random() * 0.2;
        colors[i4] = brightness;
        colors[i4 + 1] = brightness;
        colors[i4 + 2] = brightness * (0.95 + Math.random() * 0.05);
      }
      colors[i4 + 3] = 1.0; // Alpha channel (will be animated for twinkle)

      // Varying star sizes for depth perception
      sizes[i] = Math.random() * 0.4 + 0.2; // Smaller range: 0.2 to 0.6

      // Twinkle data - random phase offsets and frequencies
      twinklePhases[i] = Math.random() * Math.PI * 2; // Random phase 0-2π
      twinkleFrequencies[i] = 0.2 + Math.random() * 0.8; // Frequency 0.2-1.0 Hz (slower twinkle)
    }

    return { positions, colors, sizes, twinklePhases, twinkleFrequencies, count: starCount };
  }, []);

  // Animate camera movement (slow drift through space) and star twinkling
  useFrame((state) => {
    if (!prefersReducedMotion && meshRef.current) {
      // Slow rotation for subtle movement
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.005;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.0025;

      // Gentle z-axis movement for depth
      const time = state.clock.elapsedTime;
      state.camera.position.z = Math.sin(time * 0.05) * 2;

      // Twinkle effect - animate star opacity via alpha channel
      const colorAttribute = meshRef.current.geometry.attributes.color;
      if (colorAttribute) {
        for (let i = 0; i < starData.count; i++) {
          // Calculate twinkle using sine wave with individual phase and frequency
          const twinkle = Math.sin(time * starData.twinkleFrequencies[i] + starData.twinklePhases[i]);
          // Alpha varies between 0.3 and 1.0 (70% variation for visible twinkling)
          const alpha = 0.65 + twinkle * 0.35;
          colorAttribute.array[i * 4 + 3] = alpha; // Update alpha channel
        }
        colorAttribute.needsUpdate = true;
      }
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starData.count}
          array={starData.positions}
          itemSize={3}
          args={[starData.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={starData.count}
          array={starData.colors}
          itemSize={4}
          args={[starData.colors, 4]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={starData.count}
          array={starData.sizes}
          itemSize={1}
          args={[starData.sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        map={starTexture}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Shooting Star component with tail
function Comet({ index }: { index: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const tailRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = useReducedMotion();

  // Generate shooting star path and properties
  const config = useMemo(() => {
    const seed = index * 123.456;
    const random = (min: number, max: number) => min + (Math.sin(seed + min) * 0.5 + 0.5) * (max - min);

    // Random duration between 2-3 seconds
    const duration = random(2, 3);

    // Constant z-depth for 2D horizontal movement
    const constantZ = -12;

    // Random starting position - left or right edge only
    const startFromLeft = random(0, 1) > 0.5;
    let startX, startY, startZ, endX, endY, endZ;

    startY = random(-15, 15); // Random vertical position
    startZ = constantZ;

    if (startFromLeft) {
      // Start from left, move right
      startX = -35;
      endX = 35;
    } else {
      // Start from right, move left
      startX = 35;
      endX = -35;
    }

    // Add slight vertical angle variation (±10-15° from horizontal)
    const verticalAngle = random(-0.25, 0.25); // ±0.25 radians ≈ ±14°
    const horizontalDistance = Math.abs(endX - startX);
    const verticalDistance = Math.tan(verticalAngle) * horizontalDistance;

    endY = startY + verticalDistance;
    endZ = constantZ; // Keep same z-depth for horizontal movement

    return {
      path: { startX, startY, startZ, endX, endY, endZ },
      duration,
      startTime: random(0, 3), // Stagger start times
      twinkleFreq: random(3, 6), // Twinkle frequency in Hz
    };
  }, [index]);

  // Create tapered tail geometry
  const tailGeometry = useMemo(() => {
    const segmentCount = 60;
    const positions = new Float32Array(segmentCount * 3);
    const colors = new Float32Array(segmentCount * 3);
    const opacities = new Float32Array(segmentCount);

    for (let i = 0; i < segmentCount; i++) {
      const i3 = i * 3;
      const t = i / (segmentCount - 1);

      // Position along tail (will be updated in animation)
      positions[i3] = 0;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = -t * 4; // Tail length = 4 units

      // Color gradient: white → purple → transparent
      if (t < 0.3) {
        // White to yellow
        colors[i3] = 1.0;
        colors[i3 + 1] = 1.0 - t * 0.5;
        colors[i3 + 2] = 1.0 - t * 2;
      } else {
        // Yellow to purple
        const purpleT = (t - 0.3) / 0.7;
        colors[i3] = 1.0 - purpleT * 0.4; // R
        colors[i3 + 1] = 0.85 - purpleT * 0.35; // G
        colors[i3 + 2] = 0.4 + purpleT * 0.6; // B
      }

      // Opacity: fade from 1 to 0 along tail
      opacities[i] = 1.0 - Math.pow(t, 1.5);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));

    return geometry;
  }, []);

  useFrame((state) => {
    if (!groupRef.current || !headRef.current || !tailRef.current || prefersReducedMotion) return;

    const elapsed = state.clock.elapsedTime - config.startTime;
    const cycleTime = config.duration + 2; // Add 2 seconds gap between cycles
    const t = (elapsed % cycleTime) / config.duration;

    // Only visible during the duration (not during gap)
    if (t > 1) {
      groupRef.current.visible = false;
      return;
    }
    groupRef.current.visible = true;

    // Linear movement along path
    const x = config.path.startX + (config.path.endX - config.path.startX) * t;
    const y = config.path.startY + (config.path.endY - config.path.startY) * t;
    const z = config.path.startZ + (config.path.endZ - config.path.startZ) * t;

    groupRef.current.position.set(x, y, z);

    // Calculate direction for head rotation
    const dx = config.path.endX - config.path.startX;
    const dy = config.path.endY - config.path.startY;
    const dz = config.path.endZ - config.path.startZ;
    const angle = Math.atan2(dy, dx);
    groupRef.current.rotation.z = angle;
    groupRef.current.rotation.y = Math.atan2(dz, Math.sqrt(dx * dx + dy * dy));

    // Fade in (first 20%)
    let opacity = 1;
    if (t < 0.2) {
      opacity = easeOut(t / 0.2);
    }
    // Fade out (last 20%)
    else if (t > 0.8) {
      opacity = easeIn(1 - (t - 0.8) / 0.2);
    }

    // Twinkling effect
    const twinkle = Math.sin(elapsed * config.twinkleFreq * Math.PI * 2) * 0.15 + 0.85;
    const finalOpacity = opacity * twinkle;

    // Apply opacity to head and tail
    if (headRef.current.material instanceof THREE.MeshBasicMaterial) {
      headRef.current.material.opacity = finalOpacity;
    }
    if (tailRef.current.material instanceof THREE.PointsMaterial) {
      tailRef.current.material.opacity = finalOpacity * 0.95;
    }

    // Scale twinkle
    const scale = 1 + Math.sin(elapsed * config.twinkleFreq * Math.PI * 2 + 1) * 0.08;
    headRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={groupRef} frustumCulled={false}>
      {/* Shooting star head - small glowing sphere */}
      <mesh ref={headRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial
          color="#ffffee"
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Tail - particle stream */}
      <points ref={tailRef} geometry={tailGeometry}>
        <pointsMaterial
          size={0.25}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

// Constellations component - renders astrology constellation patterns with connecting lines
function Constellations() {
  const starsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const prefersReducedMotion = useReducedMotion();

  // Create star texture for constellation stars
  const starTexture = useMemo(() => createStarTexture(), []);

  // Prepare constellation stars and lines data with randomized positions
  const constellationData = useMemo(() => {
    const allStars: { x: number; y: number; z: number }[] = [];
    const allLines: { start: number; end: number }[] = [];

    // Generate random positions for all constellations
    const randomPositions = generateRandomPositions(CONSTELLATIONS);

    let currentStarIndex = 0;

    // Process each constellation
    CONSTELLATIONS.forEach((constellation, constellationIndex) => {
      const constellationStartIndex = currentStarIndex;

      // Calculate the original center of this constellation
      const bounds = getConstellationBounds(constellation);

      // Get the new random position for this constellation
      const newPosition = randomPositions[constellationIndex];

      // Calculate offset to move constellation from its current center to new position
      const offsetX = newPosition.x - bounds.centerX;
      const offsetY = newPosition.y - bounds.centerY;
      const offsetZ = newPosition.z - bounds.centerZ;

      // Add all stars from this constellation with offset applied
      constellation.stars.forEach((star) => {
        allStars.push({
          x: star.x + offsetX,
          y: star.y + offsetY,
          z: star.z + offsetZ,
        });
        currentStarIndex++;
      });

      // Add connections for this constellation (offset by constellation's start index)
      constellation.connections.forEach(([start, end]) => {
        allLines.push({
          start: constellationStartIndex + start,
          end: constellationStartIndex + end,
        });
      });
    });

    // Create buffers for stars
    const starCount = allStars.length;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    allStars.forEach((star, i) => {
      const i3 = i * 3;
      starPositions[i3] = star.x;
      starPositions[i3 + 1] = star.y;
      starPositions[i3 + 2] = star.z;

      // Golden/warm white color for constellation stars
      starColors[i3] = 1.0;      // R
      starColors[i3 + 1] = 0.95; // G
      starColors[i3 + 2] = 0.85; // B

      // Slightly larger size for constellation stars (subtly bigger than background)
      starSizes[i] = 0.5 + Math.random() * 0.2; // 0.5 to 0.7
    });

    // Create buffers for lines
    const linePositions = new Float32Array(allLines.length * 6); // 2 points per line, 3 coords per point

    allLines.forEach((line, i) => {
      const i6 = i * 6;
      const startStar = allStars[line.start];
      const endStar = allStars[line.end];

      // Start point
      linePositions[i6] = startStar.x;
      linePositions[i6 + 1] = startStar.y;
      linePositions[i6 + 2] = startStar.z;

      // End point
      linePositions[i6 + 3] = endStar.x;
      linePositions[i6 + 4] = endStar.y;
      linePositions[i6 + 5] = endStar.z;
    });

    return {
      starPositions,
      starColors,
      starSizes,
      starCount,
      linePositions,
      lineCount: allLines.length,
    };
  }, []);

  // Gentle rotation animation
  useFrame((state) => {
    if (!prefersReducedMotion && starsRef.current && linesRef.current) {
      // Very slow rotation to keep constellations recognizable
      const rotation = state.clock.elapsedTime * 0.002;
      starsRef.current.rotation.y = rotation;
      starsRef.current.rotation.x = rotation * 0.5;
      linesRef.current.rotation.y = rotation;
      linesRef.current.rotation.x = rotation * 0.5;
    }
  });

  return (
    <group>
      {/* Constellation Stars */}
      <points ref={starsRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={constellationData.starCount}
            array={constellationData.starPositions}
            itemSize={3}
            args={[constellationData.starPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={constellationData.starCount}
            array={constellationData.starColors}
            itemSize={3}
            args={[constellationData.starColors, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            count={constellationData.starCount}
            array={constellationData.starSizes}
            itemSize={1}
            args={[constellationData.starSizes, 1]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.25}
          map={starTexture}
          vertexColors
          transparent
          opacity={0.35}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Constellation Lines - Very Faint */}
      <lineSegments ref={linesRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={constellationData.lineCount * 2}
            array={constellationData.linePositions}
            itemSize={3}
            args={[constellationData.linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#e8d5b7"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

// Milky Way component - shader-based realistic galaxy as seen from Earth
function MilkyWay() {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = useReducedMotion();

  // Vertex shader - passes UV coordinates to fragment shader
  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment shader - creates Milky Way with Simplex noise and FBM
  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vPosition;

    // Simplex 2D noise function
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m;
      m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    // Fractal Brownian Motion (FBM) - layers noise for cloud-like effect
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;

      for(int i = 0; i < 6; i++) {
        value += amplitude * snoise(p * frequency);
        frequency *= 2.0;  // Lacunarity
        amplitude *= 0.5;  // Gain
      }

      return value;
    }

    void main() {
      // Create diagonal band from upper-left to lower-right
      vec2 uv = vUv;

      // Rotate UV coordinates to create diagonal arc (30 degrees)
      float angle = -0.5236; // -30 degrees in radians
      vec2 center = vec2(0.5, 0.5);
      vec2 rotatedUv = uv - center;
      float cosA = cos(angle);
      float sinA = sin(angle);
      rotatedUv = vec2(
        rotatedUv.x * cosA - rotatedUv.y * sinA,
        rotatedUv.x * sinA + rotatedUv.y * cosA
      );
      rotatedUv += center;

      // Distance from galactic band center (vertical distance in rotated space)
      float distFromBand = abs(rotatedUv.y - 0.5);

      // Galactic core position (lower-right in original space)
      vec2 corePos = vec2(0.7, 0.3);
      float distFromCore = distance(uv, corePos);

      // Base galaxy structure using FBM
      float noise1 = fbm(rotatedUv * 3.0 + uTime * 0.01);
      float noise2 = fbm(rotatedUv * 6.0 - uTime * 0.015);
      float noise3 = fbm(rotatedUv * 12.0);

      // Create band shape - denser in center, fading to edges
      float bandShape = smoothstep(0.3, 0.0, distFromBand);
      bandShape *= (0.5 + 0.5 * noise1);

      // Galactic core brightness
      float coreBrightness = smoothstep(0.4, 0.0, distFromCore);
      coreBrightness = pow(coreBrightness, 0.8);

      // Dark dust lanes (subtractive noise)
      float dustLanes = smoothstep(0.3, 0.7, noise2);
      dustLanes *= smoothstep(0.4, 0.6, noise3);

      // Combine structure
      float density = bandShape * (1.0 - dustLanes * 0.6);
      density += coreBrightness * 0.8;
      density = clamp(density, 0.0, 1.0);

      // Color based on position and density
      vec3 color = vec3(0.0);

      // Galactic core colors (warm: yellow, orange, pink, magenta)
      vec3 coreColorYellow = vec3(1.0, 0.92, 0.6);   // #FFEB99
      vec3 coreColorOrange = vec3(1.0, 0.6, 0.33);   // #FF9955
      vec3 coreColorPink = vec3(1.0, 0.53, 0.67);    // #FF88AA
      vec3 coreColorMagenta = vec3(0.8, 0.4, 0.87);  // #CC66DD

      // Outer region colors (cool: blue, purple, white)
      vec3 outerColorBlue = vec3(0.33, 0.53, 0.87);  // #5588DD
      vec3 outerColorPurple = vec3(0.53, 0.4, 0.8);  // #8866CC
      vec3 outerColorWhite = vec3(0.8, 0.87, 1.0);   // #CCDDFF

      // Mix core colors
      vec3 coreColor = mix(coreColorYellow, coreColorOrange, noise1 * 0.5 + 0.5);
      coreColor = mix(coreColor, coreColorPink, noise2 * 0.3 + 0.3);
      coreColor = mix(coreColor, coreColorMagenta, noise3 * 0.2);

      // Mix outer colors
      vec3 outerColor = mix(outerColorBlue, outerColorPurple, noise1 * 0.5 + 0.5);
      outerColor = mix(outerColor, outerColorWhite, noise2 * 0.3);

      // Blend based on distance from core
      float coreInfluence = smoothstep(0.6, 0.2, distFromCore);
      color = mix(outerColor, coreColor, coreInfluence);

      // Apply density and add subtle variation
      color *= density;

      // Final opacity - more subtle overall
      float alpha = density * (0.15 + coreBrightness * 0.3);
      alpha = clamp(alpha, 0.0, 0.5);

      // Fade edges smoothly
      float edgeFade = smoothstep(0.0, 0.1, uv.x) *
                       smoothstep(1.0, 0.9, uv.x) *
                       smoothstep(0.0, 0.1, uv.y) *
                       smoothstep(1.0, 0.9, uv.y);
      alpha *= edgeFade;

      gl_FragColor = vec4(color, alpha);
    }
  `;

  // Shader uniforms
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 }
    }),
    []
  );

  // Animate time uniform
  useFrame((state) => {
    if (meshRef.current && !prefersReducedMotion) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[-25, 20, -40]}>
      <planeGeometry args={[60, 30]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Main Starfield component
export function Starfield() {
  const [isMounted, setIsMounted] = useState(false);

  // Only render on client side (Next.js SSR compatibility)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return null during SSR
  }

  return (
    <div className="starfield-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        gl={{
          alpha: true,
          antialias: false, // Better performance
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]} // Limit pixel ratio for performance
      >
        <color attach="background" args={['#000000']} />

        {/* Milky Way Galaxy Band */}
        <MilkyWay />

        {/* Background Stars */}
        <Stars />

        {/* Constellation Stars with Connecting Lines */}
        <Constellations />
      </Canvas>

      {/* CSS-based shooting stars */}
      <ShootingStars />

      {/* Gradient fade overlay (bottom) */}
      <div className="starfield-fade" />
    </div>
  );
}
