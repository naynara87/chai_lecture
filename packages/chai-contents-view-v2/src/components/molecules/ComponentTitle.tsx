import React from "react";
interface ComponentTitle {
  text: String,
}

const ComponentTitle = ({text}: ComponentTitle) => {

  return (
    // FIXME: 디자인수정예정 - 앞 아이콘 -> 기호
        <h2 className="conts-ttl">{ text }</h2>
  );
};

export default ComponentTitle;
