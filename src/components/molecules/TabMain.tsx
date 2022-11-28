import React from "react";
import useTemplateMapper from "../../hooks/useTemplateMapper";
import { TemplateProps } from "../../types/templates";

interface TemplateRenderComponentProps extends TemplateProps {}

const TemplateRenderComponent = ({ setPageCompleted, page }: TemplateRenderComponentProps) => {
  const { getTemplateComponent } = useTemplateMapper({
    setPageCompleted,
    page,
    showHeader: false,
  });
  return <>{getTemplateComponent(page.template.type)}</>;
};

export default TemplateRenderComponent;
