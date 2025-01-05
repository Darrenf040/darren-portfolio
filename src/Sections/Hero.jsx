import { CanvasModel } from "../Components/Model";

function Hero() {
  return (
    <section
      id="hero"
      className="py-20 flex flex-col items-center h-screen phone:max-tablet:h-[65vh]"
    >
      <div
        className="flex flex-col relative w-[100%] items-center flex-1"
        id="canvas-container"
      >
        <div className="max-w-3xl">
          <h1 className=" text-center">Hi, I'm Darren,</h1>
          <h1 className="text-center text-accent-color type-example type-roles"></h1>
        </div>
        <CanvasModel />
      </div>
    </section>
  );
}

export default Hero;
