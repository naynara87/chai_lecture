import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { vh, vw } from "../../assets";
import { ID, RolePlayingCharacter } from "../../core";
import { ComponentButtonRadiFillMain, ImgTemp01Component } from "../atoms";

const ChoiceRoleWrapper = styled.div`
  .btn-wrap {
    text-align: center;
    .btn {
      width: ${vw(471)};
      margin-top: ${vh(60)};
    }
  }
`;

interface ComponentChoiceRoleProps {
  characterList: RolePlayingCharacter[];
  onClickSelectCharacter: (characterId: ID) => void;
}

const ComponentChoiceRole = ({
  characterList,
  onClickSelectCharacter,
}: ComponentChoiceRoleProps) => {
  const characters = useMemo(() => {
    return characterList.map((character) => {
      return (
        <li className="choice-role-list active" key={character.id}>
          <div className="img-wrap">
            {/* TODO: CPM 이미지 주소받으면 변경 */}
            <ImgTemp01Component imageAlt={character.name} />
          </div>
          <p className="name">{character.name}</p>
          <ComponentButtonRadiFillMain
            text={"선택"}
            onClickBtn={() => onClickSelectCharacter(character.id)}
          />
        </li>
      );
    });
  }, [characterList, onClickSelectCharacter]);

  return (
    <ChoiceRoleWrapper className="choice-role-wrapper">
      <ul className="choice-role-list-wrap">
        {/* 반복영역 */}
        {characters}
        {/* end 반복영역 */}
      </ul>
    </ChoiceRoleWrapper>
  );
};

export default ComponentChoiceRole;
