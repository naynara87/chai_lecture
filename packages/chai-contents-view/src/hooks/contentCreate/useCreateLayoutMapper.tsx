import CreateTP01Layout from "../../components/pages/content-temp/Layouts/CreateTP01Layout";
import CreateTP02Layout from "../../components/pages/content-temp/Layouts/CreateTP02Layout";
import CreateTP03Layout from "../../components/pages/content-temp/Layouts/CreateTP03Layout";
import CreateTP04Layout from "../../components/pages/content-temp/Layouts/CreateTP04Layout";
import CreateTP05Layout from "../../components/pages/content-temp/Layouts/CreateTP05Layout";
import { Content, CreateTemplateType } from "../../types/appData";
import { CreatorContent } from "./useCreateContent";

export interface useCreateLayoutMapperProps {
  components: (JSX.Element | JSX.Element[] | undefined)[];
  componentList: (CreatorContent | undefined)[];
  setComponentIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  addNewComponent: (contentType: Content["type"], componentIndex: number) => void;
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
  };

  const getTemplateLayout = (templateType: CreateTemplateType) => {
    return layoutMapper[templateType];
  };

  return { getTemplateLayout };
};

export default useCreateLayoutMapper;
