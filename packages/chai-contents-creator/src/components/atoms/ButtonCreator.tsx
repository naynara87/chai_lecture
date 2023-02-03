import styled from "@emotion/styled";
import { changePXtoVW } from "chai-ui";

const ButtonCreator = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: ${changePXtoVW(21)};
  background-color: transparent;
  appearance: none;
  outline: none;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
`;

export default ButtonCreator;
