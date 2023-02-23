import styled from "@emotion/styled";
import { colorPalette } from "../../../styles";

/**
 * scss의 .btn-icon 와 동일
 */
const IconButton = styled.button`
  width: 4vw;
  height: 4vw;
  border-radius: 1vw;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${colorPalette.white};
  box-shadow: 0 4px 0 rgb(88 88 88 / 20%);
  background-color: ${colorPalette.white};
  cursor: pointer;
`;

export default IconButton;
