import { atom } from "recoil";

export const reviewCornerIndexState = atom<number>({
  key: "reviewCornerIndexState",
  default: 0,
});
