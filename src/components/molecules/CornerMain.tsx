import React from "react";
import useTemplateMapper from "../../hooks/useTemplateMapper";
import { TemplateProps } from "../../types/templates";

interface CornerMainProps extends TemplateProps {}
const CornerMain = ({ page, setPageCompleted }: CornerMainProps) => {
  const { getTemplateComponent } = useTemplateMapper({ setPageCompleted, page });
  return <>{getTemplateComponent(page.template.type)}</>;
};

export default CornerMain;
