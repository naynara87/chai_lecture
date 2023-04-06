import React, { useCallback, useState } from "react";
import IconRight from "../../../assets/images/icon/icon_problem_o.svg";
import IconWrong from "../../../assets/images/icon/icon_problem_x.svg";
import { QuizData, TemplateQuestionData } from "../../../core";

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

  const handleClickShowContentButton = useCallback(() => {
    setIsShowContent(!isShowContent);
  }, [isShowContent]);

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
          <div className={`tab-conts-wrapper ${isShowContent ? "" : "none"}`}>
            {quizTemplateData.contents && (
              <iframe
                src={quizTemplateData.contents.data.iframeUrl}
                title={quizTemplateData.contents.id.toString()}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                scrolling="no"
              ></iframe>
            )}
          </div>
        </div>
        {quizTemplateData.contents && (
          <div className="comment-list-wrap">
            <dl className="comment-list">
              <dt className="comment-ttl">정답</dt>
              <dd className="comment-dec">
                {quizTemplateData.contents.data.answer}
              </dd>
            </dl>
            <dl className="comment-list">
              <dt className="comment-ttl">해설</dt>
              <dd className="comment-dec">
                {quizTemplateData.contents.data.comment}
              </dd>
            </dl>
            <dl className="comment-list">
              <dt className="comment-ttl">예문 해석</dt>
              <dd className="comment-dec">
                {quizTemplateData.contents.data.example}
              </dd>
            </dl>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentProblemCommentary;
