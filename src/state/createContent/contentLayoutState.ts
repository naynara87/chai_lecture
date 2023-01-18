// contentLayoutState
import { atom } from "recoil";
import { CreateTemplateType } from "../../types/appData";

interface contentLayoutStateType {
  layoutName: CreateTemplateType;
  layoutAreaIndex: number;
}

export const contentLayoutState = atom<contentLayoutStateType | undefined>({
  key: "contentLayoutState",
  default: undefined,
});
