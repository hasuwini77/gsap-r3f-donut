//@ts-nocheck

import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useControls } from "leva";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export function Donut(props) {
  const { nodes, materials } = useGLTF("/3dModel/donut-1.glb");
  const { camera, scene } = useThree();

  // Keep these commented controls for development purposes
  // POSITION CAMERA AND SCENE CONTROL
  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //   cameraPosition: {
  //   { x: 6.5, y: 1.8, z: 3.95 },
  //     step: 0.05,
  //   },
  //   scenePosition: {
  //     value: { x: -0.05, y: 0.05, z: 0.0 },
  //     step: 0.05,
  //   },
  //   sceneRotation: {
  //     value:{ x: 0.65, y: -6.55, z: -0.3 },
  //     step: 0.05,
  //   },
  // });

  // useFrame(() => {
  //   camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
  //   scene.position.set(scenePosition.x, scenePosition.y, scenePosition.z);
  //   scene.rotation.set(sceneRotation.x, sceneRotation.y, sceneRotation.z);
  // });

  // Animation setup using GSAP ScrollTrigger
  useLayoutEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // -------------------- INITIALIZATION --------------------

    // Clean up any existing scroll triggers to prevent conflicts
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Set initial camera and scene properties
    // These should match your Canvas starting positions in CanvasContainer
    gsap.set(camera.position, { x: 2, y: 2.2, z: 3.95 });
    gsap.set(scene.position, { x: 0, y: 0, z: 0 });
    gsap.set(scene.rotation, { x: 0, y: 0, z: 0 });

    // -------------------- SECTION TWO ANIMATIONS --------------------

    // Create timeline for the second section
    const tlSectionTwo = gsap.timeline({
      scrollTrigger: {
        trigger: ".sectionTwo", // Selector for the second section element
        start: "top bottom", // Animation starts when top of section reaches bottom of viewport
        end: "top top", // Animation ends when top of section reaches top of viewport
        scrub: true, // Smoothly ties animation progress to scroll position
        markers: true, // Shows visual markers for debugging (remove in production)
      },
    });

    // Animate camera, scene position, and rotation simultaneously
    tlSectionTwo
      .to(camera.position, {
        x: 6.5,
        y: 1.8,
        z: 3.95,
      })
      .to(scene.position, {
        x: -0.05,
        y: 0.05,
        z: 0,
      })
      .to(scene.rotation, {
        x: 0.65,
        y: -6.55,
        z: -0.3,
      });

    // -------------------- SECTION THREE ANIMATIONS --------------------

    // Create timeline for the third section
    const tlSectionThree = gsap.timeline({
      scrollTrigger: {
        trigger: ".sectionThree", // Selector for the third section element
        start: "top bottom", // Animation starts when top of section reaches bottom of viewport
        end: "top top", // Animation ends when top of section reaches top of viewport
        scrub: true, // Smoothly ties animation progress to scroll position
        markers: true, // Shows visual markers for debugging (remove in production)
      },
    });

    // Animate camera, scene position, and rotation simultaneously
    tlSectionThree
      .to(camera.position, {
        x: 2.7,
        y: 1.8,
        z: 3.95,
      })
      .to(scene.position, {
        x: -0.05,
        y: -0.35,
        z: 0.0,
      })
      .to(scene.rotation, {
        x: 0.6,
        y: -6.7,
        z: -6.35,
      });

    // Cleanup function to kill ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      rotation-x={Math.PI * 2.1}
      position={[2, 1, -1]}
    >
      <mesh
        geometry={nodes.vcbjfbu_LOD0_TIER2_000_MatID_1_0.geometry}
        material={materials.Donut_vcbjfbu_Mid}
        scale={0.25}
      />
    </group>
  );
}

useGLTF.preload("/3dModel/donut-1.glb");
