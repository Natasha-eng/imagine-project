import React, { ChangeEvent } from "react";
import { IArtDate } from "../../data/data";
import { categoriesType } from "../ArtWorks/ArtWorks";
import style from "./checkbox.module.css";

interface ICheckbox {
  artObj: IArtDate;
  changeChecked: (value: number) => void;
}

export const Checkbox = ({ artObj, changeChecked }: ICheckbox) => {
  return (
    <label htmlFor={artObj.value} className={style.artOption}>
      <input
        type="radio"
        id={artObj.value}
        name={artObj.value}
        value={artObj.value}
        defaultChecked={artObj.checked}
        // checked={artObj.checked}
        className={style.radio}
        onClick={() => changeChecked(artObj.id)}
      />
      <span
        className={
          artObj.checked
            ? `${style.customRadio} ${style.checked}`
            : style.customRadio
        }
      >
        <span className={artObj.checked ? style.checked : ""}></span>
      </span>

      <span className={style.text}> {artObj.value}</span>
    </label>
  );
};
