import React, { useCallback, useEffect, useState } from "react";
import { artData, usersData } from "../../data/data";
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

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(4);

  const openCategoryHandler = useCallback(() => {
    setOpenedCatedory(!openedCategory);
  }, [openedCategory]);

  const openSearchInputHandler = useCallback(() => {
    setOpenedSearchInput(!openedSearchInput);
  }, [openedSearchInput]);

  const changeCheckedHandler = (value: number) => {
    const changeCheck = categories.map((category) =>
      category.id === value
        ? { ...category, checked: !category.checked }
        : category
    );

    setCategories(changeCheck);
  };

  const applyFilters = () => {
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
  };

  //index of last item in each page
  const indexOfLastUser = currentPage * usersPerPage;

  //index of first user in each page
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  //current users per page
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    applyFilters();
  }, [categories, inputValue]);

  return (
    <div className={style.main}>
      <div className={style.pageName}>
        <div className={style.name}>ArtWorks</div>
        <div className={style.quantity}>588</div>
      </div>
      <div className={style.optionsContainer}>
        <div className={style.dropdownContainer}>
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
        <div className={style.searchInputDropdown}>
          <div className={style.dropdown} onClick={openSearchInputHandler}>
            <div>Name</div>
            <img src={arrow} alt="arrow" className={style.dropdownArrow} />
          </div>
          <SearchInput
            openedSearchInput={openedSearchInput}
            value={inputValue}
            changeInput={setInputValue}
          />
        </div>
      </div>
      <div className={style.works}>
        {currentUsers.map((user, index) => (
          <ArtWork workInfo={user} key={index} />
        ))}
      </div>
      <Pagination
        users={users}
        usersPerPage={usersPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        indexOfLastUser={indexOfLastUser}
        indexOfFirstUser={indexOfFirstUser}
      />
    </div>
  );
};
