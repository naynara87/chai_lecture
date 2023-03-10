import styled from "@emotion/styled";
import { vw } from "chai-ui-v2";
import IconX from "../../assets/images/icon/icon_x_white.svg";

const Button = styled.span`
  width: ${vw(16)};
  height: ${vw(16)};
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  border-radius: 50%;

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
`;

const ObjectDeleteButton = () => {
  return <Button />;
};

export default ObjectDeleteButton;
