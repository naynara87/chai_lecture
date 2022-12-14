import { ApproveContent, ID, Page } from "./appData";
import {
  ChooseTextByAudioContent,
  HtmlContent,
  ImagesContent,
  TextBoxesContent,
  IconTextContent,
  ChooseTextContent,
  VideoContent,
  AudioContent,
  AudioRecordContent,
  DragAndDropContent,
  StudyWordsContent,
  DialogContent,
  NumberTableContent,
  WordQuizContent,
  SortWordsContent,
  BottomTabsContent,
  StudySentencesWithVocabularyContent,
  ChooseMediaTextContent,
  SentenceWordContent,
} from "./templateContents";

export type ContentPage = Exclude<Page, TPIframe | TPTab>;

export type TabPage = Omit<ContentPage, "id">;

export type Tab = {
  tabName: string;
  active: boolean;
  pageId?: ID;
  tabPages?: TabPage[];
};

export type TPIframe = {
  id: ID;
  // title: string;
  // description: string;
  template: TPIframeTemplate;
};

export type TPIframeTemplate = {
  type: "TPIframe";
  url: string;
};

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

export type TP01B = {
  id: ID;
  title: string;
  description: string;
  template: TP01BTemplate;
};

type TP01BTemplate = {
  type: "TP01B";
  contents: TP01BContent[];
};

type TP01BContent = DialogContent;

export type TP02 = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP02";
    contents: ApproveContent[];
  };
};

export type TP02A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP02A";
    contents: TP02AContent[];
  };
};

type TP02AContent = AudioContent;

export type TP02B = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP02B";
    contents: TP02BContent[];
  };
};

type TP02BContent = TextBoxesContent;

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

export type TP02F = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP02F";
    contents: TP02FContent[];
  };
};

type TP02FContent = VideoContent;

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

type TP02MContent = HtmlContent;

export type TP02N = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP02N";
    contents: TP02NContent[];
  };
};

type TP02NContent = StudyWordsContent;

export type TP02G = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP02G";
    contents: TP02GContent[];
  };
};

export type TP02I = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP02I";
    contents: TP02GContent[];
  };
};

type TP02GContent = DialogContent;

export type TP03 = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP03";
    contents: ApproveContent[];
  };
};

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

export type TP03AContent = HtmlContent | TextBoxesContent | AudioContent;

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

export type TP03BContent = HtmlContent | TextBoxesContent | AudioContent;

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

type TP03CContent = HtmlContent | TextBoxesContent | AudioContent;

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

type TP03DContent = HtmlContent | TextBoxesContent | AudioContent;

export type TP03F = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP03F";
    contents: TP03FContent[];
  };
};

type TP03FContent = HtmlContent | TextBoxesContent;

export type TP04 = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP04";
    contents: ApproveContent[];
  };
};

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

type TP04AContent = ImagesContent | HtmlContent | AudioContent;

export type TP05 = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP05";
    contents: ApproveContent[];
  };
};

export type TP05A = {
  id: ID;
  title: string;
  description: string;
  template: TP05ATemplate;
};

type TP05ATemplate = {
  type: "TP05A";
  contents: TP05AContent[];
};

type TP05AContent = TextBoxesContent | HtmlContent;

export type TP05G = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP05G";
    contents: TP05GContent[];
  };
};

type TP05GContent = NumberTableContent | HtmlContent;

export type TP06A = {
  id: ID;
  title: string;
  description: string;
  template: TP06ATemplate;
};

type TP06ATemplate = {
  type: "TP06A";
  contents: TP06AContent[];
};

type TP06AContent = IconTextContent | DialogContent | AudioRecordContent;

export type TP07 = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP07";
    contents: ApproveContent[];
  };
};

export type TP07A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP07A";
    contents: TP07AContent[];
  };
};

type TP07AContent = IconTextContent | ImagesContent | HtmlContent | AudioRecordContent;

export type TP08A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP08A";
    contents: TP08AContent[];
  };
};

type TP08AContent = ImagesContent | HtmlContent | SentenceWordContent;

export type TP08B = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP08B";
    contents: TP08BContent[];
  };
};

type TP08BContent = ImagesContent | HtmlContent | AudioRecordContent;

export type TP09A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP09A";
    contents: TP09AContent[];
  };
};

type TP09AContent = HtmlContent | BottomTabsContent;

export type TP10A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP10A";
    contents: TP10AContent[];
  };
};

type TP10AContent = WordQuizContent;

export type TP10C = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP10C";
    contents: TP10CContent[];
  };
};

type TP10CContent = WordQuizContent;

export type TP11A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP11A";
    contents: TP11AContent[];
  };
};

type TP11AContent = IconTextContent | ChooseTextContent;

export type TP11B = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP11B";
    contents: TP11BContent[];
  };
};

type TP11BContent = WordQuizContent;

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

type TP11FContent = IconTextContent | ChooseTextContent;

export type TP11G = {
  id: ID;
  title: string;
  description: string;
  template: TP11GTemplate;
};

type TP11GTemplate = {
  type: "TP11G";
  contents: TP11GContent[];
};

type TP11GContent = WordQuizContent;

export type TP12A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP12A";
    contents: TP12AContent[];
  };
};

type TP12AContent = IconTextContent | ChooseTextContent;

export type TP12B = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP12B";
    contents: TP12BContent[];
  };
};

type TP12BContent = VideoContent;

export type TP13 = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP13";
    contents: ApproveContent[];
  };
};

export type TP13A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP13A";
    contents: TP13AContent[];
  };
};

type TP13AContent = ImagesContent | HtmlContent | AudioContent;

export type TP13B = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP13B";
    contents: TP13BContent[];
  };
};

type TP13BContent = HtmlContent | ImagesContent;

export type TP14A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP14A";
    contents: TP14AContent[];
  };
};

type TP14AContent = TextBoxesContent | AudioContent;

export type TP14B = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP14B";
    contents: TP14BContent[];
  };
};

type TP14BContent = TextBoxesContent | AudioRecordContent;

export type TP15 = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP15";
    contents: ApproveContent[];
  };
};

export type TP16 = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP16";
    contents: ApproveContent[];
  };
};

export type TP16A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP16A";
    contents: TP16AContent[];
  };
};

type TP16AContent = HtmlContent | ImagesContent | AudioContent;

export type TP17A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP17A";
    contents: TP17AContent[];
  };
};

type TP17AContent = HtmlContent | TextBoxesContent | VideoContent | AudioRecordContent;

export type TP19A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP19A";
    contents: TP19AContent[];
  };
};

type TP19AContent = StudySentencesWithVocabularyContent;

export type TP21A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP21A";
    contents: TP21AContent[];
  };
};

type TP21AContent = ImagesContent | DragAndDropContent;

export type TP21B = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP21B";
    contents: TP21BContent[];
  };
};

type TP21BContent = HtmlContent | ChooseTextContent;

export type TP23 = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP23";
    contents: TP23Content[];
  };
};

type TP23Content = ApproveContent;

export type TP24A = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP24A";
    contents: TP24AContent[];
  };
};

type TP24AContent = SortWordsContent | ImagesContent;

export type TP24B = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TP24B";
    contents: TP24BContent[];
  };
};

type TP24BContent = ChooseMediaTextContent | ImagesContent;

export type TPTab = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "TPTab";
    tabs: Tab[];
  };
};
