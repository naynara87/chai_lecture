import React from "react";

const ComponentWordCard = () => {
  return (
    <div className="word-card-wrapper">
      <ul className="word-card-list">
        <li className="word-card">
          <p className="text">{`在`}</p>
          <small className="text-sm">{`Wô`}</small>
        </li>
        <li className="word-card active">
          <p className="text">{`坐`}</p>
          <small className="text-sm">{`zuò`}</small>
        </li>
        <li className="word-card">
          <p className="text">{`地铁去`}</p>
          <small className="text-sm">{`dìtiê qù.`}</small>
        </li>
        <li className="word-card">
          <p className="text">{`津津有有味`}</p>
          <small className="text-sm">{`jīn jīn yǒu wèi`}</small>
        </li>
        <li className="word-card">
          <p className="text">{`采购`}</p>
          <small className="text-sm">{`cǎigòu`}</small>
        </li>
      </ul>
    </div>
  );
};

export default ComponentWordCard;
