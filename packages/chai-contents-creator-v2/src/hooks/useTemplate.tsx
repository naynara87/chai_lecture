import { TemplateType } from "chai-ui-v2";
import { useCallback } from "react";
import CreateTemplate01 from "../components/templates/CreateTemplate01";
import CreateTemplateConversation from "../components/templates/CreateTemplateConversation";
import CreateTemplateH37 from "../components/templates/CreateTemplateH37";
import CreateTemplateH55 from "../components/templates/CreateTemplateH55";
import CreateTemplateQuizMultiChoice from "../components/templates/CreateTemplateQuizMultiChoice";
import CreateTemplateQuizSentencesInOrder from "../components/templates/CreateTemplateQuizSentencesInOrder";
import { PageCommonProps } from "../types/page";

const useTemplate = () => {
  const getTemplate = useCallback((props: PageCommonProps) => {
    const { templateType } = props;
    const templateMap: Partial<Record<TemplateType, JSX.Element>> = {
      Template01: <CreateTemplate01 {...props} />,
      Template_H_3_7: <CreateTemplateH37 {...props} />,
      Template_H_5_5: <CreateTemplateH55 {...props} />,
      TemplateConversation: <CreateTemplateConversation {...props} />,
      TemplateConversationToggle: <CreateTemplateConversation {...props} />,
      TemplateConversationRepeat: <CreateTemplateConversation {...props} />,
      TemplateQuizMultiChoice: <CreateTemplateQuizMultiChoice {...props} />,
      TemplateQuizSentencesInOrder: (
        <CreateTemplateQuizSentencesInOrder {...props} />
      ),
    };
    return templateMap[templateType] ?? <div>템플릿이 없습니다.</div>;
  }, []);

  return {
    getTemplate,
  };
};

export default useTemplate;
