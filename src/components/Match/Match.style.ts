import styled, { css } from "styled-components";

interface IStyledMatchProps {
  $isLiked?: boolean;
  $isMarked?: boolean;
}

export const StyledMatch = styled.div<IStyledMatchProps>`
  display: flex;
  max-width: 450px;
  width: 100%;
  ${(props) =>
    props.$isLiked &&
    css`
      .icon-wrapper {
        .icon-like {
          fill: ${(props) => props.theme.colors.red};
          stroke: 0;
          stroke-width: 0;
        }

        .likes-count {
          color: ${(props) => props.theme.colors.red};
        }
      }
    `}

  ${(props) =>
    props.$isMarked &&
    css`
      .icon-wrapper {
        .icon-mark {
          fill: ${(props) => props.theme.colors.primeColor};
          stroke: 0;
          stroke-width: 0;
        }
      }
    `}
`;
