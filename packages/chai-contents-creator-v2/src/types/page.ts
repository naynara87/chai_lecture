import { TemplateType } from "chai-ui-v2";
import { TestSlideType } from "../hooks/usePage";

export interface PageHeaderProps {
  slides: TestSlideType[];
  slideIndex: number;
  handleChangeLayout: (slideIndex: number, templateType: TemplateType) => void;
  deleteSlide: (slideIndex: number) => void;
}

export interface PageTemplateCommon extends PageHeaderProps {
  templateType: TemplateType;
}
