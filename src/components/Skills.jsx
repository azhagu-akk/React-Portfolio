import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiRender } from "react-icons/si";


function Skills() {
  return (
    <>
      <div
        className="text-white pt-20 lg:flex lg:justify-center lg:flex-col lg:items-center lg:h-screen"
        id="skills"
      >
        <h1 className="text-4xl text-white font-thin pb-6 text-center font-poppins ">
          Skills
        </h1>
        <div className=" lg:gap-6 text-6xl gap-6 px-12 lg:px-64  md:px-32  justify-center items-center flex flex-wrap ">
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <FaHtml5 />
            <h1 className="text-sm text-center font-poppins">HTML5</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <FaCss3Alt />
            <h1 className="text-sm text-center font-poppins pt-1">CSS3</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <IoLogoJavascript />
            <h1 className="text-sm text-center font-poppins pt-1">Javascript</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <FaBootstrap />
            <h1 className="text-sm text-center font-poppins pt-1">Bootstrap</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all ">
            <RiTailwindCssFill />
            <h1 className="text-sm text-center font-poppins pt-1">Tailwind</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <FaReact />
            <h1 className="text-sm text-center font-poppins pt-1">ReactJS</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <SiExpress />
            <h1 className="text-sm text-center font-poppins pt-1">ExpressJS</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <FaNodeJs />
            <h1 className="text-sm text-center font-poppins pt-1">NodeJS</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <SiMysql />
            <h1 className="text-sm text-center font-poppins pt-1">MySQL</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <SiMongodb />
            <h1 className="text-sm text-center font-poppins pt-1">MongoDB</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <SiPostman />
            <h1 className="text-sm text-center font-poppins pt-1">Postman</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <SiNetlify />
            <h1 className="text-sm text-center font-poppins pt-1">Netlify</h1>
          </div>
          <div className="bg-gray-700 p-4 hover:scale-105 transition-all">
            <SiRender />
            <h1 className="text-sm text-center font-poppins pt-1">Render</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
