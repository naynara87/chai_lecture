import { useCallback } from "react";
import { useRecoilState } from "recoil";
import {
  CompletedCheckComponentType,
  completePageComponentsState,
} from "../states/completePageComponentsState";
import { ID } from "../types";

const usePageCompleted = () => {
  const [completedPageComponents, setCompletedPageComponents] = useRecoilState(
    completePageComponentsState,
  );

  const setPushCompletedPageComponents = useCallback(
    (componentType: CompletedCheckComponentType, componentId: ID) => {
      setCompletedPageComponents((prev) => [
        ...prev,
        { componentType, isCompleted: false, componentId },
      ]);
    },
    [setCompletedPageComponents],
  );

  const setComponentCompleted = useCallback(
    (componentId: ID) => {
      const currentCompletedPageComponents = [...completedPageComponents];
      const newCompletedPageComponents = currentCompletedPageComponents.map(
        (completedComponent) => {
          if (completedComponent.componentId === componentId) {
            return {
              ...completedComponent,
              isCompleted: true,
            };
          }
          return completedComponent;
        },
      );
      setCompletedPageComponents(newCompletedPageComponents);
    },
    [completedPageComponents, setCompletedPageComponents],
  );

  return {
    setPushCompletedPageComponents,
    completedPageComponents,
    setCompletedPageComponents,
    setComponentCompleted,
  };
};

export default usePageCompleted;
