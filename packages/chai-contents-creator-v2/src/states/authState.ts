import { atom } from "recoil";

export const authState = atom<boolean>({
  key: "creatorAuthState",
  default: false,
});
