import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const OrbitingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Slow orbit around center
      groupRef.current.rotation.y += delta * 0.3;
    }
    if (meshRef.current) {
      // Slow spin the cube itself
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });
  
  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial 
          color="#00A8CC"
          metalness={0.95}
          roughness={0.1}
          envMapIntensity={2.0}
          emissive="#00F6FF"
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Cyan glow outline effect */}
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.05}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshBasicMaterial 
          color="#00F6FF"
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
    </group>
  );
};

const SpinningCube3D = () => {
  return (
    <Canvas
      camera={{ position: [2, 1.5, 2], fov: 50 }}
      gl={{
        antialias: true,
        alpha: true,
      }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[-3, 3, 3]} intensity={1.2} color="#00F6FF" />
      <pointLight position={[3, -3, -3]} intensity={0.8} color="#00A8CC" />
      <OrbitingCube />
    </Canvas>
  );
};

export default SpinningCube3D;
