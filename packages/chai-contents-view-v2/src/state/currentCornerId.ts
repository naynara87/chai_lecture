import { ID } from "chai-ui-v2";
import { atom } from "recoil";

export const currentCornerIdState = atom<ID | undefined>({
  key: "currentCornerIdState",
  default: undefined,
});
