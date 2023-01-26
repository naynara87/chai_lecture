import React from "react";
import { useTemplateMapper } from "chai-ui";
import { CreateTemplatePage } from "../../../../types/appData";

interface PreviewMainProps {
  page: CreateTemplatePage;
  setPageCompleted: () => void;
}
const PreviewMain = ({ page, setPageCompleted }: PreviewMainProps) => {
  const { getTemplateComponent } = useTemplateMapper({ page, setPageCompleted });
  return <>{getTemplateComponent(page.template.type)}</>;
};

export default PreviewMain;
