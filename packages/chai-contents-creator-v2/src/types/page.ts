import {
  AllTemplateData,
  Content,
  ContentType,
  ID,
  TemplateType,
} from "chai-ui-v2";
import { DraggableProvided } from "react-beautiful-dnd";
import { ReturnUseComponent } from "../hooks/useComponent";
import { ReturnUsePage } from "../hooks/usePage";

export interface PageHeaderProps {
  slides: AllTemplateData[];
  slideId: ID;
  handleChangeLayout: (slideId: ID, templateType: TemplateType) => void;
  deleteSlide: (slideId: ID) => void;
}

/**
 * CreatePage에서 사용하는 props
 * 페이지 공통 props
 */
export interface PageCommonProps extends PageHeaderProps {
  key: number | string;
  templateType: TemplateType;
  addComponentMap: AddComponentMap;
  updateContent: ReturnUsePage["updateContent"];
  returnUseComponent: ReturnUseComponent;
}

export type AddComponentMap = {
  addComponentToCommonTemplate: (
    slideId: ID,
    component: ContentType,
    componentLocation: "contents" | "rightContents" | "leftContents",
  ) => void;
};

export type CommonTemplateComponentLocation =
  | "contents"
  | "leftContents"
  | "rightContents";

export type ContentCommonProps = {
  index: number; // 컴포넌트의 index
  currentSlide: AllTemplateData;
  content: Content;
  isFocused: boolean;
  setFocusedId: (e: React.MouseEvent, isFocused: ID) => void;
  position: CommonTemplateComponentLocation;
  updateContent: ReturnUsePage["updateContent"];
  isDraggable?: boolean;
};

export type DraggableContentCommonProps = ContentCommonProps & {
  draggableProvided?: DraggableProvided;
};
