import React, { useCallback, useMemo, useState } from "react";
import style from "./pagination.module.css";
import arrowLeft from "./../../assets/pagination/ArrowLeft.png";
import arrowRight from "./../../assets/pagination/ArrowRight.png";
import { IUserData, } from "../../data/data";

interface PaginationProps {
  users: IUserData[];
  usersPerPage: number;
  setCurrentPage: Function;
  currentPage: number;
  indexOfLastUser: number;
  indexOfFirstUser: number;
  inputValue: string;
  reset: boolean;
  setReset: (value: boolean) => void;
  maxPageNumberLimit: number;
  minPageNumberLimit: number;
  setMaxPageNumberLimit: (value: number) => void;
  setMinPageNumberLimit: (value: number) => void;

}

export const Pagination = ({
  users,
  usersPerPage,
  setCurrentPage,
  currentPage,
  indexOfLastUser,
  indexOfFirstUser,
  setReset,
  maxPageNumberLimit,
  minPageNumberLimit,
  setMaxPageNumberLimit,
  setMinPageNumberLimit

}: PaginationProps) => {
  //total number of pages
  const pages = users.length / usersPerPage;
  const arrayOfPages: number[] = [];


  for (let i = 1; i <= Math.ceil(pages); i++) {
    arrayOfPages.push(i);
  }


  const handleClick = useCallback(
    (value: number) => {
      setCurrentPage(value);
      setReset(false);
    }, [setCurrentPage, setReset]
  )


  const [pageNumberLimit, setPageNumberLimit] = useState(3);

  let renderPageNumber = useMemo(() => arrayOfPages.map((pageNumber, index) => {

    if ((pageNumber < maxPageNumberLimit + 1 && pageNumber > minPageNumberLimit)) {


      return (
        <div
          key={index}
          className={`${style.paginationItem} ${currentPage === pageNumber ? style.active : ""
            }`}
          onClick={() => handleClick(pageNumber)}
        ><>
            {pageNumber}</>
        </div>)

    } else {
      return null;
    }


  }

  ), [currentPage, maxPageNumberLimit, minPageNumberLimit, handleClick, arrayOfPages])

  const nextPageHandler = () => {
    setCurrentPage((state: number) => state + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const prevPageHandler = () => {
    setCurrentPage((state: number) => state - 1);

    if ((currentPage - 1) % minPageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (arrayOfPages.length > maxPageNumberLimit) {
    pageIncrementBtn = <div className={`${style.paginationItem} ${currentPage === arrayOfPages[arrayOfPages.length - 1] ? style.disable : ""}`} onClick={nextPageHandler}>&hellip;</div>
  }

  let pageDecrementBtn = null;
  if (arrayOfPages.length > maxPageNumberLimit) {
    pageDecrementBtn = <div className={`${style.paginationItem} ${currentPage === arrayOfPages[0] ? style.disable : ""}`} onClick={prevPageHandler}>&hellip;</div>
  }

  return (
    <div className={style.paginationContainer}>
      <div className={style.pagination}>
        <button disabled={currentPage === arrayOfPages[0]} className={`${style.paginationItem} `} onClick={prevPageHandler}>
          <img src={arrowLeft} alt="left arrow" className={currentPage === arrayOfPages[0] ? `${style.arrow} ${style.disabled}` : style.arrow} />
        </button>
        <>
          {pageDecrementBtn}
          {renderPageNumber}
          {pageIncrementBtn}
        </>
        <button disabled={currentPage === arrayOfPages[arrayOfPages.length - 1]} className={style.paginationItem} onClick={nextPageHandler}>
          <img src={arrowRight} alt="right arrow" className={currentPage === arrayOfPages[arrayOfPages.length - 1] ? `${style.arrow} ${style.disabled}` : style.arrow} />
        </button>
      </div>
      <div className={style.paginationResults}>
        {indexOfFirstUser + 1}-{indexOfLastUser} of {users.length} Results
      </div>

    </div>
  );
};
