import styled from "@emotion/styled";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

const CommonMainContainer = styled.main`
  height: 100%;
  padding: ${changePXtoVH(100)} ${changePXtoVW(160)} ${changePXtoVH(100)} ${changePXtoVW(160)};
`;

export default CommonMainContainer;
