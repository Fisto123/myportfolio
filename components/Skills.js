import Image from "next/image";
import React from "react";
import css from "../public/assets/css.png";
import html from "../public/assets/html.webp";
import js from "../public/assets/js.png";
import node from "../public/assets/node.png";
import react from "../public/assets/react.png";
import mysql from "../public/assets/mysql.png";
import mongo from "../public/assets/mongo.png";
import mui from "../public/assets/mui.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen bg-white-600 p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-purple-600">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={js} alt="" width="64" height="54" />
              </div>
              <div className="flex flex-col items-center justify-center">
                JAVASCRIPT
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={node} alt="" width="64" height="54" />
              </div>
              <div className="flex flex-col items-center justify-center">
                NODEJS
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} alt="" width="64" height="54" />
              </div>
              <div className="flex flex-col items-center justify-center">
                REACT
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} alt="" width="64" height="54" />
              </div>
              <div className="flex flex-col items-center justify-center">
                HTML
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css} alt="" width="64" height="54" />
              </div>
              <div className="flex flex-col items-center justify-center">
                CSS
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mysql} alt="" width="64" height="54" />
              </div>
              <div className="flex flex-col items-center justify-center">
                MYSQL
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongo} alt="" width="64" height="54" />
              </div>
              <div className="flex flex-col items-center justify-center">
                MONGODB
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mui} alt="" width="64" height="54" />
              </div>
              <div className="flex flex-col items-center justify-center">
                Material ui
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
