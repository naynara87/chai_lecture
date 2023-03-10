import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import { vw, colorPalette } from "chai-ui-v2";

const BorderTextBoxWrapper = styled.div`
  border: 1px solid ${colorPalette.gray500};
  width: 100%;
  border-radius: ${vw(20)};
  padding: ${vw(45)} ${vw(60)};
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
