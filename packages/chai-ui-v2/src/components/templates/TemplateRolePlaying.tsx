import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ID, TemplateProps, TemplateRolePlayingData } from "../../core";
import {
  ActivityGuideCharacterComponent,
  IconTextComponent,
} from "../contents";
import { ComponentChoiceRole } from "../molecules";
import { uniqBy } from "lodash";
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

  const characterList = useMemo(() => {
    const list: { id: ID; name: string; imageSrc: string }[] = [];
    thisPage.rolePlayingContents.data.forEach((rolePlayingContent) => {
      list.push({
        id: rolePlayingContent.id,
        name: rolePlayingContent.character?.name ?? "",
        imageSrc: rolePlayingContent.character?.src ?? "",
      });
    });
    return uniqBy(list, "id");
  }, [thisPage.rolePlayingContents]);

  const handleClickSelectCharacter = useCallback((characterId: ID) => {
    setSelectedCharacterId(characterId);
  }, []);

  const chooseRoleLayout = useMemo(() => {
    return (
      <div className="layout-panel-wrap">
        <div className="layout-panel">
          <IconTextComponent contents={thisPage.iconText} />
          <ComponentChoiceRole
            characterList={characterList}
            onClickSelectCharacter={handleClickSelectCharacter}
          />
        </div>
      </div>
    );
  }, [characterList, handleClickSelectCharacter, thisPage.iconText]);

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
