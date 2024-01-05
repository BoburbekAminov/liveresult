import React from "react";
import { StyledMatch } from "./Match.style";

interface IMatchProps {
  isLiked?: boolean;
  isMarked?: boolean;
  date: string;
  long: string;
  home: string | number;
  away: string | number;
}

export const Match = ({
  isLiked,
  isMarked,
  date,
  long,
  home,
  away,
}: IMatchProps) => {
  return (
    <StyledMatch $isLiked={isLiked} $isMarked={isMarked}>
      <p>{date}</p>
      <p>{long}</p>
      <p>{home}</p>
      <p>{away}</p>
    </StyledMatch>
  );
};
