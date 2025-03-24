import ShinyText from "../Elements/ShinyText";
import Lanyard from "../Fragments/lanyard";
import Navbar from "../Layouts/Navbar";
import { useEffect, useRef } from "react";

const HomePage = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: false,
      delay: 75,
    });

    typewriter.pauseFor(500).typeString("You've found a small part of me on the internet. <br>").pauseFor(800).typeString(" Thank you for taking the time to look around <span style='color: #DE3163;'>❤️</span>").pauseFor(1000).start();
  }, []);

  return (
    <>
      <Navbar />
      {/* <Lanyard /> */}
      {/* Hero Section */}
      <section id="hero" class="pt-36">
        <div class="">
          <div class="flex flex-wrap">
            <div class="w-full self-center text-primary px-4 lg:w-1/2">
              <h1 class="text-base font-semibold md:text-xl">
                Hello there👋, i'am
                <span class="block font-bold text-2xl mt-1 lg:text-3xl text-dark font-mono">Satriyo Rizkyansah</span>
              </h1>
              <h2 class="font-medium text-secondary text-lg lg:text-1xl mt-1 font-mono">
                Student, <span class="text-dark">Full Stack Web Dev</span>
              </h2>

              <div class="font-medium text-slate-400 mb-10 leading-relaxed font-mono" id="app">
                <span ref={typewriterRef} />
              </div>
              <a href="https://github.com/SatriyoRizkyansah" target="_blank">
                <button type="button" class="text-base font-semibold text-white bg-slate-800 py-2 px-4 rounded-full hover:shadow-lg opacity-80 transition duration-300 ease-in-out font-mono">
                  <svg class="w-4 h-4 mb-1 inline text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <ShinyText text="Code Journey" disabled={false} speed={3} className="custom-class" />
                </button>
              </a>

              <div class="div">
                <h5 class="text-base font-semibold md:text-xl mt-8 text-slate-700 font-mono">Tech Stack</h5>

                <div class="w-full">
                  <div class="flex items-center flex-wrap -ml-1">
                    <a href="https://vuejs.org" target="_blank" class="opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                      <img src="img/tech/11.png" alt="VueJS" width="30px" />
                    </a>

                    <a href="https://www.laravel.com/" target="_blank" class="opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 -ml-1.5">
                      <img src="img/tech/4.png" alt="" width="92px" />
                    </a>

                    <a href="https://getbootstrap.com/" target="_blank" class="-ml-1.5 opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                      <img src="img/tech/7.png" alt="" width="60px" />
                    </a>

                    <a href="https://www.bootstrap.com/" target="_blank" class="mx-4 py-4 opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                      <img src="img/tech/9.png" alt="" width="50px" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full self-end px-4 lg:w-1/2 mt-10">
              <div class="relative mt-10 lg:mt-0 lg:right-0">
                <img src="img/remove-bg/6.png" alt="Satriyo Rizkyansah" class="max-w-full mx-auto" />
                <span class="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125 mb-3">
                  <svg widht="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#BFBFBF"
                      d="M70.9,-18.6C80.4,6.4,68.8,42.6,45.5,58.7C22.1,74.7,-13.1,70.6,-36,53.2C-58.9,35.7,-69.5,4.8,-61.4,-18C-53.4,-40.9,-26.7,-55.8,2,-56.4C30.7,-57.1,61.3,-43.5,70.9,-18.6Z"
                      transform="translate(100 100) scale(1.2) "
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
