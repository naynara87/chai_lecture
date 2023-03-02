import { TemplateType } from "chai-ui-v2";
import CreateTemplate01 from "../components/pages/CreateTemplate01";
import CreateTemplateH37 from "../components/pages/CreateTemplateH37";
import CreateTemplateH55 from "../components/pages/CreateTemplateH55";

const useTemplate = () => {
  const templateMap: Partial<Record<TemplateType, JSX.Element>> = {
    Template01: <CreateTemplate01 />,
    Template_H_3_7: <CreateTemplateH37 />,
    Template_H_5_5: <CreateTemplateH55 />,
  };

  const getTemplate = (templateType: TemplateType) => {
    return templateMap[templateType] ?? <div>템플릿이 없습니다.</div>;
  };

  return {
    getTemplate,
  };
};

export default useTemplate;
