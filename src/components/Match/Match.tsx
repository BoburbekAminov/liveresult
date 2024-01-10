import React from "react";
import { StyledMatch } from "./Match.style";

interface IMatchProps {
  isLiked?: boolean;
  isMarked?: boolean;
  date: string;
  homeLogo: string;
  homeName: string;
  awayLogo: string;
  awayName: string;
  //   long: string;
  //   name: string;
  homeGoal: string | number;
  awayGoal: string | number;
}

export const Match = ({
  isLiked,
  isMarked,
  date,
  homeLogo,
  homeName,
  awayLogo,
  awayName,
  //   long,
  homeGoal,
  awayGoal,
}: IMatchProps) => {
  return (
    <StyledMatch $isLiked={isLiked} $isMarked={isMarked}>
      <div className="h2h">
        <span>{date}</span>
        <img src={homeLogo} alt="" />
        <span>{homeName}</span>
        <p>
          {homeGoal} : {awayGoal}
        </p>
        <img src={awayLogo} alt="" />
        <span>{awayName}</span>
      </div>
    </StyledMatch>
  );
};
