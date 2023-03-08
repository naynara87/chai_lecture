import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { buttonCSS } from "../../styles/template";

interface StyledButtonProps {
  customCSS?: SerializedStyles;
}
const StyledButton = styled.button<StyledButtonProps>`
  ${buttonCSS}
  ${(props) => props.customCSS}
`;

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  customCSS?: SerializedStyles;
}
const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
