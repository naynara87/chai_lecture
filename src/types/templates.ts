import { Page } from "./appData";

export interface TemplateProps {
  setPageCompleted: () => void;
  page: Page;
}

export type Tab = {
  name: string;
  contents: Page["template"]["contents"];
};

export type TabWithId = Tab & { index: string | number };
