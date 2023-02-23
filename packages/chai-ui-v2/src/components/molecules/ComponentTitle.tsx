import React from "react";
interface ComponentTitle {
  text: String,
}

const ComponentTitle = ({text}: ComponentTitle) => {

  return (
        <h2 className="conts-ttl">{ text }</h2>
  );
};

export default ComponentTitle;
