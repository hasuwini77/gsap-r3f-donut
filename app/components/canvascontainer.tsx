import { Canvas } from "@react-three/fiber";
import { Donut } from "./Donut";
import { Environment, OrbitControls } from "@react-three/drei";

const CanvasContainer = () => {
  return (
    <Canvas
      camera={{
        position: [2, 2.2, 3.95],
      }}
    >
      {/* <OrbitControls /> */}
      <ambientLight intensity={7} />
      <Donut position={[0, 0, 0]} />
      <Environment preset="forest" />
    </Canvas>
  );
};

export default CanvasContainer;
