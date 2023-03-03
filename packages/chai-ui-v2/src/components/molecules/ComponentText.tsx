import styled from "@emotion/styled";
import React from "react";
import { colorPalette, vw } from "../../styles";

const TextComponent = styled.div`

  .text {
    font-size: ${vw(28)};
    white-space: pre-line;

    > b {
      color: ${colorPalette.red700};
    }

    &.lg {
      font-weight: 600;
      font-size: ${vw(50)};
    }

    &.bold {
      font-weight: 600;
    }

    &.bold-ttl {
      font-weight: 600;
      font-size: ${vw(32)};
    }
  }
`;

const ComponentText = () => {
  return (
    <TextComponent>
      <p className="text lg">{`首尔的`}<b>{`冬天`}</b>{`没有北京冷。`}</p>
      <p className="text">{`Shǒu'ěr de`}<b>{`dōngtiān`}</b>{`méiyǒu Běijīng lěng`}</p>
      <p className="text">{`서울의 겨울은 베이징보다 춥지 않아요.`}</p>
      <p className="text bold-ttl">{`베이징 오리구이`}</p>
      <p className="text bold">{`정도부사의 종류`}</p>
      <p className="text">{`베이징 오리구이(北京烤鸭)란?`}</p>
    </TextComponent>
  );
};

export default ComponentText;