import React from "react";
import TP01AComponent from "../components/templates/TP01AComponent";
import TP02CComponent from "../components/templates/TP02CComponent";
import TP02FComponent from "../components/templates/TP02FComponent";
import TP02MComponent from "../components/templates/TP02MComponent";
import TP03AComponent from "../components/templates/TP03AComponent";
import TP03BComponent from "../components/templates/TP03BComponent";
import TP11FComponent from "../components/templates/TP11FComponent";
import TP04AComponent from "../components/templates/TP04AComponent";
import TP05AComponent from "../components/templates/TP05AComponent";
import { CreateTemplateType, TemplateType } from "../types/appData";
import { TemplateProps } from "../types/templates";
import TP02NComponent from "../components/templates/TP02NComponent";
import TP07AComponent from "../components/templates/TP07AComponent";
import TP02GComponent from "../components/templates/TP02GComponent";
import TPIframeComponent from "../components/templates/TPIframeComponent";
import TP01BComponent from "../components/templates/TP01BComponent";
import TP10AComponent from "../components/templates/TP10AComponent";
import TP11GComponent from "../components/templates/TP11GComponent";
import TP24AComponent from "../components/templates/TP24AComponent";
import TP09AComponent from "../components/templates/TP09AComponent";
import TP19AComponent from "../components/templates/TP19AComponent";
import TPTabComponent from "../components/templates/TPTabComponent";
import TP02Component from "../components/templates/TP02Component";
import TP03Component from "../components/templates/TP03Component";
import TP04Component from "../components/templates/TP04Component";
import TP05Component from "../components/templates/TP05Component";
import TP07Component from "../components/templates/TP07Component";
import TP13Component from "../components/templates/TP13Component";
import TP15Component from "../components/templates/TP15Component";
import TP16Component from "../components/templates/TP16Component";
import TP24BComponent from "../components/templates/TP24BComponent";
import TP08AComponent from "../components/templates/TP08AComponent";
import TP02BComponent from "../components/templates/TP02BComponent";
import TP06AComponent from "../components/templates/TP06AComponent";
import TP02AComponent from "../components/templates/TP02AComponent";
import TP08BComponent from "../components/templates/TP08BComponent";
import TP10CComponent from "../components/templates/TP10CComponent";
import TP23Component from "../components/templates/TP23Component";
import TP05GComponent from "../components/templates/TP05GComponent";
import TP05CComponent from "../components/templates/TP05CComponent";
import TP03EComponent from "../components/templates/TP03EComponent";
import TP03IComponent from "../components/templates/TP03IComponent";
import TP05FComponent from "../components/templates/TP05FComponent";
import TP11DComponent from "../components/templates/TP11DComponent";
import TP11EComponent from "../components/templates/TP11EComponent";
import TP02PComponent from "../components/templates/TP02PComponent";
import TP05DComponent from "../components/templates/TP05DComponent";
import TP09BComponent from "../components/templates/TP09BComponent";
import TP01Component from "../components/templates/TP01Component";
import TP06Component from "../components/templates/TP06Component";
import TP08Component from "../components/templates/TP08Component";
import TP09Component from "../components/templates/TP09Component";
import TP10Component from "../components/templates/TP10Component";
import TP11Component from "../components/templates/TP11Component";
import TP12Component from "../components/templates/TP12Component";
import TP14Component from "../components/templates/TP14Component";
import TP17Component from "../components/templates/TP17Component";
import TP18Component from "../components/templates/TP18Component";
import TP19Component from "../components/templates/TP19Component";
import TP20Component from "../components/templates/TP20Component";
import TP21Component from "../components/templates/TP21Component";
import TP22Component from "../components/templates/TP22Component";
import TP24Component from "../components/templates/TP24Component";

export interface UseTemplateMapperProps extends TemplateProps {}
const useTemplateMapper = (props: UseTemplateMapperProps) => {
  const templateMapper: Record<TemplateType, JSX.Element> = {
    TP01: <TP01Component {...props} />,
    TP01A: <TP01AComponent {...props} />,
    TP01B: <TP01BComponent {...props} />,
    TP02: <TP02Component {...props} />,
    TP02B: <TP02BComponent {...props} />,
    TP02A: <TP02AComponent {...props} />,
    TP02C: <TP02CComponent {...props} />,
    TP02E: <TP02NComponent {...props} />,
    TP02F: <TP02FComponent {...props} />,
    TP02M: <TP02MComponent {...props} />,
    TP02N: <TP02NComponent {...props} />,
    TP02O: <TP02NComponent {...props} />,
    TP02P: <TP02PComponent {...props} />,
    TP02G: <TP02GComponent {...props} />,
    TP02L: <TP02GComponent {...props} />,
    TP03: <TP03Component {...props} />,
    TP03A: <TP03AComponent {...props} />,
    TP03B: <TP03BComponent {...props} />,
    TP03C: <TP03BComponent {...props} />,
    TP03D: <TP03BComponent {...props} />,
    TP03E: <TP03EComponent {...props} />,
    TP03I: <TP03IComponent {...props} />,
    TP04: <TP04Component {...props} />,
    TP04A: <TP04AComponent {...props} />,
    TP05: <TP05Component {...props} />,
    TP05A: <TP05AComponent {...props} />,
    TP05C: <TP05CComponent {...props} />,
    TP05D: <TP05DComponent {...props} />,
    TP05E: <TP05CComponent {...props} />,
    TP05F: <TP05FComponent {...props} />,
    TP05G: <TP05GComponent {...props} />,
    TP06: <TP06Component {...props} />,
    TP06A: <TP06AComponent {...props} />,
    TP07: <TP07Component {...props} />,
    TP07A: <TP07AComponent {...props} />,
    TP08: <TP08Component {...props} />,
    TP08A: <TP08AComponent {...props} />,
    TP08B: <TP08BComponent {...props} />,
    TP09: <TP09Component {...props} />,
    TP09A: <TP09AComponent {...props} />,
    TP09B: <TP09BComponent {...props} />,
    TP10: <TP10Component {...props} />,
    TP10A: <TP10AComponent {...props} />,
    TP10B: <TP10AComponent {...props} />,
    TP10C: <TP10CComponent {...props} />,
    TP11: <TP11Component {...props} />,
    TP11A: <TP11FComponent {...props} />,
    TP11D: <TP11DComponent {...props} />,
    TP11E: <TP11EComponent {...props} />,
    TP11F: <TP11FComponent {...props} />,
    TP11G: <TP11GComponent {...props} />,
    TP12: <TP12Component {...props} />,
    TP13: <TP13Component {...props} />,
    TP14: <TP14Component {...props} />,
    TP15: <TP15Component {...props} />,
    TP16: <TP16Component {...props} />,
    TP17: <TP17Component {...props} />,
    TP18: <TP18Component {...props} />,
    TP19: <TP19Component {...props} />,
    TP19A: <TP19AComponent {...props} />,
    TP20: <TP20Component {...props} />,
    TP21: <TP21Component {...props} />,
    TP22: <TP22Component {...props} />,
    TP23: <TP23Component {...props} />,
    TP24: <TP24Component {...props} />,
    TP24A: <TP24AComponent {...props} />,
    TP24B: <TP24BComponent {...props} />,
    TPIframe: <TPIframeComponent {...props} />,
    TPTab: <TPTabComponent {...props} />,
  };

  const getTemplateComponent = (
    templateType: TemplateType | CreateTemplateType
  ) => {
    return templateMapper[templateType];
  };

  return { getTemplateComponent };
};

export default useTemplateMapper;
