import React from "react";
import IconEmpty from "../../assets/images/icon/icon_empty.svg";
import IconRight from "../../assets/images/icon/icon_problem_o.svg";
// import IconWrong from "../../assets/images/icon/icon_problem_x.svg";

const ComponentProblemCommentary = () => {
  return (
    <div className="problem-commentary-wrapper">
      {/* TODO: key설명 - 항목 선택을 하지 않았을 때 */}
      <div className="empty-conts">
        <img src={IconEmpty} alt="없음" className="img" />
        <h3 className="emp-ttl">채점표에서 번호를 <br />선택해주세요</h3>
        <p className="emp-txt">여기에 정답과 해설이 표시됩니다.</p>
      </div>

      {/* TODO: key설명 - 항목선택을 했을 때 */}
      <div className="problem-commentary-wrap none">
        <h3 className="com-ttl"><b>{`Q1`}</b> <img src={IconRight} alt="정답" /></h3>
        <div className="tab-iframe-wrap">
          {/* TODO: key설명 - 버튼을 누르면 본인에 클래스active 추가,
           tab-conts-wrapper에 클래스 none 삭제 */}
          <button className="tab-title active">문제 보기</button>
          <div className="tab-conts-wrapper">
            문제 iframe이 들어옵니다.
          </div>
        </div>
        <div className="comment-list-wrap">
          <dl className="comment-list">
            <dt className="comment-ttl">정답</dt>
            <dd className="comment-dec">{'X'}</dd>
          </dl>
          <dl className="comment-list">
            <dt className="comment-ttl">해설</dt>
            <dd className="comment-dec">{`해설이 들어올 자리
            해설이 들어올 자리
            해설이 들어올 자리
            해설이 들어올 자리`}</dd>
          </dl>
          <dl className="comment-list">
            <dt className="comment-ttl">예문 해석</dt>
            <dd className="comment-dec">{`해석 이 들어올 자리
            해석 이 들어올 자리
            해석 이 들어올 자리
            해석 이 들어올 자리
            해석 이 들어올 자리
            해석 이 들어올 자리`}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ComponentProblemCommentary;
