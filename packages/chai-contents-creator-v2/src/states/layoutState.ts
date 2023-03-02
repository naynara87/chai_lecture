import { TemplateType } from "chai-ui-v2";
import { atom } from "recoil";

export interface layoutStateType {
  templateType: TemplateType;
}

export const layoutState = atom<layoutStateType | undefined>({
  key: "layoutState",
  default: undefined,
});
