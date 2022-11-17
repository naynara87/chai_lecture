import { tabletBreakPoint } from "../constants/layout";

export const changePXtoVW = (px: number) => {
  return `clamp(${Math.round((tabletBreakPoint * px) / 1920)}px, ${(px / 1920) * 100}vw, ${px}px)`;
};

export const changePXtoVH = (px: number) => {
  return `clamp(${Math.round((tabletBreakPoint * px) / 1440)}px, ${(px / 1440) * 100}vh, ${px}px)`;
};
