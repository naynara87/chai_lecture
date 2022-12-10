import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CornerCompleteState, cornersState } from "../state/corners";
import { Corner2, ID } from "../types/appData";
import { CornerStateType } from "../types/corner";

export interface FooterCornerState {
  id: ID;
  state: CornerStateType;
}

interface UseFooterStateProps {
  currentCorner: Corner2 | undefined;
}
const useFooterState = ({ currentCorner }: UseFooterStateProps) => {
  const [cornerStateList, setCornerStateList] = useState<FooterCornerState[]>([]);
  const [completedCorners] = useRecoilState(cornersState);

  const getCornerState = useCallback(
    (currentCorner: Corner2, comparingCorner: CornerCompleteState) => {
      if (currentCorner.id === comparingCorner.id) {
        return "current";
      } else if (comparingCorner.isCompleted) {
        return "completed";
      } else {
        return "inCompleted";
      }
    },
    [],
  );

  useEffect(() => {
    if (!currentCorner) return;
    const cornerStateList = completedCorners.map(
      (corner) =>
        ({
          id: corner.id,
          state: getCornerState(currentCorner, corner),
        } as FooterCornerState),
    );
    setCornerStateList(cornerStateList);
  }, [completedCorners, currentCorner, getCornerState]);

  return {
    cornerStateList,
  };
};

export default useFooterState;
