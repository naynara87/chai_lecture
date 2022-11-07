import { TemplateType } from "../types/appData";

const useTemplateMapper = () => {
  const templateMapper: Record<TemplateType, JSX.Element> = {
    TP01A: <div>TP01A</div>,
    TP03A: <div>TP03A</div>,
    TP03B: <div>TP03B</div>,
  };

  const getTemplateComponent = (templateType: TemplateType) => {
    return templateMapper[templateType];
  };

  return { getTemplateComponent };
};

export default useTemplateMapper;
