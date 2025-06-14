import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

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
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="text-white">Hey there! I’m Satriyo, a freelance web developer</p>
        <h1 className="text-white font-['Bebas Neue'] text-5xl md:text-9xl font-extrabold text-center">Fullstack</h1>
        <h1 ref={textRef} className="text-white font-['Bebas Neue'] text-5xl md:text-9xl font-extrabold text-center mt-4">
          Web Developer
        </h1>
      </div>
    </div>
  );
}
