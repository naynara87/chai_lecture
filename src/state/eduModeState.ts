import { atom } from "recoil";

type EduModeType = "edu" | "review";

export const eduModeState = atom<EduModeType>({
  key: "eduModeState",
  default: "edu",
});
