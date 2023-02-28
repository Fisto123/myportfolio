import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-purple-600">
          projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Youtube app"
            bgImage="project1.png"
            projectUrl="/Video"
          />
          <ProjectItem
            title=" ecommerce map"
            bgImage="project2.png"
            projectUrl="/ecommerce"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
