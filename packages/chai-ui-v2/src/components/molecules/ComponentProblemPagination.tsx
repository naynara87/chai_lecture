import React from "react";

const ComponentProblemPagination = () => {
  return (
    <div className="problem-top-button-wrapper pagination-wrapper">
      {/* TODO: 설명 - 열면 클래스 active 추가, 문제풀면 end 추가 */}
      <button className="problem-pagination end">{'1'}</button>
      <button className="problem-pagination active end">{'92'}</button>
      <button className="problem-pagination active">{'993'}</button>
      <button className="problem-pagination">{'9994'}</button>
    </div>
  );
};

export default ComponentProblemPagination;
