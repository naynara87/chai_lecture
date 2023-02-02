import { TextCard } from "chai-ui";
import TextCreator from "./TextCreator";

interface TextCardCreatorProps {
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

const TextCardCreator = ({
  text,
  handleSubmitText,
  onClickHtml,
  keyName,
  index,
  id,
  focusEditor,
  textMaxLength,
}: TextCardCreatorProps) => {
  return (
    <TextCard>
      <TextCreator
        html={text}
        onSubmitHtml={handleSubmitText}
        keyName={keyName}
        index={index}
        id={id}
        focusEditor={focusEditor}
        onClickHtml={onClickHtml}
        textMaxLength={textMaxLength}
      />
    </TextCard>
  );
};

export default TextCardCreator;
