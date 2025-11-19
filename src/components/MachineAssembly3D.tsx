import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

// Raw Material - Steel Billet (animates to base position)
const SteelBillet = ({ targetPosition, delay }: { targetPosition: [number, number, number], delay: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [startPos] = useState<[number, number, number]>([-6, 3, -4]);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() - delay;
      const progress = Math.min(Math.max(time / 2, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      meshRef.current.position.x = startPos[0] + (targetPosition[0] - startPos[0]) * eased;
      meshRef.current.position.y = startPos[1] + (targetPosition[1] - startPos[1]) * eased;
      meshRef.current.position.z = startPos[2] + (targetPosition[2] - startPos[2]) * eased;
      
      meshRef.current.rotation.x = (1 - eased) * Math.PI * 2;
      meshRef.current.rotation.y = (1 - eased) * Math.PI * 3;
    }
  });
  
  return (
    <mesh ref={meshRef} position={startPos} castShadow receiveShadow>
      <boxGeometry args={[0.6, 0.4, 0.4]} />
      <meshStandardMaterial 
        color="#8B9BA6"
        metalness={0.9}
        roughness={0.2}
        envMapIntensity={1.5}
      />
    </mesh>
  );
};

// Raw Material - Aluminum Block (animates to gantry position)
const AluminumBlock = ({ targetPosition, delay }: { targetPosition: [number, number, number], delay: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [startPos] = useState<[number, number, number]>([6, 4, -3]);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() - delay;
      const progress = Math.min(Math.max(time / 2, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      meshRef.current.position.x = startPos[0] + (targetPosition[0] - startPos[0]) * eased;
      meshRef.current.position.y = startPos[1] + (targetPosition[1] - startPos[1]) * eased;
      meshRef.current.position.z = startPos[2] + (targetPosition[2] - startPos[2]) * eased;
      
      meshRef.current.rotation.x = (1 - eased) * Math.PI * 2;
      meshRef.current.rotation.z = (1 - eased) * Math.PI * 2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={startPos} castShadow receiveShadow>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial 
        color="#C0C0C0"
        metalness={0.95}
        roughness={0.15}
        envMapIntensity={2}
      />
    </mesh>
  );
};

// Brass Rod (animates to spindle position)
const BrassRod = ({ targetPosition, delay }: { targetPosition: [number, number, number], delay: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [startPos] = useState<[number, number, number]>([-5, 2, 4]);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() - delay;
      const progress = Math.min(Math.max(time / 2, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      meshRef.current.position.x = startPos[0] + (targetPosition[0] - startPos[0]) * eased;
      meshRef.current.position.y = startPos[1] + (targetPosition[1] - startPos[1]) * eased;
      meshRef.current.position.z = startPos[2] + (targetPosition[2] - startPos[2]) * eased;
      
      meshRef.current.rotation.y = (1 - eased) * Math.PI * 4;
    }
  });
  
  return (
    <mesh ref={meshRef} position={startPos} castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.1, 0.1, 1.2, 32]} />
      <meshStandardMaterial 
        color="#CD7F32"
        metalness={0.85}
        roughness={0.25}
        envMapIntensity={1.8}
      />
    </mesh>
  );
};

// Column Part (animates to vertical column)
const ColumnPart = ({ targetPosition, delay, side }: { targetPosition: [number, number, number], delay: number, side: 'left' | 'right' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [startPos] = useState<[number, number, number]>(
    side === 'left' ? [-7, -2, 3] : [7, -2, -3]
  );
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() - delay;
      const progress = Math.min(Math.max(time / 2, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      meshRef.current.position.x = startPos[0] + (targetPosition[0] - startPos[0]) * eased;
      meshRef.current.position.y = startPos[1] + (targetPosition[1] - startPos[1]) * eased;
      meshRef.current.position.z = startPos[2] + (targetPosition[2] - startPos[2]) * eased;
      
      meshRef.current.rotation.z = (1 - eased) * Math.PI;
    }
  });
  
  return (
    <mesh ref={meshRef} position={startPos} castShadow receiveShadow>
      <boxGeometry args={[0.3, 3, 0.3]} />
      <meshStandardMaterial 
        color="#2A2A2A"
        metalness={0.93}
        roughness={0.14}
        envMapIntensity={2.1}
      />
    </mesh>
  );
};

