import { atom } from "recoil";

type EduModeType = "edu" | "review";

export const eduModeState = atom<EduModeType | undefined>({
  key: "eduModeState",
  default: undefined,
});
