import React from "react";

const ComponentText = () => {
  return (
    <div className="text-component">
      <p className="text bold-ttl">{`베이징 오리구이`}</p>
      <p className="text">{`베이징 오리구이(北京烤鸭)란?`}</p>
      <p className="text lg">
        {`首尔的`}
        <b>{`冬天`}</b>
        {`没有北京冷。`}
      </p>
      <p className="text">
        {`Shǒu'ěr de`}
        <b>{`dōngtiān`}</b>
        {`méiyǒu Běijīng lěng`}
      </p>
      <p className="text">{`서울의 겨울은 베이징보다 춥지 않아요.`}</p>
      <p className="text bold">{`정도부사의 종류`}</p>
      <p className="text">{`베이징 오리구이(北京烤鸭)란?`}</p>
    </div>
  );
};

export default ComponentText;
