import React from "react";
import useTemplateMapper from "../../hooks/useTemplateMapper";
import { Page } from "../../types/appData";

interface CornerMainProps {
  page: Page;
  setPageCompleted(): void;
}
const CornerMain = ({ page, setPageCompleted }: CornerMainProps) => {
  const { getTemplateComponent } = useTemplateMapper({ setPageCompleted, page });
  return <>{getTemplateComponent(page.template.type)}</>;
};

export default CornerMain;
