import styled from "@emotion/styled";
import React, { useCallback, useMemo } from "react";
import { ID, RolePlayingCharacter, RoleplayingContentData } from "../../core";
import RolePlayingCharacterComponent from "../molecules/RolePlayingCharacterComponent";

const DialogueWrapper = styled.ul``;

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
  const getCharacterById = useCallback(
    (id: ID) => {
      return characterList.find((character) => character.id === id);
    },
    [characterList],
  );

  const mainContents = useMemo(() => {
    return contents.data.map((content) => {
      const character = getCharacterById(content.characterId);
      return (
        <RolePlayingCharacterComponent
          id={character?.id ?? ""}
          selectCharacterId={selectCharacterId}
          position={content.position}
          character={character}
          text={content.text}
          pronunciation={content.pronunciation}
          meaning={content.meaning}
          audioSrc={content.audio?.src}
          key={content.id}
        />
      );
    });
  }, [contents.data, selectCharacterId, getCharacterById]);

  return (
    <div className="roleplay-container">
      <DialogueWrapper className="conversation-wrapper">
        {mainContents}
      </DialogueWrapper>
    </div>
  );
};

export default RolePlayingComponent;
