import React from "react";

const LineCheckBoxes = () => {
  return (
    <>
      <div className="inp-grp">
        <input
          type="checkbox"
          name="answer1"
          id="answer1"
          className="inp-chck-line none"
        />
        <label htmlFor="answer1" className="label-chck-line">
          <span className="text">{"你最后一次在哪儿用过？"}</span>
        </label>
      </div>
      <div className="inp-grp">
        <input
          type="checkbox"
          name="answer2"
          id="answer2"
          className="inp-chck-line none"
        />
        <label htmlFor="answer2" className="label-chck-line">
          <span className="text">{"真的？你找找包里。"}</span>
        </label>
      </div>
      <div className="inp-grp">
        <input
          type="checkbox"
          name="answer3"
          id="answer3"
          className="inp-chck-line none"
        />
        <label htmlFor="answer3" className="label-chck-line">
          <span className="text">{"从那儿出来以后，我就再也没用过。"}</span>
        </label>
      </div>
    </>
  );
};

export default LineCheckBoxes;
