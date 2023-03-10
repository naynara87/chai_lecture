import { AllTemplateData } from "chai-ui-v2";
import { atom } from "recoil";

export const slidesState = atom<AllTemplateData[]>({
  key: "slidesState",
  default: [
    {
      id: 0,
      type: "Template01",
      contents: [],
    },
  ],
});
