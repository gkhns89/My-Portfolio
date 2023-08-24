import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../Contexts/LnContext";
import { contentData } from "../Sources/Data/LnData";

const Profile = () => {
  const { languagePreference } = useContext(LanguageContext);
  useEffect(() => {}, [languagePreference]);
  const pData = contentData[languagePreference.toLowerCase()].profile;
  return (
    <div>
      <h1 className="text-5xl font-semibold text-[#1f2937] dark:text-[#AEBCCF]">
        {pData.mTitle}
      </h1>
      <div className="mt-8 flex flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl text-[#4338ca] dark:text-[#B7AAFF] font-medium">
            {pData.pTitle}
          </h2>

          <table className="mt-[1.313rem] text-black dark:text-white">
            <tr className="text-left   leading-8">
              <td className="font-semibold pr-5 align-top ">{pData.birth}</td>
              <td>22.09.1989</td>
            </tr>
            <tr className="text-left   leading-8">
              <td className="font-semibold pr-5 align-top"> {pData.city}</td>
              <td>İstanbul</td>
            </tr>
            <tr className="text-left leading-8">
              <td className="font-semibold  pr-5 align-top"> {pData.edu}</td>
              <td> {pData.eduDetail}</td>
            </tr>
            <tr className="text-left  leading-8">
              <td className="font-semibold  pr-5 min-w-[145px] align-top">
                {pData.work}
              </td>
              <td>Frontend, UI</td>
            </tr>
          </table>
        </div>
        <div>
          <h2 className="text-3xl text-[#4338ca] dark:text-[#B7AAFF]  font-medium">
            {pData.iTitle}
          </h2>
          <div className="max-w-[560px]">
            <p className="mt-[1.313rem]">{pData.info}</p>
          </div>
        </div>
      </div>
      <hr className="my-8 mx-0 border-t border-[#bab2e7]" />
    </div>
  );
};

export default Profile;
