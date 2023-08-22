import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div>
        <h2 className="max-w-[540px] text-[#1F2937] text-5xl leading-none font-semibold  pt-28 pb-20 <lg:w-[70%] md:w-[80%] sm:w-[90%] max-[640px]:w-[95%] lg:text-4xl sm:text-3xl max-[640px]:text-2xl max-[320px]:text-xl">
          Let’s work together on your next product.
        </h2>
      </div>

      <div className="flex justify-between pb-28 md:flex-row sm:flex-col max-[640px]:flex-col max-[320px]:flex-col">
        <div>
          <span>👉</span>
          <a
            className="text-[#AF0C48] text-xl leading-6 font-normal underline "
            href="mailto:gokhansisman@outlook.com"
          >
            gokhansisman@outlook.com
          </a>
        </div>
        <div className="text-[18px] leading-[150%] font-medium md:mt-0 sm:mt-5 max-[640px]:mt-5 max-[320px]:mt-5 sm:text-[18px] max-[640px]:text-[14px] max-[320px]:text-[10px]">
          <a href="/personal-blog">
            <span className="ml-5 text-[#0A0A14]">Personal Blog</span>
          </a>

          <a className="ml-5 text-[#00AB6B]" href="https://github.com/gkhns89">
            Github
          </a>
          <a
            className="ml-5 text-[#0077B5]"
            href="https://www.linkedin.com/in/gokhansisman/"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
