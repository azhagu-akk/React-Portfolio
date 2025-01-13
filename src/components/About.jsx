import about from "../assets/images/About Me.png";
function About() {
  return (
    <div className="pt-24 lg:px-28" id="about">
      <div className=" bg-gray-100 lg:rounded-3xl p-8 shadow-inner shadow-gray-300  px-14 sm:px-16 md:px-24 font-poppins" >
        <p className="lg:text-3xl text-center text-2xl lg:text-right uppercase font-thin ">About Me</p>
        <div className="lg:flex lg:justify-around lg:items-center">
          <div className="flex justify-center">
            <img src={about} alt="about-me" className="w-96" />
          </div>

          <div className="lg:text-md text-sm md:text-base text-justify font-extrathin lg:w-1/2">
            <p className="font-bold uppercase text-xl">Introduction</p> <br />
            <p>
              HI! My name is Azhagu Karthikeyan and I`m from Theni, TamilNadu.
            </p>
            <br />
            <p>
              I have completed BCA in Bishop Heber College, Trichy with 73% 
               and then I have completed MCA in SNS college of
              Technology, Coimbatore with 79%.
            </p>
            <br />
            <p>
              I`m a passionate and motivated MERN stack developer with a strong
              foundation in web development.
            </p>{" "}
            <br />
            <p>
              I specialize in building dynamic and responsive web applications
              using MongoDB, Express.js, React, and Node.js. As a recent
              graduate, I am excited to apply my skills and continue learning in
              a fast-paced, ever-evolving tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
