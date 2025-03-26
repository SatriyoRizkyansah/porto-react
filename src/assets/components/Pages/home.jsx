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
      {/* <Navbar /> */}
      <Lanyard />
      {/* Hero Section */}
      <section id="hero" className="pt-36">
        <div className="">
          <div className="flex flex-wrap">
            <div className="w-full self-center text-primary px-4 lg:w-1/2">
              <h1 className="text-base font-semibold md:text-xl">
                Hello there👋, i'am
                <span className="block font-bold text-2xl mt-1 lg:text-3xl text-primary font-mono">Satriyo Rizkyansah</span>
              </h1>
              <h2 className="font-medium text-secondary text-lg lg:text-1xl mt-1 font-mono">
                Student, <span className="text-dark">Full Stack Web Dev</span>
              </h2>

              <div className="font-medium text-slate-400 mb-10 leading-relaxed font-mono" id="app">
                <span ref={typewriterRef} />
              </div>
              <a href="https://github.com/SatriyoRizkyansah" target="_blank">
                <button type="button" className="text-base font-semibold text-white bg-slate-800 py-2 px-4 rounded-full hover:shadow-lg opacity-80 transition duration-300 ease-in-out font-mono">
                  <svg className="w-4 h-4 mb-1 inline text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <ShinyText text="Code Journey" disabled={false} speed={3} className="custom-class" />
                </button>
              </a>

              <div className="div">
                <h5 className="text-base font-semibold md:text-xl mt-8 text-slate-700 font-mono">Tech Stack</h5>

                <div className="w-full">
                  <div className="flex items-center flex-wrap -ml-1">
                    <a href="https://react.dev" target="_blank" className="opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                      <img src="img/tech/10.png" alt="ReactJS" width="30px" />
                    </a>

                    <a href="https://www.laravel.com/" target="_blank" className="opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 -ml-1.5">
                      <img src="img/tech/4.png" alt="" width="92px" />
                    </a>

                    <a href="https://getbootstrap.com/" target="_blank" className="-ml-1.5 -mr-5 opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                      <img src="img/tech/7.png" alt="" width="60px" />
                    </a>

                    <a href="https://www.bootstrap.com/" target="_blank" className="mx-4 py-4 opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                      <img src="img/tech/13.png" alt="" width="60px" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2 mt-10">
              <div className="relative mt-10 lg:mt-0 lg:right-0">
                <img src="img/remove-bg/6.png" alt="Satriyo Rizkyansah" className="max-w-full mx-auto" />
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125 mb-3">
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
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10">
              <h4 className="font-bold text-primary text-lg mb-3 font-mono">About & Contact</h4>
              {/* <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">About me!</h2> */}
              <div className="font-medium text-base lg:text-lg" style={{ color: "#64748b" }}>
                <p className="mb-5">
                  I am a seasoned full-stack web developer with a strong focus on building dynamic, user-friendly web applications. I specialize in both front-end and back-end development, utilizing frameworks like Laravel, Bootstrap, and
                  Tailwind CSS to create seamless.
                </p>

                <p className="mb-5">
                  Currently, I work as a freelancer, handling projects that range from developing and maintaining complex databases to implementing effective and efficient code. I am passionate about delivering high-quality solutions that
                  enhance user experiences and drive engagement.
                </p>

                <p className="mb-5" id="contact">
                  You can connect with me anytime you want. I look forward to hearing from you!
                </p>
              </div>

              <div className="flex items-center mt-3 m-auto">
                {/* <!-- Instagram --> */}
                <a
                  href="https://www.instagram.com/ryorizkyansah/"
                  target="_blank"
                  className="w-8 h-8 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg role="img" className="fill-current w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                  </svg>
                </a>

                {/* <!-- Mail --> */}
                <a
                  href="mailto:satriyorizkyansah@gmail.com"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg role="img" className="fill-current w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Email</title>
                    <path d="M12 13.06l11.64-7.773A2.002 2.002 0 0021.999 3H2.001a2.002 2.002 0 00-1.641 2.287L12 13.06zM23.998 7.765L12 15.933 0.002 7.765V19.001A2.002 2.002 0 002.001 21h19.998a2.002 2.002 0 001.999-1.999V7.765z" />
                  </svg>
                </a>

                {/* <!-- Twitter --> */}
                <a href="https://x.com/riorizkyansah" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" className="fill-current w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>

                {/* <!-- Discord --> */}
                <a
                  href="https://discord.com/users/688715067201814539"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg role="img" className="fill-current w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Discord</title>
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Project Section Start */}
      <section id="project" className="pt-36 pb-16">
        <div className="container">
          <h4 className="font-bold text-primary text-lg mb-3 font-mono">Project</h4>

          <div className="">
            {/* <!-- Image Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <a className="group block relative overflow-hidden rounded-lg font-mono" href="project1.html">
                <span className="bg-yellow-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 absolute left-2 top-2">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Blogging Platform | <img src="img/tech/6.png" className="ml-1 w-5" alt="" /> <img src="img/tech/4.png" className="-ml-1 w-12" alt="" /> <img src="img/tech/9.png" className="w-9" alt="" />
                </span>

                <img className="w-full size-50 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="img/projects/new/bloggingPlatform.png" />

                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a className="group block relative overflow-hidden rounded-lg font-mono" href="project2.html">
                <span className="bg-pink-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 absolute left-2 top-2">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Restaurant | <img src="img/tech/10.png" className="ml-1 mb-1 w-4" alt="" /> <img src="img/tech/7.png" className="ml-1 w-8" alt="" />
                </span>

                <img className="w-full size-50 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="img/projects/new/6.png" />

                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a className="group block relative overflow-hidden rounded-lg font-mono" href="project3.html">
                <span className="bg-blue-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 absolute left-2 top-2">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Unpam Profile | <img src="img/tech/7.png" className="ml-1 w-8" alt="" /> <img src="img/tech/4.png" className="-ml-1 w-12" alt="" /> <img src="img/tech/9.png" className="w-9" alt="" />
                </span>

                <img className="w-full size-50 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="img/projects/new/5.png" />

                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a className="group block relative overflow-hidden rounded-lg font-mono" href="project4.html">
                <span className="bg-green-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 absolute left-2 top-2">
                  <svg className="mr-1 w-3 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0za 01-3 0V7z"></path>
                  </svg>
                  SPK Calculation - MFEP | <img src="img/tech/3.png" className="ml-1 w-7 mr-3" alt="" /> <img src="img/tech/9.png" className="w-9" alt="" />
                </span>

                <img className="w-full size-50 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="img/projects/new/4.jpg" />

                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>
            </div>
            {/* <!-- End Image Grid --> */}
          </div>
        </div>
      </section>
      {/* Project Section End */}

      {/* Education Start */}
      <section id="education" className="pt-36 pb-16">
        <div className="container">
          <div className="mt-10 sm:mt-14">
            <h4 className="font-bold text-primary text-lg mb-3 font-mono">Education & Work experience</h4>

            {/* <!-- Grid --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* <!--  Work experience --> */}
              <div className="p-4">
                <div className="group relative flex gap-x-5">
                  {/* <!-- Icon --> */}
                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-650">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <svg
                        className="shrink-0 size-6 text-gray-800 dark:text-neutral-950"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M12 12h.01" />
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                        <rect width="20" height="14" x="2" y="6" rx="2" />
                      </svg>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Left Content --> */}
                  <div className="grow pb-8 group-last:pb-0">
                    <h3 className="mb-1 text-xs text-gray-700">2023 - Present</h3>

                    <p className="font-semibold text-sm text-gray-800">Freelance Web Developer</p>

                    <ul className="list-disc ms-6 mt-3 space-y-1.5">
                      <li className="ps-1 text-sm text-gray-600">Collaborated with a diverse range of clients, delivering custom web development solutions.</li>
                      <li className="ps-1 text-sm text-gray-600">Developed and maintained strong client relationships through effective communication and project management.</li>
                      <li className="ps-1 text-sm text-gray-600">
                        Utilized tools such as Notion for project tracking, Tailwind CSS for responsive design, Laravel for backend development, and GitHub for version control and project sharing.
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Left Content --> */}
                </div>

                {/* <!-- Magang Filkom --> */}
                <div className="group relative flex gap-x-5">
                  {/* <!-- Icon --> */}
                  <div className="rounded-full overflow-hidden" style={{ width: "5rem" }}>
                    <img src="img/logo/filkom.jpeg" alt="" className="rounded-full" />
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pb-8 group-last:pb-0">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">July 2024 - January 2025</h3>

                    <p className="font-semibold text-sm text-gray-800">Internal Internship at the Faculty of Computer Science, Universitas Pamulang</p>

                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">During this internship, I worked as a full-stack web developer</p>

                    <ul className="list-disc ms-6 mt-3 space-y-1.5">
                      <li className="ps-1 text-sm text-gray-600">My first task was to redesign and restructure the layout of the profile website for the Faculty of Computer Science.</li>
                      <li className="ps-1 text-sm text-gray-600">My second task was to create a new website for main profile website, Universitas Pamulang.</li>
                      {/* <!-- <li className="ps-1 text-sm text-gray-600">I also helped with the implementation of new features and bug fixes on the existing website.</li> --> */}
                    </ul>
                  </div>

                  {/* <!-- End Right Content --> */}
                </div>
              </div>
              {/* <!--  End Work experience --> */}

              {/* <!-- Education --> */}
              <div className="p-4 border border-gray-300 rounded-lg h-fit mt-5">
                <img src="img/logo/unpam.png" alt="" width="65px" className="-ml-2" />

                <h3 className="mt-3 mb-1 text-xs text-gray-900">2022 - Present</h3>

                <p className="font-bold text-sm text-gray-700">Bachelor's degree in Sistem Informasi</p>

                <p className="mt-1 text-sm text-gray-700">Universitas Pamulang</p>
              </div>
              {/* <!-- End Education --> */}
            </div>

            {/* <!-- End Grid --> */}
          </div>
        </div>
      </section>
      {/* Education Ends */}

      {/* Blog Section Start */}
      <section id="blog" class="pt-36 pb-52">
        <div class="container">
          <div class="mb-16 px-4">
            <h4 class="font-semibold text-lg text-primary mb-2 font-mono">Blog</h4>
            <h2 class="font-bold text-dark text-3xl mb-4 sm:text-3xl lg:text-4xl">Latest writing</h2>
            <p class="font-medium text-md text-secondary md:tex-lg">
              I enjoy sharing my thoughts and experiences as a web developer through writing. On my blog, you'll find insights into the latest trends in web development, tips for using Laravel and Tailwind CSS effectively, and reflections
              on the challenges and successes I encounter in my projects.
            </p>
          </div>

          <div class="flex flex-wrap">
            <div class="w-full px-2 lg:w-1/2">
              <div class="mt-5 flex flex-col justify-between relative rounded-xl h-[430px] bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative mx-4 mt-4 h-50 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                  <img src="img/blog/blog1/laragon.jpg" class="h-52 w-full object-cover" />
                </div>
                <div class="p-6">
                  <div class="mb-2 flex items-center justify-between">
                    <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">Why You Should Migrate from XAMPP to Laragon?</p>
                  </div>
                  <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">As a web developer, using tools like XAMPP for local development and testing of web applications is common.</p>
                </div>
                <div class="p-6 pt-0">
                  <a
                    href="blog1.html"
                    class="hover:text-primary hover:underline block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div class="w-full px-2 lg:w-1/2">
              <div class="mt-5 flex flex-col justify-between relative rounded-xl h-[430px] bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative mx-4 mt-4 h-50 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                  <img src="img/blog/1.jpg" class="h-52 w-full object-cover" />
                </div>
                <div class="p-6">
                  <div class="mb-2 flex items-center justify-between">
                    <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">How to Build Your Own Mechanical Keyboard</p>
                  </div>
                  <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">Building your own mechanical keyboard is a rewarding project for any tech enthusiast.</p>
                </div>
                <div class="p-6 pt-0">
                  <a
                    href="blog2.html"
                    class="hover:text-primary hover:underline block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </>
  );
};

export default HomePage;
