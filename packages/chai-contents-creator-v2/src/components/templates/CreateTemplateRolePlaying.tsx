import React, { useState } from "react";
import useRolePlaying from "../../hooks/useRolePlaying";
import { CreateEditMain, CreateEditMainWrap } from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import { DashBoxAreaWrapper } from "../atoms/DashBoxArea";
import PageHeader from "../molecules/PageHeader";
import { CreateEditMainWrap37 } from "./CreateTemplateH37";
import IconText from "../molecules/IconText";
import AddButton from "../atoms/AddButton";
import styled from "@emotion/styled";

const ComponentWrapper = styled.div`
  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

const CreateTemplateRolePlaying = ({
  templateType,
  addComponentMap,
  slideId,
  slides,
  returnUseComponent,
  ...pageHeaderProps
}: PageCommonProps) => {
  const { thisSlide, updateIconText, updateRolePlayingContents } =
    useRolePlaying(slideId);
  const [iconText, setIconText] = useState<string>("");

  const iconTextData = thisSlide.iconText;

  const { focusedId, setFocusedId } = returnUseComponent;

  const handleEndEditText = () => {
    const updatedIconText = thisSlide.iconText;
    updateIconText(updatedIconText);
  };

  return (
    <>
      <PageHeader slideId={slideId} slides={slides} {...pageHeaderProps} />
      <CreateEditMainWrap>
        <CreateEditMain>
          <DashBoxAreaWrapper>
            <ComponentWrapper onClick={(e) => setFocusedId(e, iconTextData.id)}>
              <IconText
                text={iconText}
                setText={setIconText}
                isFocused={focusedId === iconTextData.id}
                handleEndEditText={handleEndEditText}
              />
            </ComponentWrapper>
            {/* 화자 추가 */}
            <ComponentWrapper>
              <AddButton>화자 추가</AddButton>
              {/* TODO: TemplateQuizWordsInOrder에서 가져오기 */}
            </ComponentWrapper>
          </DashBoxAreaWrapper>
        </CreateEditMain>
      </CreateEditMainWrap>
      <CreateEditMainWrap37>
        <CreateEditMain>
          <DashBoxAreaWrapper>
            <div>aa</div>
          </DashBoxAreaWrapper>
        </CreateEditMain>
        <CreateEditMain>
          <DashBoxAreaWrapper>
            <div>bb</div>
          </DashBoxAreaWrapper>
        </CreateEditMain>
      </CreateEditMainWrap37>
    </>
  );
};

export default CreateTemplateRolePlaying;
