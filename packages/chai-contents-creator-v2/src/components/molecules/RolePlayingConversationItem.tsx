import React from "react";
import ImgProfileDefault from "chai-ui-v2/dist/assets/images/img/img_profile_default.png";
import styled from "@emotion/styled";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import CharacterProfile from "../atoms/CharacterProfile";
import { css, SerializedStyles } from "@emotion/react";
import UrlInputWrapper from "./UrlInputWrapper";
import { InputBgNone } from "../atoms/InputBgNone";
import { colorPalette, RolePlayingCharacter } from "chai-ui-v2";
import { ConversationDirection } from "../templates/CreateTemplateRolePlaying";

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
  padding: 16px;
  border-radius: 8px;
  flex-grow: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface CharacterAndContentProps {
  reverse?: boolean;
}
const CharacterAndContent = styled.div<CharacterAndContentProps>`
  display: flex;
  ${({ reverse }) =>
    reverse ? `flex-direction: row-reverse;` : `flex-direction: row;`}
  justify-content: space-between;
  flex-grow: 1;
`;

const DeleteButtonContainer = styled.div`
  position: relative;
`;

const characterContainerCss = css`
  margin: 0;
`;

const InputText = styled(InputBgNone)`
  font-size: 20px;
  line-height: 32px;
`;

const InputPronunciation = styled(InputBgNone)`
  font-size: 12px;
  line-height: 19px;
  color: ${colorPalette.gray800};
`;

const InputMeaning = styled(InputPronunciation)``;

const urlInputWrapperCss = css`
  margin-top: 0;
`;

interface RolePlayingConversationItemProps {
  character: RolePlayingCharacter;
  onDeleteConversationItem: () => void;
  characterContainerCss?: SerializedStyles;
  displayDirection?: ConversationDirection; // "left" | "right"
  onSubmitAudioUrl: (url: string) => void;
  onSubmitText: (text: string) => void;
  onSubmitPronunciation: (text: string) => void;
  onSubmitMeaning: (text: string) => void;
}
const RolePlayingConversationItem = ({
  character,
  onDeleteConversationItem,
  displayDirection = ConversationDirection.LEFT,
  onSubmitAudioUrl,
  onSubmitText,
  onSubmitPronunciation,
  onSubmitMeaning,
}: RolePlayingConversationItemProps) => {
  const handleOnBlurText = (e: React.FocusEvent<HTMLInputElement>) => {
    onSubmitText(e.target.value);
  };
  const handleOnBlurPronunciation = (e: React.FocusEvent<HTMLInputElement>) => {
    onSubmitPronunciation(e.target.value);
  };
  const handleOnBlurMeaning = (e: React.FocusEvent<HTMLInputElement>) => {
    onSubmitMeaning(e.target.value);
  };

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
            onSubmit={onSubmitAudioUrl}
          />
          <InputText
            type="text"
            placeholder="한문을 입력해주세요"
            onBlur={handleOnBlurText}
          />
          <InputPronunciation
            type="text"
            placeholder="한어병음을 입력해주세요"
            onBlur={handleOnBlurPronunciation}
          />
          <InputMeaning
            type="text"
            placeholder="해석을 입력해주세요"
            onBlur={handleOnBlurMeaning}
          />
        </ConversationItem>
      </CharacterAndContent>
      <DeleteButtonContainer>
        <ObjectDeleteButton onClick={onDeleteConversationItem} />
      </DeleteButtonContainer>
    </ItemWrap>
  );
};

export default RolePlayingConversationItem;
