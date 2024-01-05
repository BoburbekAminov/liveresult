import React, { useState } from "react";
import { StyledMenu } from "./Menu.style";

export const Menu = () => {
  return (
    <StyledMenu>
      <div className="menuName">
        <p>Футбол</p>
      </div>
      <div className="menuName">
        <p>Хоккей</p>
      </div>
      <div className="menuName">
        <p>Теннис</p>
      </div>
      <div className="menuName">
        <p>Баскетбол</p>
      </div>
      <div className="menuName">
        <p>Формула-1</p>
      </div>
      <div className="menuName">
        <p>ММА</p>
      </div>
      <div className="menuName">
        <p>Волейбол</p>
      </div>
      <div className="menuName">
        <p>Гандбол</p>
      </div>
      <div className="menuName">
        <p>Бейсбол</p>
      </div>
    </StyledMenu>
  );
};
