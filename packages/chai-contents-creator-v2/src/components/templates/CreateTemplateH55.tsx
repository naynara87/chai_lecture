import styled from "@emotion/styled";
import useComponentContext from "../../hooks/useComponentContext";
import {
  CreateEditMainWrap,
  CreateEditMain,
  DashBoxArea,
  CreateTemplateChoiceBtnWrap,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import PageHeader from "../molecules/PageHeader";

const CreateEditMainWrap55 = styled(CreateEditMainWrap)`
  ${CreateEditMain} {
    width: 50%;
  }
  gap: 24px;
`;

const CreateTemplateH55 = ({
  templateType,
  addComponentMap,
  slideId,
  ...pageHeaderProps
}: PageCommonProps) => {
  const {
    ComponentsContextMenuCommon,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  } = useComponentContext();
  const {
    ComponentsContextMenuCommon: ComponentsContextMenuRight,
    isComponentsContextMenuOpen: isComponentsContextMenuOpenRight,
    toggleContextMenu: toggleContextMenuRight,
  } = useComponentContext();
  return (
    <>
      <PageHeader slideId={slideId} {...pageHeaderProps} />
      <CreateEditMainWrap55>
        <CreateEditMain>
          <DashBoxArea>
            <CreateTemplateChoiceBtnWrap>
              <button className="btn-comp-select" onClick={toggleContextMenu}>
                컴포넌트 선택
              </button>
              <ComponentsContextMenuCommon
                isComponentsContextMenuOpen={isComponentsContextMenuOpen}
                addComponentMap={addComponentMap}
                slideId={slideId}
                position="leftContents"
              />
            </CreateTemplateChoiceBtnWrap>
          </DashBoxArea>
        </CreateEditMain>
        <CreateEditMain>
          <DashBoxArea>
            <CreateTemplateChoiceBtnWrap>
              <button
                className="btn-comp-select"
                onClick={toggleContextMenuRight}
              >
                컴포넌트 선택
              </button>
              <ComponentsContextMenuRight
                isComponentsContextMenuOpen={isComponentsContextMenuOpenRight}
                addComponentMap={addComponentMap}
                slideId={slideId}
                position="rightContents"
              />
            </CreateTemplateChoiceBtnWrap>
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap55>
    </>
  );
};

export default CreateTemplateH55;
