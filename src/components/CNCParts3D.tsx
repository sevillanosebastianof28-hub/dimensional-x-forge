import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

const CNCGear = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position} rotation={[Math.PI / 6, 0, 0]}>
        {/* Main gear body with improved details */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1.4, 1.4, 0.35, 64]} />
          <meshStandardMaterial
            color="#99aabb"
            metalness={0.95}
            roughness={0.08}
            envMapIntensity={2}
          />
        </mesh>
        
        {/* Gear teeth - more detailed */}
        {Array.from({ length: 24 }).map((_, i) => (
          <mesh
            castShadow
            key={i}
            position={[
              Math.cos((i / 24) * Math.PI * 2) * 1.5,
              0,
              Math.sin((i / 24) * Math.PI * 2) * 1.5
            ]}
            rotation={[0, (i / 24) * Math.PI * 2, 0]}
          >
            <boxGeometry args={[0.18, 0.35, 0.4]} />
            <meshStandardMaterial
              color="#8899aa"
              metalness={0.92}
              roughness={0.12}
              envMapIntensity={1.8}
            />
          </mesh>
        ))}
        
        {/* Inner ring detail */}
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.9, 0.9, 0.3, 32]} />
          <meshStandardMaterial
            color="#aabbcc"
            metalness={0.88}
            roughness={0.15}
            envMapIntensity={1.6}
          />
        </mesh>
        
        {/* Center hub with bolt holes */}
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.45, 0.45, 0.38, 32]} />
          <meshStandardMaterial
            color="#667788"
            metalness={0.95}
            roughness={0.08}
            envMapIntensity={1.8}
          />
        </mesh>
        
        {/* Bolt holes around center */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh
            key={`bolt-${i}`}
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 0.65,
              0,
              Math.sin((i / 6) * Math.PI * 2) * 0.65
            ]}
            castShadow
          >
            <cylinderGeometry args={[0.08, 0.08, 0.4, 16]} />
            <meshStandardMaterial
              color="#334455"
              metalness={0.9}
              roughness={0.25}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const CNCShaft = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
      <group position={position} rotation={[0, 0, Math.PI / 2]}>
        {/* Main shaft with stepped sections */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.32, 0.32, 2.8, 32]} />
          <meshStandardMaterial
            color="#aabbcc"
            metalness={0.96}
            roughness={0.06}
            envMapIntensity={2.2}
          />
        </mesh>
        
        {/* Thread detail section */}
        <mesh position={[0.9, 0, 0]} castShadow>
          <cylinderGeometry args={[0.28, 0.28, 0.6, 32]} />
          <meshStandardMaterial
            color="#99aacc"
            metalness={0.9}
            roughness={0.18}
            envMapIntensity={1.8}
          />
        </mesh>
        
        {/* Flange mounting plate */}
        <mesh position={[-1.2, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.7, 0.7, 0.22, 64]} />
          <meshStandardMaterial
            color="#8899bb"
            metalness={0.92}
            roughness={0.1}
            envMapIntensity={2}
          />
        </mesh>
        
        {/* Mounting holes in flange */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              -1.2,
              Math.cos((i / 8) * Math.PI * 2) * 0.48,
              Math.sin((i / 8) * Math.PI * 2) * 0.48
            ]}
            castShadow
          >
            <cylinderGeometry args={[0.09, 0.09, 0.26, 16]} />
            <meshStandardMaterial
              color="#334455"
              metalness={0.88}
              roughness={0.22}
            />
          </mesh>
        ))}
        
        {/* Keyway slot */}
        <mesh position={[-0.3, 0.33, 0]} castShadow>
          <boxGeometry args={[1.2, 0.08, 0.12]} />
          <meshStandardMaterial
            color="#556677"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>
      </group>
    </Float>
  );
};

const CNCBlock = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.8} rotationIntensity={0.18} floatIntensity={0.28}>
      <group position={position} rotation={[0, Math.PI / 4, 0]}>
        {/* Main engine block */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.6, 1.9, 0.45]} />
          <meshStandardMaterial
            color="#7799bb"
            metalness={0.88}
            roughness={0.15}
            envMapIntensity={1.9}
          />
        </mesh>
        
        {/* Center cylinder bore */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.55, 0.55, 0.5, 32]} />
          <meshStandardMaterial
            color="#556677"
            metalness={0.92}
            roughness={0.12}
            envMapIntensity={1.7}
          />
        </mesh>
        
        {/* Secondary smaller bore */}
        <mesh position={[0, -0.6, 0]} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.5, 32]} />
          <meshStandardMaterial
            color="#667788"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>
        
        {/* Mounting holes at corners */}
        {[
          [-0.65, 0.8, 0.23],
          [0.65, 0.8, 0.23],
          [-0.65, -0.8, 0.23],
          [0.65, -0.8, 0.23],
          [-0.65, 0.8, -0.23],
          [0.65, 0.8, -0.23],
          [-0.65, -0.8, -0.23],
          [0.65, -0.8, -0.23]
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]} castShadow>
            <cylinderGeometry args={[0.11, 0.11, 0.5, 16]} />
            <meshStandardMaterial
              color="#334455"
              metalness={0.88}
              roughness={0.2}
            />
          </mesh>
        ))}
        
        {/* Top flange detail */}
        <mesh position={[0, 1.05, 0]} castShadow>
          <boxGeometry args={[1.7, 0.15, 0.5]} />
          <meshStandardMaterial
            color="#6688aa"
            metalness={0.9}
            roughness={0.12}
            envMapIntensity={1.8}
          />
        </mesh>
      </group>
    </Float>
  );
};

