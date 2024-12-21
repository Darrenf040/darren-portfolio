import React from "react";
import Header from "../Components/Header";

const Credits = () => {
  return (
    <>
      <Header />
      <section className="h-screen px-[25vw] py-40 flex flex-col">
        <h1 className="self-center">Credits</h1>
        <h2 className="self-center mb-10">
          Here are the resources used in this project:
        </h2>
        <div className="flex flex-col gap-10">
          <div className="credit-item">
            <p>
              <strong>3D Model: PC setup</strong>
              <br />
              Model created by{" "}
              <a
                href="https://sketchfab.com/Yolala3d"
                target="_blank"
                className="underline"
              >
                Yolala3d
              </a>
              <br />
              This 3D model represents a gaming setup on the websites landing
              page.
            </p>
          </div>
          <div className="credit-item">
            <p>
              <strong>3D Model: Dell Laptop</strong>
              <br />
              Model created by{" "}
              <a
                href="https://sketchfab.com/Xinyiii"
                target="_blank"
                className="underline"
              >
                Xinyiii
              </a>
              <br />
              This 3D model represents a Dell laptop on the websites my work
              section.
            </p>
          </div>
          <div className="credit-item">
            <p>
              <strong>Texture: Under Construction</strong>
              <br />
              Texture created by{" "}
              <a
                href="https://www.vecteezy.com/members/nahumam"
                target="_blank"
                className="underline"
              >
                Humam Naufal
              </a>
              <br />
              This texture was used on the dell laptop screen
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Credits;
