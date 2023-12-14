import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";

const ButtonBorder = styled.button`
  width: fit-content;
  height: 36px;
  margin-bottom: 8px;
  padding: 0.5vmin 1vmin;
  border: 1px solid #dbe1ff;
  border-radius: 0.5vmin;
  background-color: ${colorPalette.white};
  color: #7686d4;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  appearance: none;
  outline: none;
  box-shadow: none;
  opacity: 1;
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
