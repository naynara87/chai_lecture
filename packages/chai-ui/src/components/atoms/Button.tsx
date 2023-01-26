import styled from "@emotion/styled";
import { changePXtoVW } from "../../utils/styles";

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: ${changePXtoVW(21)};
  background-color: transparent;
  appearance: none;
  outline: none;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
`;

export default Button;
