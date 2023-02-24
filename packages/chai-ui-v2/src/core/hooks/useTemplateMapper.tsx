import React from "react";
import TemplateExam from "../../components/templates/TemplateExam";
import { PageProps } from "../types";
import { TemplateType } from "../types/appData";

interface UseTemplateMapperProps extends PageProps {}
const useTemplateMapper = (props: UseTemplateMapperProps) => {
  const templateMapper: Record<TemplateType, JSX.Element> = {
    Template01: <TemplateExam {...props} />,
  };

  const getTemplateComponent = (templateType: TemplateType) => {
    return templateMapper[templateType];
  };

  return {
    getTemplateComponent,
  };
};

export default useTemplateMapper;
