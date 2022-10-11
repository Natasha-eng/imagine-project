import React, { MouseEvent, RefObject, useCallback, useEffect, useRef, useState } from "react";
import { artData, IArtDate, usersData } from "../../data/data";
import style from "./artWorks.module.css";
import arrow from "../../assets/Arrow.png";
import { ArtWork } from "./ArtWork/ArtWork";
import { Pagination } from "../Pagination/Pagination";
import { Checkbox } from "../Checkbox/Checkbox";
import { SearchInput } from "../SearchInput/SearchInput";
import { EmptyResult } from "../EmptyResult/EmptyResult";

export interface categoriesType {
  sculpture: string;
  architecture: string;
  graphicArts: string;
  portrait: string;
  landscape: string;
}

export const ArtWorks = () => {
  const [openedCategory, setOpenedCatedory] = useState(false);
  const [openedSearchInput, setOpenedSearchInput] = useState(false);

  //filter state
  const [categories, setCategories] = useState(artData);
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState(usersData);
  const [reset, setReset] = useState(false);

  //pagination state
  let [currentPage, setCurrentPage] = useState<any>(1);
  const [usersPerPage, setUsersPerPage] = useState(4);

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const openCategoryHandler = useCallback(() => {
    setOpenedCatedory(!openedCategory);
  }, [openedCategory]);

  const openSearchInputHandler = useCallback(() => {
    setOpenedSearchInput(!openedSearchInput);
  }, [openedSearchInput]);

  let categoryMenuRef: RefObject<HTMLDivElement> = useRef() as RefObject<HTMLDivElement>

  let inputMenuRef: RefObject<HTMLDivElement> = useRef() as RefObject<HTMLDivElement>

  useEffect(() => {
    let categoryHandler = (e: any): void => {
      if (!categoryMenuRef.current?.contains(e.target as HTMLElement)) {
        setOpenedCatedory(false);

      }
    }

    let inputHnadler = (e: any): void => {
      if (!inputMenuRef.current?.contains(e.target as HTMLDivElement | HTMLInputElement)) {
        setOpenedSearchInput(false);
      }
    }

    document.addEventListener("mousedown", categoryHandler)
    document.addEventListener("mousedown", inputHnadler)

    return () => {
      document.removeEventListener('mousedown', categoryHandler)
      document.removeEventListener('mousedown', inputHnadler)
    }
  })

  const changeCheckedHandler = (value: number) => {
    const changeCheck = categories.map((category) =>
      category.id === value
        ? { ...category, checked: !category.checked }
        : category
    );

    setCategories(changeCheck);
    setReset(true)
  };

  const changeInputValue = (value: string) => {
    setReset(true)
    setInputValue(value)
  }

  const applyFilters = useCallback(() => {
    let updatedUsers = usersData;

    //category filter
    let categoryChecked = categories
      .filter((cat) => cat.checked)
      .map((cat) => cat.value);

    if (categoryChecked.length) {
      updatedUsers = updatedUsers.filter((user) =>
        categoryChecked.includes(user.category)
      );
    }

    //search filter
    if (inputValue) {
      updatedUsers = updatedUsers.filter(
        (user) =>
          user.userName
            .toLowerCase()
            .search(inputValue.toLowerCase().trim()) !== -1
      );
    }

    setUsers(updatedUsers);
  }, [categories, inputValue])


  //index of last user in each page
  const indexOfLastUser = currentPage as number * usersPerPage;

  //index of first user in each page
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  //current users per page
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    applyFilters();
    if (reset) {
      setCurrentPage(1);
      setMaxPageNumberLimit(3);
      setMinPageNumberLimit(0);
    }
  }, [categories, inputValue, applyFilters, reset]);


  return (
    <div className={style.main}>
      <div className={style.pageName}>
        <div className={style.name}>ArtWorks</div>
        <div className={style.quantity}>588</div>
      </div>
      <div className={style.optionsContainer}>
        <div className={style.dropdownContainer} ref={categoryMenuRef}>
          <div className={style.dropdown} onClick={openCategoryHandler}>
            <div>Category</div>
            <img src={arrow} alt="arrow" className={style.dropdownArrow} />
          </div>
          <div
            className={openedCategory ? style.artOptions : style.hideOptions}
          >
            {categories.map((a, index) => (
              <Checkbox
                key={index}
                artObj={a}
                changeChecked={changeCheckedHandler}
              />
            ))}
          </div>
        </div>
        <div className={style.searchInputDropdown} ref={inputMenuRef}>
          <div className={style.dropdown} onClick={openSearchInputHandler}>
            <div>Name</div>
            <img src={arrow} alt="arrow" className={style.dropdownArrow} />
          </div>
          <SearchInput
            openedSearchInput={openedSearchInput}
            value={inputValue}
            changeInput={changeInputValue}
          />
        </div>
      </div>
      {currentUsers.length ? <div className={style.works}>
        {currentUsers.map((user, index) => (
          <ArtWork workInfo={user} key={index} />
        ))}
      </div> : <EmptyResult />}
      <Pagination
        users={users}
        usersPerPage={usersPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        indexOfLastUser={indexOfLastUser}
        indexOfFirstUser={indexOfFirstUser}
        inputValue={inputValue}
        reset={reset}
        setReset={setReset}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
      />
    </div>
  );
};
