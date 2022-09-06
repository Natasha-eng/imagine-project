import React from "react";
import style from "./emptyResult.module.css";

export const EmptyResult = () => {
  return (
    <div className={style.emptyResultWrap}>
      <div>No results found</div>
    </div>
  );
};
