import { useEffect, useState } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar Fixed on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:w-[70%] lg:w-[60%] 2xl:w-[50%] m-auto">
      <header className={`${isFixed ? "fixed top-0 left-0 w-full shadow-md z-50 bg-white" : "bg-transparent absolute top-0 left-0 w-full"} flex items-center lg:text-sm transition-all duration-300 ease-in-out`}>
        <div className="container font-mono">
          <div className="flex items-center justify-between relative">
            <div className="w-14 h-14">
              <a href="https://github.com/SatriyoRizkyansah" target="_blank" rel="noopener noreferrer" className="font-bold text-primary text-lg block pt-6">
                <img src="img/logo/me-2.png" alt="Satriyo Rizkyansah" className="-mt-4 rounded-full" width="40" style={{ border: "#79944f solid 3px" }} />
              </a>
            </div>

            <div className="flex items-center px-4">
              {/* Hamburger Button */}
              <button type="button" className="block absolute right-4 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                <span className={`hamburger-line transition duration-300 ease-in-out origin-top-left ${menuOpen ? "rotate-45 translate-y-1" : ""}`}></span>
                <span className={`hamburger-line transition duration-300 ease-in-out ${menuOpen ? "opacity-0" : ""}`}></span>
                <span className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
              </button>

              {/* Nav Menu */}
              <nav
                className={`absolute py-4 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full transition-all duration-300 ease-in-out ${
                  menuOpen ? "block" : "hidden"
                } lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
              >
                <ul className="block lg:flex">
                  {["Home", "About", "Project", "Education", "Blog", "Contact"].map((item) => (
                    <li key={item} className="group mb-3">
                      <a href={item === "Home" ? "#" : `#${item.toLowerCase()}`} className="text-base text-dark mx-8 group-hover:text-primary">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
