import React, { useCallback } from "react";
import { Template01, TemplateDialogue } from "../../components";
import TemplateExam from "../../components/templates/TemplateExam";
import {
  ConversationTemplateData,
  QuizTemplateData,
  Template01Data,
  TemplateConversationData,
  TemplateData,
} from "../types";
import { TemplateType } from "../types/appData";

interface UseTemplateMapperProps {
  setPageCompleted: () => void;
}
const useTemplateMapper = ({ setPageCompleted }: UseTemplateMapperProps) => {
  const templateMapper = useCallback(
    (
      templateType: TemplateType,
      template: TemplateData | ConversationTemplateData | QuizTemplateData,
    ) => {
      const templateList: Partial<Record<TemplateType, JSX.Element>> = {
        Template01: (
          <Template01
            template={template as Template01Data}
            setPageCompleted={setPageCompleted}
          />
        ),
        Template_H_3_7: <TemplateExam />,
        Template_H_5_5: <TemplateExam />,
        TemplateConversation: (
          <TemplateDialogue
            template={template as TemplateConversationData}
            setPageCompleted={setPageCompleted}
          />
        ),
        TemplateConversationToggle: (
          <TemplateDialogue
            template={template as TemplateConversationData}
            setPageCompleted={setPageCompleted}
          />
        ),
      };

      return templateList[templateType];
    },
    [setPageCompleted],
  );

  const getTemplateComponent = useCallback(
    (
      templateType: TemplateType,
      template: TemplateData | ConversationTemplateData | QuizTemplateData,
    ) => {
      return templateMapper(templateType, template);
    },
    [templateMapper],
  );

  return {
    getTemplateComponent,
  };
};

export default useTemplateMapper;
