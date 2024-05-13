import { useEffect, useRef } from "react";

import gsap from "gsap";

const App = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        yPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from("#image", {
          opacity: 0,
          x: "+=30",
          stagger: 0.5,
        })
        .from(
          ["#typography-1", "#typography-2", "#typography-3", "#typography-4"],
          {
            opacity: 0,
            y: "+=30",
            stagger: 0.5,
          }
        )
        .to(
          ["#typography-1", "#typography-2", "#typography-3", "#typography-4"],
          {
            opacity: 0,
            y: "-=30",
            delay: 0.3,
            stagger: 0.5,
          }
        )
        .to("#image", {
          opacity: 0,
          x: "+=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          yPercent: "-100",
          duration: 1.3,
        });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="flex flex-row flex-1 h-screen p-10 bg-gray-50 absolute top-0 left-0  z-10 w-full gap-10 tracking-tight"
      >
        <div className="w-1/2">
          <h1 className="text-9xl" id="typography-1">
            typography
          </h1>
          <h1 className="text-9xl" id="typography-2">
            typography
          </h1>
          <h1 className="text-9xl" id="typography-3">
            typography
          </h1>
          <h1 className="text-9xl" id="typography-4">
            typography
          </h1>
          <h1 className="text-9xl" id="typography-4">
            typography
          </h1>
        </div>
        <div className="w-1/2 flex relative items-center">
          <img
            id="image"
            width={500}
            height={500}
            className="flex absolute"
            src="https://type-01.com/wp-content/uploads/2024/04/Flow2_VivekT-scaled.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        id="content"
        className="h-screen flex justify-center place-items-center bg-black"
      >
        <h1 id="hello-world" className="text-white font-embedCode text-5xl">
          Hello world!
        </h1>
      </div>
    </div>
  );
};

export default App;
