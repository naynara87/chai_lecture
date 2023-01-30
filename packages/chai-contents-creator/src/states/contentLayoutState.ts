// contentLayoutState
import { CreateTemplateType } from "chai-ui";
import { atom } from "recoil";

export interface contentLayoutStateType {
  layoutName: CreateTemplateType;
  layoutAreaIndex: number;
}

export const contentLayoutState = atom<contentLayoutStateType | undefined>({
  key: "contentLayoutState",
  default: undefined,
});
