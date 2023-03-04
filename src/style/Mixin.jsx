import { css } from "styled-components";

export const CenterLayoutBorder = css`
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 2px solid rgba(0, 0, 0, 0.1);
`;

export const FlexAttribute = (direction, align, justify) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`;

export const CategoryBoxStyle = css`
  ${FlexAttribute("row", "center", "flex-end")}
  margin: 10px 20px;
  padding: 5px 10px;
`;
