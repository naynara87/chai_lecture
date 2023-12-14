import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import ImgProfileDefault from "chai-ui-v2/dist/assets/images/img/img_profile_default.png";

interface CharacterContainerProps {
  customCSS?: SerializedStyles;
}
const CharacterContainer = styled.div<CharacterContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  width: 10vmin;
  ${({ customCSS }) => customCSS}
`;

const CharacterNameInput = styled.input`
  margin-top: 1vmin;
  background: none !important;
  font-size: 2vmin;
  text-align: center;

  &::placeholder {
    opacity: 0.6;
  }
`;

const CharacterImgWrap = styled.div`
  width: 10vmin;
  height: 10vmin;
  border: 0.6vmin solid #ffffff;
  box-shadow: 0px 0.4vmin 0px rgba(88, 88, 88, 0.2);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface ProfileProps {
  characterUrl?: string;
  characterName?: string;
  onSaveCharacterNameInput: (name: string) => void;
  characterContainerCss?: SerializedStyles;
  readOnly?: boolean;
}
const CharacterProfile = ({
  characterUrl,
  characterName,
  onSaveCharacterNameInput,
  characterContainerCss,
  readOnly,
}: ProfileProps) => {
  const handleCharacterNameInputBlur = (
    e: React.FocusEvent<HTMLInputElement>,
  ) => {
    if (onSaveCharacterNameInput) {
      onSaveCharacterNameInput(e.target.value);
    }
  };
  return (
    <CharacterContainer customCSS={characterContainerCss}>
      <CharacterImgWrap>
        <img
          src={characterUrl || ImgProfileDefault}
          alt={"캐릭터"}
          draggable={false}
        />
      </CharacterImgWrap>
      <CharacterNameInput
        type="text"
        placeholder="화자 이름"
        onBlur={handleCharacterNameInputBlur}
        defaultValue={characterName}
        readOnly={readOnly}
      />
    </CharacterContainer>
  );
};

export default CharacterProfile;
