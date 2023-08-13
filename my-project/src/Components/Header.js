const Header = (props) => {
  const { toggle, setToggle } = props;
  return (
    <header>
      <div className="darkMode">
        <div
          className={toggle ? "radio-btn bg" : "radio-btn"}
          onClick={() => setToggle(!toggle)}
        >
          <div className={toggle ? "radio-inner active" : "radio-inner"}></div>
        </div>
        <span>|</span>
        <div className="changeLang">
          <a href="/">TÜRKÇE</a>'YE GEÇ
        </div>
      </div>
      <nav>
        <div className="logo">
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
        <div className="rightNav">
          <ul>
            <li>Skills</li>
            <li>Projects</li>
            <button className="hire">Hire me</button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
