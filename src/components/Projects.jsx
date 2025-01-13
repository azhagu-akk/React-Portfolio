import image from "../assets/images/Online coaching.jpg";
import image1 from "../assets/images/Movie.jpg"
import image2 from "../assets/images/Library.jpg"
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";



function Projects() {
  return (
    <div
      className="flex flex-col  justify-center items-center pt-24"
      id="projects"
    >
      <h1 className="text-white font-poppins font-thin text-4xl text-right pb-6">
        Projects
      </h1>

      <div className="lg:px-32 px-12 sm:px-32 md:px-0 flex justify-around items-center font-poppins  flex-wrap gap-10 sm:space-y-2">
        <div className="border border-white text-white lg:w-1/4 md:w-2/4">
          <img src={image} alt="" />
          <div className="space-y-6 p-4">
            <h1 className="font-semibold text-base">Landing Page</h1>
            <p className="text-xs font-extrathin text-justify">
              A landing page for online coaching, built with Tailwind CSS,
              provides a clean and responsive design that captures the attention
              of potential clients.
            </p>
            <p className="font-thin text-xs">
              Techs : HTML5,CSS3 and Tailwind Css.
            </p>
            <div className="flex justify-around items-center">
              <a
                href="https://landingpagetailwindcsstask.netlify.app/"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Demo <FaEye />
              </a>
              <a
                href="https://github.com/azhagu-akk/Landing-Page--Tailwind-css-"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Code <FaCode />
              </a>
            </div>
          </div>
        </div>
        <div className="border border-white text-white lg:w-1/4 md:w-2/4 ">
          <img src={image1} alt="" />
          <div className="space-y-6 p-4">
            <h1 className="font-semibold text-base">Movie Search App</h1>
            <p className="text-xs font-extrathin text-justify">
              This is a movie search web application that interacts with the
              OMDB API to allow users to search for movies, TV series, and
              episodes by title or keyword.
            </p>
            <p className="font-thin  text-xs">
              Techs : HTML5,CSS3,Tailwind Css and React.
            </p>
            <div className="flex justify-around items-center">
              <a
                href="https://movies-searchappreact.netlify.app/"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Demo <FaEye />
              </a>
              <a
                href="https://github.com/azhagu-akk/Movie-Search-App"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Code <FaCode />
              </a>
            </div>
          </div>
        </div>
    
        <div className="border border-white text-white lg:w-1/4 md:w-2/4 ">
          <img src={image2} alt="" />
          <div className="space-y-6 p-4">
            <h1 className="font-semibold text-base">Library Management system</h1>
            <p className="text-xs font-extrathin text-justify">
              The LMS is a web application designed to streamline the management
              of library books, user accounts, book borrowing and returns, and
              user reviews.
            </p>
            <p className="font-thin  text-xs">
              Techs : React,Express.js,Node.js,MongoDB.
            </p>
            <div className="flex justify-around items-center">
              <a
                href="https://lms-front-nd.netlify.app/"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Demo <FaEye />
              </a>
              <a
                href="https://github.com/azhagu-akk/LMS-Frontend"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Code <FaCode />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects