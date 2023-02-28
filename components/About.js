import Image from "next/image";
import React from "react";
import fisto from "../public/assets/fisto.jpg";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-2xl font-extrabold tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2 text-gray-600 text-2xl ">Who I am</h2>
          <p className="py-2 text-gray-600">
            Front end engineers plan, design, build, and implement the user
            interface systems of websites, software programs, and web-based
            applications. Their primary goal is to provide a satisfactory user
            experience with no issues, errors, or downtime. Front end engineers
            plan, design, build, and implement the user interface systems of
            websites, software programs, and web-based applications. Their
            primary goal is to provide a satisfactory user experience with no
            issues, errors, or downtime.
          </p>
          <p className="py-2 text-gray-600">
            Front end engineers plan, design, build, and implement the user
            interface systems of websites, software programs, and web-based
            applications. Their primary goal is to provide a satisfactory user
            experience with no issues, errors, or downtime. Front end engineers
            plan, design, build, and implement the user interface systems of
            websites, software programs, and web-based applications. Their
            primary goal is to provide a satisfactory user experience with no
            issues, errors, or downtime.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Checkout my projects
          </p>
        </div>
        <div className="w-full h-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={fisto}
            alt="img"
            width="300"
            height="200"
            className="rounded-xl bg-cover  "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
