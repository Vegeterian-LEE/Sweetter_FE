import { css } from "styled-components";
import theme from "./Theme";

export const CenterLayoutBorder = css`
  border-right: ${theme.borderline};
  border-left: ${theme.borderline};
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
