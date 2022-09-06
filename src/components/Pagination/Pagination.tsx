import React from "react";
import style from "./pagination.module.css";
import arrowLeft from "./../../assets/pagination/ArrowLeft.png";
import arrowRight from "./../../assets/pagination/ArrowRight.png";
import { IUserData } from "../../data/data";

interface PaginationProps {
  users: IUserData[];
  usersPerPage: number;
  setCurrentPage: (value: number) => void;
  currentPage: number;
  indexOfLastUser: number;
  indexOfFirstUser: number;
}

export const Pagination = ({
  users,
  usersPerPage,
  setCurrentPage,
  currentPage,
  indexOfLastUser,
  indexOfFirstUser,
}: PaginationProps) => {
  //total number of pages
  const pages = users.length / usersPerPage;

  const arrayOfPages: number[] = [];

  for (let i = 1; i <= Math.ceil(pages); i++) {
    arrayOfPages.push(i);
  }

  const handleClick = (value: number | Function) => {
    setCurrentPage(value as number);
  };

  // const [arrOfCurrentButtons, setArrOfCurrentButtons] = useState<
  //   Array<number | string>
  // >([]);

  // useEffect(() => {
  //   let tempNumberOfPages: Array<number | string> = [...arrayOfPages];

  //   if (currentButton >= 1 && currentButton < 3) {
  //     tempNumberOfPages = [1, 2, 3, "...", arrayOfPages.length] as Array<
  //       number | string
  //     >;
  //   } else if (currentButton === 3) {
  //     const sliced = arrayOfPages.slice(0, 4);
  //   } else if (currentButton > 3 && currentButton < arrayOfPages.length - 2) {
  //     const sliced1 = arrayOfPages.slice(currentButton - 2, currentButton);
  //     const sliced2 = arrayOfPages.slice(currentButton, currentButton + 1);
  //     tempNumberOfPages = [
  //       1,
  //       "...",
  //       ...sliced1,
  //       ...sliced2,
  //       "...",
  //       arrayOfPages.length,
  //     ];
  //   }
  //   setArrOfCurrentButtons(tempNumberOfPages);
  // }, [currentButton]);

  const nextPageHandler = () => {
    handleClick((state: number) => (state === 1 ? state : state - 1));
  };

  const prevPageHandler = () => {
    handleClick((state: number) =>
      state === arrayOfPages.length ? state : state + 1
    );
  };

  return (
    <div className={style.paginationContainer}>
      <div className={style.pagination}>
        <div className={`${style.paginationItem} `} onClick={nextPageHandler}>
          <img src={arrowLeft} alt="left arrow" className={style.arrow} />
        </div>
        {arrayOfPages.map((page, index) => (
          <div
            key={index}
            className={`${style.paginationItem} ${
              currentPage === page ? style.active : ""
            }`}
            onClick={() => handleClick(page as number)}
          >
            {page}
          </div>
        ))}

        <div className={style.paginationItem} onClick={prevPageHandler}>
          <img src={arrowRight} alt="right arrow" className={style.arrow} />
        </div>
      </div>
      <div className={style.paginationResults}>
        {indexOfFirstUser + 1}-{indexOfLastUser} of {users.length} Results
      </div>
    </div>
  );
};
