import React, { useState } from "react";
import { StyledMenu } from "./Menu.style";

export const Menu = () => {
  return (
    <StyledMenu>
      <div className="menuName">
        <a href="">Футбол</a>
      </div>
      <div className="menuName">
        <a href="">Хоккей</a>
      </div>
      <div className="menuName">
        <a href="">Теннис</a>
      </div>
      <div className="menuName">
        <a href="">Баскетбол</a>
      </div>
      <div className="menuName">
        <a href="">Формула-1</a>
      </div>
      <div className="menuName">
        <a href="">ММА</a>
      </div>
      <div className="menuName">
        <a href="">Волейбол</a>
      </div>
      <div className="menuName">
        <a href="">Гандбол</a>
      </div>
    </StyledMenu>
  );
};
