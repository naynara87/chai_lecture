import { TextBoxesAdapterProps } from "../TextBoxesAdapter";
import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { changePXtoVH, changePXtoVW } from "../../../utils/styles";
import { colorPalette } from "../../../styles/colorPalette";
import HtmlContentComponent from "../../molecules/HtmlContentComponent";
import { TextBoxesContent, TextBoxesData } from "../../../types/templateContents";
import { Content } from "../../../types/appData";
import { CreatorContent } from "../../../hooks/contentCreate/useCreateContent";

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

  useEffect(() => {
    const textBoxesContent = componentList.find((component) => {
      return component.id === id;
    })?.content as TextBoxesContent;
    setTextBoxesData(textBoxesContent);
  }, [componentList, id]);

  const handleSubmitText = useCallback(
    (
      event: React.FormEvent<HTMLFormElement>,
      index: number,
      keyName: TextBoxesData["main"] | TextBoxesData["sub"] | TextBoxesData["description"],
    ) => {
      event.preventDefault();
      const form = event.target as Element;
      const copyTextBoxesDataArr = JSON.parse(JSON.stringify(textBoxesData));
      if (keyName === "main") {
        copyTextBoxesDataArr.data[index].main =
          form.querySelector("input")?.value + index.toString() ?? "";
      } else if (keyName === "sub") {
        copyTextBoxesDataArr.data[index].sub = form.querySelector("input")?.value ?? "";
      } else if (keyName === "description") {
        copyTextBoxesDataArr.data[index].description = form.querySelector("input")?.value ?? "";
      }
      const copyComponentList = JSON.parse(JSON.stringify(componentList));
      copyComponentList[0].content.data = copyTextBoxesDataArr.data;
      setTextBoxesData(copyTextBoxesDataArr);
      setComponentList(copyComponentList);
      // setComponentList();
    },
    [textBoxesData, componentList, setComponentList],
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
              {textBox.main.length > 0 ? (
                <HtmlContentComponent html={textBox.main} />
              ) : (
                <form
                  onSubmit={(event) => {
                    handleSubmitText(event, index, "main");
                  }}
                >
                  <input type="text" />
                </form>
              )}
            </TextCard>
            <SubText>
              {textBox.sub && textBox.sub.length > 0 ? (
                <HtmlContentComponent html={textBox.sub ?? ""} customCss={subTextCss} />
              ) : (
                <form
                  onSubmit={(event) => {
                    handleSubmitText(event, index, "sub");
                  }}
                >
                  <input type="text" />
                </form>
              )}
            </SubText>
            <MeaningText>
              {textBox.description && textBox.description.length > 0 ? (
                <HtmlContentComponent html={textBox.description ?? ""} />
              ) : (
                <form
                  onSubmit={(event) => {
                    handleSubmitText(event, index, "description");
                  }}
                >
                  <input type="text" />
                </form>
              )}
            </MeaningText>
          </TextCardGrp>
        );
      })}
      <button onClick={addTextBox}>+</button>
    </TextBoxesWrapper>
  );
};

export default TextBoxesCreator;
