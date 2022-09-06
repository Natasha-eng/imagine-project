import React, { ChangeEvent } from "react";
import style from "./searchInput.module.css";
import artsStyle from "./../ArtWorks/artWorks.module.css";
import arrow from "../../assets/Arrow.png";

interface ISearchInput {
  openedSearchInput: boolean;
  value: string;
  changeInput: (value: string) => void;
}

export const SearchInput = ({
  openedSearchInput,
  value,
  changeInput,
}: ISearchInput) => {
  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeInput(e.target.value);
  };
  return (
    <div
      className={
        openedSearchInput ? style.searchInputContainer : artsStyle.hideOptions
      }
    >
      <input
        type="text"
        placeholder="Start type a name"
        value={value}
        onChange={changeInputHandler}
        className={style.searchNameInput}
      />
    </div>
  );
};
