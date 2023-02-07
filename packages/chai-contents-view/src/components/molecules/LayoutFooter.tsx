import React from "react";

const LayoutFooter = () => {
  return (
    <footer className="cai-ft">
      {/* position: absolute */}
      <div className="lnb-wrap">
        <button className="btn-text">학습순서</button>
        <nav className="cai-lnb">학습순서들어올자리</nav>
      </div>
      <div className="ft-conts-wrap">
        <button className="icon-btn">이전</button>
        <span className="txt"><b>{ '1' }</b> / { '10' }</span>
        <button className="icon-btn">다음</button>
      </div>
    </footer>
  );
};

export default LayoutFooter;
