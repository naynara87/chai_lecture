import styled from "@emotion/styled";
import { Template_H_3_7Data } from "chai-ui-v2";
import useComponentContext from "../../hooks/useComponentContext";
import {
  CreateEditMainWrap,
  CreateEditMain,
  CreateTemplateChoiceBtnWrap,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import DashBoxArea from "../atoms/DashBoxArea";
import PageHeader from "../molecules/PageHeader";

const CreateEditMainWrap37 = styled(CreateEditMainWrap)`
  ${CreateEditMain}:nth-child(1) {
    width: 30%;
  }
  ${CreateEditMain}:nth-child(2) {
    width: 70%;
  }
  gap: 24px;
`;
const CreateTemplateH37 = ({
  templateType,
  addComponentMap,
  slideId,
  slides,
  updateContent,
  returnUseComponent,
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

  const { focusedId, setFocusedId, getComponent } = returnUseComponent;

  const thisSlide = slides.find(
    (slide) => slide.id === slideId,
  ) as Template_H_3_7Data;

  return (
    <>
      <PageHeader slideId={slideId} slides={slides} {...pageHeaderProps} />
      <CreateEditMainWrap37>
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
                toggleContextMenu={toggleContextMenu}
              />
            </CreateTemplateChoiceBtnWrap>
            {thisSlide.leftContents.map((content) => {
              return getComponent({
                currentSlide: thisSlide,
                content,
                isFocused: focusedId === content.id,
                setFocusedId,
                updateContent,
                position: "leftContents",
              });
            })}
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
                toggleContextMenu={toggleContextMenuRight}
              />
            </CreateTemplateChoiceBtnWrap>
            {thisSlide.rightContents.map((content) => {
              return getComponent({
                currentSlide: thisSlide,
                content,
                isFocused: focusedId === content.id,
                setFocusedId,
                updateContent,
                position: "rightContents",
              });
            })}
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap37>
    </>
  );
};

export default CreateTemplateH37;
