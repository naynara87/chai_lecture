import React from "react";
import { CreateTemplatePage, useTemplateMapper } from "chai-ui";

interface PreviewMainProps {
  page: CreateTemplatePage;
  setPageCompleted: () => void;
}
const PreviewMain = ({ page, setPageCompleted }: PreviewMainProps) => {
  const { getTemplateComponent } = useTemplateMapper({
    page,
    setPageCompleted,
  });
  return <>{getTemplateComponent(page.template.type)}</>;
};

export default PreviewMain;
