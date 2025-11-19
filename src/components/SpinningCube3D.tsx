import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const OrbitingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Orbit around center
      groupRef.current.rotation.y += delta * 0.4;
    }
    if (meshRef.current) {
      // Spin the cube itself
      meshRef.current.rotation.y += delta * 0.8;
      meshRef.current.rotation.x += delta * 0.3;
    }
  });
  
  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[1.2, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial 
          color="#4A7A9E"
          metalness={0.92}
          roughness={0.15}
          envMapIntensity={1.8}
        />
      </mesh>
    </group>
  );
};

const SpinningCube3D = () => {
  return (
    <Canvas
      camera={{ position: [3, 2, 3], fov: 50 }}
      gl={{
        antialias: true,
        alpha: true,
      }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, 5, 5]} intensity={0.6} color="#00A8CC" />
      <OrbitingCube />
    </Canvas>
  );
};

export default SpinningCube3D;
