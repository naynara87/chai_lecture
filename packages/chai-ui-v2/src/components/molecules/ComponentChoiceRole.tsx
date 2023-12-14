import React, { useMemo } from "react";
import { ID, RolePlayingCharacter } from "../../core";
import { ComponentButtonRadiFillMain, ImgTemp01Component } from "../atoms";

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
            <ImgTemp01Component
              imageSrc={character.src}
              imageAlt={character.name}
            />
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
    <div className="choice-role-wrapper">
      <ul className="choice-role-list-wrap">{characters}</ul>
    </div>
  );
};

export default ComponentChoiceRole;
