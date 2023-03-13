import React, { useCallback } from "react";
import {
  Template01,
  TemplateDialogue,
  TemplateQuizMultiChoice,
  TemplateQuizDialogueWordBlank,
  TemplateQuizSentenceBlank,
} from "../../components";
import TemplateExam from "../../components/templates/TemplateExam";
import TemplateQuizDialogueWordArray from "../../components/templates/TemplateQuizDialogueWordArray";
import TemplateQuizSpeaking from "../../components/templates/TemplateQuizSpeaking";
import TemplateWordCard from "../../components/templates/TemplateWordCard";
import {
  AllTemplateData,
  Template01Data,
  TemplateConversationData,
  TemplateQuizConversationData,
  TemplateQuizMultiChoiceData,
  TemplateQuizSentencesInOrderData,
  TemplateQuizSpeakingData,
  TemplateQuizWordsInOrderData,
  TemplateWordCardData,
} from "../types";
import { TemplateType } from "../types/appData";

interface UseTemplateMapperProps {
  setPageCompleted: () => void;
}
const useTemplateMapper = ({ setPageCompleted }: UseTemplateMapperProps) => {
  const templateMapper = useCallback(
    (templateType: TemplateType, template: AllTemplateData) => {
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
        TemplateQuizMultiChoice: (
          <TemplateQuizMultiChoice
            template={template as TemplateQuizMultiChoiceData}
            setPageCompleted={setPageCompleted}
          />
        ),
        TemplateQuizSentencesInOrder: (
          <TemplateQuizSentenceBlank
            template={template as TemplateQuizSentencesInOrderData}
            setPageCompleted={setPageCompleted}
          />
        ),
        TemplateQuizSpeaking: (
          <TemplateQuizSpeaking
            template={template as TemplateQuizSpeakingData}
            setPageCompleted={setPageCompleted}
          />
        ),
        TemplateWordCard: (
          <TemplateWordCard
            template={template as TemplateWordCardData}
            setPageCompleted={setPageCompleted}
          />
        ),
      };

      return templateList[templateType];
    },
    [setPageCompleted],
  );

  const getTemplateComponent = useCallback(
    (templateType: TemplateType, template: AllTemplateData) => {
      return templateMapper(templateType, template);
    },
    [templateMapper],
  );

  return {
    getTemplateComponent,
  };
};

export default useTemplateMapper;
