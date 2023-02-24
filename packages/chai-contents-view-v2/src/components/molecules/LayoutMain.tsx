import { PageProps, useTemplateMapper } from "chai-ui-v2";
import React from "react";

interface LayoutMainProps extends PageProps {}
const LayoutMain = ({ page, setPageCompleted }: LayoutMainProps) => {
  const { getTemplateComponent } = useTemplateMapper({
    setPageCompleted,
    page,
  });
  // return <>{getTemplateComponent(page.type)}</>; // TODO: BBC-996
};

export default LayoutMain;
