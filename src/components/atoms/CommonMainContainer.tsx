import styled from "@emotion/styled";
import { footerHeightNormal, headerHeightNormal } from "../../constants/layout";
import { changePXtoVW } from "../../utils/styles";

const CommonMainContainer = styled.main`
  width: 100%;
  height: 100vh;
  padding: ${headerHeightNormal} ${changePXtoVW(160)} ${footerHeightNormal};
  overflow: auto;
`;

export default CommonMainContainer;
