import React, { useCallback } from "react";
import {
  Template01,
  TemplateDialogue,
  TemplateQuizDialogueWordBlank,
} from "../../components";
import TemplateExam from "../../components/templates/TemplateExam";
import TemplateQuizDialogueWordArray from "../../components/templates/TemplateQuizDialogueWordArray";
import {
  ConversationTemplateData,
  QuizTemplateData,
  Template01Data,
  TemplateConversationData,
  TemplateData,
  TemplateQuizConversationData,
  TemplateQuizWordsInOrderData,
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
        TemplateConversationRepeat: (
          <TemplateDialogue
            template={template as TemplateConversationData}
            setPageCompleted={setPageCompleted}
          />
        ),
        TemplateQuizConversation: (
          <TemplateQuizDialogueWordBlank
            template={template as TemplateQuizConversationData}
            setPageCompleted={setPageCompleted}
          />
        ),
        TemplateQuizWordsInOrder: (
          <TemplateQuizDialogueWordArray
            template={template as TemplateQuizWordsInOrderData}
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
