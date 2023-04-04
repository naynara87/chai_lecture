import { atom } from "recoil";

export type CompletePageComponentsState = {
  video?: boolean;
  audio?: boolean;
  answered?: boolean;
  created?: boolean;
};

export const completePageComponentsState = atom<CompletePageComponentsState[]>({
  key: "completePageComponentsState",
  default: [],
});
