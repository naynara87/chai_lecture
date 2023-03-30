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
  id?: string;
  customCSS?: SerializedStyles;
}
const Button = ({ children, id, ...props }: ButtonProps) => {
  return (
    <StyledButton id={id} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
