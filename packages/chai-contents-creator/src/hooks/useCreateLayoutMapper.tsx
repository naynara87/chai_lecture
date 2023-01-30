import { Content, CreateTemplateType } from "chai-ui";
import CreateTP01Layout from "../components/layout/CreateTP01Layout";
import CreateTP02Layout from "../components/layout/CreateTP02Layout";
import CreateTP03Layout from "../components/layout/CreateTP03Layout";
import CreateTP04Layout from "../components/layout/CreateTP04Layout";
import CreateTP05Layout from "../components/layout/CreateTP05Layout";
import CreateTP16Layout from "../components/layout/CreateTP16Layout";
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
    TP16: <CreateTP16Layout {...props} />,
  };

  const getTemplateLayout = (templateType: CreateTemplateType) => {
    return layoutMapper[templateType];
  };

  return { getTemplateLayout };
};

export default useCreateLayoutMapper;
