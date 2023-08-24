import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="mt-20">
      <p className="flex items-center justify-center text-xl font-medium text-[#4338CA] dark:text-[#B7AAFF] before:bg-[#3730A3] dark:before:bg-[#B7AAFF] before:h-[1px] before:flex-1 after:h-[1px] after:flex-[6] after:max-[640px]:bg-[#3730A3] dark:after:max-[640px]:bg-[#B7AAFF] after:max-[640px]:flex-[1] after:max-[640px]:duration-1000 after:duration-1000">
        <span className="bg-none mx-4">Gökhan Şişman</span>
      </p>
      <div className="flex justify-between gap-8 max-[1024px]:flex-col-reverse">
        <div>
          <h1 className="py-10 px-0 text-7xl font-bold text-[#1F2937] dark:text-[#AEBCCF]">
            Creative thinker Minimalism lover
          </h1>
          <p className="max-w-lg pb-10">
            Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </p>
          <div className="flex justify-start gap-4 ">
            <a href="mailto:gokhansisman@outlook.com">
              <button className="flex justify-center items-center  max-h-[52px] min-w-[139px] py-[12px] px-[20px] border border-[#3730a3] dark:border-[#ffffff] hover:dark:border-[#767676]  rounded-md text-white dark:text-black hover:dark:text-white bg-[#3730a3] dark:bg-[#E1E1FF]  hover:bg-white hover:dark:bg-[#767676] hover:text-[#3730a3] duration-1000">
                Hire me
              </button>
            </a>
            <button className="flex items-center justify-center max-h-[52px] min-w-[139px] py-[12px] px-[20px] border border-[#3730a3] dark:border-[#E1E1FF]  rounded-md hover:text-white   hover:bg-[#3730a3]  hover:dark:bg-[#767676] bg-white dark:bg-[#383838] text-[#3730a3] dark:text-[#E1E1FF] duration-1000">
              <svg
                className="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
              GitHub
            </button>
            <button className="flex items-center justify-evenly max-h-[52px] min-w-[139px] py-[12px] px-[20px] border border-[#3730a3] dark:border-[#E1E1FF] rounded-md hover:text-white   hover:bg-[#3730a3]  hover:dark:bg-[#767676] bg-white dark:bg-[#383838] text-[#3730a3] dark:text-[#E1E1FF] duration-1000">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              Linkedin
            </button>
          </div>
        </div>
        <div className="w-[70%] drop-shadow-2xl ml-auto mr-0 mb-auto mt-10 md:mr-auto sm:mr-auto max-[640px]:mr-auto">
          <img
            className="  mb-4 rounded-3xl lg:m-auto md:m-auto"
            src="../myPic.png"
            alt="Me"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
