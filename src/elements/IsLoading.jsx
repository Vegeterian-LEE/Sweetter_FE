import { Oval } from "react-loader-spinner";

import styled from "styled-components";
import theme from "../style/Theme";
import { FlexAttribute } from "../style/Mixin";

const Isloading = () => (
  <CustomLodingWrapper>
    <Oval
      height={60}
      width={60}
      color={theme.color.main}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={theme.color.main}
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </CustomLodingWrapper>
);

const CustomLodingWrapper = styled.div`
  ${FlexAttribute("row", "center", "center")};
  margin: 40px 0;
`;

export default Isloading;
