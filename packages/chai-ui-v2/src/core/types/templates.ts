import { ID, Page } from "./appData";
import { Content } from "./contents";

export interface TemplateProps {
  setPageCompleted: () => void;
  page: Page;
}

export type Template01Type = {
  id: ID;
  title: string;
  description: string;
  template: {
    type: "Template01";
    contents: Content;
  };
};
