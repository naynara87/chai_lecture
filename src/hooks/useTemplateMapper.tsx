import TP01AComponent from "../components/templates/TP01AComponent";
import { TemplateType } from "../types/appData";
import { TemplateProps } from "../types/templates";

export interface UseTemplateMapperProps extends TemplateProps {}
const useTemplateMapper = (props: UseTemplateMapperProps) => {
  const templateMapper: Record<TemplateType, JSX.Element> = {
    TP01A: <TP01AComponent {...props} />,
    TP03A: <div>TP03A</div>,
    TP03B: <div>TP03B</div>,
    TP15A: <div>TP15A</div>,
  };

  const getTemplateComponent = (templateType: TemplateType) => {
    return templateMapper[templateType];
  };

  return { getTemplateComponent };
};

export default useTemplateMapper;
