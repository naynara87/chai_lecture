import React from "react";
import { Template01 } from "../../components";
import { TemplateProps } from "../types";
import { TemplateType } from "../types/appData";

interface UseTemplateMapperProps extends TemplateProps {}
const useTemplateMapper = (props: UseTemplateMapperProps) => {
  const templateMapper: Record<TemplateType, JSX.Element> = {
    Template01: <Template01 {...props} />,
  };

  const getTemplateComponent = (templateType: TemplateType) => {
    return templateMapper[templateType];
  };

  return {
    getTemplateComponent,
  };
};

export default useTemplateMapper;
