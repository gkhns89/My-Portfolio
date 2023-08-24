import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../Contexts/LnContext";
import { contentData } from "../Sources/Data/LnData";

const Skills = () => {
  const { languagePreference } = useContext(LanguageContext);
  useEffect(() => {}, [languagePreference]);

  const sData = contentData[languagePreference.toLowerCase()].skills;
  return (
    <div id="skills" className="mt-28">
      <h1 className="text-5xl text-[#1f2937] dark:text-[#AEBCCF] font-semibold">
        {sData.mTitle}
      </h1>
      <div className="mt-3 flex flex-row justify-between gap-4">
        {sData.skillItems.map((skill) => {
          return (
            <div key={skill.id} className="max-w-xs mt-[0.688rem]">
              <h2 className="text-3xl text-[#4338CA] dark:text-[#CFCBFF] font-medium">
                {skill.title}
              </h2>
              <p className="mt-7">{skill.descr}</p>
            </div>
          );
        })}
      </div>

      <hr className="my-8 mx-0 border-t border-[#bab2e7]" />
    </div>
  );
};

export default Skills;
