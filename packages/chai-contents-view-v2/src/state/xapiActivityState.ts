import { LRSActivityState } from "chai-ui-v2";
import { atom } from "recoil";

export const xapiActivityState = atom<LRSActivityState | undefined>({
  key: "xapiActivityState",
  default: undefined,
});
