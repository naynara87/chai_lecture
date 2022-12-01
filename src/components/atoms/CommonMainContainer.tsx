import styled from "@emotion/styled";
import { footerHeightNormal, headerHeightNormal } from "../../constants/layout";
import { changePXtoVW } from "../../utils/styles";

const CommonMainContainer = styled.main`
  width: 100%;
  height: calc(100% - ${headerHeightNormal} - ${footerHeightNormal});
  margin: ${headerHeightNormal} 0 ${footerHeightNormal};
  padding: 0 ${changePXtoVW(160)} 0;
`;

export default CommonMainContainer;
