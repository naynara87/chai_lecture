import IconTimer from "../../images/icon/icon_timer.svg";

const LayoutQuestionHeader = () => {
  return (
    <header className="cai-hd problem-hd">
      <div className="hd-conts-wrap">
        <h1 className="problem-hd-ttl">{"빨강 연습문제"}</h1>
        <div className="problem-hd-timer"><img src={IconTimer} alt="시간" />{"00:00:00"}</div>
      </div>
    </header>
  );
};

export default LayoutQuestionHeader;
