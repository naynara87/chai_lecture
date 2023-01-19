import { atom } from "recoil";
import { Content } from "../../types/appData";

export const pasteComponentState = atom<Content | undefined>({
  key: "pasteComponentState",
  default: undefined,
});
