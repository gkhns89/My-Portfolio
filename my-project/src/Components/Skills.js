import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="text-5xl text-[#1f2937] font-semibold">Skills</h1>
      <div className="mt-8 flex flex-row justify-between gap-4">
        <div className="max-w-xs mt-[0.688rem]">
          <h2 className="text-3xl text-[#4338CA] font-medium">Java Script</h2>
          <p className="mt-7">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="max-w-xs mt-[0.688rem]">
          <h2 className="text-3xl text-[#4338CA] font-medium">React.Js</h2>
          <p className="mt-7">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="max-w-xs mt-[0.688rem]">
          <h2 className="text-3xl text-[#4338CA] font-medium">Node.Js</h2>
          <p className="mt-7">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <hr className="my-8 mx-0 border-t border-[#bab2e7]" />
    </div>
  );
};

export default Skills;
