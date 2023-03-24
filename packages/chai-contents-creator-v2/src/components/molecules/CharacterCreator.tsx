import styled from "@emotion/styled";
import React from "react";
import UrlInputWrapper, { UrlInputWrapperProps } from "./UrlInputWrapper";
import ImgProfileDefault from "chai-ui-v2/dist/assets/images/img/img_profile_default.png";
import { css, SerializedStyles } from "@emotion/react";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";

interface CharacterWrapProps {
  wrapperCss?: SerializedStyles;
}
const CharacterWrap = styled.div<CharacterWrapProps>`
  display: flex;
  ${({ wrapperCss }) => wrapperCss}
`;

const CharacterNameInput = styled.input`
  margin-top: 6px;
  background: none !important;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  width: 63px;
`;

const ImgWrap = styled.div`
  width: 36px;
  height: 36px;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
`;

const deleteButtonCss = css`
  position: absolute;
  top: 0;
  right: 10px;
`;

const InputContainer = styled.div`
  position: relative;
`;

interface CharacterCreatorProps
  extends CharacterWrapProps,
    UrlInputWrapperProps {
  characterName?: string;
  characterUrl: string;
  onImageUrlSubmit: (url: string) => void;
  onSaveCharacterNameInput: (name: string) => void;
  onDeleteCharacter?: () => void;
}
const CharacterCreator = ({
  characterName,
  characterUrl,
  onImageUrlSubmit,
  onSaveCharacterNameInput,
  onDeleteCharacter,
  wrapperCss,
  urlInputWrapperCss,
}: CharacterCreatorProps) => {
  const handleCharacterNameInputBlur = (
    e: React.FocusEvent<HTMLInputElement>,
  ) => {
    if (onSaveCharacterNameInput) {
      onSaveCharacterNameInput(e.target.value);
    }
  };
  return (
    <CharacterWrap className="conversation-wrap" wrapperCss={wrapperCss}>
      <CharacterContainer>
        <ImgWrap>
          <img src={characterUrl || ImgProfileDefault} alt={"캐릭터"} />
        </ImgWrap>
        <CharacterNameInput
          type="text"
          placeholder="화자 이름"
          onBlur={handleCharacterNameInputBlur}
          defaultValue={characterName}
        />
      </CharacterContainer>
      <InputContainer>
        {onDeleteCharacter && (
          <ObjectDeleteButton
            customCSS={deleteButtonCss}
            onClick={onDeleteCharacter}
          />
        )}
        <UrlInputWrapper
          typeText="이미지"
          onSubmit={onImageUrlSubmit}
          defaultText={characterUrl}
          urlInputWrapperCss={urlInputWrapperCss}
        />
      </InputContainer>
    </CharacterWrap>
  );
};

export default CharacterCreator;
