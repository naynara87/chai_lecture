import styled from "@emotion/styled";
import { vw } from "../../../assets";

/**
 * scss의 .btn-icon 와 동일
 */
const IconButton = styled.button`
  width: ${vw(80)};
  height: ${vw(80)};
  border-radius: ${vw(20)};
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  display: inline-block;
  font-size: 1px;
  text-indent: -10em;
  color: transparent;
  text-align: left;
  box-shadow: 0 4px 0 rgb(88 88 88 / 20%);
  transition: all 0.3s;
`;

export default IconButton;
