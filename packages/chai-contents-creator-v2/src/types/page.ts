import { TemplateType } from "chai-ui-v2";

export interface PageHeaderProps {
  slideIndex: number;
  handleChangeLayout: (slideIndex: number, templateType: TemplateType) => void;
}

export interface PageTemplateCommon extends PageHeaderProps {
  templateType: TemplateType;
}
