"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, OrbitControls, TorusKnot } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function GlassObject() {
  const mesh = useRef<THREE.Mesh>(null);
  const scrollVelocity = useRef(0);

  useEffect(() => {
    let previous = window.scrollY;
    let frame = 0;

    const update = () => {
      const current = window.scrollY;
      scrollVelocity.current = THREE.MathUtils.lerp(
        scrollVelocity.current,
        (current - previous) * 0.015,
        0.08,
      );
      previous = current;
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    const targetX = state.pointer.y * 0.45;
    const targetY = state.pointer.x * 0.6;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, targetX, 0.045);
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, targetY, 0.045);
    mesh.current.rotation.z += delta * 0.12 + scrollVelocity.current * 0.45;
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, scrollVelocity.current * 0.35, 0.04);
  });

  return (
    <Float speed={1.15} rotationIntensity={0.2} floatIntensity={0.55}>
      <TorusKnot ref={mesh} args={[1.05, 0.28, 160, 32, 2, 3]}>
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.65}
          roughness={0.12}
          ior={1.45}
          chromaticAberration={0.06}
          anisotropy={0.25}
          color="#d8d1c5"
        />
      </TorusKnot>
    </Float>
  );
}

export default function LegalGlassObject() {
  return (
    <div className="h-[330px] w-full sm:h-[430px] lg:h-[560px]" aria-label="Decorative interactive glass object">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.8], fov: 42 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[4, 5, 4]} intensity={4} />
        <pointLight position={[-3, 1, 3]} intensity={18} color="#ffffff" />
        <pointLight position={[3, -2, 1]} intensity={10} color="#b91c1c" />
        <GlassObject />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
