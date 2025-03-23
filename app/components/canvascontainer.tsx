import { Canvas } from "@react-three/fiber";
import { Donut } from "./Donut";
import { Environment, OrbitControls } from "@react-three/drei";

const CanvasContainer = () => {
  return (
    <Canvas
      camera={{
        position: [0.4719430797797844, 4.149772533246484, 2.748937549629132],
      }}
    >
      <OrbitControls />
      <ambientLight intensity={7} />
      <Donut position={[0, 0, 0]} />
      <Environment preset="forest" />
    </Canvas>
  );
};

export default CanvasContainer;
