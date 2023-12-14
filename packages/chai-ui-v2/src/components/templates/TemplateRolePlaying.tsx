import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ID, TemplateProps, TemplateRolePlayingData } from "../../core";
import {
  ActivityGuideCharacterComponent,
  IconTextComponent,
} from "../contents";
import { ComponentChoiceRole } from "../molecules";
import RolePlayingComponent from "../contents/RolePlayingComponent";
import { ComponentButtonRadiBorderMain } from "../atoms";

interface TemplateRolePlayingProps extends TemplateProps {}

const TemplateRolePlaying = ({
  template,
  setPageCompleted,
}: TemplateRolePlayingProps) => {
  const thisPage = template as TemplateRolePlayingData;

  const [selectedCharacterId, setSelectedCharacterId] = useState<
    ID | undefined
  >();
  const [isShowNextPageButton, setIsShowNextPageButton] = useState(false);

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const handleClickSelectCharacter = useCallback(
    (characterId: ID | undefined) => {
      setSelectedCharacterId(characterId);
    },
    [],
  );

  const handleClickNextPage = () => {
    const multiPageBtn = document.querySelector<HTMLDivElement>(
      ".swiper-button-next",
    );
    if (
      multiPageBtn &&
      !multiPageBtn.className.includes("swiper-button-disabled")
    ) {
      multiPageBtn.click();
      return;
    }
    const footerNextBtn =
      document.querySelector<HTMLButtonElement>(".x-next-btn");
    footerNextBtn?.click();
  };

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
          {isShowNextPageButton && (
            <div className="btns-wrap mt-5">
              <ComponentButtonRadiBorderMain
                text="다음 학습으로 넘어가기"
                onClickBtn={handleClickNextPage}
              />
            </div>
          )}
        </div>
      </div>
    );
  }, [handleClickSelectCharacter, thisPage, isShowNextPageButton]);

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

  const handleClickRestartRolePlayingButton = () => {
    setIsShowNextPageButton(true);
  };

  const rolePlayingLayout = useMemo(() => {
    return (
      <div className="layout-panel-wrap grid-h-3-7">
        <div
          className="layout-panel side-panel flex-align-center flex-justify-center"
          ref={guideContentContainerRef}
        >
          {thisPage.guideContent && (
            <div ref={guideContentWrapperRef}>
              <ActivityGuideCharacterComponent
                contents={thisPage.guideContent}
              />
            </div>
          )}
        </div>
        <div className="layout-panel wide-panel">
          {thisPage.rolePlayingContents && thisPage.characters && (
            <RolePlayingComponent
              contents={thisPage.rolePlayingContents}
              selectCharacterId={selectedCharacterId}
              characterList={thisPage.characters}
              handleClickSelectCharacter={handleClickSelectCharacter}
              handleClickRestartRolePlayingButton={
                handleClickRestartRolePlayingButton
              }
            />
          )}
        </div>
      </div>
    );
  }, [thisPage, selectedCharacterId, handleClickSelectCharacter]);

  return (
    <>
      {selectedCharacterId === undefined ? chooseRoleLayout : rolePlayingLayout}
    </>
  );
};

export default TemplateRolePlaying;
