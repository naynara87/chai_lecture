import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ID, TemplateProps, TemplateRolePlayingData } from "../../core";
import {
  ActivityGuideCharacterComponent,
  IconTextComponent,
} from "../contents";
import { ComponentChoiceRole } from "../molecules";
import RolePlayingComponent from "../contents/RolePlayingComponent";
import styled from "@emotion/styled";

const GuideContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActivityGuideCharacterComponentWrapper = styled.div``;

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
          {thisPage.iconText && (
            <IconTextComponent contents={thisPage.iconText} />
          )}
          {thisPage.characters && (
            <ComponentChoiceRole
              characterList={thisPage.characters}
              onClickSelectCharacter={handleClickSelectCharacter}
            />
          )}
        </div>
      </div>
    );
  }, [handleClickSelectCharacter, thisPage]);

  const guideContentContainerRef = React.useRef<HTMLDivElement>(null);
  const containerHeight = guideContentContainerRef.current?.clientHeight;

  const guideContentWrapperRef = React.useRef<HTMLDivElement>(null);
  const contentHeight = guideContentWrapperRef.current?.clientHeight;

  useEffect(() => {
    if (
      !guideContentContainerRef.current ||
      !guideContentWrapperRef.current ||
      !containerHeight ||
      !contentHeight
    ) {
      return;
    }
    if (containerHeight <= contentHeight) {
      guideContentContainerRef.current.style.alignItems = "flex-start";
    }
  });

  const rolePlayingLayout = useMemo(() => {
    return (
      <div className="layout-panel-wrap grid-h-3-7">
        <GuideContentContainer
          className="layout-panel side-panel"
          ref={guideContentContainerRef}
        >
          {thisPage.guideContent && (
            <ActivityGuideCharacterComponentWrapper
              ref={guideContentWrapperRef}
            >
              <ActivityGuideCharacterComponent
                contents={thisPage.guideContent}
              />
            </ActivityGuideCharacterComponentWrapper>
          )}
        </GuideContentContainer>
        <div className="layout-panel wide-panel">
          {thisPage.rolePlayingContents && thisPage.characters && (
            <RolePlayingComponent
              contents={thisPage.rolePlayingContents}
              selectCharacterId={selectedCharacterId}
              characterList={thisPage.characters}
            />
          )}
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
