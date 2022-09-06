import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";
import { IUserData } from "./../../../data/data";
import style from "./artWork.module.css";

interface IArtWork {
  workInfo: IUserData;
}

export const ArtWork = ({ workInfo }: IArtWork) => {
  return (
    <div className={style.work}>
      <img src={workInfo.workSrc} alt="workImg" className={style.artImg} />
      <div className={style.workInfo}>
        <img
          src={workInfo.avatar}
          alt="userAvatar"
          className={style.userAvatar}
        />
        <div className={style.names}>
          <div className={style.authorName}>{workInfo.userName}</div>
          <div className={style.workName}>{workInfo.workName}</div>
        </div>
      </div>
    </div>
  );
};
