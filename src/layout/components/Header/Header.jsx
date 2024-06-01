import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import classnames from "classnames/bind";
import logo from "../../../assets/images/logo.png";
import {
  ArrowLeft,
  CartIcon,
  MenuIcon,
  SearchIcon,
} from "../../../components/icons/icons";

const cx = classnames.bind(styles);

const Header = () => {
  const menuRef = useRef();
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div
      className={cx(
        "h-[90px] bg-[#EEEEF6] flex justify-between items-center px-[12px] xl:px-[86px] md:px-[12px] sm:px-[12px] "
      )}
    >
      <div
        className={cx("flex justify-start items-center w-full  h-12 relative")}
      >
        <div className={cx("relative")} ref={menuRef}>
          <button
            onClick={handleOpenMenu}
            className={cx("block lg:hidden hover:cursor-pointer")}
          >
            <MenuIcon classname={cx("w-[30px] h-[30px]")} />
          </button>
          <div
            className={cx(
              `list-none absolute top-[-24px] left-[-8px] bg-white w-[256px] h-[100vh] border-r-10 shadow-lg z-10 lg:hidden`,
              isOpenMenu
                ? "transform translate-x-0 transition-all duration-300 ease-linear"
                : "transform -translate-x-full transition-all duration-300 ease-linear"
            )}
          >
            <div className={cx("w-full flex justify-start px-[20px]")}>
              <button
                className={cx("my-[20px] hover:cursor-pointer")}
                onClick={() => {
                  setIsOpenMenu(false);
                }}
              >
                <ArrowLeft classname={cx("w-[24px] h-[24px]")} />
              </button>
            </div>
            <li
              className={cx(
                "py-[12px] hover:cursor-pointer hover:text-[#77dae6] text-left px-[20px]"
              )}
            >
              Trang chủ
            </li>
            <li
              className={cx(
                "py-[12px] hover:cursor-pointer hover:text-[#77dae6] text-left px-[20px]"
              )}
            >
              Trà
            </li>
            <li
              className={cx(
                "py-[12px] hover:cursor-pointer hover:text-[#77dae6] text-left px-[20px]"
              )}
            >
              Coffee
            </li>
            <li
              className={cx(
                "py-[12px] hover:cursor-pointer hover:text-[#77dae6] text-left px-[20px]"
              )}
            >
              Ca cao
            </li>
          </div>
        </div>

        <div className={cx("flex items-center")}>
          <div
            className={cx("w-[50px] h-full flex items-center justify-center ")}
          >
            <img src={logo} alt="logo-grocery-mark" />
          </div>
          <span className={cx("font-semibold text-2xl logo-name")}>
            grocery mark
          </span>
        </div>
        <div
          className={cx(
            " ml-[60px] hidden xl:flex lg:hidden md:hidden sm:hidden "
          )}
        >
          <li
            className={cx(
              "list-none text-lg mx-[12px] hover:text-[#77DAE6] hover:cursor-pointer"
            )}
          >
            Trang chủ
          </li>
          <li
            className={cx(
              "list-none text-lg mx-[12px] hover:text-[#77DAE6] hover:cursor-pointer"
            )}
          >
            Coffee
          </li>
          <li
            className={cx(
              "list-none text-lg mx-[12px] hover:text-[#77DAE6] hover:cursor-pointer"
            )}
          >
            Trà
          </li>
          <li
            className={cx(
              "list-none text-lg mx-[12px] hover:text-[#77DAE6] hover:cursor-pointer"
            )}
          >
            Cacao
          </li>
        </div>
      </div>

      {/* right */}
      <div className={cx("flex justify-between items-center h-full")}>
        <input
          type="text"
          className={cx(
            `w-[300px] h-[50px] mr-[8px] px-2 rounded-md focus:outline-none`,
            isOpenSearch ? "block" : "hidden",
            isOpenSearch ? "animate-slide-in" : "animate-slide-out"
          )}
          placeholder="Tìm kiếm..."
        />
        <button
          className={cx(
            "w-[50px] h-[50px] bg-white lg:flex items-center justify-center rounded-md shadow-custom-light hidden"
          )}
          onClick={handleSearch}
        >
          <SearchIcon classname={cx("w-[24px] h-[24px]")} />
        </button>
        <button
          className={cx(
            "w-auto h-[50px] px-[20px] bg-white hidden lg:flex md:flex items-center justify-center rounded-md shadow-custom-light mx-[8px]"
          )}
        >
          <CartIcon classname={cx("w-[24px] h-[24px]")} /> <span>|</span>
          <span>$100.00</span>
        </button>
        <div className={cx("w-[50px] h-[50px] rounded-md bg-white")}></div>
      </div>
      {/* right */}
    </div>
  );
};

export default Header;
