import React, { useState, useEffect } from "react";
import {
  MenuIcon,
  ArrowRight,
  PlusIcon,
  MinusIcon,
  LoveIcon,
  TrashIcon,
} from "../../components/icons/icons";
import ProdImg1 from "../../assets/images/products/1.png";
import ProdImg2 from "../../assets/images/products/2.png";
import ProdImg3 from "../../assets/images/products/3.png";

const Payment = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([
    {
      image: ProdImg1,
      trademark: "Lavazza",
      price: 49.19,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      totalMoney: 49.19,
      count: 1,
      id: 1,
    },
    {
      image: ProdImg2,
      trademark: "Lavazza",
      price: 49.19,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      totalMoney: 49.19,
      count: 1,
      id: 2,
    },
    {
      image: ProdImg3,
      trademark: "Lavazza",
      price: 49.19,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      totalMoney: 49.19,
      count: 1,
      id: 3,
    },
  ]);

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const url = window.location.href;
    var parts = url.split("/");
    var lastPart = parts[parts.length - 1];
    setCategory(lastPart);
  }, []);

  const handleIncrease = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              count: product.count + 1,
              totalMoney: (product.count + 1) * product.price,
            }
          : product
      )
    );
  };

  const handleDecrease = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count > 0
          ? {
              ...product,
              count: product.count - 1,
              totalMoney: (product.count - 1) * product.price,
            }
          : product
      )
    );
  };

  useEffect(() => {
    let total = 0;
    let price = 0;
    products.forEach((product) => {
      total += product.count;
      price += product.count * product.price;
    });
    setTotalItems(Math.floor(total).toFixed(2));
    setTotalPrice(price);
  }, [products]);

  return (
    <div className="w-full h-full">
      <div className="h-[60px] rounded-lg bg-white flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="text-[#77DAE6] font-semibold">Trang chủ</span>
          <span className="mx-2">
            <ArrowRight classname="w-6 h-6 text-gray-400 font-semibold" />
          </span>
          <span className="capitalize">{category}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-4 mt-6">
        <div className="lg:col-span-8 col-span-1 rounded-lg bg-white p-4 h-auto">
          {products.map((prod, idx) => (
            <div key={idx} className="flex border-b-2 border-gray-300">
              <div className="w-[200px] h-[200px]">
                <img
                  src={prod.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-4 ml-4 w-full">
                <div className="lg:flex w-full justify-between">
                  <h3 className="font-semibold text-lg">{prod.name}</h3>
                  <h4 className="font-semibold text-xl">${prod.totalMoney}</h4>
                </div>
                <h3 className="text-gray-400 text-lg flex my-2">
                  ${prod.price} <span className="mx-2">|</span>
                  <span className="text-green-400">In Stock</span>
                </h3>

                <div className="flex">
                  <div className="border border-gray-400 rounded-md flex items-center justify-center px-4 mr-2">
                    {prod.trademark}
                  </div>
                  <div className="flex justify-between p-2 border w-[120px] border-gray-400 rounded-md">
                    <button
                      className="border border-gray-400 rounded-md p-1"
                      onClick={() => handleDecrease(prod.id)}
                    >
                      <MinusIcon classname="w-4 h-4 text-black font-semibold" />{" "}
                    </button>
                    <span>{prod.count}</span>
                    <button
                      className="border border-gray-400 rounded-md p-1"
                      onClick={() => handleIncrease(prod.id)}
                    >
                      <PlusIcon classname="w-4 h-4 text-black font-semibold" />{" "}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-6">
                  <button className="flex items-center">
                    <LoveIcon className="w-6 h-6 text-gray-400 font-semibold" />{" "}
                    <span className="font-semibold text-gray-400">Lưu lại</span>
                  </button>

                  <button className="flex items-center">
                    <TrashIcon className="w-6 h-6 text-gray-400 font-semibold ml-4" />{" "}
                    <span className="font-semibold text-gray-400">Xóa</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-6">
            <span
              className="font-semibold text-blue-600 hover:opcacity-80 hover:cursor-pointer"
              onClick={() => {
                window.location.href = "/product/coffee";
              }}
            >
              Tiếp tục mua sắm
            </span>

            <span className="font-semibold text-xl">Total: ${totalPrice}</span>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1 rounded-lg bg-white p-4 h-[190px] mt-4 lg:mt-0">
          <div className="flex justify-between text-lg mb-2">
            <span>Tổng sản phẩm</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-lg mb-2">
            <span>Tổng tiền</span>
            <span>${totalPrice}</span>
          </div>

          <div className="flex justify-between text-lg mb-2">
            <span>Shipping</span>
            <span>$10</span>
          </div>

          <button className="w-full rounded-full  bg-yellow-400 h-[44px] font-semibold hover:opacity-85">
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
