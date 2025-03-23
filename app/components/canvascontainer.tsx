import { Canvas } from "@react-three/fiber";
import { Donut } from "./donut";

const CanvasContainer = () => {
  return (
    <Canvas>
      <ambientLight />
      <Donut />
    </Canvas>
  );
};

export default CanvasContainer;
