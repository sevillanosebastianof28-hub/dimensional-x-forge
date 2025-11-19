import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

// Raw Material - Steel Billet
const SteelBillet = ({ position }: { position: [number, number, number] }) => (
  <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[1.2, 0.8, 0.8]} />
      <meshStandardMaterial 
        color="#8B9BA6"
        metalness={0.9}
        roughness={0.2}
        envMapIntensity={1.5}
      />
    </mesh>
  </Float>
);

// Raw Material - Aluminum Block
const AluminumBlock = ({ position }: { position: [number, number, number] }) => (
  <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.3}>
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial 
        color="#C0C0C0"
        metalness={0.95}
        roughness={0.15}
        envMapIntensity={2}
      />
    </mesh>
  </Float>
);

// Raw Material - Brass Rod
const BrassRod = ({ position }: { position: [number, number, number] }) => (
  <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.3}>
    <mesh position={position} castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.15, 0.15, 2, 32]} />
      <meshStandardMaterial 
        color="#CD7F32"
        metalness={0.85}
        roughness={0.25}
        envMapIntensity={1.8}
      />
    </mesh>
  </Float>
);

// Sub-assembly - Spindle
const Spindle = ({ position }: { position: [number, number, number] }) => (
  <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.4}>
    <group position={position} castShadow receiveShadow>
      {/* Main shaft */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.25, 0.25, 2.5, 32]} />
        <meshStandardMaterial 
          color="#404040"
          metalness={0.95}
          roughness={0.1}
          envMapIntensity={2}
        />
      </mesh>
      {/* Flange */}
      <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.15, 32]} />
        <meshStandardMaterial 
          color="#303030"
          metalness={0.9}
          roughness={0.15}
          envMapIntensity={2}
        />
      </mesh>
    </group>
  </Float>
);

// Sub-assembly - Tool Holder
const ToolHolder = ({ position }: { position: [number, number, number] }) => (
  <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
    <group position={position} castShadow receiveShadow>
      {/* Base cone */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.35, 1.2, 32]} />
        <meshStandardMaterial 
          color="#1A1A1A"
          metalness={0.92}
          roughness={0.12}
          envMapIntensity={2.2}
        />
      </mesh>
      {/* Collet */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.3, 16]} />
        <meshStandardMaterial 
          color="#505050"
          metalness={0.88}
          roughness={0.18}
          envMapIntensity={1.9}
        />
      </mesh>
    </group>
  </Float>
);

// Sub-assembly - Machine Plate
const MachinePlate = ({ position }: { position: [number, number, number] }) => (
  <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.3}>
    <group position={position} castShadow receiveShadow>
      {/* Main plate */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.15, 1.5]} />
        <meshStandardMaterial 
          color="#2A2A2A"
          metalness={0.93}
          roughness={0.14}
          envMapIntensity={2.1}
        />
      </mesh>
      {/* Mounting holes */}
      {[-0.7, 0.7].map((x, i) => 
        [-0.5, 0.5].map((z, j) => (
          <mesh key={`${i}-${j}`} position={[x, 0, z]}>
            <cylinderGeometry args={[0.08, 0.08, 0.16, 16]} />
            <meshStandardMaterial 
              color="#101010"
              metalness={0.95}
              roughness={0.1}
              envMapIntensity={2}
            />
          </mesh>
        ))
      )}
    </group>
  </Float>
);

// Sub-assembly - Precision Clamp
const PrecisionClamp = ({ position }: { position: [number, number, number] }) => (
  <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.4}>
    <group position={position} castShadow receiveShadow>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.6, 0.3, 0.4]} />
        <meshStandardMaterial 
          color="#3A3A3A"
          metalness={0.91}
          roughness={0.16}
          envMapIntensity={2}
        />
      </mesh>
      {/* Jaw */}
      <mesh position={[0.25, 0.2, 0]}>
        <boxGeometry args={[0.1, 0.4, 0.4]} />
        <meshStandardMaterial 
          color="#505050"
          metalness={0.89}
          roughness={0.17}
          envMapIntensity={1.9}
        />
      </mesh>
      {/* Screw */}
      <mesh position={[-0.2, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
        <meshStandardMaterial 
          color="#606060"
          metalness={0.87}
          roughness={0.19}
          envMapIntensity={1.8}
        />
      </mesh>
    </group>
  </Float>
);

// Final Assembly - CNC Machine Structure
const CNCMachineAssembly = ({ position }: { position: [number, number, number] }) => (
  <group position={position}>
    {/* Base frame */}
    <mesh position={[0, -1.5, 0]} castShadow receiveShadow>
      <boxGeometry args={[4, 0.4, 3]} />
      <meshStandardMaterial 
        color="#1F1F1F"
        metalness={0.94}
        roughness={0.13}
        envMapIntensity={2.2}
      />
    </mesh>
    
    {/* Vertical columns */}
    {[-1.5, 1.5].map((x, i) => (
      <mesh key={i} position={[x, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 3, 0.3]} />
        <meshStandardMaterial 
          color="#2A2A2A"
          metalness={0.93}
          roughness={0.14}
          envMapIntensity={2.1}
        />
      </mesh>
    ))}
    
    {/* Gantry */}
    <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
      <boxGeometry args={[3.6, 0.35, 0.35]} />
      <meshStandardMaterial 
        color="#252525"
        metalness={0.92}
        roughness={0.15}
        envMapIntensity={2}
      />
    </mesh>
    
    {/* Spindle housing */}
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
    
    {/* Work table */}
    <mesh position={[0, -1.1, 0.3]} castShadow receiveShadow>
      <boxGeometry args={[2.5, 0.2, 2]} />
      <meshStandardMaterial 
        color="#3A3A3A"
        metalness={0.91}
        roughness={0.16}
        envMapIntensity={2}
      />
    </mesh>
    
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

      {/* Final assembled CNC machine */}
      <CNCMachineAssembly position={[0, 0, 0]} />
      
      {/* Floating raw materials (background) */}
      <SteelBillet position={[-4, 2, -2]} />
      <AluminumBlock position={[4, 2.5, -1]} />
      <BrassRod position={[-3.5, 1, 2]} />
      
      {/* Floating sub-assemblies (mid-ground) */}
      <Spindle position={[-2.5, -1.5, 3]} />
      <ToolHolder position={[2.8, -0.5, 2.5]} />
      <MachinePlate position={[3, 1.5, 1]} />
      <PrecisionClamp position={[-3, 0.5, 2.5]} />
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
