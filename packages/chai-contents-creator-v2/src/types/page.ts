import { AllTemplateData, ContentType, ID, TemplateType } from "chai-ui-v2";

export interface PageHeaderProps {
  slides: AllTemplateData[];
  slideId: ID;
  handleChangeLayout: (slideId: ID, templateType: TemplateType) => void;
  deleteSlide: (slideId: ID) => void;
}

/**
 * CreatePage에서 사용하는 props
 * 페이지 공통 props
 */
export interface PageCommonProps extends PageHeaderProps {
  key: number | string;
  templateType: TemplateType;
  addComponentMap: AddComponentMap;
}

export type AddComponentMap = {
  addComponentToCommonTemplate: (
    slideId: ID,
    component: ContentType,
    componentLocation: "contents" | "rightContents" | "leftContents",
  ) => void;
};

export type ContentCommonProps = {
  contentId: ID;
  isFocused: boolean;
  setFocusedId: (isFocused: ID) => void;
};
