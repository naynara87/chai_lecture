import { Corner2 } from "chai-ui";
import { atom } from "recoil";

export const currentCornerState = atom<Corner2 | undefined>({
  key: "currentCornerState",
  default: undefined,
});
