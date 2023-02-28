import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full lg:h-screen text-center py-20 ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <div>
          <p className="md:text-2xl uppercase text-sm tracking-wide">
            LETS BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 font-bold md:text-4xl text-gray-700 ">
            HEY I AM <span className="text-[#5651e5]"> IYIOLA OLUWAFISAYO</span>
          </h1>
          <h1 className="py-2 text-3xl font-bolder text-gray-700">
            A FRONTEND WEB DEVELOPER
          </h1>
          <p className=" md:text-5xl sm:text-4xl font-bold py-4 text-gray-600 max-w-[80%] m-auto">
            I am a frontend developer with years of designing using tailwind css
            and bootstrap to build responsive websites while learning backend
            technologies
          </p>
          <div className="flex gap-3 item-center justify-between max-w-[230px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://linkedin.com/in/iyiola-oluwafisayo-a52481165">
                <FaLinkedinIn color="blue" />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://github.com/Fisto123">
                <FaGithub color="black" />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="mailto:iyiolafisayo@example.com?subject = Feedback&body = Message">
                <AiOutlineMail color="red" />
              </a>{" "}
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://wa.me/+2347067796826?text=please send your message">
                <FaWhatsapp color="green" size={20} />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
