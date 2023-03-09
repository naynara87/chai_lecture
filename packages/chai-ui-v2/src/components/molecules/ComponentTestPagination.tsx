import React from "react";

const ComponentTestPagination = () => {
  return (
    <div className="test-pagination-wrapper">
      {/* TODO: 설명 - 열면 클래스 active 추가, 문제풀면 end 추가 */}
      <button className="test-pagination end">{'1'}</button>
      <button className="test-pagination active end">{'92'}</button>
      <button className="test-pagination active">{'993'}</button>
      <button className="test-pagination">{'9994'}</button>
    </div>
  );
};

export default ComponentTestPagination;
