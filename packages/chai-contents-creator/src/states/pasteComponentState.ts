import { Content } from "chai-ui";
import { atom } from "recoil";

export const pasteComponentState = atom<Content | undefined>({
  key: "pasteComponentState",
  default: undefined,
});
