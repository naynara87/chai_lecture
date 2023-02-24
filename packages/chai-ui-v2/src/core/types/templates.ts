import { ID } from "./appData";
import { Content } from "./contents";

export type TemplateData =
  | Template01Data
  | Template_H_3_7Data
  | Template_H_5_5Data;

/**
 * 하나의 카드가 있는 템플릿
 */
export type Template01Data = {
  id: ID;
  type: "Template01";
  contents: Content[];
};

/**
 * 두 개의 카드가 가로로 나뉘어진 템플릿
 * - 왼쪽 3 : 오른쪽 7
 */
export type Template_H_3_7Data = {
  id: ID;
  type: "Template_H_3_7";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 두 개의 카드가 가로로 나뉘어진 템플릿
 * - 왼쪽 5 : 오른쪽 5
 */
export type Template_H_5_5Data = {
  id: ID;
  type: "Template_H_5_5";
  leftContents: Content[];
  rightContents: Content[];
};
