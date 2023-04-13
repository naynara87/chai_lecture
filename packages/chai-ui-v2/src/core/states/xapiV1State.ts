import { atom } from "recoil";
import { XapiV1 } from "../types";

export const xapiV1State = atom<XapiV1 | undefined>({
  key: "xapiV1State",
  default: undefined,
});
