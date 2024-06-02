import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import classnames from "classnames/bind";
import logo from "../../../assets/images/logo.png";
import {
  ArrowLeft,
  CartIcon,
  Language,
  LogoutIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "../../../components/icons/icons";
import { useNavigate } from "react-router-dom";

import avatar from "../../../assets/images/products/avatar.png";
import ProdImg1 from "../../../assets/images/products/1.png";
import ProdImg2 from "../../../assets/images/products/2.png";
import ProdImg3 from "../../../assets/images/products/3.png";

const cx = classnames.bind(styles);

const Header = () => {
  const menuRef = useRef();
  const userRef = useRef();
  const cartRef = useRef();
  const navigate = useNavigate();
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsideUser = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setIsOpenUser(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideUser);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideUser);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsideCart = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpenCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideCart);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCart);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleOpenUser = () => {
    setIsOpenUser(!isOpenUser);
  };

  const handleOpenCart = () => {
    setIsOpenCart(!isOpenCart);
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
              `list-none fixed top-0 left-0 bg-white w-[256px] h-[100vh] border-r-10 shadow-lg z-10 lg:hidden`,
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
              onClick={() => {
                window.location.href = "/";
              }}
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
              onClick={() => {
                window.location.href = "/product/coffee";
              }}
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
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Trang chủ
          </li>
          <li
            className={cx(
              "list-none text-lg mx-[12px] hover:text-[#77DAE6] hover:cursor-pointer"
            )}
            onClick={() => {
              window.location.href = "/product/coffee";
            }}
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
        <div className="relative" ref={cartRef}>
          <button
            className={cx(
              "w-auto h-[50px] px-[20px] bg-white hidden lg:flex md:flex items-center justify-center rounded-md shadow-custom-light mx-[8px]"
            )}
            onClick={handleOpenCart}
          >
            <CartIcon classname={cx("w-[24px] h-[24px]")} />{" "}
            <span className="mx-2">|</span>
            <span>$100.00</span>
          </button>

          <div
            className={cx(
              "w-[640px] h-auto p-8 absolute top-14 right-0 z-40  bg-white rounded-xl shadow-custom-light",
              isOpenCart ? "open-cart" : "close-cart"
            )}
          >
            <div className="flex justify-between text-lg font-semibold mb-12">
              <h3 className="">You have 3 items in your cart</h3>
              <h3 className="text-blue-600 hover:text-blue-400 hover:cursor-pointer">
                See all
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className=" h-[148px] rounded-lg flex flex-col justify-center">
                <img
                  src={ProdImg1}
                  alt=""
                  className="w-full h-full object-cover border-2 border-gray-200 hover:cursor-pointer hover:border-[#77dae6] transition-all duration-300 ease-linear rounded-lg"
                />

                <p className="text-md text-gray-400 my-1">
                  Lavazza Coffee Blends
                </p>
                <div className="flex justify-between font-semibold text-md">
                  <p>$400.00</p>
                  <p>X 4</p>
                </div>
              </div>
              <div className=" h-[148px] rounded-lg flex flex-col justify-center">
                <img
                  src={ProdImg1}
                  alt=""
                  className="w-full h-full object-cover border-2 border-gray-200 hover:cursor-pointer hover:border-[#77dae6] transition-all duration-300 ease-linear rounded-lg"
                />
                <p className="text-md text-gray-400 my-1">
                  Lavazza Coffee Blends
                </p>
                <div className="flex justify-between font-semibold text-md">
                  <p>$400.00</p>
                  <p>X 4</p>
                </div>
              </div>
              <div className=" h-[148px] rounded-lg flex flex-col justify-center">
                <img
                  src={ProdImg1}
                  alt=""
                  className="w-full h-full object-cover border-2 border-gray-200 hover:cursor-pointer hover:border-[#77dae6] transition-all duration-300 ease-linear rounded-lg"
                />
                <p className="text-md text-gray-400 my-1">
                  Lavazza Coffee Blends
                </p>
                <div className="flex justify-between font-semibold text-md">
                  <p>$400.00</p>
                  <p>X 4</p>
                </div>
              </div>

              <hr className="bg-gray-600 col-span-3 my-6" />

              <div className="w-full col-span-3 mt-[-20px]">
                <div className="flex justify-between w-full text-lg text-gray-500">
                  <span>Subtotal</span>
                  <span>$415.99</span>
                </div>
                <div className="flex justify-between w-full text-lg text-gray-500">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between w-full text-lg text-gray-500">
                  <span>Total Price</span>
                  <span>$1200.99</span>
                </div>
              </div>

              <div className="flex justify-end col-span-3">
                <button className="rounded-full h-[44px] w-auto px-12 bg-yellow-400 font-semibold hover:opacity-80">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={userRef} className="relative">
          <div
            className={cx("w-[50px] h-[50px] rounded-md bg-white relative ")}
            onClick={() => {
              handleOpenUser();
            }}
          >
            <img src={avatar} alt="avatar" />
          </div>
          <div
            className={cx(
              "absolute top-[60px] right-0 w-[256px] h-auto bg-white shadow-custom-light p-2 rounded-md transform duration-300 ease-in-out z-50 ",
              isOpenUser ? "scale-100" : "scale-0"
            )}
          >
            <div className="flex items-center">
              <div className="w-[48px] h-[48px] bg-blue-200 rounded-md">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="h-[48px] ml-3">
                <h3 className="font-semibold">Trịnh Gia Lộc</h3>
                <span className="text-sm text-gray-400">
                  gialoc260202@gmail.com
                </span>
              </div>
            </div>
            <hr className="w-full bg-gray-400 my-3" />
            <div>
              <div className="flex justify-between items-center font-semibold py-2 hover:bg-yellow-100 rounded-md px-2 transition-all duration-300 ease-linear hover:cursor-pointer">
                <span>Tài khoản</span> <UserIcon className={cx("w-5 h-5")} />
              </div>
              <div className="flex justify-between items-center font-semibold py-2 hover:bg-yellow-100 rounded-md px-2 transition-all duration-300 ease-linear hover:cursor-pointer">
                <span>Giỏ hàng</span> <CartIcon classname={cx("w-5 h-5")} />
              </div>
              <div className="flex justify-between items-center font-semibold py-2 hover:bg-yellow-100 rounded-md px-2 transition-all duration-300 ease-linear hover:cursor-pointer">
                <span>Ngôn ngữ</span> <Language className={cx("w-5 h-5")} />
              </div>
            </div>
            <hr className="w-full bg-gray-400 my-3" />
            <div className="flex justify-between items-center font-semibold py-2 hover:bg-yellow-100 rounded-md px-2 transition-all duration-300 ease-linear hover:cursor-pointer">
              <span>Đăng xuất</span> <LogoutIcon className={cx("w-5 h-5")} />
            </div>
          </div>
        </div>
      </div>
      {/* right */}
    </div>
  );
};

export default Header;
