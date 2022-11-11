import { useCallback, useEffect, useState } from "react";
import { AppData, Corner, ID } from "../types/appData";
import { CornerStateType } from "../types/corner";

export interface FooterCornerState {
  id: ID;
  state: CornerStateType;
}

interface UseFooterStateProps {
  appData: AppData | undefined;
  currentCorner: Corner | undefined;
}
const useFooterState = ({ appData, currentCorner }: UseFooterStateProps) => {
  const [cornerStateList, setCornerStateList] = useState<FooterCornerState[]>([]);

  const getCornerState = useCallback((currentCorner: Corner, comparingCorner: Corner) => {
    if (currentCorner.id === comparingCorner.id) {
      return "current";
    } else if (comparingCorner.isCompleted) {
      return "completed";
    } else {
      return "inCompleted";
    }
  }, []);

  useEffect(() => {
    if (!appData) return;
    if (!currentCorner) return;
    const cornerStateList = appData.corners.map(
      (corner) =>
        ({
          id: corner.id,
          state: getCornerState(currentCorner, corner),
        } as FooterCornerState),
    );
    setCornerStateList(cornerStateList);
  }, [appData, currentCorner, getCornerState]);

  return {
    cornerStateList,
  };
};

export default useFooterState;
