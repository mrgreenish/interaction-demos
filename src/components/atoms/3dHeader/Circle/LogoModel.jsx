import React, { useRef } from "react";
import gsap from "gsap";
import { useGLTF, MeshWobbleMaterial } from "@react-three/drei";

export function LogoModel(props) {
  const { nodes, materials } = useGLTF("/logo.gltf");
  const wobbleRef = useRef();

  const logoClickHandler = () => {
    const tl = gsap.timeline();
    tl.to(wobbleRef.current, {
      factor: 0.5,
      speed: 0.5,
      duration: 0.2,
      ease: "sine.out",
    });
    tl.to(wobbleRef.current, {
      factor: 0,
      speed: 0,
      duration: 1.3,
      ease: "power4.inOut",
    });
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[0, 0, 0]}
        scale={0.25}
        onClick={logoClickHandler}
      >
        <MeshWobbleMaterial factor={0} speed={10} ref={wobbleRef} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/logo.gltf");
