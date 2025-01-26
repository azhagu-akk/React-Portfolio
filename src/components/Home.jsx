import image from "../assets/images/About-pic (2).jpg";
import { FaFileDownload } from "react-icons/fa";
import resume from "../assets/images/Azhagu Karthikeyan B_Resume.pdf";


function Home() {
  return (
    <div className="h-full" id="home">
      <div className=" lg:flex lg:items-center lg:justify-around pt-36 space-y-6">
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="profile"
            className=" rounded-full lg:w-80 lg:h-80 object-cover w-1/2 "
          />
        </div>
        <div className="lg:flex  lg:flex-col lg:items-start text-white lg:space-y-8 sm:text-lg text-center space-y-2">
          <p></p>
          <h1 className="lg:text-5xl lg:font-semibold md:text-4xl text-xl text-center font-poppins">
            Azhagu Karthikeyan B
          </h1>
          <p className="lg:text-2xl font-thin text-md md:text-xl font-poppins">Full Stack Developer</p>
          <div className="lg:px-0 px-24 md:px-72 sm:px-36">

          <a
            href={resume}
            target="_blank"
            className="bg-white text-black p-2 lg:px-8 lg:py-2 rounded-full hover:scale-90 flex items-center justify-center gap-2 font-poppins text-base"
          >
            Resume
            <FaFileDownload />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home