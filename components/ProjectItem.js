import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, projectUrl, bgImage }) => {
  return (
    <div className="relative w-full flex items-center justify-center h-auto shadow-xl shadow-grey-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#f651e5] to-[#709dff]">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
        width="200"
        height="200"
        className="rounded-xl group-hover:opacity-10 h-[25vh] w-[20vw]"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30%]">
        <h3 className="text-2xl text-white tracking-widest text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React JS</p>
        <Link href={`/${projectUrl}`}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
