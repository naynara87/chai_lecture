import { XapiV1 } from "chai-ui-v2";
import { atom } from "recoil";

export const xapiV1State = atom<XapiV1 | undefined>({
  key: "xapiV1State",
  default: undefined,
});
