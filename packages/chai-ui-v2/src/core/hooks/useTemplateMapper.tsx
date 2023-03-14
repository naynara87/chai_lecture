import React, { useCallback } from "react";
import {
  Template01,
  TemplateDialogue,
  TemplateQuizMultiChoice,
  TemplateQuizDialogueWordBlank,
  TemplateQuizSentenceBlank,
  Template02,
  Template03,
} from "../../components";
import TemplateQuizDialogueWordArray from "../../components/templates/TemplateQuizDialogueWordArray";
import TemplateQuizSpeaking from "../../components/templates/TemplateQuizSpeaking";
import TemplateRolePlaying from "../../components/templates/TemplateRolePlaying";
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
  TemplateRolePlayingData,
  TemplateWordCardData,
  Template_H_3_7Data,
  Template_H_5_5Data,
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
        Template_H_5_5: (
          <Template02
            template={template as Template_H_5_5Data}
            setPageCompleted={setPageCompleted}
          />
        ),
        Template_H_3_7: (
          <Template03
            template={template as Template_H_3_7Data}
            setPageCompleted={setPageCompleted}
          />
        ),
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
        TemplateRolePlaying: (
          <TemplateRolePlaying
            template={template as TemplateRolePlayingData}
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
