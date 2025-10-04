'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '@/lib/animations';

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
      sizes[i] = Math.random() * 2 + 0.5;
    }

    return { positions, colors, sizes, count: starCount };
  }, []);

  // Animate camera movement (slow drift through space)
  useFrame((state) => {
    if (!prefersReducedMotion && meshRef.current) {
      // Slow rotation for subtle movement
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.005;

      // Gentle z-axis movement for depth
      const time = state.clock.elapsedTime;
      state.camera.position.z = Math.sin(time * 0.1) * 2;
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

// Comet component with particle trail
function Comet({ index }: { index: number }) {
  const cometRef = useRef<THREE.Group>(null);
  const trailRef = useRef<THREE.Points>(null);
  const prefersReducedMotion = useReducedMotion();

  // Create particle texture for trail (only once)
  const particleTexture = useMemo(() => createStarTexture(), []);

  // Generate comet path and properties
  const { path, speed, startTime } = useMemo(() => {
    const seed = index * 123.456;
    return {
      // Curved path through space
      path: {
        startX: (Math.sin(seed) * 40) - 20,
        startY: (Math.cos(seed) * 40) - 20,
        startZ: -50,
        endX: (Math.sin(seed + 1) * 40) + 20,
        endY: (Math.cos(seed + 2) * 40) + 20,
        endZ: 10,
      },
      speed: 0.15 + Math.random() * 0.1,
      startTime: Math.random() * 20, // Stagger start times
    };
  }, [index]);

  // Trail particle positions (updated each frame)
  const trailPositions = useMemo(() => {
    const count = 50;
    return new Float32Array(count * 3);
  }, []);

  const trailOpacities = useMemo(() => {
    const count = 50;
    const opacities = new Float32Array(count);
    // Fade from 1 to 0 along the trail
    for (let i = 0; i < count; i++) {
      opacities[i] = (count - i) / count;
    }
    return opacities;
  }, []);

  useFrame((state) => {
    if (!cometRef.current || !trailRef.current || prefersReducedMotion) return;

    const time = (state.clock.elapsedTime - startTime) * speed;
    const progress = (time % 20) / 20; // Loop every 20 seconds (adjusted for speed)

    // Smooth easing for more natural movement
    const eased = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    // Calculate position along curved path
    const x = path.startX + (path.endX - path.startX) * eased;
    const y = path.startY + (path.endY - path.startY) * eased + Math.sin(progress * Math.PI * 2) * 5;
    const z = path.startZ + (path.endZ - path.startZ) * eased;

    cometRef.current.position.set(x, y, z);

    // Update trail positions
    const geometry = trailRef.current.geometry;
    const positions = geometry.attributes.position.array as Float32Array;

    // Shift existing trail positions back
    for (let i = positions.length - 3; i >= 3; i -= 3) {
      positions[i] = positions[i - 3];
      positions[i + 1] = positions[i - 2];
      positions[i + 2] = positions[i - 1];
    }

    // Add new position at the front (comet head position)
    positions[0] = x;
    positions[1] = y;
    positions[2] = z;

    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group ref={cometRef}>
      {/* Comet head - glowing sphere */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Comet glow */}
      <mesh>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial
          color="#9d4edd"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Particle trail */}
      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={trailPositions.length / 3}
            array={trailPositions}
            itemSize={3}
            args={[trailPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-opacity"
            count={trailOpacities.length}
            array={trailOpacities}
            itemSize={1}
            args={[trailOpacities, 1]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.2}
          map={particleTexture}
          color="#c77dff"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
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
