const Header = (props) => {
  const { toggle, setToggle } = props;
  return (
    <header>
      <div className="text-[0.938rem] font-bold pt-8 flex justify-end items-center gap-[0.65rem]">
        <div
          className={toggle ? "radio-btn bg" : "radio-btn"}
          onClick={() => setToggle(!toggle)}
        >
          <div className={toggle ? "radio-inner active" : "radio-inner"}></div>
        </div>
        <span>|</span>
        <div>
          <a className="text-[#4731d3]" href="/">
            TÜRKÇE
          </a>
          'YE GEÇ
        </div>
      </div>
      <nav className="mt-8 flex justify-between items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="62"
            viewBox="0 0 64 62"
            fill="none"
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
        <div>
          <ul className="text-lg font-medium flex flex-row gap-16 items-center">
            <li>
              <a className="hover:text-[#3730a3]" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:text-[#3730a3]" href="#projects">
                Projects
              </a>
            </li>
            <button className="display-flex items-center justify-between py-[12px] px-[32px] border text-[#3730a3] border-[#3730a3]  hover:text-white  hover:bg-[#3730a3] rounded-md duration-1000">
              Hire me
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
