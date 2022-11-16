import TP01AComponent from "../components/templates/TP01AComponent";
import TP02CComponent from "../components/templates/TP02CComponent";
import TP02MComponent from "../components/templates/TP02MComponent";
import TP03AComponent from "../components/templates/TP03AComponent";
import TP03BComponent from "../components/templates/TP03BComponent";
import TP04AComponent from "../components/templates/TP04AComponent";
import TP15AComponent from "../components/templates/TP15AComponent";
import { TemplateType } from "../types/appData";
import { TemplateProps } from "../types/templates";

export interface UseTemplateMapperProps extends TemplateProps {}
const useTemplateMapper = (props: UseTemplateMapperProps) => {
  const templateMapper: Record<TemplateType, JSX.Element> = {
    TP01A: <TP01AComponent {...props} />,
    TP02C: <TP02CComponent {...props} />,
    TP02M: <TP02MComponent {...props} />,
    TP03A: <TP03AComponent {...props} />,
    TP03B: <TP03BComponent {...props} />,
    TP15A: <TP15AComponent {...props} />,
    TP03C: <TP03BComponent {...props} />,
    TP03D: <TP03BComponent {...props} />,
    TP04A: <TP04AComponent {...props} />,
  };

  const getTemplateComponent = (templateType: TemplateType) => {
    return templateMapper[templateType];
  };

  return { getTemplateComponent };
};

export default useTemplateMapper;
