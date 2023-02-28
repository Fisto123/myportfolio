import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/assets/project1.png";
import { RiRadioButtonFill } from "react-icons/ri";
const index = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10 " />
        <Image
          src={project1}
          alt="image"
          width="250"
          height="30"
          className="absolute z-1 left-[50%] top-[20%] w-[20%] "
        />
        <div className="absolute max-w-[1240px] top-[70%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="uppercase text-3xl">Video finder</h2>
          <h3 className="2xl">Reactjs/materialui</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid  md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p className="text-2xl tracking-widest">Project</p>
          <h2 className="text-4xl py-2">Overview</h2>
          <p className="font-bold">
            This modern video application was created using React and Material
            UI to create our differnt components. Also, users are able to play
            and search different lists of videos according to different
            categories available and ids. This is made possible using rapid
            APIS.
          </p>
          <button className="w-35 p-4 py-2 mt-4  bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
            <a href="https://fistocommerce.netlify.app/">Demo</a>
          </button>
          <button className="w-35 p-4 py-2 mt-4 ml-4  bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
            <a href="http://github.com/Fisto123/videoapp">code</a>
          </button>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-grey-400 rounded-xl p-4  ">
          <div className="p-2 ">
            <p>Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" flex text-gray-400 font-bold items-center py-2">
                {" "}
                <RiRadioButtonFill />
                React
              </p>
              <p className="flex text-gray-400 font-bold items-center py-2">
                {" "}
                <RiRadioButtonFill />
                Javascript
              </p>
              <p className="flex text-gray-400 font-bold items-center py-2">
                {" "}
                <RiRadioButtonFill />
                Material ui{" "}
              </p>
              <p className="flex text-gray-400 font-bold items-center py-2">
                {" "}
                <RiRadioButtonFill />
                Rapid Api
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back Home</p>
        </Link>
      </div>
    </div>
  );
};

export default index;
