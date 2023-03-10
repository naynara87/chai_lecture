import styled from "@emotion/styled";
import { vw } from "chai-ui-v2";

const AddButton = styled.button`
  padding: ${vw(10)} ${vw(20)};
  border-radius: ${vw(4)};
  background-color: #ffffff;
  color: #7688d4;
  border: 1px solid #dbe1ff;
  font-size: ${vw(10)};
  font-weight: 500;
  width: fit-content;
`;

const AddNumberButton = () => {
  return <AddButton>번호 추가</AddButton>;
};

export default AddNumberButton;
