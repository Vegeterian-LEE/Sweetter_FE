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

export const UserInfomaitionText = css`
  font-size: ${theme.textsize.user_info};
  font-weight: ${(props) => (props.name ? "bold" : null)};
  color: ${(props) => (props.name ? null : theme.color.hazy_text)};
`;

export const PostText = css`
  display: inline-block;
  margin: 15px 0;
  font-size: ${theme.textsize.post};
`;

export const CategoryTitleStyle = css`
  width: 120px;
  margin-top: 13px;
  margin-left: 10px;
  font-size: ${theme.textsize.category};
`;

export const UserImageStyle = css`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
`;

export const IconStyle = css`
  ${FlexAttribute("row", "center", "center")}
  padding: 8px;
  border-radius: 50%;
  :hover {
    background-color: ${theme.color.category_hover};
  }
`;
