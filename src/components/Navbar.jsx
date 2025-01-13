import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav className="">
      <div className="relative">
        <div className="fixed right-0 left-0 bg-white">
          <div className="  flex justify-around items-center p-3 md:text-base md:px-32 sm:text-base px-8  text-xs lg:flex lg:justify-around lg:p-4 shadow-lg text-black lg:px-80  lg:items-center  lg:text-lg font-poppins">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1500}
              className="hover:scale-110 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={10}
              duration={1500}
              className="hover:scale-110 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={10}
              duration={1500}
              className="hover:scale-110 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={10}
              duration={1500}
              className="hover:scale-110 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={1500}
              className="hover:scale-110 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