const CNCBearing = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position} rotation={[Math.PI / 5, Math.PI / 3, 0]}>
        {/* Outer race */}
        <mesh castShadow receiveShadow>
          <torusGeometry args={[0.58, 0.18, 24, 48]} />
          <meshStandardMaterial
            color="#99aacc"
            metalness={0.97}
            roughness={0.05}
            envMapIntensity={2.3}
          />
        </mesh>
        
        {/* Inner race */}
        <mesh castShadow>
          <torusGeometry args={[0.35, 0.14, 24, 48]} />
          <meshStandardMaterial
            color="#8899bb"
            metalness={0.96}
            roughness={0.06}
            envMapIntensity={2.2}
          />
        </mesh>
        
        {/* Ball bearings */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 12) * Math.PI * 2) * 0.465,
              Math.sin((i / 12) * Math.PI * 2) * 0.465,
              0
            ]}
            castShadow
          >
            <sphereGeometry args={[0.09, 24, 24]} />
            <meshStandardMaterial
              color="#bbccdd"
              metalness={0.98}
              roughness={0.03}
              envMapIntensity={2.5}
            />
          </mesh>
        ))}
        
        {/* Cage detail */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh
            key={`cage-${i}`}
            position={[
              Math.cos((i / 12) * Math.PI * 2) * 0.465,
              Math.sin((i / 12) * Math.PI * 2) * 0.465,
              0
            ]}
            rotation={[0, 0, (i / 12) * Math.PI * 2]}
            castShadow
          >
            <boxGeometry args={[0.05, 0.12, 0.05]} />
            <meshStandardMaterial
              color="#778899"
              metalness={0.85}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const PrecisionTool = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.4} rotationIntensity={0.16} floatIntensity={0.26}>
      <group position={position} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
        {/* Tool holder */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.25, 0.32, 1.8, 32]} />
          <meshStandardMaterial
            color="#667788"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={1.8}
          />
        </mesh>
        
        {/* Tool cutting edge */}
        <mesh position={[0, -1.1, 0]} castShadow>
          <coneGeometry args={[0.25, 0.6, 32]} />
          <meshStandardMaterial
            color="#8899aa"
            metalness={0.95}
            roughness={0.08}
            envMapIntensity={2.1}
          />
        </mesh>
        
        {/* Collet nut */}
        <mesh position={[0, 0.9, 0]} castShadow>
          <cylinderGeometry args={[0.35, 0.28, 0.25, 16]} />
          <meshStandardMaterial
            color="#556677"
            metalness={0.88}
            roughness={0.18}
          />
        </mesh>
        
        {/* Grip grooves */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            position={[0, 0.3 + i * 0.15, 0]}
            castShadow
          >
            <torusGeometry args={[0.26, 0.015, 8, 24]} />
            <meshStandardMaterial
              color="#445566"
              metalness={0.85}
              roughness={0.25}
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
      <PerspectiveCamera makeDefault position={[7, 4.5, 7]} fov={35} />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={6}
        maxDistance={12}
        autoRotate
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI / 1.9}
        minPolarAngle={Math.PI / 4.5}
      />
      
      {/* Advanced lighting setup */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 6]} 
        intensity={2} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-8, -6, -4]} intensity={0.8} />
      <directionalLight position={[4, -4, 6]} intensity={0.6} />
      
      {/* Accent lights for metal shine */}
      <pointLight position={[4, 7, 4]} intensity={1.5} color="#00ddff" />
      <pointLight position={[-4, 5, -4]} intensity={1} color="#0099ff" />
      <spotLight 
        position={[0, 10, 0]} 
        intensity={0.8} 
        angle={0.5} 
        penumbra={0.4}
        color="#00ffff"
      />
      
      <Environment preset="city" />
      
      {/* CNC Parts arranged in a clear, visible layout */}
      <CNCGear position={[-2.5, 0.5, -0.5]} />
      <CNCShaft position={[2, 0.8, 0.5]} />
      <CNCBlock position={[0, -1, 2]} />
      <CNCBearing position={[-1.5, 1.5, -2]} />
      <PrecisionTool position={[2.5, -0.8, -1.8]} />
    </>
  );
};

const CNCParts3D = () => {
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

export default CNCParts3D;
