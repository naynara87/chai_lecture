import { CreateTemplatePage, Page } from "./appData";

export interface TemplateProps {
  setPageCompleted: () => void;
  page: Page | CreateTemplatePage;
  showHeader?: boolean;
}
