'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '@/lib/animations';

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
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;

      // Random positions in 3D space
      positions[i3] = (Math.random() - 0.5) * 100; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 100; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 100; // z

      // Star colors - mostly white with some purple/magenta tints
      const colorVariant = Math.random();
      if (colorVariant > 0.95) {
        // Purple tint (5% of stars)
        colors[i3] = 0.9;
        colors[i3 + 1] = 0.7;
        colors[i3 + 2] = 1.0;
      } else if (colorVariant > 0.9) {
        // Magenta/pink tint (5% of stars)
        colors[i3] = 1.0;
        colors[i3 + 1] = 0.7;
        colors[i3 + 2] = 0.9;
      } else {
        // White/blue-white (90% of stars)
        const brightness = 0.8 + Math.random() * 0.2;
        colors[i3] = brightness;
        colors[i3 + 1] = brightness;
        colors[i3 + 2] = brightness * (0.95 + Math.random() * 0.05);
      }

      // Varying star sizes for depth perception
      sizes[i] = Math.random() * 0.8 + 0.3;
    }

    return { positions, colors, sizes, count: starCount };
  }, []);

  // Animate camera movement (slow drift through space)
  useFrame((state) => {
    if (!prefersReducedMotion && meshRef.current) {
      // Slow rotation for subtle movement
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.005;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.0025;

      // Gentle z-axis movement for depth
      const time = state.clock.elapsedTime;
      state.camera.position.z = Math.sin(time * 0.05) * 2;
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
          itemSize={3}
          args={[starData.colors, 3]}
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

    // Random duration between 3-5 seconds
    const duration = random(3, 5);

    // Random starting position on the edge of the view
    const startSide = Math.floor(random(0, 4)); // 0=top, 1=right, 2=bottom, 3=left
    let startX, startY, startZ;

    // Position starts from edges
    if (startSide === 0) { // Top
      startX = random(-50, 50);
      startY = 35;
      startZ = random(-20, -10);
    } else if (startSide === 1) { // Right
      startX = 50;
      startY = random(-35, 35);
      startZ = random(-20, -10);
    } else if (startSide === 2) { // Bottom
      startX = random(-50, 50);
      startY = -35;
      startZ = random(-20, -10);
    } else { // Left
      startX = -50;
      startY = random(-35, 35);
      startZ = random(-20, -10);
    }

    // Calculate diagonal path at ~45 degrees
    const angle = random(0, Math.PI * 2);
    const distance = random(60, 100);
    const endX = startX + Math.cos(angle) * distance;
    const endY = startY + Math.sin(angle) * distance;
    const endZ = random(5, 15);

    return {
      path: { startX, startY, startZ, endX, endY, endZ },
      duration,
      startTime: random(0, 10), // Stagger start times
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
      positions[i3 + 2] = -t * 15; // Tail length = 15 units

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
      tailRef.current.material.opacity = finalOpacity * 0.8;
    }

    // Scale twinkle
    const scale = 1 + Math.sin(elapsed * config.twinkleFreq * Math.PI * 2 + 1) * 0.08;
    headRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={groupRef}>
      {/* Shooting star head - elongated cylinder */}
      <mesh ref={headRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.3, 0.8, 8]} />
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
          size={0.3}
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
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          alpha: true,
          antialias: false, // Better performance
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]} // Limit pixel ratio for performance
      >
        <color attach="background" args={['#000000']} />

        {/* Stars */}
        <Stars />

        {/* Multiple comets */}
        <Comet index={0} />
        <Comet index={1} />
        <Comet index={2} />
      </Canvas>

      {/* Gradient fade overlay (bottom) */}
      <div className="starfield-fade" />
    </div>
  );
}
