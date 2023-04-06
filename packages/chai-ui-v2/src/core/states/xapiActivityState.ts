import { atom } from "recoil";
import { LRSActivityState } from "../types";

export const xapiActivityState = atom<LRSActivityState | undefined>({
  key: "xapiActivityState",
  default: undefined,
});
