import { css } from "@emotion/react";
import { colorPalette, QuestionBlankStyles } from "chai-ui";
import TextCreator from "./TextCreator";

const blankCss = css`
  color: ${colorPalette.black};
`;

interface BlankCreatorProps {
  text: string;
  handleSubmitText: (
    text: string,
    keyName?: string,
    index?: number | string
  ) => void;
  keyName: string;
  index: number;
  id: string;
  focusEditor: string | undefined;
  onClickHtml: () => void;
  textMaxLength: number;
}

const BlankCreator = ({
  text,
  handleSubmitText,
  onClickHtml,
  keyName,
  index,
  id,
  focusEditor,
  textMaxLength,
}: BlankCreatorProps) => {
  const rePlaceText = text.replace(/\*[^>]*?/g, "");

  return (
    <QuestionBlankStyles borderColor={colorPalette.black} customCss={blankCss}>
      <TextCreator
        html={rePlaceText}
        onSubmitHtml={handleSubmitText}
        keyName={keyName}
        index={index}
        id={id}
        focusEditor={focusEditor}
        onClickHtml={onClickHtml}
        textMaxLength={textMaxLength}
      />
    </QuestionBlankStyles>
  );
};

export default BlankCreator;
