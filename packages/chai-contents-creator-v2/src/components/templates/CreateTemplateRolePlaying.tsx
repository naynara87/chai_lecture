import React, { useCallback, useMemo, useState } from "react";
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
  ID,
  RolePlayingCharacter,
  RoleplayingContentData,
} from "chai-ui-v2";
import {
  CornerGuideWrapper,
  TextBubbleWrap,
} from "../contents/ActivityGuideCharacterCreator";
import TextEditorViewer from "../molecules/TextEditorViewer";
import ImageThumb from "../atoms/ImageThumb";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import SelectBox from "../atoms/SelectBox";
import RolePlayingConversationItem from "../molecules/RolePlayingConversationItem";

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

const RolePlayingConversationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const characterBackgroundColorList = [
  "#FFF3EA", // 화자 1의 배경색 red
  "#EFF1F5", // 화자 2의 배경색 gray
  "#FFFCDF", // 화자 3의 배경색 yellow
  "#EEF6E7", // 화자 4의 배경색 green
  "#EDF8FF", // 화자 5의 배경색 blue
];

export enum ConversationDirection {
  LEFT = "left",
  RIGHT = "right",
}

const conversationDirectionEngToKor = Object.freeze({
  [ConversationDirection.LEFT]: "좌측",
  [ConversationDirection.RIGHT]: "우측",
});

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
  const rolePlayingContentsData =
    thisSlide.rolePlayingContents &&
    (thisSlide.rolePlayingContents?.data as RoleplayingContentData["data"]);
  const characterList = thisSlide.characters;

  const characterNameList = useMemo(() => {
    if (!characterList) return;
    return characterList.map((item) => {
      return item.name;
    });
  }, [characterList]);

  const [iconText, setIconText] = useState<string>(
    iconTextData ? iconTextData.data?.text : "",
  );

  /* iconText */
  const handleEndEditText = () => {
    if (!thisSlide.iconText) return;
    const updatedIconText: IconTextContentData = {
      ...thisSlide.iconText,
      data: {
        ...thisSlide.iconText.data,
        text: iconText,
      },
    };
    updateIconText(updatedIconText);
  };

  /* characterList */
  const addCharacter = (characterIndex: number) => {
    if (!characterList) return;
    const newCharacter = getRolePlayingCharacterDefaultById(
      uuidV4(),
      characterBackgroundColorList[characterIndex],
    );
    updateCharacters([...characterList, newCharacter]);
  };

  const deleteCharacter = (index: number) => {
    if (!characterList) return;
    const newCharacterWithColorList = characterList.filter(
      (item, itemIndex) => {
        return itemIndex !== index;
      },
    );
    updateCharacters(newCharacterWithColorList);
  };

  const changeCharacterName = (index: number) => (name: string) => {
    if (!characterList) return;
    const isDuplicated = characterList.some((item, itemIndex) => {
      return itemIndex !== index && item.name === name;
    });
    if (isDuplicated) {
      alert("이름이 중복됩니다.");
      return;
    }
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
    if (!characterList) return;
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

  /* guideContent */
  const [guideText, setGuideText] = useState<string>(
    guideContent ? guideContent.data.text : "",
  );
  const handleEndEditGuideText = () => {
    if (!guideContent) return;
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
    if (!guideContent) return;
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

  const [conversationDirection, setConversationDirection] = useState<string>(
    ConversationDirection.LEFT,
  );

  const directionList = useMemo(
    () => [
      conversationDirectionEngToKor[ConversationDirection.LEFT],
      conversationDirectionEngToKor[ConversationDirection.RIGHT],
    ],
    [],
  );

  const setConversationDirectionKorToEng = (directionKor: string) => {
    const directionEng = Object.keys(conversationDirectionEngToKor).find(
      (key) => {
        return (
          conversationDirectionEngToKor[key as ConversationDirection] ===
          directionKor
        );
      },
    );
    setConversationDirection(directionEng || ConversationDirection.LEFT);
  };

  const [selectedCharacter, setSelectedCharacter] =
    useState<RolePlayingCharacter>();

  const findCharacterByName = useCallback(
    (characterName: string) => {
      // 캐릭터 이름 중복을 허용하면 안되는 이유
      if (!characterList) return;
      return characterList.find((item) => {
        return item.name === characterName;
      });
    },
    [characterList],
  );

  const findCharacterById = useCallback(
    (characterId: ID) => {
      if (!characterList) return;
      return characterList.find((item) => {
        return item.id === characterId;
      });
    },
    [characterList],
  );

  const setSelectedCharacterByCharacterName = useCallback(
    (characterName: string) => {
      const selectedCharacter = findCharacterByName(characterName);
      setSelectedCharacter(selectedCharacter);
    },
    [findCharacterByName],
  );

  /* rolePlayingContents */
  // add rolePlayingContents
  const addRolePlayingContents = useCallback(
    (
      selectedCharacter: RolePlayingCharacter | undefined,
      conversationDirection: ConversationDirection,
    ) => {
      if (!rolePlayingContentsData) return;
      if (!selectedCharacter) {
        alert("화자를 선택해주세요.");
        return;
      }

      const newRolePlayingContents = getRolePlayingContentItemDefaultById(
        uuidV4(),
        selectedCharacter.id,
        conversationDirection,
      );
      const updatedRolePlayingContents = [
        ...rolePlayingContentsData,
        newRolePlayingContents,
      ];

      updateRolePlayingContents(updatedRolePlayingContents);
    },
    [rolePlayingContentsData, updateRolePlayingContents],
  );

  // delete rolePlayingContents
  const deleteRolePlayingContents = useCallback(
    (index: number) => {
      if (!rolePlayingContentsData) return;
      const newRolePlayingContents = rolePlayingContentsData.filter(
        (item, itemIndex) => {
          return itemIndex !== index;
        },
      );
      updateRolePlayingContents(newRolePlayingContents);
    },
    [rolePlayingContentsData, updateRolePlayingContents],
  );

  // update rolePlayingContents audio url by index
  const updateRolePlayingContentsAudioUrl = useCallback(
    (index: number) => (url: string) => {
      if (!rolePlayingContentsData) return;
      const newRolePlayingContents = rolePlayingContentsData.map(
        (item, itemIndex) => {
          if (itemIndex === index) {
            return {
              ...item,
              audio: {
                ...item.audio,
                src: url,
              },
            };
          }
          return item;
        },
      );
      updateRolePlayingContents(newRolePlayingContents);
    },
    [rolePlayingContentsData, updateRolePlayingContents],
  );

  // update rolePlayingContents text by index
  const updateRolePlayingContentsText = useCallback(
    (index: number) => (text: string) => {
      if (!rolePlayingContentsData) return;
      const newRolePlayingContents = rolePlayingContentsData.map(
        (item, itemIndex) => {
          if (itemIndex === index) {
            return {
              ...item,
              text,
            };
          }
          return item;
        },
      );
      updateRolePlayingContents(newRolePlayingContents);
    },
    [rolePlayingContentsData, updateRolePlayingContents],
  );

  // update rolePlayingContents pronunciation by index
  const updateRolePlayingContentsPronunciation = useCallback(
    (index: number) => (pronunciation: string) => {
      if (!rolePlayingContentsData) return;
      const newRolePlayingContents = rolePlayingContentsData.map(
        (item, itemIndex) => {
          if (itemIndex === index) {
            return {
              ...item,
              pronunciation,
            };
          }
          return item;
        },
      );
      updateRolePlayingContents(newRolePlayingContents);
    },
    [rolePlayingContentsData, updateRolePlayingContents],
  );

  // update rolePlayingContents meaning by index
  const updateRolePlayingContentsMeaning = useCallback(
    (index: number) => (meaning: string) => {
      if (!rolePlayingContentsData) return;
      const newRolePlayingContents = rolePlayingContentsData.map(
        (item, itemIndex) => {
          if (itemIndex === index) {
            return {
              ...item,
              meaning,
            };
          }
          return item;
        },
      );
      updateRolePlayingContents(newRolePlayingContents);
    },
    [rolePlayingContentsData, updateRolePlayingContents],
  );

  return (
    <>
      <PageHeader slideId={slideId} slides={slides} {...pageHeaderProps} />
      <CreateEditMainWrap>
        <CreateEditMain>
          <DashBoxAreaWrapper>
            <ComponentWrapper
              onClick={(e) => setFocusedId(e, iconTextData && iconTextData.id)}
            >
              <IconText
                text={iconText}
                setText={setIconText}
                isFocused={iconTextData ? focusedId === iconTextData.id : false}
                handleEndEditText={handleEndEditText}
              />
            </ComponentWrapper>
            <ComponentWrapper>
              <AddButton onClick={() => addCharacter(characterList.length)}>
                화자 추가
              </AddButton>
              {characterList &&
                characterList.map((character, index) => {
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
              <TextBubbleWrap
                onClick={(e) =>
                  setFocusedId(e, guideContent ? guideContent.id : -1)
                }
              >
                <TextEditorViewer
                  isFocused={
                    guideContent ? focusedId === guideContent.id : false
                  }
                  text={guideText}
                  setText={setGuideText}
                  handleSubmitTextOnBlur={handleEndEditGuideText}
                />
              </TextBubbleWrap>
              {guideContent && guideContent.data.character.src ? (
                <img src={guideContent.data.character.src} alt="" />
              ) : (
                <ImageThumb />
              )}
              <UrlInputWrapper
                typeText="이미지"
                onSubmit={handleSubmitGuideCharacterUrl}
                defaultText={
                  guideContent ? guideContent.data.character.src : ""
                }
              />
            </CornerGuideWrapper>
          </DashBoxAreaWrapper>
        </CreateEditMain>
        <CreateEditMain>
          <DashBoxAreaWrapper>
            <ConversationButtonContainer>
              <AddButton
                onClick={() => {
                  addRolePlayingContents(
                    selectedCharacter,
                    conversationDirection as ConversationDirection,
                  );
                }}
              >
                대화 추가
              </AddButton>
              <SelectBox
                value={
                  conversationDirectionEngToKor[
                    conversationDirection as ConversationDirection
                  ]
                }
                onChange={setConversationDirectionKorToEng}
                optionList={directionList}
                label="대화 위치"
              />
              <SelectBox
                value={selectedCharacter?.name ?? ""}
                onChange={setSelectedCharacterByCharacterName}
                optionList={characterNameList ?? []}
                label="화자 선택"
              />
            </ConversationButtonContainer>
            <RolePlayingConversationList>
              {rolePlayingContentsData &&
                rolePlayingContentsData.map(
                  (rolePlayingConversationItem, index) => {
                    return (
                      <RolePlayingConversationItem
                        key={rolePlayingConversationItem.id}
                        character={
                          findCharacterById(
                            rolePlayingConversationItem.characterId,
                          ) as RolePlayingCharacter
                        }
                        onDeleteConversationItem={() =>
                          deleteRolePlayingContents(index)
                        }
                        displayDirection={
                          rolePlayingConversationItem.position as ConversationDirection
                        }
                        onSubmitAudioUrl={updateRolePlayingContentsAudioUrl(
                          index,
                        )}
                        onSubmitText={updateRolePlayingContentsText(index)}
                        onSubmitPronunciation={updateRolePlayingContentsPronunciation(
                          index,
                        )}
                        onSubmitMeaning={updateRolePlayingContentsMeaning(
                          index,
                        )}
                      />
                    );
                  },
                )}
            </RolePlayingConversationList>
          </DashBoxAreaWrapper>
        </CreateEditMain>
      </CreateEditMainWrap37>
    </>
  );
};

export default CreateTemplateRolePlaying;
