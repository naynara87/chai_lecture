import { TemplateType } from "chai-ui-v2";
import { TestSlideType } from "../hooks/usePage";

export interface PageHeaderProps {
  slides: TestSlideType[];
  slideIndex: number;
  handleChangeLayout: (slideIndex: number, templateType: TemplateType) => void;
  deleteSlide: (slideIndex: number) => void;
}

/**
 * CreatePage에서 사용하는 props
 * 페이지 공통 props
 */
export interface PageCommonProps extends PageHeaderProps {
  templateType: TemplateType;
}
