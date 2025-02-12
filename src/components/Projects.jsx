import image1 from "../assets/images/blogging.jpg"
import image2 from "../assets/images/Library.jpg"
import image3 from "../assets/images/electronics.png"
import image4 from "../assets/images/Task.jpg"
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
        <div className="border border-white text-white lg:w-1/3 md:w-2/4">
          <img src={image4} alt="" />
          <div className="space-y-6 p-4">
            <h1 className="font-semibold text-base">Task Manager App</h1>
            <p className="text-xs font-extrathin text-justify">
              The Task manager app is used to create new tasks, update, delete
              and view all the tasks. It is a simple application that can be
              used to manage tasks.
            </p>
            <p className="font-thin text-xs">
              Techs : React,Express.js,Node.js,MongoDB.
            </p>
            <div className="flex justify-around items-center">
              <a
                href="https://taskmanagerapp3.netlify.app/"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Demo <FaEye />
              </a>
              <a
                href="https://github.com/azhagu-akk/Task-Manager-3"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Code <FaCode />
              </a>
            </div>
          </div>
        </div>
        <div className="border border-white text-white lg:w-1/3 md:w-2/4 ">
          <img src={image1} alt="" />
          <div className="space-y-6 p-4">
            <h1 className="font-semibold text-base">Blogify</h1>
            <p className="text-xs font-extrathin text-justify">
              This is a blog website that interacts with the user to create a
              blog, update, delete and view, comment the other`s blog
            </p>
            <p className="font-thin  text-xs">
              Techs : React,Express.js,Node.js,MongoDB.
            </p>
            <div className="flex justify-around items-center">
              <a
                href="https://blogify5.netlify.app/"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Demo <FaEye />
              </a>
              <a
                href="https://github.com/azhagu-akk/Blogs"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Code <FaCode />
              </a>
            </div>
          </div>
        </div>

        <div className="border border-white text-white lg:w-1/3 md:w-2/4 ">
          <img src={image3} alt="" />
          <div className="space-y-6 p-4">
            <h1 className="font-semibold text-base">Electronics</h1>
            <p className="text-xs font-extrathin text-justify">
              The Electronics is a ecommerce web application, we can login,
              register and add to the cart and proceed with checkout with paypal
              integration.
            </p>
            <p className="font-thin  text-xs">
              Techs : React,Express.js,Node.js,MongoDB.
            </p>
            <div className="flex justify-around items-center">
              <a
                href="https://electronics01.netlify.app/"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Demo <FaEye />
              </a>
              <a
                href="https://github.com/azhagu-akk/Frontend-Electronics"
                target="_blank"
                className="bg-white text-black rounded-lg p-2 hover:scale-90 flex justify-center items-center gap-2 text-sm font-semibold transition-all"
              >
                Code <FaCode />
              </a>
            </div>
          </div>
        </div>
        <div className="border border-white text-white lg:w-1/3 md:w-2/4 ">
          <img src={image2} alt="" />
          <div className="space-y-6 p-4">
            <h1 className="font-semibold text-base">
              Library Management system
            </h1>
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