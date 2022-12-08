import { tabletBreakPoint } from "../constants/layout";

export const changePXtoVW = (px: number) => {
  return `${(px / 1920) * 100}vw`;
};

export const changePXtoVH = (px: number) => {
  return `${(px / 1440) * 100}vh`;
};
