import React, { useState } from "react";
import ImgProfileDefault from "chai-ui-v2/dist/assets/images/img/img_profile_default.png";
import styled from "@emotion/styled";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import CharacterProfile from "../atoms/CharacterProfile";
import { css, SerializedStyles } from "@emotion/react";
import UrlInputWrapper from "./UrlInputWrapper";
import { ID, RolePlayingCharacter, RolePlayingContentItem } from "chai-ui-v2";
import { ConversationDirection } from "../templates/CreateTemplateRolePlaying";
import TextEditorViewer from "./TextEditorViewer";

const ItemWrap = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

interface ConversationItemProps {
  backgroundColor: string;
}
const ConversationItem = styled.div<ConversationItemProps>`
  padding: 2vmin;
  border-radius: 0.5vmin;
  flex-grow: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  gap: 1vmin;
`;

interface CharacterAndContentProps {
  reverse?: boolean;
}
const CharacterAndContent = styled.div<CharacterAndContentProps>`
  display: flex;
  gap: 3vmin;
  ${({ reverse }) =>
    reverse ? `flex-direction: row-reverse;` : `flex-direction: row;`}
  justify-content: space-between;
  flex-grow: 1;
  .text-tit {
    margin-top: 0;
  }
`;

const DeleteButtonContainer = styled.div`
  position: relative;
`;

const characterContainerCss = css`
  margin: 0;
`;

const urlInputWrapperCss = css`
  margin-top: 0;
`;

const EditorWrapper = styled.div`
  width: 100%;
`;

interface RolePlayingConversationItemProps {
  character: RolePlayingCharacter;
  rolePlayingConversationItem: RolePlayingContentItem;
  onDeleteConversationItem: () => void;
  characterContainerCss?: SerializedStyles;
  displayDirection?: ConversationDirection; // "left" | "right"
  onSubmitAudioUrl: (url: string) => void;
  onSubmitText: (text: string) => void;
  onSubmitPronunciation: (text: string) => void;
  onSubmitMeaning: (text: string) => void;
  setFocusedId: (e: React.MouseEvent<Element, MouseEvent>, id: ID) => void;
  focusedId: ID | undefined;
}
const RolePlayingConversationItem = ({
  character,
  rolePlayingConversationItem,
  onDeleteConversationItem,
  displayDirection = ConversationDirection.LEFT,
  onSubmitAudioUrl,
  onSubmitText,
  onSubmitPronunciation,
  onSubmitMeaning,
  setFocusedId,
  focusedId,
}: RolePlayingConversationItemProps) => {
  const [chineseText, setChineseText] = useState<string>(
    rolePlayingConversationItem.text || "",
  );
  const [pronunciationText, setPronunciationText] = useState<string>(
    rolePlayingConversationItem.pronunciation || "",
  );
  const [meaningText, setMeaningText] = useState<string>(
    rolePlayingConversationItem.meaning || "",
  );

  const handleOnSubmitText = () => {
    onSubmitText(chineseText);
  };
  const handleOnSubmitPronunciation = () => {
    onSubmitPronunciation(pronunciationText);
  };
  const handleOnSubmitMeaning = () => {
    onSubmitMeaning(meaningText);
  };

  const editorIdsRef = React.useRef({
    textEditorId: `${rolePlayingConversationItem.id}-text-editor`,
    pronunciationEditorId: `${rolePlayingConversationItem.id}-pronunciation-editor`,
    meaningEditorId: `${rolePlayingConversationItem.id}-meaning-editor`,
  });

  return (
    <ItemWrap>
      <CharacterAndContent
        reverse={displayDirection === ConversationDirection.RIGHT}
      >
        <CharacterProfile
          characterUrl={character.src || ImgProfileDefault}
          characterName={character.name}
          onSaveCharacterNameInput={() => {}}
          characterContainerCss={characterContainerCss}
          readOnly
        />
        <ConversationItem backgroundColor={character.backgroundColor ?? ""}>
          <UrlInputWrapper
            typeText="오디오"
            urlInputWrapperCss={urlInputWrapperCss}
            defaultText={rolePlayingConversationItem.audio?.src ?? ""}
            onSubmit={onSubmitAudioUrl}
          />
          <EditorWrapper
            onClick={(e) => setFocusedId(e, editorIdsRef.current.textEditorId)}
          >
            <TextEditorViewer
              isFocused={focusedId === editorIdsRef.current.textEditorId}
              defaultText="한문을 입력해주세요"
              text={chineseText}
              setText={setChineseText}
              handleSubmitTextOnBlur={handleOnSubmitText}
            />
          </EditorWrapper>
          <EditorWrapper
            onClick={(e) =>
              setFocusedId(e, editorIdsRef.current.pronunciationEditorId)
            }
          >
            <TextEditorViewer
              isFocused={
                focusedId === editorIdsRef.current.pronunciationEditorId
              }
              text={pronunciationText}
              defaultText="한어병음을 입력해주세요"
              setText={setPronunciationText}
              handleSubmitTextOnBlur={handleOnSubmitPronunciation}
            />
          </EditorWrapper>
          <EditorWrapper
            onClick={(e) =>
              setFocusedId(e, editorIdsRef.current.meaningEditorId)
            }
          >
            <TextEditorViewer
              isFocused={focusedId === editorIdsRef.current.meaningEditorId}
              defaultText="해석을 입력해주세요"
              text={meaningText}
              setText={setMeaningText}
              handleSubmitTextOnBlur={handleOnSubmitMeaning}
            />
          </EditorWrapper>
        </ConversationItem>
      </CharacterAndContent>
      <DeleteButtonContainer>
        <ObjectDeleteButton onClick={onDeleteConversationItem} />
      </DeleteButtonContainer>
    </ItemWrap>
  );
};

export default RolePlayingConversationItem;
