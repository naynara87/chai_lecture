import { ID } from "chai-ui-v2";
import { atom } from "recoil";

export type CornerCompleteState = {
  id: ID;
  isCompleted: boolean;
};

export const cornersState = atom<CornerCompleteState[]>({
  key: "cornersState",
  default: [],
});
