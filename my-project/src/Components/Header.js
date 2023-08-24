const Header = (props) => {
  const { toggle, setToggle } = props;
  return (
    <header>
      <div className="text-[0.938rem] font-bold pt-8 flex justify-end items-center gap-[0.65rem]">
        <div
          className={toggle ? "radio-btn bg" : "radio-btn"}
          onClick={() => setToggle(toggle)}
        >
          <div className={toggle ? "radio-inner active" : "radio-inner"}></div>
        </div>
        <span>|</span>
        <div className="dark:text-[#777777]">
          <a className="text-[#4731d3] dark:text-[#BAB2E7]" href="/">
            TÜRKÇE
          </a>
          'YE GEÇ
        </div>
      </div>
      <nav className="mt-8  flex justify-between items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="62"
            viewBox="0 0 64 62"
            fill="currentColor"
          >
            <ellipse cx="31.8378" cy="31" rx="31.8378" ry="31" fill="#EEEBFF" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="#7B61FF"
              fontSize="2rem"
              fontWeight="600"
              dy="0.3em"
              transform="rotate(30,30,30)"
            >
              G
            </text>
          </svg>
        </div>
        <div className="ml-4">
          <ul className="text-lg font-medium flex flex-row gap-16 items-center">
            <li>
              <a
                className="hover:text-[#3730a3] dark:text-[#6B7280] dark:hover:text-white"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#3730a3] dark:text-[#6B7280] dark:hover:text-white"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <button className="display-flex items-center justify-between py-[12px] px-[32px] border text-[#3730a3] border-[#3730a3]  hover:text-white  hover:bg-[#3730a3] dark:text-black hover:dark:text-white hover:dark:bg-[#767676] dark:border-[#ffffff] dark:bg-[#E1E1FF]  hover:dark:border-[#767676] rounded-md duration-1000">
              Hire me
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
