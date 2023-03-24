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
import {
  ActivityGuideCharacterContentData,
  IconTextContentData,
} from "chai-ui-v2";
import {
  CornerGuideWrapper,
  TextBubbleWrap,
} from "../contents/ActivityGuideCharacterCreator";
import TextEditorViewer from "../molecules/TextEditorViewer";
import ImageThumb from "../atoms/ImageThumb";
import UrlInputWrapper from "../molecules/UrlInputWrapper";

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
  const {
    thisSlide,
    updateIconText,
    updateRolePlayingContents,
    updateGuideContent,
  } = useRolePlaying(slideId);

  const iconTextData = thisSlide.iconText;
  const guideContent = thisSlide.guideContent;
  const rolePlayingContents = thisSlide.rolePlayingContents;

  const [iconText, setIconText] = useState<string>(iconTextData.data.text);

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

  // guideContent
  const [guideText, setGuideText] = useState<string>(guideContent.data.text);
  const handleEndEditGuideText = () => {
    const updatedGuideContent: ActivityGuideCharacterContentData = {
      ...guideContent,
      data: {
        ...guideContent.data,
        text: guideText,
      },
    };
    updateGuideContent(updatedGuideContent);
  };

  const handleSubmitGuideCharacterUrl = (url: string) => {
    const updatedGuideContent: ActivityGuideCharacterContentData = {
      ...guideContent,
      data: {
        ...guideContent.data,
        character: {
          ...guideContent.data.character,
          src: url,
        },
      },
    };
    updateGuideContent(updatedGuideContent);
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
            <CornerGuideWrapper>
              <TextBubbleWrap onClick={(e) => setFocusedId(e, guideContent.id)}>
                <TextEditorViewer
                  isFocused={focusedId === guideContent.id}
                  text={guideText}
                  setText={setGuideText}
                  handleSubmitTextOnBlur={handleEndEditGuideText}
                />
              </TextBubbleWrap>
              {guideContent.data.character.src ? (
                <img src={guideContent.data.character.src} alt="" />
              ) : (
                <ImageThumb />
              )}
              <UrlInputWrapper
                typeText="이미지"
                onSubmit={handleSubmitGuideCharacterUrl}
                defaultText={guideContent.data.character.src}
              />
            </CornerGuideWrapper>
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
