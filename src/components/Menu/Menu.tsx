import React, { useState } from "react";
import { StyledMenu } from "./Menu.style";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul className="menu">
        <li className="menuName">
          <a href="/countries" className="name">
            Футбол
          </a>
        </li>
        <li className="menuName">
          <p className="name">Хоккей</p>
        </li>
        <li className="menuName">
          <p className="name">Теннис</p>
        </li>
        <li className="menuName">
          <p className="name">Баскетбол</p>
        </li>
        <li className="menuName">
          <p className="name">Формула-1</p>
        </li>
        <li className="menuName">
          <p className="name">ММА</p>
        </li>
        <li className="menuName">
          <p className="name">Волейбол</p>
        </li>
        <li className="menuName">
          <p className="name">Гандбол</p>
        </li>
        <li className="menuName">
          <p className="name">Бейсбол</p>
        </li>
      </ul>
    </StyledMenu>
  );
};
