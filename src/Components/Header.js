import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LanguageContext } from "../Contexts/LnContext";
import { contentData } from "../Sources/Data/LnData";

const Header = (props) => {
  const { languagePreference, setLanguagePreference } =
    useContext(LanguageContext);
  const { toggle, setToggle } = props;
  const navigate = useNavigate();
  const location = useLocation();

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

  // Quotes sayfasındaysa header'ı gösterme
  if (location.pathname.includes('/quotes')) {
    return null;
  }

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
      <nav className="mt-8 flex justify-between max-[640px]:flex-col max-[640px]:gap-4 items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="62"
            viewBox="0 0 64 62"
            fill="currentColor"
            className="cursor-pointer"
            onClick={() => navigate('/')}
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
          <ul className="text-lg font-medium flex flex-row gap-8 max-[640px]:gap-4 items-center max-[640px]:flex-wrap max-[640px]:justify-center">
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
            <li>
              <button
                onClick={() => navigate('/quotes')}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#3730a3] dark:border-[#BAB2E7] text-[#3730a3] dark:text-[#BAB2E7] rounded-md hover:bg-[#3730a3] hover:text-white dark:hover:bg-[#BAB2E7] dark:hover:text-[#3730a3] transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="max-[640px]:hidden">{hData.quotes1}</span>
                <span className="hidden max-[640px]:inline">{hData.quotes2}</span>
              </button>
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