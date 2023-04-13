import { atom } from "recoil";
import { ID } from "../types";

export type CompletedCheckComponentType = "video" | "audio" | "quiz" | "record";

export type CompletePageComponentsState = {
  componentId: ID;
  componentType: CompletedCheckComponentType;
  isCompleted: boolean;
};

export const completePageComponentsState = atom<CompletePageComponentsState[]>({
  key: "completePageComponentsState",
  default: [],
});
