import { ContentType, TemplateType } from "chai-ui-v2";
import { SlideType } from "../hooks/usePage";

export interface PageHeaderProps {
  slides: SlideType[];
  slideIndex: number;
  handleChangeLayout: (slideIndex: number, templateType: TemplateType) => void;
  deleteSlide: (slideIndex: number) => void;
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
    slideIndex: number,
    component: ContentType,
    componentLocation: "contents" | "rightContents" | "leftContents",
  ) => void;
};
