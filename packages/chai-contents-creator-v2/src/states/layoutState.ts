import { atom } from "recoil";

export interface layoutStateType {
  templateType: string;
}

export const layoutState = atom<layoutStateType | undefined>({
  key: "layoutState",
  default: undefined,
});
