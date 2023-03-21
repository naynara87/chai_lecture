import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";

const ButtonBorder = styled.button`
  width: fit-content;
  height: 50px;
  margin-bottom: 8px;
  padding: 14px 16px;
  border: 1px solid ${colorPalette.subblue};
  border-radius: 4px;
  background-color: ${colorPalette.white};
  color: ${colorPalette.mainlight};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  appearance: none;
  outline: none;
  box-shadow: none;
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const AddButton = ({ children, onClick }: ButtonProps) => {
  return (
    <ButtonBorder className="btn btn-text" onClick={onClick}>
      {children}
    </ButtonBorder>
  );
};

export default AddButton;
