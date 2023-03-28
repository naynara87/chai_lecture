import styled from "@emotion/styled";
import React from "react";
import UrlInputWrapper, { UrlInputWrapperProps } from "./UrlInputWrapper";
import { css, SerializedStyles } from "@emotion/react";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import CharacterProfile from "../atoms/CharacterProfile";

interface CharacterWrapProps {
  wrapperCss?: SerializedStyles;
}
const CharacterWrap = styled.div<CharacterWrapProps>`
  display: flex;
  ${({ wrapperCss }) => wrapperCss}
`;

const deleteButtonCss = css`
  position: absolute;
  top: 0;
  right: 0;
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
  return (
    <CharacterWrap className="conversation-wrap" wrapperCss={wrapperCss}>
      <CharacterProfile
        characterUrl={characterUrl}
        characterName={characterName}
        onSaveCharacterNameInput={onSaveCharacterNameInput}
      />
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
