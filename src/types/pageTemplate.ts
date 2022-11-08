import { ID } from "./appData";
import {
  ChooseTextByAudioContent,
  ListenWordsContent,
  HtmlContent,
  ImagesContent,
  TextBoxesContent,
  IconText,
  ChooseText,
  VideoContent,
  AudioContent,
  AudioRecordContent,
} from "./templateContents";

export interface PageTemplate {
  id: ID;
  title: string;
  description: string;
  tabNames?: {
    name: string;
    templateId: ID;
  }[];
  template: unknown;
}

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

type TP03AContent = HtmlContent | ListenWordsContent;

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

type TP03BContent = HtmlContent | TextBoxesContent;

export type TP03C = {
  id: ID;
  title: string;
  description: string;
  template: TP03CTemplate;
};

type TP03CTemplate = {
  type: "TP03C";
  contents: TP03CContent[];
};

type TP03CContent = HtmlContent | TextBoxesContent;

export type TP03D = {
  id: ID;
  title: string;
  description: string;
  template: TP03DTemplate;
};

type TP03DTemplate = {
  type: "TP03D";
  contents: TP03DContent[];
};

type TP03DContent = HtmlContent | TextBoxesContent;

export type TP02C = {
  id: ID;
  title: string;
  description: string;
  template: TP02CTemplate;
};

type TP02CTemplate = {
  type: "TP02C";
  contents: TP02CContent[];
};

type TP02CContent = ImagesContent;

export type TP02M = {
  id: ID;
  title: string;
  description: string;
  template: TP02MTemplate;
};

type TP02MTemplate = {
  type: "TP02M";
  contents: TP02MContent[];
};

type TP02MContent = TextBoxesContent;

export type TP04A = {
  id: ID;
  title: string;
  description: string;
  template: TP04ATemplate;
};

type TP04ATemplate = {
  type: "TP04A";
  contents: TP04AContent[];
};

type TP04AContent = ImagesContent | HtmlContent;

export type TP05 = {
  id: ID;
  title: string;
  description: string;
  template: TP05Template;
};

type TP05Template = {
  type: "TP05";
  contents: TP05Content[];
};

type TP05Content = TextBoxesContent | HtmlContent;

export type TP11F = {
  id: ID;
  title: string;
  description: string;
  template: TP11FTemplate;
};

type TP11FTemplate = {
  type: "TP11F";
  contents: TP11FContent[];
};

type TP11FContent = IconText | ChooseText;

type TabName = {
  name: string;
  templateId: ID;
};

export type TP12A = {
  id: ID;
  title: string;
  description: string;
  tabNames: TabName[];
  template: {
    type: "TP12A";
    contents: [];
  };
  tabTemplates: TP12ATemplate[];
};

type TP12ATemplate = {
  type: "TP12A";
  contents: TP12AContent[];
};

type TP12AContent = IconText | ChooseText;

/**
 * TP12B, TP12C
 */
export type TP12B = {
  id: ID;
  title: string;
  description: string;
  tabNames: TabName[];
  template: {
    type: "TP12B";
    contents: [];
  };
  tabTemplates: TP12BTemplate[];
};

type TP12BTemplate = {
  type: "TP12B";
  contents: TP12BContent[];
};

type TP12BContent = VideoContent;

export type TP13A = {
  id: ID;
  title: string;
  description: string;
  tabNames: TabName[];
  template: {
    type: "TP13A";
    contents: [];
  };
  tabTemplates: TP13ATemplate[];
};

type TP13ATemplate = {
  type: "TP13A";
  contents: TP13AContent[];
};

type TP13AContent = ImagesContent | HtmlContent | AudioContent;

export type TP14A = {
  id: ID;
  title: string;
  description: string;
  tabNames: TabName[];
  template: {
    type: "TP14A";
    contents: []; // TODO: 탭에 대한 정책 필요
  };
  tabTemplates: TP14ATemplate[];
};

type TP14ATemplate = {
  type: "TP14A";
  contents: TP14AContent[];
};

type TP14AContent = TextBoxesContent | AudioContent;

export type TP14B = {
  id: ID;
  title: string;
  description: string;
  tabNames: TabName[];
  template: {
    type: "TP14B";
    contents: [];
  };
  tabTemplates: TP14BTemplate[];
};

type TP14BTemplate = {
  type: "TP14B";
  contents: TP14BContent[];
};

type TP14BContent = TextBoxesContent | AudioRecordContent;

/**
 * TODO: 팁에 대한 구분 필요
 */
export type TP15A = {
  id: ID;
  title: string;
  description: string;
  tabNames: TabName[];
  template: {
    type: "TP15A";
    contents: [];
  };
  tabTemplates: TP15ATemplate[];
};

type TP15ATemplate = {
  type: "TP15A";
  contents: TP15AContent[];
};

type TP15AContent = HtmlContent | ImagesContent;
