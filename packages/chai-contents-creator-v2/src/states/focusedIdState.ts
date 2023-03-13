import { ID } from "chai-ui-v2";
import { atom } from "recoil";

export const focusedIdState = atom<ID | undefined>({
  key: "focusedIdState",
  default: undefined,
});
