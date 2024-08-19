import React, { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { useMediaQuery } from "@react-hookz/web";
import gsap from "gsap";
import { Html } from "@react-three/drei";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { LogoModel } from "./LogoModel";

interface Props {
  parentRef: any;
}

gsap.registerPlugin(ScrollTrigger);

const Circle = (props: any) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const group = useRef<THREE.Group>(null!);
  const tl = useRef<GSAPTimeline>();
  const scrollTl = useRef<GSAPTimeline>();
  const [loop, setLoop] = useState<boolean>(true);
  const isWide = useMediaQuery("only screen and (min-width : 748px)");
  const xTo = useRef<any>();
  const yTo = useRef<any>();
  // const rotationToFaceFront = () => {
  //   const currentRotation = gsap.getProperty(mesh.current, "rotation")._y;

  //   // Normalize the current rotation to be within 0 to 2π radians.
  //   const normalizedRotation =
  //     ((currentRotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

  //   // Calculate the rotation needed to face front.
  //   let rotationToFaceFront;
  //   if (normalizedRotation <= Math.PI) {
  //     rotationToFaceFront =
  //       currentRotation + (Math.PI - normalizedRotation) + Math.PI;
  //   } else {
  //     rotationToFaceFront =
  //       currentRotation + (2 * Math.PI - normalizedRotation) + Math.PI;
  //   }

  //   console.log("rotationToFaceFront", rotationToFaceFront);
  //   return rotationToFaceFront;
  // };
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (window.scrollY > 10) return;
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      if (xTo.current) xTo.current(-mouseY / 1);
      if (yTo.current) yTo.current(mouseX / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const timeout = setTimeout(() => {
      if (!group.current?.position) return;

      xTo.current = gsap.quickTo(group.current?.rotation, "x", {
        duration: 0.45,
        ease: "power4",
      });
      yTo.current = gsap.quickTo(group.current?.rotation, "y", {
        duration: 0.45,
        ease: "power4",
      });
    }, 500);

    return () => {
      if (timeout) clearTimeout(timeout);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    scrollTl.current = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: props.parentRef.current,
        scrub: 0.8,
        start: "clamp(top bottom)",
        end: "bottom+=250%",
        pin: false,
        markers: false,
        onLeaveBack: () => {
          // console.log("BACK");
          // if (tl.current) tl.current.play();
        },
        onEnter: () => {
          // if (tl.current) tl.current.pause();
          gsap.to(mesh.current.rotation, {
            y: () => {
              const rotationProp = gsap.getProperty(mesh.current, "rotation");
              if (typeof rotationProp === "object" && rotationProp !== null) {
                return (rotationProp as any)._y + 360 * (Math.PI / 180);
              }
              return 0; // or some default value
            },
            duration: 0.4,
          });
        },
      },
    });

    scrollTl.current.fromTo(group.current.position, { z: 0 }, { z: 20 });

    return () => {
      if (scrollTl.current) scrollTl.current.revert();
    };
  }, [props.parentRef]);

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(mesh.current.rotation, {
      z: 360,
      duration: 800,
      repeat: -1,
      yoyo: true,
      ease: "none.none",
    });

    return () => {
      if (tl.current) tl.current.revert();
    };
  }, []);

  useEffect(() => {
    console.log("loop");
    if (loop) {
      if (tl.current) tl.current.play();
    } else {
      if (tl.current) tl.current.pause();
      gsap.to(group.current.rotation, {
        y: 0,
        duration: 2,
        onComplete: () => {
          if (scrollTl.current) scrollTl.current.play();
        },
      });
    }
  }, [loop]);

  return (
    <group ref={group}>
      <Html
        scale={isWide ? 0.3 : 0.2}
        sprite
        distanceFactor={10}
        // rotation={[Math.PI / 2, 0, 0]}
        position={[0, -0.2, 0]}
        transform
        pointerEvents="none"
      >
        <h1 className="heading no-pointer">
          Experience is&nbsp;
          {!isWide && <br />}
          <i>everything</i>
        </h1>
      </Html>
      <mesh castShadow {...props} ref={mesh}>
        <Suspense fallback={null}>
          <LogoModel />
        </Suspense>
      </mesh>
    </group>
  );
};

export default Circle;
