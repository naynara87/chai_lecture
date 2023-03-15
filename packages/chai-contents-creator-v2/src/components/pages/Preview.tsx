import { Page, LayoutSinglePage, LayoutMultiPage } from "chai-ui-v2";
import React from "react";
import usePage from "../../hooks/usePage";

const Preview = () => {
  const { getPageDataFromLocalStorage } = usePage();

  const [pageData] = React.useState<Page | null>(getPageDataFromLocalStorage());

  return (
    <section>
      <header>미리보기</header>
      <main className="cai-main">
        {pageData === null ? (
          <div>페이지 데이터가 없습니다.</div>
        ) : pageData.type === "SinglePage" ? (
          <LayoutSinglePage page={pageData} setPageCompleted={() => {}} />
        ) : (
          <LayoutMultiPage page={pageData} setPageCompleted={() => {}} />
        )}
      </main>
    </section>
  );
};

export default Preview;
