import styled from "@emotion/styled";
import CheckedIcon from "../../assets/images/icon/icon_checked.svg";
import NotCheckedIcon from "../../assets/images/icon/icon_notChecked.svg";

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  & > img {
    width: 2vmin;
    height: 2vmin;
    margin-right: 0.5vmin;
  }
  cursor: pointer;
`;

interface CheckBoxProps {
  children: string;
  onClick?: () => void;
  isActivated?: boolean;
}

const CheckBoxWrapper = ({
  children,
  onClick,
  isActivated = true,
}: CheckBoxProps) => {
  return (
    <CheckBox onClick={onClick}>
      <img src={isActivated ? CheckedIcon : NotCheckedIcon} alt="" />
      <p>{children}</p>
    </CheckBox>
  );
};

export default CheckBoxWrapper;
