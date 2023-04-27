import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
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
  const [showRolePlayingIndex, setShowRolePlayingIndex] = useState(0);

  const getCharacterById = useCallback(
    (id: ID) => {
      return characterList.find((character) => character.id === id);
    },
    [characterList],
  );

  const addShowRolePlayingIndex = useCallback(
    (contentIndex: number) => {
      if (showRolePlayingIndex !== contentIndex) return;
      setShowRolePlayingIndex((prev) => prev + 1);
    },
    [showRolePlayingIndex],
  );

  const mainContents = useMemo(() => {
    return contents.data.map((content, contentIndex) => {
      const character = getCharacterById(content.characterId);
      if (showRolePlayingIndex < contentIndex) return <></>;
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
          addShowRolePlayingIndex={() => addShowRolePlayingIndex(contentIndex)}
        />
      );
    });
  }, [
    contents.data,
    selectCharacterId,
    getCharacterById,
    showRolePlayingIndex,
    addShowRolePlayingIndex,
  ]);

  return (
    <div className="roleplay-container">
      <DialogueWrapper className="conversation-wrapper">
        {mainContents}
      </DialogueWrapper>
    </div>
  );
};

export default RolePlayingComponent;
