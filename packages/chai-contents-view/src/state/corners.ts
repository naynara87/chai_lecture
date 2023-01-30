// recoil state for corners

import { ID } from "chai-ui";
import { atom } from "recoil";

export type CornerCompleteState = {
  id: ID;
  isCompleted: boolean;
};

export const cornersState = atom<CornerCompleteState[]>({
  key: "cornersState",
  default: [],
});
