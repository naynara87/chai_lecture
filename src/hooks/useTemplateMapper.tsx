import TP01AComponent from "../components/templates/TP01AComponent";
import TP02CComponent from "../components/templates/TP02CComponent";
import TP02FComponent from "../components/templates/TP02FComponent";
import TP02MComponent from "../components/templates/TP02MComponent";
import TP03AComponent from "../components/templates/TP03AComponent";
import TP03BComponent from "../components/templates/TP03BComponent";
import TP11FComponent from "../components/templates/TP11FComponent";
import TP04AComponent from "../components/templates/TP04AComponent";
import TP05AComponent from "../components/templates/TP05AComponent";
import TP15AComponent from "../components/templates/TP15AComponent";
import { TemplateType } from "../types/appData";
import { TemplateProps } from "../types/templates";
import TP02NComponent from "../components/templates/TP02NComponent";
import TP07AComponent from "../components/templates/TP07AComponent";
import TP08GComponent from "../components/templates/TP08GComponent";
import TPIframeComponent from "../components/templates/TPIframeComponent";

export interface UseTemplateMapperProps extends TemplateProps {}
const useTemplateMapper = (props: UseTemplateMapperProps) => {
  const templateMapper: Record<TemplateType, JSX.Element> = {
    TP01A: <TP01AComponent {...props} />,
    TP02C: <TP02CComponent {...props} />,
    TP02F: <TP02FComponent {...props} />,
    TP02M: <TP02MComponent {...props} />,
    TP02N: <TP02NComponent {...props} />,
    TP03A: <TP03AComponent {...props} />,
    TP03B: <TP03BComponent {...props} />,
    TP03C: <TP03BComponent {...props} />,
    TP03D: <TP03BComponent {...props} />,
    TP11A: <TP11FComponent {...props} />,
    TP11F: <TP11FComponent {...props} />,
    TP04A: <TP04AComponent {...props} />,
    TP05A: <TP05AComponent {...props} />,
    TP07A: <TP07AComponent {...props} />,
    TP08G: <TP08GComponent {...props} />,
    TP15A: <TP15AComponent {...props} />,
    TPIframe: <TPIframeComponent {...props} />,
  };

  const getTemplateComponent = (templateType: TemplateType) => {
    return templateMapper[templateType];
  };

  return { getTemplateComponent };
};

export default useTemplateMapper;
