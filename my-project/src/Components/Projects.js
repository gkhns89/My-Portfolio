import React from "react";
import DataProjects from "../Sources/Data/DataProjects.js";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-5xl font-semibold text-[#1f2937] dark:text-[#AEBCCF]">
        Projects
      </h1>
      <div className="flex flex-row justify-between gap-4 ">
        {DataProjects().map((item, index) => (
          <div key={index} className="mt-8 mb-32 max-w-[300px]">
            <div>
              <img className="max-h-[180px]" src=".\gs.png" alt="Project" />
            </div>
            <h3 className="text-3xl/7 font-medium text-indigo-700 dark:text-[#CFCBFF] py-[18px]">
              {item.title}
            </h3>
            <p className="text-sm/[17.5px]">{item.descr}</p>
            <div className="flex flex-row justify-items-start gap-[6px] py-[18px]">
              {item.methods.map((item, index) => (
                <button
                  key={index}
                  className="border border-[#3730A3] dark:border-[#8F88FF] text-[#3730A3]  dark:text-[#E1E1FF] text-sm/[14px] font-medium rounded-[4px] px-[18px] pt-[6px] pb-[7px] max-h-[27px] w-auto"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex flex-row justify-between">
              <a
                className="text-base/[16px] font-medium text-indigo-800 dark:text-[#E1E1FF]  underline underline-offset-2 "
                href={item.gitLink}
                target="_newtab"
              >
                GitHub
              </a>
              <a
                className="text-base/[16px] font-medium text-indigo-800 dark:text-[#E1E1FF] underline underline-offset-2 "
                href={item.prLink}
                target="_newtab"
              >
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
