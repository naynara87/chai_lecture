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
    // JavaScript를 사용하여 화면 가로 세로 비교 후 스타일 조정
    function adjustStyles() {
      const body = document.querySelector("main");

      if (!body) {
        return;
      }

      if (window.innerWidth < window.innerHeight) {
        // 가로가 세로보다 길 때
        body.classList.add("width_fit");
        body.classList.remove("height_fit");
      } else {
        // 세로가 가로보다 길 때는 다시 원래값으로
        body.classList.remove("width_fit");
        body.classList.add("height_fit");
      }
    }

    // 초기화 및 창 크기 변경 이벤트에 대한 리스너 등록
    adjustStyles();
    window.addEventListener("resize", adjustStyles);

    return () => {
      window.removeEventListener("resize", adjustStyles);
    };
  }, []);

  useEffect(() => {
    if (handleAudioReset) {
      handleAudioReset();
    }
  }, [handleAudioReset]);

  return (
    <section className="cai-view-yahei">
      <header className="header-top">미리보기</header>
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
