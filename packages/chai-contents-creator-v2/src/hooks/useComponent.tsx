import { Content, ID } from "chai-ui-v2";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import IconTextCreator from "../components/contents/IconTextCreator";
import NumberingTextListCreator from "../components/contents/NumberingTextListCreator";
import TextCreator from "../components/contents/TextCreator";
import DummyComponent from "../components/molecules/temp/DummyComponent";
import { focusedIdState } from "../states/focusedIdState";
import { ContentCommonProps } from "../types/page";

const useComponent = () => {
  const [focusedId, setFocusedId] = useRecoilState(focusedIdState);

  const getComponent = useCallback((props: ContentCommonProps) => {
    const { content } = props;
    const componentMap: Partial<Record<Content["type"], JSX.Element>> = {
      text: <TextCreator key={content.id} {...props} />,
      iconText: <IconTextCreator key={content.id} {...props} />,
      numberingTextList: (
        <NumberingTextListCreator key={content.id} {...props} />
      ),
    };
    return componentMap[content.type] ?? <DummyComponent />;
  }, []);

  const resetFocusedId = useCallback(() => {
    setFocusedId(undefined);
  }, [setFocusedId]);

  useEffect(() => {
    // FIXME: 싱글톤 패턴으로 리팩토링
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

  return {
    getComponent,
    focusedId,
    setFocusedId: _setFocusedId,
  };
};

export default useComponent;

export type ReturnUseComponent = ReturnType<typeof useComponent>;
