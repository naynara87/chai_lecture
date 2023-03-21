import { Page } from "chai-ui-v2";
import { atom } from "recoil";

export const pageState = atom<Partial<Page>>({
  key: "pageState",
  default: {
    name: "",
  },
});
