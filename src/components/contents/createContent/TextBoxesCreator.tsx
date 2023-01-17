import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TextBoxesContent, TextBoxesData } from "../../../types/templateContents";
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
}

const TextBoxesCreator = ({
  id,
  componentList,
  setComponentList,
  addComponentToExistingComponentById,
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
    (
      event: React.FormEvent<HTMLFormElement>,
      index: number,
      keyName: TextBoxesData["main"] | TextBoxesData["sub"] | TextBoxesData["description"],
    ) => {
      event.preventDefault();
      if (contentIndex === undefined) return;
      if (textBoxesData === undefined) return;
      const form = event.target as Element;
      const copyTextBoxesDataArr = JSON.parse(JSON.stringify(textBoxesData.data));
      if (keyName === "main") {
        copyTextBoxesDataArr[index].main = form.querySelector("input")?.value ?? "";
      } else if (keyName === "sub") {
        copyTextBoxesDataArr[index].sub = form.querySelector("input")?.value ?? "";
      } else if (keyName === "description") {
        copyTextBoxesDataArr[index].description = form.querySelector("input")?.value ?? "";
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
    return textBoxesData?.data.map((textBox, index) => {
      return (
        <TextCardGrp key={index}>
          <TextCard>
            <HtmlCreator
              html={textBox.main}
              onSubmitHtml={(event) => {
                handleSubmitText(event, index, "main");
              }}
            />
          </TextCard>
          <SubText>
            <HtmlCreator
              html={textBox.sub ?? ""}
              onSubmitHtml={(event) => {
                handleSubmitText(event, index, "sub");
              }}
              customCss={subTextCss}
            />
          </SubText>
          <MeaningText>
            <HtmlCreator
              html={textBox.description ?? ""}
              onSubmitHtml={(event) => {
                handleSubmitText(event, index, "description");
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
  }, [handleDeleteTextBox, handleSubmitText, textBoxesData?.data]);

  return (
    <TextBoxesWrapper>
      {textBoxes}
      <button onClick={addTextBox}>+</button>
    </TextBoxesWrapper>
  );
};

export default TextBoxesCreator;
