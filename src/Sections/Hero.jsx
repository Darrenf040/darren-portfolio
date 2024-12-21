import { CanvasModel } from "../Components/Model";

function Hero() {
  return (
    <section id="hero" className="py-20 flex flex-col items-center">
      <div
        className="flex flex-col relative h-screen w-full items-center"
        id="canvas-container"
      >
        <div className="max-w-3xl">
          <h1 className=" text-center">Hi, I'm Darren,</h1>
          <h1 className=" text-center text-accent-color">
            Full Stack Developer
          </h1>
        </div>
        <CanvasModel />
      </div>
    </section>
  );
}

export default Hero;
