import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import {
  getRolePlayingCharacterDefaultById,
  getRolePlayingContentItemDefaultById,
} from "../../data/appData";
import {
  ActivityGuideCharacterContentData,
  IconTextContentData,
  RolePlayingCharacter,
} from "chai-ui-v2";
import {
  CornerGuideWrapper,
  TextBubbleWrap,
} from "../contents/ActivityGuideCharacterCreator";
import TextEditorViewer from "../molecules/TextEditorViewer";
import ImageThumb from "../atoms/ImageThumb";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import SelectBox from "../atoms/SelectBox";

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

const ConversationButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

type RolePlayingCharacterWithColor = RolePlayingCharacter & {
  color: string;
};

/**
 * 화자 1 - #FFF3EA
 * 화자 2 - #EFF1F5
 * 화자 3 - #FFFCDF
 * 화자 4 - #EEF6E7
 * 화자 5 - #EDF8FF
 */

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
    updateCharacters,
  } = useRolePlaying(slideId);

  const iconTextData = thisSlide.iconText;
  const guideContent = thisSlide.guideContent;
  const rolePlayingContents = thisSlide.rolePlayingContents;
  const characterList = thisSlide.characters;

  const getCharacterColor = useCallback((index: number) => {
    const colorList = ["#FFF3EA", "#EFF1F5", "#FFFCDF", "#EEF6E7", "#EDF8FF"];
    return colorList[index];
  }, []);

  const initialCharacterWithColorList = useMemo(
    () =>
      characterList.map((item, index) => {
        return {
          ...item,
          color: getCharacterColor(index),
        };
      }),
    [characterList, getCharacterColor],
  );

  const [characterWithColorList, setCharacterWithColorList] = useState<
    RolePlayingCharacterWithColor[]
  >(initialCharacterWithColorList);

  useEffect(() => {
    console.log("characterWithColorList", characterWithColorList);
  }, [characterWithColorList]);

  const updateCharacterWithColorList = useCallback(
    (newCharacterWithColorList: RolePlayingCharacterWithColor[]) => {
      setCharacterWithColorList(newCharacterWithColorList);
      const newCharacterList = newCharacterWithColorList.map((item) => {
        return {
          id: item.id,
          name: item.name,
          src: item.src,
        };
      });
      updateCharacters(newCharacterList);
    },
    [updateCharacters],
  );

  const [iconText, setIconText] = useState<string>(iconTextData.data.text);

  // iconText
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

  // characterList
  const addCharacter = () => {
    const newCharacter = getRolePlayingCharacterDefaultById(uuidV4());
    const newCharacterWithColor = {
      ...newCharacter,
      color: getCharacterColor(characterWithColorList.length),
    };
    updateCharacterWithColorList([
      ...characterWithColorList,
      newCharacterWithColor,
    ]);
  };

  const deleteCharacter = (index: number) => {
    const newCharacterWithColorList = characterWithColorList.filter(
      (item, itemIndex) => {
        return itemIndex !== index;
      },
    );
    updateCharacterWithColorList(newCharacterWithColorList);
  };

  const changeCharacterName = (index: number) => (name: string) => {
    const newCharacterList = characterList.map((item, itemIndex) => {
      if (itemIndex === index) {
        return {
          ...item,
          name,
        };
      }
      return item;
    });
    updateCharacters(newCharacterList);
  };

  const changeCharacterImage = (index: number) => (url: string) => {
    const newCharacterList = characterList.map((item, itemIndex) => {
      if (itemIndex === index) {
        return {
          ...item,
          src: url,
        };
      }
      return item;
    });
    updateCharacters(newCharacterList);
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

  const [conversationDirection, setConversationDirection] =
    useState<string>("");

  const directionList = ["좌측", "우측"];

  const [selectedCharacter, setSelectedCharacter] = useState<string>("");

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
              {characterList.map((character, index) => {
                return (
                  <CharacterCreator
                    key={character.id}
                    wrapperCss={characterWrapCss}
                    characterUrl={character.src}
                    onImageUrlSubmit={changeCharacterImage(index)}
                    onSaveCharacterNameInput={changeCharacterName(index)}
                    onDeleteCharacter={() => deleteCharacter(index)}
                    urlInputWrapperCss={urlInputWrapperCss}
                    characterName={character.name}
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
            <ConversationButtonContainer>
              <AddButton onClick={() => {}}>대화 추가</AddButton>
              <SelectBox
                value={conversationDirection}
                onChange={setConversationDirection}
                optionList={directionList}
                label="대화 위치"
              />
              <SelectBox
                value={selectedCharacter}
                onChange={setSelectedCharacter}
                optionList={characterList.map((character) => {
                  return character.name;
                })}
                label="화자 선택"
              />
            </ConversationButtonContainer>
          </DashBoxAreaWrapper>
        </CreateEditMain>
      </CreateEditMainWrap37>
    </>
  );
};

export default CreateTemplateRolePlaying;
