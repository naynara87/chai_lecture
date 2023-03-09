import React from "react";
import useComponentContext from "../../hooks/useComponentContext";
import {
  CreateEditMainWrap,
  CreateEditMain,
  DashBoxArea,
  CreateTemplateChoiceBtnWrap,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import PageHeader from "../molecules/PageHeader";

const CreateTemplate01 = ({
  templateType,
  ...pageHeaderProps
}: PageCommonProps) => {
  const {
    ComponentsContextMenu,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  } = useComponentContext();

  return (
    <>
      <PageHeader {...pageHeaderProps} />
      <CreateEditMainWrap>
        <CreateEditMain>
          <DashBoxArea>
            <CreateTemplateChoiceBtnWrap>
              <button className="btn-comp-select" onClick={toggleContextMenu}>
                컴포넌트 선택
              </button>
              <ComponentsContextMenu
                isComponentsContextMenuOpen={isComponentsContextMenuOpen}
              />
            </CreateTemplateChoiceBtnWrap>
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap>
    </>
  );
};

export default CreateTemplate01;
