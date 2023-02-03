import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ContentProps } from "../../hooks/useCreateContent";
import {
  MeaningText,
  SubText,
  subTextCss,
  TextBoxesContent,
  TextBoxesOptions,
  TextBoxesWrapper,
  TextCardGrp,
} from "chai-ui";
import { OptionButtonWrapper } from "../atoms/OptionButtonWrapper";
import TextCreator from "../molecules/TextCreator";
import TextCardCreator from "../molecules/TextCardCreator";
import ButtonCreator from "../atoms/ButtonCreator";

interface TextBoxesCreatorProps extends ContentProps {}

const TextBoxesCreator = ({
  id,
  componentList,
  setComponentList,
  addComponentToExistingComponentById,
  handleFocusHtml,
  focusEditor,
}: TextBoxesCreatorProps) => {
  const [textBoxesData, setTextBoxesData] = useState<
    TextBoxesContent | undefined
  >(undefined);
  const [contentIndex, setContentIndex] = useState<number | undefined>(
    undefined
  );

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
      const copyTextBoxesDataArr = JSON.parse(
        JSON.stringify(textBoxesData.data)
      );
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
    [textBoxesData, componentList, setComponentList, contentIndex]
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
    [textBoxesData, componentList, contentIndex, setComponentList]
  );

  const addTextBox = useCallback(() => {
    if (!addComponentToExistingComponentById) return;
    addComponentToExistingComponentById("textBoxes", id);
  }, [addComponentToExistingComponentById, id]);

  const handleClickMode = useCallback(
    (optionName: keyof TextBoxesOptions) => {
      if (contentIndex === undefined) return;
      const copyComponentList = [...componentList];
      const content = copyComponentList[contentIndex]
        ?.content as TextBoxesContent;
      if (optionName === "isHorizontal") {
        content.options!.isHorizontal = !content.options?.isHorizontal;
      }
      setComponentList(copyComponentList);
    },
    [componentList, contentIndex, setComponentList]
  );

  const textBoxes = useMemo(() => {
    if (!handleFocusHtml) return;
    return textBoxesData?.data.map((textBox, index) => {
      return (
        <TextCardGrp key={index}>
          <TextCardCreator
            text={textBox.main}
            handleSubmitText={handleSubmitText}
            keyName="main"
            index={index}
            id={id + "main" + index}
            focusEditor={focusEditor}
            onClickHtml={() => handleFocusHtml(id, "main", index)}
            textMaxLength={5}
          />
          <SubText>
            <TextCreator
              html={textBox.sub ?? ""}
              onSubmitHtml={handleSubmitText}
              customCss={subTextCss}
              keyName="sub"
              index={index}
              id={id + "sub" + index}
              focusEditor={focusEditor}
              onClickHtml={() => handleFocusHtml(id, "sub", index)}
              textMaxLength={5}
            />
          </SubText>
          <MeaningText>
            <TextCreator
              html={textBox.description ?? ""}
              onSubmitHtml={handleSubmitText}
              keyName="description"
              index={index}
              id={id + "description" + index}
              focusEditor={focusEditor}
              onClickHtml={() => {
                handleFocusHtml(id, "description", index);
              }}
              textMaxLength={5}
            />
          </MeaningText>
          <ButtonCreator
            onClick={() => {
              handleDeleteTextBox(index);
            }}
          >
            삭제
          </ButtonCreator>
        </TextCardGrp>
      );
    });
  }, [
    handleDeleteTextBox,
    handleSubmitText,
    focusEditor,
    handleFocusHtml,
    textBoxesData,
    id,
  ]);

  return (
    <TextBoxesWrapper isHorizontal={textBoxesData?.options?.isHorizontal}>
      {textBoxes}
      <OptionButtonWrapper>
        <ButtonCreator onClick={() => handleClickMode("isHorizontal")}>
          {textBoxesData?.options?.isHorizontal ? "가로모드" : "세로모드"}
        </ButtonCreator>
      </OptionButtonWrapper>
      <ButtonCreator onClick={addTextBox}>+</ButtonCreator>
    </TextBoxesWrapper>
  );
};

export default TextBoxesCreator;
