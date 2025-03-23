"use client";

import CanvasContainer from "./components/CanvasContainer";
import { SectionOne } from "./components/SectionOne";
import { SectionThree } from "./components/SectionThree";
import { SectionTwo } from "./components/SectionTwo";

export default function Home() {
  return (
    <>
      <div className="">
        <div className=" h-screen w-full fixed top-0">
          <CanvasContainer />
        </div>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </>
  );
}
