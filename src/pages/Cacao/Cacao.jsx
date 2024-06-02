import React, { useEffect, useRef, useState } from "react";
import styles from "./Cacao.module.scss";
import classNames from "classnames/bind";
import {
  ArrowRight,
  FilterIcon,
  MenuIcon,
  StartIcon,
} from "../../components/icons/icons";

import ProdImg1 from "../../assets/images/products/1.png";
import ProdImg2 from "../../assets/images/products/2.png";
import ProdImg3 from "../../assets/images/products/3.png";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Cacao = () => {
  const filterRef = useRef();

  const product = [
    {
      image: ProdImg1,
      name: "Lavazza Coffee Blends - Try the Italian Espresso",
      price: "$30.00",
      trademark: "Lavazza",
      rating: "4.3",
    },
    {
      image: ProdImg2,
      name: "Lavazza Coffee Blends - Try the Italian Espresso",
      price: "$30.00",
      trademark: "Lavazza",
      rating: "4.3",
    },
    {
      image: ProdImg3,
      name: "Lavazza Coffee Blends - Try the Italian Espresso",
      price: "$30.00",
      trademark: "Lavazza",
      rating: "4.3",
    },
    {
      image: ProdImg3,
      name: "Lavazza Coffee Blends - Try the Italian Espresso",
      price: "$30.00",
      trademark: "Lavazza",
      rating: "4.3",
    },
    {
      image: ProdImg2,
      name: "Lavazza Coffee Blends - Try the Italian Espresso",
      price: "$30.00",
      trademark: "Lavazza",
      rating: "4.3",
    },
    {
      image: ProdImg1,
      name: "Lavazza Coffee Blends - Try the Italian Espresso",
      price: "$30.00",
      trademark: "Lavazza",
      rating: "4.3",
    },
  ];

  const [category, setCategory] = useState();
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href;
    var parts = url.split("/");
    var lastPart = parts[parts.length - 1];
    setCategory(lastPart);
  }, []);

  const handleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsOpenFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.innerWidth]);

  return (
    <div className="w-full h-full ">
      <div className="h-[60px] rounded-lg bg-white flex items-center justify-between p-4">
        <div className=" flex items-center">
          <span className="text-[#77DAE6] font-semibold">Trang chủ</span>
          <span className="mx-2">
            <ArrowRight classname={cx("w-6 h-6 text-gray-400 font-semibold")} />
          </span>
          <span className="capitalize">{category}</span>
        </div>

        <button
          className="hover:cursor-pointer lg:hidden"
          onClick={() => {
            handleOpenFilter();
          }}
        >
          <MenuIcon classname={cx("w-7 h-7 text-gray-800 font-semibold")} />
        </button>
      </div>

      <div className="grid grid-cols-1 relative lg:grid-cols-12 md:grid-cols-6 lg:px-4 mt-6">
        <div
          className={cx(
            "lg:col-span-3 w-[256px] pl-8 lg:pl-0 shadow-custom-light lg:shadow-none top-0 z-30 left-[-12px] h-[100vh] fixed md:z-40 bg-white lg:bg-transparent lg:static",
            isMobile
              ? isOpenFilter
                ? "transition-all duration-300 translate-x-0"
                : "transition-all duration-300 -translate-x-full"
              : ""
          )}
          ref={filterRef}
        >
          <div className={cx("w-4/5 ")}>
            <h3 className="font-semibold text-xl my-4">Loại sản phẩm</h3>
            <hr className="border border-black" />
            <div className="list-none mt-4">
              <li className="py-1 hover:cursor-pointer hover:text-[#77dae6]">
                Coffee đen
              </li>
              <li className="py-1 hover:cursor-pointer hover:text-[#77dae6]">
                Coffee Sữa
              </li>
              <li className="py-1 hover:cursor-pointer hover:text-[#77dae6]">
                Coffee fitler
              </li>
            </div>

            <div className="flex items-center my-4">
              <FilterIcon
                classname={cx("w-6 h-6 text-gray-800 font-semibold")}
              />
              <span className="font-semibold ml-3 text-lg">
                Bộ lọc sản phẩm
              </span>
            </div>
            <p>Theo loại sản phẩm</p>
            <div className="mt-2">
              <div className="flex items-center mt-1">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span className="text-md">Túi</span>
              </div>
              <div className="flex items-center mt-1">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span className="text-md">Hộp</span>
              </div>
            </div>

            <hr className="border border-black my-5" />
            <p>Theo thương hiệu</p>
            <div className="mt-2">
              <div className="flex items-center mt-1">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span className="text-md">Lavazza</span>
              </div>
              <div className="flex items-center mt-1">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span className="text-md">Nestcafe</span>
              </div>
              <div className="flex items-center mt-1">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span className="text-md">Trung Nguyên</span>
              </div>
            </div>

            <button className="w-full h-[40px] bg-yellow-400 mt-6 font-semibold rounded-md hover:cursor-pointer hover:opacity-90">
              Áp dụng
            </button>
          </div>
        </div>
        <div className="lg:col-span-9 md:col-span-6 col-span-1 grid lg:grid-cols-4  md:grid-cols-2 gap-4 h-auto mt-4">
          {product.map((prod, idx) => {
            return (
              <div
                key={idx}
                product={prod}
                onClick={() => {
                  navigate(`/product-details`);
                }}
                className="col-span-1 bg-white rounded-lg p-4 hover:scale-105 hover:shadow-custom-light hover:cursor-pointer transition-all duration-300"
              >
                <div className="bg-white">
                  <img src={prod.image} alt="sản phẩm" />
                  <p className="font-semibold ">{prod.name}</p>
                  <p className="text-sm text-gray-400 my-2">{prod.trademark}</p>
                  <div className="flex items-center justify-between">
                    <span>{prod.price}</span>

                    <div className="flex items-center">
                      <StartIcon classname={cx("w-4 h-4")} />
                      <span>{prod.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cacao;
