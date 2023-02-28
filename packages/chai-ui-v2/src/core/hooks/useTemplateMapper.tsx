import React, { useCallback } from "react";
import { Template01 } from "../../components";
import TemplateExam from "../../components/templates/TemplateExam";
import { TemplateData } from "../types";
import { TemplateType } from "../types/appData";

interface UseTemplateMapperProps {
  setPageCompleted: () => void;
}
const useTemplateMapper = ({ setPageCompleted }: UseTemplateMapperProps) => {
  const templateMapper = useCallback(
    (templateType: TemplateType, template: TemplateData) => {
      const templateList: Record<TemplateType, JSX.Element> = {
        Template01: (
          <Template01 template={template} setPageCompleted={setPageCompleted} />
        ),
        Template_H_3_7: <TemplateExam />,
        Template_H_5_5: <TemplateExam />,
      };

      return templateList[templateType];
    },
    [setPageCompleted],
  );

  const getTemplateComponent = useCallback(
    (templateType: TemplateType, template: TemplateData) => {
      return templateMapper(templateType, template);
    },
    [templateMapper],
  );

  return {
    getTemplateComponent,
  };
};

export default useTemplateMapper;
