import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

const PrecisionValve = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.25}>
      <group position={position} rotation={[0, Math.PI / 4, 0]}>
        {/* Valve body */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.6, 0.8, 1.8, 32]} />
          <meshStandardMaterial
            color="#8899bb"
            metalness={0.92}
            roughness={0.12}
            envMapIntensity={2}
          />
        </mesh>
        
        {/* Top flange */}
        <mesh position={[0, 1.1, 0]} castShadow>
          <cylinderGeometry args={[0.9, 0.85, 0.3, 32]} />
          <meshStandardMaterial
            color="#7788aa"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={1.8}
          />
        </mesh>
        
        {/* Bottom flange */}
        <mesh position={[0, -1.1, 0]} castShadow>
          <cylinderGeometry args={[0.85, 0.9, 0.3, 32]} />
          <meshStandardMaterial
            color="#7788aa"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={1.8}
          />
        </mesh>
        
        {/* Valve stem */}
        <mesh position={[0, 0, 0.7]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 1.4, 16]} />
          <meshStandardMaterial
            color="#99aabb"
            metalness={0.95}
            roughness={0.08}
            envMapIntensity={2.1}
          />
        </mesh>
        
        {/* Mounting bolts */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 0.72,
              1.1,
              Math.sin((i / 6) * Math.PI * 2) * 0.72
            ]}
            castShadow
          >
            <cylinderGeometry args={[0.08, 0.08, 0.35, 12]} />
            <meshStandardMaterial
              color="#445566"
              metalness={0.88}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const TurbineWheel = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position} rotation={[Math.PI / 2, 0, 0]}>
        {/* Hub */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.4, 0.6, 0.8, 32]} />
          <meshStandardMaterial
            color="#99aacc"
            metalness={0.94}
            roughness={0.1}
            envMapIntensity={2.2}
          />
        </mesh>
        
        {/* Turbine blades */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 12) * Math.PI * 2) * 0.7,
              Math.sin((i / 12) * Math.PI * 2) * 0.7,
              0
            ]}
            rotation={[0, 0, (i / 12) * Math.PI * 2 + Math.PI / 6]}
            castShadow
          >
            <boxGeometry args={[0.5, 0.15, 0.7]} />
            <meshStandardMaterial
              color="#7799bb"
              metalness={0.92}
              roughness={0.12}
              envMapIntensity={2}
            />
          </mesh>
        ))}
        
        {/* Center shaft */}
        <mesh castShadow>
          <cylinderGeometry args={[0.2, 0.2, 1.2, 16]} />
          <meshStandardMaterial
            color="#8899aa"
            metalness={0.96}
            roughness={0.08}
            envMapIntensity={2.3}
          />
        </mesh>
      </group>
    </Float>
  );
};

const HydraulicCylinder = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.28}>
      <group position={position} rotation={[0, 0, Math.PI / 2]}>
        {/* Main cylinder body */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.35, 0.35, 2.2, 32]} />
          <meshStandardMaterial
            color="#6688aa"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={1.9}
          />
        </mesh>
        
        {/* Piston rod */}
        <mesh position={[-1.6, 0, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 1.4, 16]} />
          <meshStandardMaterial
            color="#99aabb"
            metalness={0.95}
            roughness={0.08}
            envMapIntensity={2.2}
          />
        </mesh>
        
        {/* End caps */}
        <mesh position={[1.1, 0, 0]} castShadow>
          <cylinderGeometry args={[0.42, 0.42, 0.2, 32]} />
          <meshStandardMaterial
            color="#5577aa"
            metalness={0.88}
            roughness={0.18}
            envMapIntensity={1.8}
          />
        </mesh>
        
        <mesh position={[-1.1, 0, 0]} castShadow>
          <cylinderGeometry args={[0.42, 0.42, 0.2, 32]} />
          <meshStandardMaterial
            color="#5577aa"
            metalness={0.88}
            roughness={0.18}
            envMapIntensity={1.8}
          />
        </mesh>
        
        {/* Mounting eye */}
        <mesh position={[-2.4, 0, 0]} castShadow>
          <torusGeometry args={[0.25, 0.1, 16, 32]} />
          <meshStandardMaterial
            color="#7788aa"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={2}
          />
        </mesh>
      </group>
    </Float>
  );
};

const ConnectorPlate = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.4} rotationIntensity={0.16} floatIntensity={0.26}>
      <group position={position} rotation={[Math.PI / 6, Math.PI / 3, 0]}>
        {/* Main plate */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.2, 1.5, 0.25]} />
          <meshStandardMaterial
            color="#7799bb"
            metalness={0.88}
            roughness={0.18}
            envMapIntensity={1.9}
          />
        </mesh>
        
        {/* Center opening */}
        <mesh castShadow>
          <torusGeometry args={[0.35, 0.13, 16, 32]} />
          <meshStandardMaterial
            color="#667788"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={1.8}
          />
        </mesh>
        
        {/* Mounting holes */}
        {[
          [-0.45, 0.6, 0],
          [0.45, 0.6, 0],
          [-0.45, -0.6, 0],
          [0.45, -0.6, 0]
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]} castShadow>
            <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
            <meshStandardMaterial
              color="#445566"
              metalness={0.85}
              roughness={0.22}
            />
          </mesh>
        ))}
        
        {/* Reinforcement ribs */}
        {[-0.5, 0, 0.5].map((x, i) => (
          <mesh key={`rib-${i}`} position={[x, 0, 0.13]} castShadow>
            <boxGeometry args={[0.08, 1.4, 0.06]} />
            <meshStandardMaterial
              color="#6688aa"
              metalness={0.88}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[6, 3.5, 6]} fov={38} />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={11}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 4.5}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.35} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={2.2} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-7, -5, -4]} intensity={0.7} />
      <pointLight position={[3, 6, 3]} intensity={1.3} color="#00ddff" />
      <pointLight position={[-3, 4, -3]} intensity={0.9} color="#0099ff" />
      <spotLight 
        position={[0, 8, 0]} 
        intensity={0.7} 
        angle={0.55} 
        penumbra={0.45}
        color="#00ffff"
      />
      
      <Environment preset="city" />
      
      {/* Assembly parts */}
      <PrecisionValve position={[-1.8, 0, 0.5]} />
      <TurbineWheel position={[1.5, 0.8, 0]} />
      <HydraulicCylinder position={[0.2, -0.8, -1.5]} />
      <ConnectorPlate position={[-0.5, 1.2, 1.8]} />
    </>
  );
};

const MissionParts3D = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas 
        shadows 
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MissionParts3D;
