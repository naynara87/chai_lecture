import { ID } from "./appData";
import { ChooseTextByAudioContent, ListenWordsContent, HtmlContent } from "./templateContents";

export type TP01A = {
  id: ID;
  title: string;
  description: string;
  template: TP01ATemplate;
};

type TP01ATemplate = {
  type: "TP01A";
  contents: TP01AContent[];
};

type TP01AContent = ChooseTextByAudioContent;

export type TP03A = {
  id: ID;
  title: string;
  description: string;
  template: TP03ATemplate;
};

type TP03ATemplate = {
  type: "TP03A";
  contents: TP03AContent[];
};

export type TP03AContent = HtmlContent | ListenWordsContent;

export type TP03B = {
  id: ID;
  title: string;
  description: string;
  template: TP03BTemplate;
};

type TP03BTemplate = {
  type: "TP03B";
  contents: TP03BContent[];
};

type TP03BContent = HtmlContent | ListenWordsContent;
