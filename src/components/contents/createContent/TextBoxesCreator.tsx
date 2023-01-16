import { TextBoxesAdapterProps } from "../TextBoxesAdapter";
import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { changePXtoVH, changePXtoVW } from "../../../utils/styles";
import { colorPalette } from "../../../styles/colorPalette";
import { TextBoxesContent, TextBoxesData } from "../../../types/templateContents";
import { Content } from "../../../types/appData";
import { CreatorContent } from "../../../hooks/contentCreate/useCreateContent";
import HtmlCreator from "./HtmlCreator";

const TextBoxesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 ${changePXtoVW(40)};
  width: ${changePXtoVW(1200)};
  margin: 0 auto;
`;

const TextCardGrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  color: #3c3c3c;
  text-align: center;

  > div:first-child {
    min-width: ${changePXtoVW(288)};
    width: auto;
    height: ${changePXtoVH(160)};
  }

  &.horizontal {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const SubText = styled.div`
  margin-top: ${changePXtoVH(32)};
`;

const subTextCss = css`
  font-weight: 500;
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.textBoxSub};
`;

const MeaningText = styled("div")`
  margin-top: ${changePXtoVH(32)};
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
`;

const TextCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${changePXtoVW(288)};
  width: 100%;
  margin: ${changePXtoVH(11)} ${changePXtoVW(11)};
  padding: ${changePXtoVW(33)} ${changePXtoVW(33)};
  border: 1px solid ${colorPalette.textBoxBorder};
  border-radius: ${changePXtoVW(11)};
  font-size: ${changePXtoVW(48)};
  line-height: ${changePXtoVH(84)};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
`;

interface TextBoxesCreatorProps extends TextBoxesAdapterProps {
  onSave(): void;
  id: string;
  componentList: CreatorContent[];
  setComponentList: React.Dispatch<React.SetStateAction<CreatorContent[]>>;
  addComponentToExistingComponentById: (contentType: Content["type"], id: string) => void;
}

const TextBoxesCreator = ({
  id,
  componentList,
  setComponentList,
  addComponentToExistingComponentById,
}: TextBoxesCreatorProps) => {
  const [textBoxesData, setTextBoxesData] = useState<TextBoxesContent>();
  const [contentIndex, setContentIndex] = useState<number | undefined>();
  useEffect(() => {
    const textBoxesContent = componentList.find((component) => {
      return component.id === id;
    })?.content as TextBoxesContent;
    const textBoxesContentIndex = componentList.findIndex((component) => {
      return component.id === id;
    });
    setTextBoxesData(textBoxesContent);
    setContentIndex(textBoxesContentIndex);
  }, [componentList, id]);

  const handleSubmitText = useCallback(
    (
      event: React.FormEvent<HTMLFormElement>,
      index: number,
      keyName: TextBoxesData["main"] | TextBoxesData["sub"] | TextBoxesData["description"],
    ) => {
      event.preventDefault();
      if (contentIndex === undefined) return;
      const form = event.target as Element;
      const copyTextBoxesDataArr = JSON.parse(JSON.stringify(textBoxesData)) as TextBoxesContent;
      if (keyName === "main") {
        copyTextBoxesDataArr.data[index].main = form.querySelector("input")?.value ?? "";
      } else if (keyName === "sub") {
        copyTextBoxesDataArr.data[index].sub = form.querySelector("input")?.value ?? "";
      } else if (keyName === "description") {
        copyTextBoxesDataArr.data[index].description = form.querySelector("input")?.value ?? "";
      }
      const copyComponentList = JSON.parse(JSON.stringify(componentList));
      copyComponentList[contentIndex].content.data = copyTextBoxesDataArr.data;
      setTextBoxesData(copyTextBoxesDataArr);
      setComponentList(copyComponentList);
    },
    [textBoxesData, componentList, setComponentList, contentIndex],
  );

  const handleDeleteTextBox = useCallback(
    (index: number) => {
      if (contentIndex === undefined) return;
      if (!textBoxesData?.data) return;
      const copyComponentList = JSON.parse(JSON.stringify(componentList));

      // NOTE kjw 텍스트박스가 하나일때 콘텐츠전체삭제
      if (textBoxesData?.data.length <= 1) {
        copyComponentList.splice(contentIndex, 1);
        setComponentList(copyComponentList);
        return;
      }

      // NOTE kjw 텍스트박스가 여러개일때 해당 콘텐츠만 삭제
      const copyTextBoxesDataArr = JSON.parse(JSON.stringify(textBoxesData)) as TextBoxesContent;
      copyTextBoxesDataArr.data.splice(index, 1);
      copyComponentList[contentIndex].content.data = copyTextBoxesDataArr.data;
      setTextBoxesData(copyTextBoxesDataArr);
      setComponentList(copyComponentList);
    },
    [textBoxesData, componentList, contentIndex, setComponentList],
  );

  const addTextBox = useCallback(() => {
    addComponentToExistingComponentById("textBoxes", id);
  }, [addComponentToExistingComponentById, id]);

  return (
    <TextBoxesWrapper>
      {textBoxesData?.data.map((textBox, index) => {
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
      })}
      <button onClick={addTextBox}>+</button>
    </TextBoxesWrapper>
  );
};

export default TextBoxesCreator;
