import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import IconRight from "../../../assets/images/icon/icon_problem_o.svg";
import IconWrong from "../../../assets/images/icon/icon_problem_x.svg";
import { QuizData, TemplateQuestionData, isDevEnv } from "../../../core";
import { HtmlContentComponent } from "../../atoms";
import styled from "@emotion/styled";

const ContentsIframeWrapper = styled.div``;

interface ComponentProblemCommentaryProps {
  quizPageIdx: number;
  quizTemplateData: TemplateQuestionData;
  quizPageData: QuizData[];
}

const ComponentProblemCommentary = ({
  quizPageIdx,
  quizTemplateData,
  quizPageData,
}: ComponentProblemCommentaryProps) => {
  const [isShowContent, setIsShowContent] = useState(false);

  const [currentPageNumber, setCurrentPageNumber] = useState(quizPageIdx);

  useEffect(() => {
    setCurrentPageNumber(quizPageIdx);
  }, [quizPageIdx]);

  const reloadIframe = useMemo(() => {
    return currentPageNumber !== quizPageIdx;
  }, [currentPageNumber, quizPageIdx]);

  const handleClickShowContentButton = useCallback(() => {
    setIsShowContent(!isShowContent);
  }, [isShowContent]);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  /**
   * NOTE gth 채점결과 페이지에서 문제 미리 보기에서
   * 안 푼 문제의 경우 풀고 제출하는 버그가 있는데 해당 이벤트를 막기 위한 함수
   */
  const handleBlockEvent = useCallback(() => {
    if (isDevEnv) {
      iframeRef.current?.setAttribute("style", "pointer-events: none;");
      return;
    }
    const h5pIframe =
      iframeRef.current?.contentWindow?.document.querySelector<HTMLIFrameElement>(
        ".h5p-iframe",
      );
    const h5pContent =
      h5pIframe?.contentWindow?.document.querySelector(".h5p-content");
    if (h5pContent) {
      h5pContent.setAttribute("style", "pointer-events: none;");
    }
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (reloadIframe) {
      setIsLoaded(false);
    }
  }, [reloadIframe]);

  useEffect(() => {
    if (isShowContent && isLoaded) {
      handleBlockEvent();
    }
  }, [isShowContent, handleBlockEvent, isLoaded]);

  return (
    <div className="problem-commentary-wrapper">
      {/* TODO: key설명 - 항목선택을 했을 때 */}
      <div className="problem-commentary-wrap">
        <h3 className="com-ttl">
          <b>{`${quizPageIdx + 1}번`}</b>
          <img
            src={quizPageData[quizPageIdx].isCorrect ? IconRight : IconWrong}
            alt="오답"
          />
        </h3>
        <div className="tab-iframe-wrap">
          {/* TODO: key설명 - 버튼을 누르면 본인에 클래스active 추가,
           tab-conts-wrapper에 클래스 none 삭제 */}
          <button
            className={`tab-title ${isShowContent ? "active" : ""}`}
            onClick={handleClickShowContentButton}
          >
            문제 {isShowContent ? "닫기" : "열기"}
          </button>
          <ContentsIframeWrapper
            className={`tab-conts-wrapper ${isShowContent ? "" : "none"}`}
          >
            {quizTemplateData.contents && (
              <iframe
                src={quizTemplateData.contents.data.interact_url}
                title={quizTemplateData.contents.id.toString()}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                onLoad={() => setIsLoaded(true)}
                ref={iframeRef}
              ></iframe>
            )}
          </ContentsIframeWrapper>
        </div>
        {quizTemplateData.contents && (
          <div className="comment-list-wrap">
            {quizTemplateData.contents.data.correct && (
              <dl className="comment-list">
                <dt className="comment-ttl">정답</dt>
                <dd className="comment-dec">
                  {quizTemplateData.contents.data.correct ?? ""}
                </dd>
              </dl>
            )}
            {quizTemplateData.contents.data.explan && (
              <dl className="comment-list">
                <dt className="comment-ttl">해설</dt>
                <dd className="comment-dec">
                  <HtmlContentComponent
                    html={quizTemplateData.contents.data.explan}
                  />
                </dd>
              </dl>
            )}
            {quizTemplateData.contents.data.interpet && (
              <dl className="comment-list">
                <dt className="comment-ttl">예문 해석</dt>
                <dd className="comment-dec">
                  <HtmlContentComponent
                    html={quizTemplateData.contents.data.interpet}
                  />
                </dd>
              </dl>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentProblemCommentary;
