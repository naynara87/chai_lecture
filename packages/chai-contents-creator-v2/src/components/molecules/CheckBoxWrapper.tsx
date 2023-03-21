import styled from "@emotion/styled";
import CheckedIcon from "../../assets/images/icon/icon_checked.svg";
import NotCheckedIcon from "../../assets/images/icon/icon_notChecked.svg";

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  & > img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;

interface CheckBoxProps {
  children: string;
  onClick?: () => void;
  isChecked: boolean;
}

const CheckBoxWrapper = ({ children, onClick, isChecked }: CheckBoxProps) => {
  return (
    <CheckBox onClick={onClick}>
      {/* TODO: 체크버튼 클릭 시 이미지 변경 (CheckedIcon/NotCheckedIcon) */}
      <img src={isChecked ? CheckedIcon : NotCheckedIcon} alt="" />
      <p>{children}</p>
    </CheckBox>
  );
};

export default CheckBoxWrapper;
