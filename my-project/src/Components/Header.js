import { useContext } from "react";
import { LanguageContext } from "../Contexts/LnContext";
import { contentData } from "../Sources/Data/LnData";

const Header = (props) => {
  const { languagePreference, setLanguagePreference } =
    useContext(LanguageContext);
  const { toggle, setToggle } = props;

  const handleOnClick = (lang) => {
    if (lang === "en") {
      setLanguagePreference("en");
      document.documentElement.lang = "en";
      return;
    } else {
      setLanguagePreference("tr");
      document.documentElement.lang = "tr";
      return;
    }
  };

  const hData = contentData[languagePreference.toLowerCase()].header;

  return (
    <header>
      <div className="text-[0.938rem] font-bold pt-8 flex justify-end items-center gap-[0.65rem]">
        <div
          className={toggle ? "radio-btn bg" : "radio-btn"}
          onClick={() => {
            setToggle(toggle);
            localStorage.setItem(
              "theme",
              JSON.stringify(toggle ? "light" : "dark")
            );
          }}
        >
          <div className={toggle ? "radio-inner active" : "radio-inner"}></div>
        </div>
        <span className="dark:text-[#777777]">
          {toggle ? hData.mode[0] : hData.mode[1]}
        </span>
        <span>|</span>
        <div className="dark:text-[#777777] ">
          <button
            className="text-[#4731d3] dark:text-[#BAB2E7]"
            onClick={() => {
              handleOnClick(hData.lngbutton[1]);
            }}
          >
            {hData.lngbutton[0]}
          </button>
          {hData.to}
        </div>
      </div>
      <nav className="mt-8  flex justify-between max-[640px]:flex-col max-[640px]:gap-4 items-center">
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
                {hData.skills}
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#3730a3] dark:text-[#6B7280] dark:hover:text-white"
                href="#projects"
              >
                {hData.projects}
              </a>
            </li>
            <a className="hireButton" href="mailto:gokhansisman@outlook.com">
              {hData.hire}
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
