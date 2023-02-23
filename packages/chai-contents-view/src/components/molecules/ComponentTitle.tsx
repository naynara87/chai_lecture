import React from "react";
interface ComponentTitleProps {
  text: string;
}

const ComponentTitle = ({ text }: ComponentTitleProps) => {
  return (
    // 디자인수정예정 - 앞 아이콘 -> 기호
    <h2 className="conts-ttl">{text}</h2>
  );
};

export default ComponentTitle;
