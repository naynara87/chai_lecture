import { TemplateProps, useTemplateMapper } from "chai-ui-v2";
import React from "react";

interface LayoutMainProps extends TemplateProps {}
const LayoutMain = ({ page, setPageCompleted }: LayoutMainProps) => {
  const { getTemplateComponent } = useTemplateMapper({
    setPageCompleted,
    page,
  });
  return <>{getTemplateComponent(page.template.type)}</>;
};

export default LayoutMain;
