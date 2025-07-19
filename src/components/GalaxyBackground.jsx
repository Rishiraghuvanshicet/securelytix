import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Particles = () => {
  const particlesRef = useRef();
  const count = 5000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 150; 
    }
    return arr;
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
      particlesRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.4}
        color="#00ffff" 
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  );
};

export default function GalaxyBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 50], fov: 75 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        background: "#000", 
      }}
    >
      <ambientLight intensity={0.5} />
      <Particles />
    </Canvas>
  );
};


