import { Content, CreateTemplateType } from "chai-ui";
import CreateTP01Layout from "../components/layout/CreateTP01Layout";
import CreateTP02Layout from "../components/layout/CreateTP02Layout";
import CreateTP03Layout from "../components/layout/CreateTP03Layout";
import CreateTP04Layout from "../components/layout/CreateTP04Layout";
import CreateTP05Layout from "../components/layout/CreateTP05Layout";
import CreateTP06Layout from "../components/layout/CreateTP06Layout";
import CreateTP07Layout from "../components/layout/CreateTP07Layout";
import CreateTP08Layout from "../components/layout/CreateTP08Layout";
import CreateTP09Layout from "../components/layout/CreateTP09Layout";
import CreateTP10Layout from "../components/layout/CreateTP10Layout";
import CreateTP11Layout from "../components/layout/CreateTP11Layout";
import CreateTP12Layout from "../components/layout/CreateTP12Layout";
import CreateTP13Layout from "../components/layout/CreateTP13Layout";
import CreateTP14Layout from "../components/layout/CreateTP14Layout";
import CreateTP15Layout from "../components/layout/CreateTP15Layout";
import CreateTP16Layout from "../components/layout/CreateTP16Layout";
import CreateTP17Layout from "../components/layout/CreateTP17Layout";
import CreateTP18Layout from "../components/layout/CreateTP18Layout";
import CreateTP19Layout from "../components/layout/CreateTP19Layout";
import CreateTP20Layout from "../components/layout/CreateTP20Layout";
import CreateTP21Layout from "../components/layout/CreateTP21Layout";
import CreateTP22Layout from "../components/layout/CreateTP22Layout";
import CreateTP23Layout from "../components/layout/CreateTP23Layout";
import CreateTP24Layout from "../components/layout/CreateTP24Layout";
import { CreatorContent } from "./useCreateContent";

export interface useCreateLayoutMapperProps {
  components: (JSX.Element | JSX.Element[] | undefined)[];
  componentList: (CreatorContent | undefined)[];
  setComponentIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  addNewComponent: (
    contentType: Content["type"],
    componentIndex: number
  ) => void;
  componentNames: Content["type"][];
  contentsContextMenuRef: React.MutableRefObject<number | undefined>;
  handleFocusHtml: (id?: string, type?: string, index?: number) => void;
  id?: string;
}

const useCreateLayoutMapper = (props: useCreateLayoutMapperProps) => {
  const layoutMapper: Record<CreateTemplateType, JSX.Element> = {
    TP01: <CreateTP01Layout {...props} />,
    TP02: <CreateTP02Layout {...props} />,
    TP03: <CreateTP03Layout {...props} />,
    TP04: <CreateTP04Layout {...props} />,
    TP05: <CreateTP05Layout {...props} />,
    TP06: <CreateTP06Layout {...props} />,
    TP07: <CreateTP07Layout {...props} />,
    TP08: <CreateTP08Layout {...props} />,
    TP09: <CreateTP09Layout {...props} />,
    TP10: <CreateTP10Layout {...props} />,
    TP11: <CreateTP11Layout {...props} />,
    TP12: <CreateTP12Layout {...props} />,
    TP13: <CreateTP13Layout {...props} />,
    TP14: <CreateTP14Layout {...props} />,
    TP15: <CreateTP15Layout {...props} />,
    TP16: <CreateTP16Layout {...props} />,
    TP17: <CreateTP17Layout {...props} />,
    TP18: <CreateTP18Layout {...props} />,
    TP19: <CreateTP19Layout {...props} />,
    TP20: <CreateTP20Layout {...props} />,
    TP21: <CreateTP21Layout {...props} />,
    TP22: <CreateTP22Layout {...props} />,
    TP23: <CreateTP23Layout {...props} />,
    TP24: <CreateTP24Layout {...props} />,
  };

  const getTemplateLayout = (templateType: CreateTemplateType) => {
    return layoutMapper[templateType];
  };

  return { getTemplateLayout };
};

export default useCreateLayoutMapper;
