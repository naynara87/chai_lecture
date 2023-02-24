import { MultiPage, PageProps, useTemplateMapper } from "chai-ui-v2";
import React from "react";

interface LayoutMultiPageProps extends PageProps {}
const LayoutMultiPage = ({ page, setPageCompleted }: LayoutMultiPageProps) => {
  const multiPageData = page as MultiPage;

  const { getTemplateComponent } = useTemplateMapper({
    setPageCompleted,
    page,
  });

  return (
    <>
      {multiPageData.data.map((multiPage) => {
        // TODO kjw multipage일때 swiper삽입하여 캐러셀 구현 BBC-997
        return getTemplateComponent(multiPage.type);
      })}
    </>
  );
};

export default LayoutMultiPage;
