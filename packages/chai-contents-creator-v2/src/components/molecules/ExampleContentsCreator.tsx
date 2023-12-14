import styled from "@emotion/styled";
import IconLight from "chai-ui-v2/dist/assets/images/icon/icon_light_navy.svg";
import TextEditorViewer from "../molecules/TextEditorViewer";

const ExampleContentsWrapper = styled.div`
  padding: 1.5vmin;
  border-radius: 2vmin;
  border: 1px solid #d9d0ff;
  background-color: #f6f4ff;
  width: 50vmin;
`;

const ExampleTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  & > img {
    margin-right: 1vmin;
    width: 2vmin;
    height: 2vmin;
  }
  & > p {
    font-size: 2vmin;
    line-height: 1;
    font-weight: 700;
    color: #6e79bd;
  }
`;

const ExampleTextWrapper = styled.div`
  background-color: #ffffff;
  padding: 2vmin;
  border-radius: 0.5vmin;
  & > p {
    font-size: 12px;
    font-weight: 400;
  }
`;

interface ExampleContentsCreatorProps {
  setText: (text: string) => void;
  getText: () => string;
  isFocused: boolean;
}

const ExampleContentsCreator = ({
  setText,
  getText,
  isFocused,
}: ExampleContentsCreatorProps) => {
  return (
    <ExampleContentsWrapper>
      <ExampleTitleWrapper>
        <img src={IconLight} alt="" />
        <p>모범 답안</p>
      </ExampleTitleWrapper>
      <ExampleTextWrapper>
        <TextEditorViewer
          setText={(text) => setText(text)}
          text={getText()}
          isFocused={isFocused}
        />
      </ExampleTextWrapper>
    </ExampleContentsWrapper>
  );
};

export default ExampleContentsCreator;
