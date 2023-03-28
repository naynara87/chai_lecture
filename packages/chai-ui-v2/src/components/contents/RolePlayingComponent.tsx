import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { colorPalette } from "../../assets";
import { ID, RolePlayingCharacter, RoleplayingContentData } from "../../core";
import RolePlayingCharacterComponent from "../molecules/RolePlayingCharacterComponent";

const DialogueWrapper = styled.ul`
  .right-conts .bubble-wrap {
    background-color: ${colorPalette.gray300};
  }
`;

export interface RolePlayingComponentProps {
  contents: RoleplayingContentData;
  selectCharacterId?: ID;
  characterList: RolePlayingCharacter[];
}

const RolePlayingComponent = ({
  contents,
  selectCharacterId,
  characterList,
}: RolePlayingComponentProps) => {
  const mainContents = useMemo(() => {
    return contents.data.map((content) => {
      const character = characterList.find(
        (character) => character.id === content.characterId,
      );
      return (
        <RolePlayingCharacterComponent
          id={character?.id ?? ""}
          selectCharacterId={selectCharacterId}
          position={content.position}
          name={character?.name ?? ""}
          text={content.text}
          pronunciation={content.pronunciation}
          meaning={content.meaning}
          audioSrc={content.audio?.src}
          key={content.id}
        />
      );
    });
  }, [contents.data, selectCharacterId, characterList]);

  return (
    <div className="roleplay-container">
      <DialogueWrapper className="conversation-wrapper">
        {mainContents}
      </DialogueWrapper>
    </div>
  );
};

export default RolePlayingComponent;
