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
import CharacterCreator from "../molecules/CharacterCreator";
import { css } from "@emotion/react";
import { v4 as uuidV4 } from "uuid";
import { getRolePlayingContentItemDefaultById } from "../../data/appData";
import { IconTextContentData } from "chai-ui-v2";

const ComponentWrapper = styled.div`
  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

const characterWrapCss = css`
  margin-top: 0 !important;
  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

const urlInputWrapperCss = css`
  margin-top: 0px;
`;

const CreateTemplateRolePlaying = ({
  templateType,
  addComponentMap,
  slideId,
  slides,
  returnUseComponent,
  ...pageHeaderProps
}: PageCommonProps) => {
  const { focusedId, setFocusedId } = returnUseComponent;
  const { thisSlide, updateIconText, updateRolePlayingContents } =
    useRolePlaying(slideId);
  const [iconText, setIconText] = useState<string>("");

  const iconTextData = thisSlide.iconText;
  const rolePlayingContents = thisSlide.rolePlayingContents;

  const handleEndEditText = () => {
    const updatedIconText: IconTextContentData = {
      ...thisSlide.iconText,
      data: {
        ...thisSlide.iconText.data,
        text: iconText,
      },
    };
    updateIconText(updatedIconText);
  };

  const addCharacter = () => {
    const newCharacter = getRolePlayingContentItemDefaultById(uuidV4());
    updateRolePlayingContents([...rolePlayingContents.data, newCharacter]);
  };

  const deleteCharacter = (index: number) => {
    console.log("deleteCharacter index", index);
    const newCharacterList = rolePlayingContents.data.filter(
      (item, itemIndex) => {
        console.log("itemIndex", itemIndex);
        return itemIndex !== index;
      },
    );
    updateRolePlayingContents(newCharacterList);
  };

  const changeCharacterName = (index: number) => (name: string) => {
    const newCharacterList = rolePlayingContents.data.map((item, itemIndex) => {
      if (itemIndex === index) {
        return {
          ...item,
          character: {
            ...item.character,
            name,
          },
        };
      }
      return item;
    });
    updateRolePlayingContents(newCharacterList);
  };

  const changeCharacterImage = (index: number) => (url: string) => {
    const newCharacterList = rolePlayingContents.data.map((item, itemIndex) => {
      if (itemIndex === index) {
        return {
          ...item,
          character: {
            ...item.character,
            src: url,
          },
        };
      }
      return item;
    });
    updateRolePlayingContents(newCharacterList);
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
            <ComponentWrapper>
              <AddButton onClick={addCharacter}>화자 추가</AddButton>
              {rolePlayingContents.data.map((characterItem, index) => {
                return (
                  <CharacterCreator
                    key={characterItem.id}
                    wrapperCss={characterWrapCss}
                    characterUrl={characterItem.character.src}
                    onImageUrlSubmit={changeCharacterImage(index)}
                    onSaveCharacterNameInput={changeCharacterName(index)}
                    onDeleteCharacter={() => deleteCharacter(index)}
                    urlInputWrapperCss={urlInputWrapperCss}
                    characterName={characterItem.character.name}
                  />
                );
              })}
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
