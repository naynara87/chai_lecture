import { atom } from "recoil";
import { Page } from "../types";

export const currentPageState = atom<Page | undefined>({
  key: "currentPageState",
  default: undefined,
});
