import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from "./Footer";
function Contact() {
  return (
    <>
      <div className="flex justify-center items-center h-screen" id="contact">
        <div>
          <h2 className="text-white font-poppins lg:text-7xl text-4xl md:text-6xl text-center font-thin">
            Get in Touch
          </h2>
          <div className="text-white flex justify-center items-center text-4xl lg:text-5xl gap-4 pt-10">
            <a
              href="https://github.com/azhagu-akk"
              target="_blank"
              className="hover:scale-110 transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/azhagu-karthikeyan-b-/"
              target="_blank"
              className="hover:scale-110 transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
