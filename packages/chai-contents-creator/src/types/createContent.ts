/**
 * 저작도구와 관련된 타입을 정의합니다.
 */

import { CreateTemplateType } from "chai-ui";

export type ContentLayoutType = {
  name: CreateTemplateType;
  layoutAreaIndex: number;
  image: string;
};