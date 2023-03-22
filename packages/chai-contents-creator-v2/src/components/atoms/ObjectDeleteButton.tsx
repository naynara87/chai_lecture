import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import IconX from "../../assets/images/icon/icon_x_white.svg";

interface ButtonProps {
  customCSS?: SerializedStyles;
}
const Button = styled.span<ButtonProps>`
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;

  &:after {
    content: "";
    background-image: url(${IconX});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }

  ${({ customCSS }) => customCSS}
`;

interface ObjectDeleteButtonProps {
  onClick?: () => void;
  customCSS?: SerializedStyles;
}
const ObjectDeleteButton = ({
  onClick,
  customCSS,
}: ObjectDeleteButtonProps) => {
  return (
    <Button onClick={onClick} className="btn-delete" customCSS={customCSS} />
  );
};

export default ObjectDeleteButton;
