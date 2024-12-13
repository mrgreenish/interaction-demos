'use client';

import React, { useRef, useEffect, MouseEvent, useState } from "react";
import * as THREE from "three";
import { useInView } from "react-hook-inview";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Circle from "@components/atoms/3dHeader/Circle/Component";
import { ReadmePanel } from "@components/organisms/ReadmePanel/Component";

import s from "./styles.module.css";

const Header: React.FC = (): JSX.Element => {
  const [canvasReady, setCanvasIsReady] = useState(false);
  const xTo = useRef<any | null>(null);
  const yTo = useRef<any>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spotLightRef = useRef<THREE.SpotLight | null>(null);
  const [ref, inView] = useInView({});

  useEffect(() => {
    if (!canvasReady) return;

    const handleMouseMove = (event: any) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      if (xTo.current) xTo.current(mouseX * 10);
      if (yTo.current) yTo.current(mouseY * 10);
    };

    window.addEventListener("mousemove", handleMouseMove);

    if (!spotLightRef.current?.position) return;

    xTo.current = gsap.quickTo(spotLightRef.current?.position, "x", {
      duration: 0.3,
      ease: "power3",
    });
    yTo.current = gsap.quickTo(spotLightRef.current?.position, "y", {
      duration: 0.3,
      ease: "power3",
    });
    console.log("spotLightRef.current", spotLightRef.current);
    gsap.fromTo(
      spotLightRef.current,
      { intensity: 0, penumbra: 0 },
      { intensity: 0.5, penumbra: 1, duration: 3 },
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [canvasReady]);

  return (
    <>
      <div className={s.header} ref={ref}>
        <Canvas
          frameloop={inView ? "always" : "never"}
          onCreated={() => setCanvasIsReady(true)}
          shadows
          camera={{ position: [0, 0, 4.2], fov: 50 }}
          ref={canvasRef}
        >
          <color attach="background" args={["#dcc8c2"]} />
          <ambientLight intensity={0.8} color="#f6976c" />
          <spotLight
            ref={spotLightRef}
            intensity={0}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Circle position={[0, 0, 0]} parentRef={canvasRef} />
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.25}
            scale={10}
            blur={1.5}
            far={2}
          />
        </Canvas>
      </div>
      <ReadmePanel
        title="3D Header Component"
        description={`
          <p>A Three.js-powered 3D header component with interactive lighting and shadows.</p>
          <pre><code>
          // Basic usage
          import Header from "@components/organisms/3dHeader/Header/Component";

          export default function MyPage() {
            return (
              <div>
                <Header />
                {/* Rest of your content */}
              </div>
            );
          }

          // Implementation highlights:
          // Mouse-controlled spotlight
          useEffect(() => {
            if (!canvasReady) return;

            const handleMouseMove = (event: any) => {
              const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
              const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

              if (xTo.current) xTo.current(mouseX * 10);
              if (yTo.current) yTo.current(mouseY * 10);
            };

            xTo.current = gsap.quickTo(spotLightRef.current?.position, "x", {
              duration: 0.3,
              ease: "power3",
            });
            yTo.current = gsap.quickTo(spotLightRef.current?.position, "y", {
              duration: 0.3,
              ease: "power3",
            });
          }, [canvasReady]);
          </code></pre>
          <p>Features:</p>
          <ul>
            <li>Interactive 3D scene with Three.js</li>
            <li>Mouse-controlled spotlight with smooth animations</li>
            <li>Performance optimization with frameloop control</li>
            <li>Realistic shadows and lighting</li>
            <li>Responsive design</li>
          </ul>
        `}
      />
    </>
  );
};

export default Header;
