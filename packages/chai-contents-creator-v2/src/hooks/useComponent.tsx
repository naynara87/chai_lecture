import { Content, ID } from "chai-ui-v2";
import { useCallback, useEffect, useState } from "react";
import TextCreator from "../components/contents/TextCreator";
import DummyComponent from "../components/molecules/temp/DummyComponent";
import { ContentCommonProps } from "../types/page";

const useComponent = () => {
  const [focusedId, setFocusedId] = useState<ID>();
  const getComponent = useCallback((props: ContentCommonProps) => {
    const { content } = props;
    const componentMap: Partial<Record<Content["type"], JSX.Element>> = {
      text: <TextCreator key={content.id} {...props} />,
    };
    return componentMap[content.type] ?? <DummyComponent />;
  }, []);

  const resetFocusedId = useCallback(() => {
    setFocusedId(undefined);
  }, []);

  useEffect(() => {
    window.addEventListener("click", () => {
      console.log("resetFocusedId");
      resetFocusedId();
    });
    return () => {
      window.removeEventListener("click", resetFocusedId);
    };
  }, [resetFocusedId]);

  const _setFocusedId = useCallback((e: React.MouseEvent, id: ID) => {
    e.stopPropagation();
    setFocusedId(id);
  }, []);

  return {
    getComponent,
    focusedId,
    setFocusedId: _setFocusedId,
  };
};

export default useComponent;

export type ReturnUseComponent = ReturnType<typeof useComponent>;
