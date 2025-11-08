import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";

interface WorkspaceSceneProps {
  mouseX: number;
  mouseY: number;
  isHovered: boolean;
}

const WorkspaceScene = ({ mouseX, mouseY, isHovered }: WorkspaceSceneProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const targetRotationY = mouseX * 0.3;
      const targetRotationX = -mouseY * 0.2;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.05
      );
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        0.05
      );

      // Subtle floating animation
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  // Colors in warm beige theme
  const deskColor = "#C4A27C";
  const laptopBase = "#8B7355";
  const laptopScreen = "#2A2520";
  const cupColor = "#E8B76A";
  const bookColor1 = "#D97757";
  const bookColor2 = "#B8956A";
  const bookColor3 = "#A67C52";
  const plantPot = "#8B7355";
  const plantLeaf = "#7A9B76";

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Desk Surface */}
      <mesh position={[0, -0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.2, 2.5]} />
        <meshStandardMaterial color={deskColor} roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Laptop */}
      <group position={[-0.5, -0.3, 0.2]} rotation={[0, 0.3, 0]}>
        {/* Laptop Base */}
        <mesh position={[0, -0.65, 0]} castShadow>
          <boxGeometry args={[1.2, 0.05, 0.9]} />
          <meshStandardMaterial color={laptopBase} roughness={0.4} metalness={0.3} />
        </mesh>
        {/* Laptop Screen */}
        <mesh position={[0, -0.2, -0.35]} rotation={[-0.2, 0, 0]} castShadow>
          <boxGeometry args={[1.2, 0.8, 0.05]} />
          <meshStandardMaterial color={laptopScreen} roughness={0.3} metalness={0.5} />
        </mesh>
        {/* Screen Glow */}
        <mesh position={[0, -0.2, -0.32]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[1.1, 0.7, 0.01]} />
          <meshStandardMaterial 
            color={isHovered ? "#E8B76A" : "#D4A574"} 
            emissive={isHovered ? "#E8B76A" : "#D4A574"}
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Coffee Cup */}
      <group position={[1, -0.5, 0.3]}>
        {/* Cup */}
        <mesh castShadow>
          <cylinderGeometry args={[0.15, 0.12, 0.3, 32]} />
          <meshStandardMaterial color={cupColor} roughness={0.3} metalness={0.2} />
        </mesh>
        {/* Coffee */}
        <mesh position={[0, 0.14, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 0.02, 32]} />
          <meshStandardMaterial color="#5C4033" roughness={0.5} />
        </mesh>
        {/* Handle */}
        <mesh position={[0.18, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <torusGeometry args={[0.08, 0.02, 16, 32]} />
          <meshStandardMaterial color={cupColor} roughness={0.3} metalness={0.2} />
        </mesh>
      </group>

      {/* Books Stack */}
      <group position={[0.8, -0.5, -0.4]}>
        <mesh position={[0, -0.35, 0]} castShadow>
          <boxGeometry args={[0.6, 0.08, 0.4]} />
          <meshStandardMaterial color={bookColor1} roughness={0.7} />
        </mesh>
        <mesh position={[0, -0.27, 0]} castShadow>
          <boxGeometry args={[0.6, 0.08, 0.4]} />
          <meshStandardMaterial color={bookColor2} roughness={0.7} />
        </mesh>
        <mesh position={[0, -0.19, 0]} castShadow>
          <boxGeometry args={[0.6, 0.08, 0.4]} />
          <meshStandardMaterial color={bookColor3} roughness={0.7} />
        </mesh>
      </group>

      {/* Plant */}
      <group position={[-1.2, -0.4, -0.3]}>
        {/* Pot */}
        <mesh castShadow>
          <cylinderGeometry args={[0.18, 0.15, 0.25, 32]} />
          <meshStandardMaterial color={plantPot} roughness={0.6} />
        </mesh>
        {/* Leaves */}
        <mesh position={[0, 0.3, 0]} castShadow>
          <coneGeometry args={[0.25, 0.4, 8]} />
          <meshStandardMaterial color={plantLeaf} roughness={0.5} />
        </mesh>
        <mesh position={[-0.15, 0.25, 0.1]} rotation={[0, 0, -0.5]} castShadow>
          <coneGeometry args={[0.15, 0.3, 8]} />
          <meshStandardMaterial color={plantLeaf} roughness={0.5} />
        </mesh>
        <mesh position={[0.15, 0.25, -0.1]} rotation={[0, 0, 0.5]} castShadow>
          <coneGeometry args={[0.15, 0.3, 8]} />
          <meshStandardMaterial color={plantLeaf} roughness={0.5} />
        </mesh>
      </group>

      {/* Notepad */}
      <group position={[-0.3, -0.65, 0.8]} rotation={[-0.1, -0.2, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.5, 0.02, 0.7]} />
          <meshStandardMaterial color="#F5F5DC" roughness={0.8} />
        </mesh>
        {/* Pen */}
        <mesh position={[0.1, 0.02, 0]} rotation={[0, 0, 0.5]} castShadow>
          <cylinderGeometry args={[0.01, 0.01, 0.4, 16]} />
          <meshStandardMaterial color="#2A2520" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>
    </group>
  );
};

export const Hero3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
      <Canvas 
        camera={{ position: [0, 2, 6], fov: 50 }}
        shadows
      >
        {/* Ambient lighting - dimmer at night */}
        <ambientLight intensity={isDark ? 0.2 : 0.6} />
        
        {/* Main directional light - softer/cooler at night */}
        <directionalLight 
          position={[5, 8, 5]} 
          intensity={isDark ? 0.4 : 1.2} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          color={isDark ? "#B8D4E8" : "#FFF5E6"}
        />
        
        {/* Accent lights - cooler/dimmer at night */}
        <pointLight 
          position={[-5, 3, 2]} 
          intensity={isDark ? 0.4 : 0.8} 
          color={isDark ? "#6B8CA8" : "#E8B76A"} 
        />
        <pointLight 
          position={[5, 2, -3]} 
          intensity={isDark ? 0.3 : 0.6} 
          color={isDark ? "#5A7A8E" : "#D97757"} 
        />
        
        {/* Rim light - moon-like at night */}
        <spotLight 
          position={[0, 5, -5]} 
          intensity={isDark ? 0.8 : 0.5} 
          angle={0.6}
          penumbra={1}
          color={isDark ? "#9EB8D4" : "#C4A27C"}
        />
        
        {/* Night-specific moon light */}
        {isDark && (
          <pointLight 
            position={[-8, 6, -8]} 
            intensity={0.6} 
            color="#B8D4E8"
            distance={20}
          />
        )}
        
        <WorkspaceScene 
          mouseX={mousePosition.x} 
          mouseY={mousePosition.y}
          isHovered={isHovered}
        />
      </Canvas>
    </div>
  );
};
