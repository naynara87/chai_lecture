import styled from "@emotion/styled";
import IconLight from "chai-ui-v2/dist/assets/images/icon/icon_light_navy.svg";

const ExampleContentsWrapper = styled.div`
  padding: 16px;
  border-radius: 20px;
  border: 1px solid #d9d0ff;
  background-color: #f6f4ff;
  width: 450px;
`;

const ExampleTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  & > img {
    margin-right: 12px;
    width: 20px;
    height: 20px;
  }
  & > p {
    font-size: 12px;
    line-height: 1;
    font-weight: 700;
    color: #6e79bd;
  }
`;

const ExampleTextWrapper = styled.div`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 10px;
  & > p {
    font-size: 12px;
    font-weight: 400;
  }
`;

const ExampleContentsCreator = () => {
  return (
    <ExampleContentsWrapper>
      <ExampleTitleWrapper>
        <img src={IconLight} alt="" />
        <p>모범 답안</p>
      </ExampleTitleWrapper>
      <ExampleTextWrapper>
        {/* TODO: 텍스트에디터 들어올 자리 */}
        <p>텍스트를 입력해주세요</p>
      </ExampleTextWrapper>
    </ExampleContentsWrapper>
  );
};

export default ExampleContentsCreator;
