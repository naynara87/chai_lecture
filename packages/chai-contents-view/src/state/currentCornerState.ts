import { atom } from "recoil";
import { Corner2 } from "../types/appData";

export const currentCornerState = atom<Corner2 | undefined>({
  key: "currentCornerState",
  default: undefined,
});
