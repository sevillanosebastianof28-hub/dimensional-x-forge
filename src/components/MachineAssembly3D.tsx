import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

// Animated Part Component
const AnimatedPart = ({ 
  targetPosition, 
  delay, 
  geometry, 
  color, 
  metalness = 0.9, 
  roughness = 0.15,
  startPos 
}: { 
  targetPosition: [number, number, number]; 
  delay: number; 
  geometry: JSX.Element; 
  color: string; 
  metalness?: number; 
  roughness?: number;
  startPos: [number, number, number];
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
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
      {geometry}
      <meshStandardMaterial 
        color={color}
        metalness={metalness}
        roughness={roughness}
        envMapIntensity={2}
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

// Realistic CNC Machine Assembly matching reference image
const CNCMachineAssembly = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Main Machine Base - Dark blue/grey body */}
      <AnimatedPart
        targetPosition={[0, -1.3, 0]}
        delay={0}
        startPos={[-6, -3, -4]}
        geometry={<boxGeometry args={[3.8, 0.5, 3.2]} />}
        color="#2A3C4F"
        metalness={0.85}
        roughness={0.2}
      />
      
      {/* Base platform */}
      <mesh position={[0, -1.7, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.3, 3.6]} />
        <meshStandardMaterial 
          color="#1A1F28"
          metalness={0.9}
          roughness={0.15}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Left vertical column */}
      <AnimatedPart
        targetPosition={[-1.4, 0.2, -1.2]}
        delay={0.3}
        startPos={[-7, 2, -5]}
        geometry={<boxGeometry args={[0.4, 3.5, 0.6]} />}
        color="#374A5E"
        metalness={0.88}
        roughness={0.18}
      />
      
      {/* Right vertical column */}
      <AnimatedPart
        targetPosition={[1.4, 0.2, -1.2]}
        delay={0.3}
        startPos={[7, 2, -5]}
        geometry={<boxGeometry args={[0.4, 3.5, 0.6]} />}
        color="#374A5E"
        metalness={0.88}
        roughness={0.18}
      />
      
      {/* Rear vertical column (spindle mount) */}
      <AnimatedPart
        targetPosition={[0, 1.2, -1.3]}
        delay={0.6}
        startPos={[0, 5, -6]}
        geometry={<boxGeometry args={[0.6, 2.5, 0.5]} />}
        color="#2D3E51"
        metalness={0.9}
        roughness={0.16}
      />
      
      {/* Top gantry beam */}
      <AnimatedPart
        targetPosition={[0, 1.9, -1.2]}
        delay={0.9}
        startPos={[0, 6, 0]}
        geometry={<boxGeometry args={[3.4, 0.4, 0.5]} />}
        color="#3A4D61"
        metalness={0.87}
        roughness={0.19}
      />
      
      {/* Spindle assembly */}
      <AnimatedPart
        targetPosition={[0, 0.4, -0.8]}
        delay={1.2}
        startPos={[0, 4, 2]}
        geometry={<cylinderGeometry args={[0.25, 0.25, 2.2, 32]} />}
        color="#2F3F52"
        metalness={0.92}
        roughness={0.12}
      />
      
      {/* Tool holder cone */}
      <mesh position={[0, -0.7, -0.8]} castShadow receiveShadow rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.2, 0.8, 32]} />
        <meshStandardMaterial 
          color="#3D5066"
          metalness={0.94}
          roughness={0.1}
          envMapIntensity={2.2}
        />
      </mesh>
      
      {/* Glass front panel */}
      <AnimatedPart
        targetPosition={[0, 0.3, 0.6]}
        delay={1.5}
        startPos={[-5, 3, 5]}
        geometry={<boxGeometry args={[2.8, 2.4, 0.08]} />}
        color="#4A7A9E"
        metalness={0.95}
        roughness={0.05}
      />
      
      {/* Work table inside */}
      <AnimatedPart
        targetPosition={[0, -0.6, 0]}
        delay={1.8}
        startPos={[5, -2, 4]}
        geometry={<boxGeometry args={[2.2, 0.15, 1.8]} />}
        color="#3B4E63"
        metalness={0.88}
        roughness={0.2}
      />
      
      {/* T-slots on work table */}
      {[-0.6, 0, 0.6].map((x, i) => (
        <mesh key={i} position={[x, -0.52, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.06, 0.16, 1.8]} />
          <meshStandardMaterial 
            color="#1E2A36"
            metalness={0.95}
            roughness={0.1}
            envMapIntensity={2.3}
          />
        </mesh>
      ))}
      
      {/* Control panel on right side */}
      <AnimatedPart
        targetPosition={[1.6, 0.2, 0.8]}
        delay={2.1}
        startPos={[6, 2, 6]}
        geometry={<boxGeometry args={[0.5, 1.2, 0.12]} />}
        color="#1A1F28"
        metalness={0.7}
        roughness={0.3}
      />
      
      {/* Control panel screen */}
      <mesh position={[1.65, 0.2, 0.8]} castShadow receiveShadow>
        <boxGeometry args={[0.45, 0.8, 0.02]} />
        <meshStandardMaterial 
          color="#0A4F6E"
          metalness={0.6}
          roughness={0.4}
          envMapIntensity={1.5}
          emissive="#0A4F6E"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Small accent lights */}
      <mesh position={[-0.8, 1.8, 0.7]} castShadow receiveShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial 
          color="#00A8CC"
          metalness={0.8}
          roughness={0.2}
          emissive="#00A8CC"
          emissiveIntensity={0.4}
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
