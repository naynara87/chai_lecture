import { TimerIcon } from "chai-ui-v2";
import { useMemo } from "react";

interface LayoutQuestionHeaderProps {
  headerText: string;
  solvingTime: number;
  isShowSolvingTime?: boolean;
}

const LayoutQuestionHeader = ({
  headerText,
  solvingTime,
  isShowSolvingTime = true,
}: LayoutQuestionHeaderProps) => {
  const convertedSolvingTime = useMemo(() => {
    const hour = Math.floor(solvingTime / 3600);
    const min = Math.floor((solvingTime % 3600) / 60);
    const sec = Math.floor(solvingTime % 60);

    return (
      hour.toString().padStart(2, "0") +
      ":" +
      min.toString().padStart(2, "0") +
      ":" +
      sec.toString().padStart(2, "0")
    );
  }, [solvingTime]);

  return (
    <header className="cai-hd problem-hd">
      <div className="hd-conts-wrap">
        <h1 className="problem-hd-ttl">{headerText}</h1>
        {isShowSolvingTime && (
          <div className="problem-hd-timer">
            <TimerIcon />
            {convertedSolvingTime}
          </div>
        )}
      </div>
    </header>
  );
};

export default LayoutQuestionHeader;
