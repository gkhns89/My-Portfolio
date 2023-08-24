import React from "react";
import DataSkills from "../Sources/Data/DataSkills.js";

const Skills = () => {
  return (
    <div id="skills" className="mt-28">
      <h1 className="text-5xl text-[#1f2937] dark:text-[#AEBCCF] font-semibold">
        Skills
      </h1>
      <div className="mt-3 flex flex-row justify-between gap-4">
        {DataSkills().map((item, index) => (
          <div key={index} className="max-w-xs mt-[0.688rem]">
            <h2 className="text-3xl text-[#4338CA] dark:text-[#CFCBFF] font-medium">
              {item.title}
            </h2>
            <p className="mt-7">{item.descr}</p>
          </div>
        ))}
      </div>

      <hr className="my-8 mx-0 border-t border-[#bab2e7]" />
    </div>
  );
};

export default Skills;
