import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import Folder from "../../../components/folder/folder";
import ScrollFloat from "../../../components/text-animation/scroll-float";

gsap.registerPlugin(SplitText);

export function HomeView() {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitText(textRef.current, { type: "chars" });
      gsap.from(split.chars, {
        opacity: 0,
        y: 40,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="min-h-screen bg-blue-600 flex items-center justify-center">
        <div className="relative flex flex-col items-center pt-24 sm:pt-32 ">
          <div className="text-white mb-6 text-center ">Hi Satriyo here</div>

          {/* Fullstack - paling bawah */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold text-center relative z-10">Fullstack</h1>

          {/* Gambar di tengah */}
          <img src="src/assets/images/rio2.png" alt="Foto Rio" className="absolute top-[60%] sm:top-[58%] md:top-[80%] left-1/2 w-48 sm:w-64 md:w-[35rem] -translate-x-1/2 -translate-y-1/2 z-20" />

          {/* Web Developer - paling atas */}
          <h1 ref={textRef} className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold text-center mt-6 relative z-30">
            Web Developer
          </h1>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1d4ed8"
          fill-opacity="1"
          d="M0,288L30,256C60,224,120,160,180,144C240,128,300,160,360,160C420,160,480,128,540,144C600,160,660,224,720,250.7C780,277,840,267,900,224C960,181,1020,107,1080,112C1140,117,1200,203,1260,245.3C1320,288,1380,288,1410,288L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      <div className="min-h-screen bg-white flex items-center justify-center">
        {/* <div style={{ height: "600px", position: "relative" }}>
          <Folder size={2} color="#5227FF" className="custom-folder" />
        </div> */}
        <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=50%" scrollEnd="bottom bottom-=40%" stagger={0.03}>
          reactbits
        </ScrollFloat>
      </div>
    </div>
  );
}
