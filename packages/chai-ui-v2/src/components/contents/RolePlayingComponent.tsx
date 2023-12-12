import React, { useCallback, useMemo, useState } from "react";
import { ID, RolePlayingCharacter, RoleplayingContentData } from "../../core";
import RolePlayingCharacterComponent from "../molecules/RolePlayingCharacterComponent";
import { ComponentButtonRadiBorderMain } from "../atoms";

export interface RolePlayingComponentProps {
  contents: RoleplayingContentData;
  selectCharacterId?: ID;
  characterList: RolePlayingCharacter[];
  handleClickSelectCharacter: (characterId: ID | undefined) => void;
  handleClickRestartRolePlayingButton: () => void;
}

const RolePlayingComponent = ({
  contents,
  selectCharacterId,
  characterList,
  handleClickSelectCharacter,
  handleClickRestartRolePlayingButton,
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
      <ul className="conversation-wrapper">{mainContents}</ul>
      {contents.data.length <= showRolePlayingIndex + 1 && (
        <div className="btns-wrap mb-5">
          <ComponentButtonRadiBorderMain
            text="다시하기"
            onClickBtn={() => {
              handleClickRestartRolePlayingButton();
              handleClickSelectCharacter(undefined);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default RolePlayingComponent;
