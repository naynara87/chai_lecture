import {
  Page,
  LayoutSinglePage,
  LayoutMultiPage,
  useGlobalAudio,
} from "chai-ui-v2";
import React, { useEffect } from "react";
import usePage from "../../hooks/usePage";

const Preview = () => {
  const { getPageDataFromLocalStorage } = usePage();
  const { handleAudioReset } = useGlobalAudio();

  const [pageData] = React.useState<Page | null>(getPageDataFromLocalStorage());

  useEffect(() => {
    if (handleAudioReset) {
      handleAudioReset();
    }
  }, [handleAudioReset]);

  return (
    <section>
      <header>미리보기</header>
      <main className="cai-main">
        {pageData === null ? (
          <div>페이지 데이터가 없습니다.</div>
        ) : pageData.type === "singlePage" ? (
          <LayoutSinglePage page={pageData} setPageCompleted={() => {}} />
        ) : (
          <LayoutMultiPage page={pageData} setPageCompleted={() => {}} />
        )}
      </main>
    </section>
  );
};

export default Preview;
