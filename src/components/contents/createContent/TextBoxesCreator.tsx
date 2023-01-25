import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TextBoxesContent } from "../../../types/templateContents";
import { Content } from "../../../types/appData";
import { CreatorContent } from "../../../hooks/contentCreate/useCreateContent";
import HtmlCreator from "./HtmlCreator";
import {
  MeaningText,
  SubText,
  subTextCss,
  TextBoxesWrapper,
  TextCardGrp,
} from "../../molecules/TextBoxes";
import { TextCard } from "../../atoms/TextBox";

interface TextBoxesCreatorProps {
  onSave(): void;
  id: string;
  componentList: (CreatorContent | undefined)[];
  setComponentList: React.Dispatch<React.SetStateAction<(CreatorContent | undefined)[]>>;
  addComponentToExistingComponentById: (contentType: Content["type"], id: string) => void;
  focusEditor?: string;
  handleFocusHtml?: (id?: string, type?: string, index?: number | string) => void;
}

const TextBoxesCreator = ({
  id,
  componentList,
  setComponentList,
  addComponentToExistingComponentById,
  handleFocusHtml,
  focusEditor,
}: TextBoxesCreatorProps) => {
  const [textBoxesData, setTextBoxesData] = useState<TextBoxesContent | undefined>(undefined);
  const [contentIndex, setContentIndex] = useState<number | undefined>(undefined);

  const getData = useCallback(() => {
    const textBoxesContent = componentList.find((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    })?.content as TextBoxesContent;
    const textBoxesContentIndex = componentList.findIndex((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    });
    setContentIndex(textBoxesContentIndex);
    setTextBoxesData(textBoxesContent);
  }, [componentList, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSubmitText = useCallback(
    (text: string, keyName?: string, index?: number | string) => {
      if (contentIndex === undefined) return;
      if (textBoxesData === undefined) return;
      if (index === undefined) return;
      const copyTextBoxesDataArr = JSON.parse(JSON.stringify(textBoxesData.data));
      if (keyName === "main") {
        copyTextBoxesDataArr[index].main = text ?? "";
      } else if (keyName === "sub") {
        copyTextBoxesDataArr[index].sub = text ?? "";
      } else if (keyName === "description") {
        copyTextBoxesDataArr[index].description = text ?? "";
      }
      const copyComponentList = [...componentList];
      copyComponentList[contentIndex]!.content.data = copyTextBoxesDataArr;
      setComponentList(copyComponentList);
    },
    [textBoxesData, componentList, setComponentList, contentIndex],
  );

  const handleDeleteTextBox = useCallback(
    (index: number) => {
      if (contentIndex === undefined) return;
      if (!textBoxesData?.data) return;
      const copyComponentList = [...componentList];

      // NOTE kjw 텍스트박스가 하나일때 콘텐츠전체삭제
      if (textBoxesData?.data.length <= 1) {
        copyComponentList.splice(contentIndex, 1, undefined);
        setComponentList(copyComponentList);
        return;
      }

      // NOTE kjw 텍스트박스가 여러개일때 해당 콘텐츠만 삭제
      const copyTextBoxesDataArr = [...textBoxesData.data];
      copyTextBoxesDataArr.splice(index, 1);
      copyComponentList[contentIndex]!.content.data = copyTextBoxesDataArr;
      setComponentList(copyComponentList);
    },
    [textBoxesData, componentList, contentIndex, setComponentList],
  );

  const addTextBox = useCallback(() => {
    addComponentToExistingComponentById("textBoxes", id);
  }, [addComponentToExistingComponentById, id]);

  const textBoxes = useMemo(() => {
    if (!handleFocusHtml) return;
    return textBoxesData?.data.map((textBox, index) => {
      return (
        <TextCardGrp key={index}>
          <TextCard>
            <HtmlCreator
              html={textBox.main}
              onSubmitHtml={handleSubmitText}
              keyName="main"
              index={index}
              id={id + "main" + textBox.contentId}
              focusEditor={focusEditor}
              onClickHtml={() => handleFocusHtml(id, "main", textBox.contentId)}
            />
          </TextCard>
          <SubText>
            <HtmlCreator
              html={textBox.sub ?? ""}
              onSubmitHtml={handleSubmitText}
              customCss={subTextCss}
              keyName="sub"
              index={index}
              id={id + "sub" + textBox.contentId}
              focusEditor={focusEditor}
              onClickHtml={() => handleFocusHtml(id, "sub", textBox.contentId)}
            />
          </SubText>
          <MeaningText>
            <HtmlCreator
              html={textBox.description ?? ""}
              onSubmitHtml={handleSubmitText}
              keyName="description"
              index={index}
              id={id + "description" + textBox.contentId}
              focusEditor={focusEditor}
              onClickHtml={() => {
                handleFocusHtml(id, "description", textBox.contentId);
              }}
            />
          </MeaningText>
          <button
            onClick={() => {
              handleDeleteTextBox(index);
            }}
          >
            삭제
          </button>
        </TextCardGrp>
      );
    });
  }, [
    handleDeleteTextBox,
    handleSubmitText,
    textBoxesData?.data,
    focusEditor,
    handleFocusHtml,
    id,
  ]);

  return (
    <TextBoxesWrapper>
      {textBoxes}
      <button onClick={addTextBox}>+</button>
    </TextBoxesWrapper>
  );
};

export default TextBoxesCreator;
