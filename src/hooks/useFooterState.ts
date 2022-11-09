import { useCallback, useEffect, useState } from "react";
import { getAppData } from "../data/tempApi";
import { AppData, Corner, ID } from "../types/appData";
import { CornerStateType } from "../types/corner";

export interface FooterCornerState {
  id: ID;
  state: CornerStateType;
}

interface UseFooterStateProps {
  appData: AppData;
  currentCorner: Corner;
}
const useFooterState = ({ appData, currentCorner }: UseFooterStateProps) => {
  const [appDataState, setAppDataState] = useState<AppData>();
  const [cornerStateList, setCornerStateList] = useState<FooterCornerState[]>([]);
  const fetchAppData = useCallback(async () => {
    if (appData) {
      setAppDataState(appData);
      return;
    }
    const appDataFromServer = await getAppData();
    setAppDataState(appDataFromServer);
  }, [appData]);

  useEffect(() => {
    fetchAppData();
  }, [fetchAppData]);

  const getCornerState = useCallback((currentCorner: Corner, comparingCorner: Corner) => {
    // "current" | "completed" | "inCompleted";
    if (currentCorner.id === comparingCorner.id) {
      return "current";
    } else if (comparingCorner.isCompleted) {
      return "completed";
    } else {
      return "inCompleted";
    }
  }, []);

  useEffect(() => {
    if (!appDataState) return;
    const cornerStateList = appDataState.corners.map(
      (corner) =>
        ({
          id: corner.id,
          state: getCornerState(currentCorner, corner),
        } as FooterCornerState),
    );
    setCornerStateList(cornerStateList);
  }, [appDataState, currentCorner, getCornerState]);

  return {
    appData: appDataState,
    cornerStateList,
  };
};

export default useFooterState;
