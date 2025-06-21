import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import Folder from "../../../components/folder/folder";
import ScrollFloat from "../../../components/text-animation/scroll-float";
import Carousel from "../../../components/carousel/carousel";

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
      <div className="min-h-screen bg-blue-600 flex justify-center items-center">
        <div className="relative flex flex-col items-center text-center">
          {/* Teks di atas foto */}
          <p className="absolute -top-30 text-white">🙋‍♂️Hey, I'm Rio — a Software Developer at Sasmita Jaya.</p>

          {/* Fullstack - paling bawah */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold relative z-10">Fullstack</h1>

          {/* Gambar di tengah */}
          <img src="src/assets/images/profil/rio2.png" alt="Foto Rio" className="absolute top-1/2 left-1/2 w-48 sm:w-64 md:w-[35rem] -translate-x-1/2 -translate-y-1/2 z-20" />

          {/* Web Developer - paling atas */}
          <h1 ref={textRef} className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold mt-6 relative z-30">
            Web Developer
          </h1>
          <div className="absolute -bottom-25 right-6 flex gap-1 z-40">
            <img src="src/assets/images/tech/laravel.svg" alt="Laravel" className="w-5 h-5 sm:w-10 sm:h-10" />
            <img src="src/assets/images/tech/react.svg" alt="Laravel" className="w-5 h-5 sm:w-10 sm:h-10" />
            <img src="src/assets/images/tech/vue.svg" alt="Laravel" className="w-5 h-5 sm:w-10 sm:h-10" />
            <img src="src/assets/images/tech/github.svg" alt="Laravel" className="w-5 h-5 sm:w-10 sm:h-10" />
            <img src="src/assets/images/tech/gitlab.svg" alt="Laravel" className="w-5 h-5 sm:w-10 sm:h-10" />
          </div>
        </div>

        {/* Logo - pojok kanan bawah */}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#145efc"
          fill-opacity="1"
          d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,160C672,117,768,75,864,96C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="min-h-screen w-1/2 m-auto bg-white flex items-center justify-center">
        <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=50%" scrollEnd="bottom bottom-=40%" stagger={0.03}>
          I keep things simple, reliable, and solve problems — that’s what I do.
        </ScrollFloat>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#145efc"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="min-h-screen bg-blue-600 flex justify-center items-center">
        {/* <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corrupti.</div> */}
        <div style={{ height: "100", position: "relative" }} className="">
          <Carousel baseWidth={1000} autoplay={true} autoplayDelay={90000} pauseOnHover={true} loop={true} round={false} />
        </div>
      </div>

      <div className="min-h-screen  m-auto bg-blue-600 flex items-center justify-center text-white">
        <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=50%" scrollEnd="bottom bottom-=40%" stagger={0.03}>
          Thank You.
        </ScrollFloat>
      </div>
    </div>
  );
}
