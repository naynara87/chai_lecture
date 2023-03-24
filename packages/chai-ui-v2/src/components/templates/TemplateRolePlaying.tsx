import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ID, TemplateProps, TemplateRolePlayingData } from "../../core";
import {
  ActivityGuideCharacterComponent,
  IconTextComponent,
} from "../contents";
import { ComponentChoiceRole } from "../molecules";
import RolePlayingComponent from "../contents/RolePlayingComponent";

interface TemplateRolePlayingProps extends TemplateProps {}

const TemplateRolePlaying = ({
  template,
  setPageCompleted,
}: TemplateRolePlayingProps) => {
  const thisPage = template as TemplateRolePlayingData;

  const [selectedCharacterId, setSelectedCharacterId] = useState<
    ID | undefined
  >();

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const handleClickSelectCharacter = useCallback((characterId: ID) => {
    setSelectedCharacterId(characterId);
  }, []);

  const chooseRoleLayout = useMemo(() => {
    return (
      <div className="layout-panel-wrap">
        <div className="layout-panel">
          <IconTextComponent contents={thisPage.iconText} />
          <ComponentChoiceRole
            characterList={thisPage.characters}
            onClickSelectCharacter={handleClickSelectCharacter}
          />
        </div>
      </div>
    );
  }, [handleClickSelectCharacter, thisPage]);

  const rolePlayingLayout = useMemo(() => {
    return (
      <div className="layout-panel-wrap grid-h-3-7">
        <div className="layout-panel side-panel">
          <ActivityGuideCharacterComponent contents={thisPage.guideContent} />
        </div>
        <div className="layout-panel wide-panel">
          <RolePlayingComponent
            contents={thisPage.rolePlayingContents}
            selectCharacterId={selectedCharacterId}
            characterList={thisPage.characters}
          />
        </div>
      </div>
    );
  }, [thisPage, selectedCharacterId]);

  return (
    <>
      {selectedCharacterId === undefined ? chooseRoleLayout : rolePlayingLayout}
    </>
  );
};

export default TemplateRolePlaying;
