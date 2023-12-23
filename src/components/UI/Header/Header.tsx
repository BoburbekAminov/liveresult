import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
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
        <div className="search">
          <input type="text" placeholder="Поиск" />
          <button>
            <img src="./search (1).svg" />
          </button>
        </div>
        <div className="time"></div>
        <div className="reagister">
          <a href="/login">Вход</a>
        </div>
      </div>
    </div>
  );
};
