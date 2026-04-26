import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Icosahedron, OrbitControls, Environment } from '@react-three/drei';

function Blob({ position, color, speed, distort, radius }) {
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position}>
        <Icosahedron args={[radius, 20]}>
          <MeshDistortMaterial
            color={color}
            speed={speed * 2}
            distort={distort}
            radius={radius}
            emissive={color}
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
          />
        </Icosahedron>
      </mesh>
    </Float>
  );
}

function FloatingCube({ position, color, speed }) {
    const mesh = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.x = t * speed;
        mesh.current.rotation.y = t * speed * 0.8;
    });
    return (
        <Float speed={speed} rotationIntensity={2}>
            <mesh ref={mesh} position={position}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.1} metalness={0.9} />
            </mesh>
        </Float>
    )
}

export default function FloatingShapes() {
  return (
    <div className="floating-shapes-container">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#bfff00" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffcc" />
        <Environment preset="night" />
        
        <Blob position={[-8, 4, -2]} color="#bfff00" speed={0.8} distort={0.4} radius={1.5} />
        <Blob position={[10, -5, -5]} color="#00ffcc" speed={1.2} distort={0.3} radius={2} />
        <FloatingCube position={[6, 5, -4]} color="#ffffff" speed={0.5} />
        <FloatingCube position={[-5, -6, -2]} color="#bfff00" speed={0.7} />
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