// Table Part (animates to work table position)
const TablePart = ({ targetPosition, delay }: { targetPosition: [number, number, number], delay: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [startPos] = useState<[number, number, number]>([5, -3, 4]);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() - delay;
      const progress = Math.min(Math.max(time / 2, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      meshRef.current.position.x = startPos[0] + (targetPosition[0] - startPos[0]) * eased;
      meshRef.current.position.y = startPos[1] + (targetPosition[1] - startPos[1]) * eased;
      meshRef.current.position.z = startPos[2] + (targetPosition[2] - startPos[2]) * eased;
      
      meshRef.current.rotation.x = (1 - eased) * Math.PI * 2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={startPos} castShadow receiveShadow>
      <boxGeometry args={[2.5, 0.2, 2]} />
      <meshStandardMaterial 
        color="#3A3A3A"
        metalness={0.91}
        roughness={0.16}
        envMapIntensity={2}
      />
    </mesh>
  );
};

// Final Assembly - CNC Machine Structure
const CNCMachineAssembly = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Animated Base frame */}
      <SteelBillet targetPosition={[0, -1.5, 0]} delay={0} />
      <mesh position={[0, -1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.4, 3]} />
        <meshStandardMaterial 
          color="#1F1F1F"
          metalness={0.94}
          roughness={0.13}
          envMapIntensity={2.2}
        />
      </mesh>
      
      {/* Animated Vertical columns */}
      <ColumnPart targetPosition={[-1.5, 0, 0]} delay={0.5} side="left" />
      <ColumnPart targetPosition={[1.5, 0, 0]} delay={0.5} side="right" />
      
      {/* Animated Gantry */}
      <AluminumBlock targetPosition={[0, 1.5, 0]} delay={1.0} />
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.6, 0.35, 0.35]} />
        <meshStandardMaterial 
          color="#252525"
          metalness={0.92}
          roughness={0.15}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Animated Spindle housing */}
      <BrassRod targetPosition={[0, 0.5, 0]} delay={1.5} />
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.4, 2, 32]} />
        <meshStandardMaterial 
          color="#1A1A1A"
          metalness={0.95}
          roughness={0.11}
          envMapIntensity={2.3}
        />
      </mesh>
      
      {/* Tool holder on spindle */}
      <mesh position={[0, -0.5, 0]} castShadow receiveShadow rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.3, 1, 32]} />
        <meshStandardMaterial 
          color="#303030"
          metalness={0.93}
          roughness={0.14}
          envMapIntensity={2.1}
        />
      </mesh>
      
      {/* Animated Work table */}
      <TablePart targetPosition={[0, -1.1, 0.3]} delay={2.0} />
      
      {/* T-slots on table */}
      {[-0.8, 0, 0.8].map((x, i) => (
        <mesh key={i} position={[x, -1, 0.3]} castShadow receiveShadow>
          <boxGeometry args={[0.08, 0.22, 2]} />
          <meshStandardMaterial 
            color="#151515"
            metalness={0.96}
            roughness={0.09}
            envMapIntensity={2.4}
          />
        </mesh>
      ))}
      
      {/* Control panel accent */}
      <mesh position={[1.8, 0, 1.2]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 1, 0.1]} />
        <meshStandardMaterial 
          color="#00CCCC"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1.5}
          emissive="#00CCCC"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
};

// Scene Component
const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[6, 4, 8]} fov={45} />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={20}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={0.5}
      />

      {/* Lighting Setup */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-10, 5, -5]} intensity={0.6} />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#00FFFF" />
      <spotLight
        position={[5, 8, 5]}
        angle={0.3}
        penumbra={0.5}
        intensity={1}
        castShadow
        color="#FFFFFF"
      />

      {/* HDR Environment for realistic reflections */}
      <Environment preset="warehouse" />

      {/* Animated CNC machine assembly */}
      <CNCMachineAssembly />
    </>
  );
};

// Main Component
const MachineAssembly3D = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: 2,
        toneMappingExposure: 1.2,
      }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default MachineAssembly3D;
