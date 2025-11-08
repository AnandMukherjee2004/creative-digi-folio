import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

interface AnimatedSphereProps {
  mouseX: number;
  mouseY: number;
  isHovered: boolean;
}

const AnimatedSphere = ({ mouseX, mouseY, isHovered }: AnimatedSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation based on mouse position
      const targetRotationY = mouseX * 0.5;
      const targetRotationX = mouseY * 0.5;
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY + state.clock.getElapsedTime() * 0.1,
        0.05
      );
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX + state.clock.getElapsedTime() * 0.1,
        0.05
      );
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color={isHovered ? "#E8B76A" : "#D97757"}
        attach="material"
        distort={0.4}
        speed={isHovered ? 2.5 : 1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export const Hero3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="w-full h-full cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#E8B76A" />
        <AnimatedSphere 
          mouseX={mousePosition.x} 
          mouseY={mousePosition.y}
          isHovered={isHovered}
        />
      </Canvas>
    </div>
  );
};
