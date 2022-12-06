import styled from "@emotion/styled";
import { changePXtoVW } from "../../utils/styles";

const Button = styled.button`
  border-radius: 0;
  background-color: transparent;
  border: 0;
  appearance: none;
  padding: 0;
  outline: none;
  box-shadow: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${changePXtoVW(21)};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
`;

export default Button;
