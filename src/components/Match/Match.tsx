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
  long: string;
  homeGoal: string | number;
  awayGoal: string | number;
  // addToCart: (item: string) => void;
}

export const Match: React.FC<IMatchProps> = ({
  isLiked,
  isMarked,
  date,
  homeLogo,
  homeName,
  awayLogo,
  awayName,
  long,
  homeGoal,
  awayGoal,
}: // addToCart,
IMatchProps) => {
  // const handleSaveClick = () => {
  //   const matchInfo = `${homeName} vs ${awayName}, ${homeGoal}:${awayGoal}, ${long}`;
  //   addToCart(matchInfo);
  // };

  return (
    <StyledMatch $isLiked={isLiked} $isMarked={isMarked}>
      <div className="h2h">
        {/* <span>{date}</span> */}
        <button className="save">
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
