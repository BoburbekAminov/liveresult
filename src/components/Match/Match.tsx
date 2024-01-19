import React, { useEffect, useState } from "react";
import { StyledMatch } from "./Match.style";
import { useNavigate } from "react-router-dom";

interface IMatchProps {
  isLiked?: boolean;
  isMarked?: boolean;
  homeLogo: string;
  homeName: string;
  awayLogo: string;
  awayName: string;
  long: string;
  homeGoal: string | number;
  awayGoal: string | number;
}

export const Match: React.FC<IMatchProps> = ({
  isLiked,
  isMarked,
  homeLogo,
  homeName,
  awayLogo,
  awayName,
  long,
  homeGoal,
  awayGoal,
}: IMatchProps) => {
  const navigate = useNavigate();

  const handleSaveClick = () => {
    const matchInfo = {
      homeLogo,
      awayLogo,
      homeName,
      awayName,
      homeGoal,
      awayGoal,
      long,
    };

    navigate("/cart", { state: { matchInfo } });
  };

  return (
    <StyledMatch $isLiked={isLiked} $isMarked={isMarked}>
      <div className="h2h">
        {/* <span>{date}</span> */}
        <button className="save" onClick={handleSaveClick}>
          <span className="star-icon">&#9733;</span>
        </button>
        <img src={homeLogo} alt="" />
        <p>{homeName}</p>
        <p className="goals">
          {homeGoal} : {awayGoal}
        </p>
        <img src={awayLogo} alt="" />
        <p>{awayName}</p>
        <span className="status">{long}</span>
      </div>
    </StyledMatch>
  );
};
