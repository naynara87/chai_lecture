import { Template01Type } from "./templates";

export type ID = string | number;

export type Page = Template01Type;

export type TemplateType = Page["template"]["type"];

export type characterType =
  | "didiAngry"
  | "didiGlasses"
  | "didiHeart"
  | "didiSad"
  | "didiSmile"
  | "didiSurprise"
  | "didiWink"
  | "didiWinking"
  | "kkungiHeart"
  | "kkungiLaugh"
  | "kkungiPositive"
  | "kkungiSmile"
  | "kkungiWink"
  | "winiProud"
  | "winiSad"
  | "winiShock"
  | "winiSmile"
  | "winiSurprise"
  | "winiWink";
