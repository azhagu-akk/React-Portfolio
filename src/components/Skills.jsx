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
        <h1 className="text-4xl text-white font-thin pb-6 text-center font-poppins ">Skills</h1>
        <div className=" lg:gap-6 text-6xl gap-6 px-12 lg:px-80 md:px-32 space-y-6 justify-center items-center flex flex-wrap">
          <FaHtml5 />
          <FaCss3Alt />
          <RiTailwindCssFill />
          <FaBootstrap />
          <IoLogoJavascript />
          <FaReact />
          <SiExpress />
          <FaNodeJs />
          <SiMysql />
          <SiMongodb />
          <SiPostman />
          <SiNetlify />
          <SiRender />
        </div>
      </div>
    </>
  );
}

export default Skills;
