import { Content, ID } from "chai-ui-v2";
import { useCallback, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import BorderTextBoxCreator from "../components/contents/BorderTextBoxCreator";
import IconTextCreator from "../components/contents/IconTextCreator";
import NumberingTextListCreator from "../components/contents/NumberingTextListCreator";
import TextCreator from "../components/contents/TextCreator";
import DummyComponent from "../components/molecules/temp/DummyComponent";
import { focusedIdState } from "../states/focusedIdState";
import {
  CommonTemplateComponentLocation,
  ContentCommonProps,
  DraggableContentCommonProps,
} from "../types/page";

const useComponent = () => {
  const [focusedId, setFocusedId] = useRecoilState(focusedIdState);

  const getContent = (
    props: DraggableContentCommonProps,
    type: Content["type"],
  ) => {
    const componentMap: Partial<Record<Content["type"], JSX.Element>> = {
      text: <TextCreator {...props} />,
      iconText: <IconTextCreator {...props} />,
      numberingTextList: <NumberingTextListCreator {...props} />,
      borderTextBox: <BorderTextBoxCreator {...props} />,
    };

    return componentMap[type];
  };

  /**
   * 공통 템플릿이 아닌 경우 isDraggable을 false로 전달하자
   */
  const getComponent = (props: ContentCommonProps) => {
    const { content, index, isDraggable = true } = props;
    return getContent(props, content.type) ? (
      <Draggable
        key={content.id.toString()}
        draggableId={content.id.toString()}
        index={index}
      >
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            {getContent(
              {
                ...props,
                draggableProvided: provided,
                isDraggable,
              },
              content.type,
            )}
          </div>
        )}
      </Draggable>
    ) : (
      <DummyComponent />
    );
  };

  const resetFocusedId = useCallback(() => {
    setFocusedId(undefined);
  }, [setFocusedId]);

  useEffect(() => {
    window.addEventListener("click", resetFocusedId);
    return () => {
      window.removeEventListener("click", resetFocusedId);
    };
  }, [resetFocusedId]);

  const _setFocusedId = useCallback(
    (e: React.MouseEvent, id: ID) => {
      e.stopPropagation();
      setFocusedId(id);
    },
    [setFocusedId],
  );

  // dnd 관련함수
  const getDroppableId = useCallback(
    (slideId: ID, position: CommonTemplateComponentLocation) => {
      return `${slideId}_${position}`;
    },
    [],
  );

  return {
    getComponent,
    focusedId,
    setFocusedId: _setFocusedId,
    getDroppableId,
  };
};

export default useComponent;

export type ReturnUseComponent = ReturnType<typeof useComponent>;
