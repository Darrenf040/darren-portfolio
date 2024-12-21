import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { CanvasModel } from "../Components/Model";

function Hero() {
  return (
    <section id="hero" className="py-20 flex flex-col items-center">
      <div
        className="flex flex-col relative h-screen w-full items-center"
        id="canvas-container"
      >
        <div className="max-w-3xl text-accent-color">
          <h1 className=" text-center">Hi, I'm Darren,</h1>
          <h1 className=" text-center">Full Stack Developer</h1>
        </div>
        <CanvasModel />
      </div>
    </section>
  );
}

export default Hero;
