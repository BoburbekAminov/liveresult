import React, { useContext } from "react";
import { StyledHeader } from "./Header.style";
import { ThemeContext } from "../../contexts/themeContext";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <div className="logo">
        <a href="/main">
          <img
            src="	https://static.liveresult.ru/themes/adaptive/images/logo_h.svg"
            alt=""
          />
        </a>
      </div>
      <div className="headerTittle">
        <span>
          Футбол онлайн — результаты и счета матчей, видео голов и трансляции
        </span>
      </div>
      <div className="inputAndreagister">
        <div className="theme">
          <button
            onClick={() => {
              toggleTheme();
              console.log(theme);
            }}
          >
            theme
          </button>
        </div>
        <div className="search">
          <input type="text" placeholder="Поиск" />
          <button className="searchBtn">
            <img src="./search (1).svg" />
          </button>
        </div>
        <div className="profileIcon">
          <a href="/profile">
            <img src="./img/user.png" alt="" />
          </a>
        </div>
      </div>
    </StyledHeader>
  );
};
