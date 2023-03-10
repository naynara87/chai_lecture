import { Content, ID } from "chai-ui-v2";
import { useCallback, useState } from "react";
import TextCreator from "../components/contents/TextCreator";
import DummyComponent from "../components/molecules/temp/DummyComponent";
import { ContentCommonProps } from "../types/page";

const useComponent = () => {
  const [focusedId, setFocusedId] = useState<ID>();
  const getComponent = useCallback((props: ContentCommonProps) => {
    const { content } = props;
    const componentMap: Partial<Record<Content["type"], JSX.Element>> = {
      text: <TextCreator {...props} />,
    };
    return componentMap[content.type] ?? <DummyComponent />;
  }, []);

  const resetFocusedId = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setFocusedId(undefined);
      console.log("resetFocusedId");
    }
  }, []);

  return {
    getComponent,
    focusedId,
    setFocusedId,
    resetFocusedId,
  };
};

export default useComponent;
