// contentLayoutState
import { atom } from "recoil";
import { ContentLayoutType } from "../../types/createContent";

export const contentLayoutState = atom<ContentLayoutType["name"] | undefined>({
  key: "contentLayoutState",
  default: undefined,
});
