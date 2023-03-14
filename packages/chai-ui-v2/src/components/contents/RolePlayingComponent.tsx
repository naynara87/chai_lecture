import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { colorPalette } from "../../assets";
import { ID, RoleplayingContentData } from "../../core";
import RolePlayingCharacterComponent from "../molecules/RolePlayingCharacterComponent";

const DialogueWrapper = styled.ul`
  .right-conts .bubble-wrap {
    background-color: ${colorPalette.gray300};
  }
`;

interface RolePlayingComponentProps {
  contents: RoleplayingContentData;
  selectCharacterId?: ID;
}

const RolePlayingComponent = ({
  contents,
  selectCharacterId,
}: RolePlayingComponentProps) => {
  const mainContents = useMemo(() => {
    return contents.data.map((content) => {
      return (
        <RolePlayingCharacterComponent
          id={content.id}
          selectCharacterId={selectCharacterId}
          position={content.position}
          name={content.character.name}
          text={content.text}
          pronunciation={content.pronunciation}
          meaning={content.meaning}
          audioSrc={content.audio?.src}
          key={content.id}
        />
      );
    });
  }, [contents.data, selectCharacterId]);

  return (
    <div className="roleplay-container">
      <DialogueWrapper className="conversation-wrapper">
        {mainContents}
      </DialogueWrapper>
    </div>
  );
};

export default RolePlayingComponent;
