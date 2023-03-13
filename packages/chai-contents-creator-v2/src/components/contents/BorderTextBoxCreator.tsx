import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";

const BorderTextBoxWrapper = styled.div`
  border: 1px solid #666666;
  width: 100%;

  border-radius: 20px;
  padding: 45px 60px;
  text-align: left;
`;

const BorderTextBoxCreator = () => {
  return (
    <ContentCreatorLayout>
      <BorderTextBoxWrapper>
        <div>텍스트를 입력해주세요</div>
      </BorderTextBoxWrapper>
    </ContentCreatorLayout>
  );
};

export default BorderTextBoxCreator;
