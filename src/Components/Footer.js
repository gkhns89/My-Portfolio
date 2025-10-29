import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../Contexts/LnContext";
import { contentData } from "../Sources/Data/LnData";

const Footer = () => {
  const { languagePreference } = useContext(LanguageContext);
  useEffect(() => {}, [languagePreference]);
  const fData = contentData[languagePreference.toLowerCase()].footer;
  return (
    <div className=" bg-[#F9F9F9] dark:bg-[#141414] w-full px-[5%] ">
      <div className="max-w-[1440px] my-0 mx-auto">
        <div>
          <h2 className="max-w-[540px] dark:text-[#AEBCCF] text-[#1F2937] text-5xl leading-none font-semibold  pt-32 pb-20 <lg:w-[70%] md:w-[80%] sm:w-[90%] max-[640px]:w-[95%] lg:text-4xl sm:text-3xl max-[640px]:text-2xl max-[320px]:text-xl">
            {fData.mTitle}
          </h2>
        </div>

        <div className="flex justify-between pb-28 md:flex-row sm:flex-col max-[640px]:flex-col max-[640px]:items-center max-[320px]:flex-col">
          <div>
            <span>👉</span>
            <a
              className="text-[#AF0C48] dark:text-[#BAB2E7] text-xl leading-6 font-normal underline "
              href="mailto:gokhansisman@outlook.com"
              title={fData.mailAlt}
            >
              gokhansisman@outlook.com
            </a>
          </div>
          <div className="text-[18px] leading-[150%] font-medium md:mt-0 sm:mt-5 max-[640px]:mt-5 max-[320px]:mt-5 max-[640px]:flex max-[640px]:flex-col">
            <a href="/">
              <span className="ml-5 text-[#0A0A14] dark:text-[#E1E1FF]">
                Personal Blog
              </span>
            </a>

            <a
              className="ml-5 text-[#00AB6B] dark:text-[#17D18B]"
              href="https://github.com/gkhns89"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="ml-5 text-[#0077B5] dark:text-[#0BA6F6]"
              href="https://www.linkedin.com/in/gokhansisman/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
