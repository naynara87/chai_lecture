// contentLayoutState
import { atom } from "recoil";
import { TemplateType } from "../../types/appData";

export const contentLayoutState = atom<TemplateType | undefined>({
  key: "contentLayoutState",
  default: undefined,
});
