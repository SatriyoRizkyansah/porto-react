import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Carousel from "../../../components/carousel/carousel";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function HomeView() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const middleTextRef = useRef<HTMLHeadingElement | null>(null);
  const thankYouTextRef = useRef<HTMLHeadingElement | null>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Animasi untuk teks tengah
    if (middleTextRef.current) {
      const split = new SplitText(middleTextRef.current, { type: "chars" });
      gsap.from(split.chars, {
        opacity: 0,
        y: 40,
        stagger: 0.02,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: middleTextRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animasi untuk experience cards
    experienceRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.from(ref, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        });
      }
    });

    // Animasi untuk Thank You
    if (thankYouTextRef.current) {
      const split = new SplitText(thankYouTextRef.current, { type: "chars" });
      gsap.from(split.chars, {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: thankYouTextRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="min-h-screen bg-blue-600 flex justify-center items-center px-2 sm:px-4">
        <div className="relative flex flex-col items-center text-center w-full max-w-6xl">
          {/* Teks di atas foto */}
          <p className="absolute -top-12 sm:-top-16 md:-top-20 lg:-top-30 text-white text-xs sm:text-sm md:text-base px-2">🙋‍♂️Hey, I'm Rio — a Software Developer at Sasmita Jaya.</p>

          {/* Fullstack - paling bawah */}
          {/* <h1 className="text-white text-6xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold relative z-10 leading-tight">Fullstack</h1> */}
          <h1 className="text-white text-6xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold relative z-10 leading-tight">Software</h1>

          {/* Gambar di tengah */}
          <img src="src/assets/images/profil/rio2.png" alt="Foto Rio" className="absolute top-1/2 left-1/2 w-80 sm:w-48 md:w-64 lg:w-80 xl:w-[35rem] -translate-x-1/2 -translate-y-1/2 z-20" />

          {/* Web Developer - paling atas */}
          <h1 ref={textRef} className="text-white whitespace-nowrap text-5xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold mt-4 sm:mt-6 relative z-30 leading-tight">
            Web Developer
          </h1>
          <div className="absolute -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-25 right-2 sm:right-4 md:right-6 flex gap-1 z-40">
            <img src="src/assets/images/tech/laravel.svg" alt="Laravel" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            <img src="src/assets/images/tech/react.svg" alt="React" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            <img src="src/assets/images/tech/vue.svg" alt="Vue" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            <img src="src/assets/images/tech/github.svg" alt="Github" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            <img src="src/assets/images/tech/gitlab.svg" alt="Gitlab" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </div>
        </div>

        {/* Logo - pojok kanan bawah */}
      </div>

      <svg className="w-full -mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#145efc"
          fillOpacity="1"
          d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,160C672,117,768,75,864,96C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* <div className="min-h-screen w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto bg-white flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="w-full text-center">
          <h2 ref={middleTextRef} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
            I keep things simple, reliable, and solve problems — that's what I do.
          </h2>
        </div>
      </div> */}

      {/* Experience Section */}
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Journey</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-blue-200"></div>

            {/* Experience Items */}
            <div className="space-y-16">
              {/* 1. Freelancer */}
              <div
                ref={(el) => {
                  experienceRefs.current[0] = el;
                }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center md:text-right">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Freelancer</h3>
                    <div className="text-blue-600 font-semibold mb-3">2023 - Present</div>
                    <p className="text-gray-600 leading-relaxed">[Deskripsi pengalaman freelance Anda - silakan ganti dengan cerita Anda sendiri]</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* 2. Magang Filkom */}
              <div
                ref={(el) => {
                  experienceRefs.current[1] = el;
                }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-8"></div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 text-center md:text-left">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Magang Filkom</h3>
                    <div className="text-blue-600 font-semibold mb-3">2022 - 2023</div>
                    <p className="text-gray-600 leading-relaxed">[Deskripsi pengalaman magang di Filkom - silakan ganti dengan cerita Anda sendiri]</p>
                  </div>
                </div>
              </div>

              {/* 3. LPTI Unpam */}
              <div
                ref={(el) => {
                  experienceRefs.current[2] = el;
                }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center md:text-right">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">LPTI Unpam</h3>
                    <div className="text-blue-600 font-semibold mb-3">2021 - 2022</div>
                    <p className="text-gray-600 leading-relaxed">[Deskripsi pengalaman di LPTI Unpam - silakan ganti dengan cerita Anda sendiri]</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="md:w-1/2 md:pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg className="w-full -mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#145efc"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="min-h-screen bg-blue-600 flex justify-center items-center px-2 sm:px-4 lg:px-8">
        <div className="w-full flex justify-center">
          {/* Mobile: baseWidth 280 */}
          <div className="block sm:hidden">
            <Carousel baseWidth={320} autoplay={true} autoplayDelay={90000} pauseOnHover={true} loop={false} round={false} />
          </div>

          {/* Small tablet: baseWidth 450 */}
          <div className="hidden sm:block md:hidden">
            <Carousel baseWidth={450} autoplay={true} autoplayDelay={90000} pauseOnHover={true} loop={false} round={false} />
          </div>

          {/* Medium tablet: baseWidth 600 */}
          <div className="hidden md:block lg:hidden">
            <Carousel baseWidth={600} autoplay={true} autoplayDelay={90000} pauseOnHover={true} loop={false} round={false} />
          </div>

          {/* Large screens: baseWidth 800 */}
          <div className="hidden lg:block xl:hidden">
            <Carousel baseWidth={800} autoplay={true} autoplayDelay={90000} pauseOnHover={true} loop={false} round={false} />
          </div>

          {/* Extra large screens: baseWidth 1000 */}
          <div className="hidden xl:block">
            <Carousel baseWidth={1000} autoplay={true} autoplayDelay={90000} pauseOnHover={true} loop={false} round={false} />
          </div>
        </div>
      </div>

      <div className="min-h-screen -mt-1 bg-blue-600 flex items-center justify-center text-white">
        <div className="w-full text-center px-4">
          <h2 ref={thankYouTextRef} className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Thank You.
          </h2>
        </div>
      </div>
    </div>
  );
}
