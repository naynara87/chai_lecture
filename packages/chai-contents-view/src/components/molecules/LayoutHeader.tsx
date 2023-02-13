import React from "react";

const LayoutHeader = () => {
  return (
    <header className="cai-hd">
      {/* 진도율 50%를 기점으로 말풍선 위치가 바뀜 */}
      <div className="second-half">
        <p className="txt">{ '중국어 개요' }</p>
      <img src="/images/img/cha_kkungi_positive.png" alt="꿍이" className="img" />
      </div>
      <span>{ '코너1' }</span>
      <div className="first-half">
      <img src="/images/img/cha_kkungi_positive.png" alt="꿍이" className="img" />
        <p className="txt">{ '중국어 개요' }</p>
      </div>
    </header>
  );
};

export default LayoutHeader;
