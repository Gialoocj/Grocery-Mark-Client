import React, { useState } from "react";
import styles from "./Home.module.scss";
import classnames from "classnames/bind";
import ProImg1 from "../../assets/images/products/1.png";
import ProImg2 from "../../assets/images/products/2.png";
import ProImg3 from "../../assets/images/products/3.png";
import ProImg4 from "../../assets/images/products/4.png";
import ProImg5 from "../../assets/images/products/5.png";
import { StartIcon } from "../../components/icons/icons";

const cx = classnames.bind(styles);

const Home = () => {
  const [productData, setProductData] = useState([
    {
      image: ProImg1,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      trademark: "Lavazza",
      price: "$40.00",
      rating: "4.3",
    },

    {
      image: ProImg2,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      trademark: "Lavazza",
      price: "$40.00",
      rating: "4.3",
    },

    {
      image: ProImg3,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      trademark: "Lavazza",
      price: "$40.00",
      rating: "4.3",
    },

    {
      image: ProImg4,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      trademark: "Lavazza",
      price: "$40.00",
      rating: "4.3",
    },

    {
      image: ProImg5,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      trademark: "Lavazza",
      price: "$40.00",
      rating: "4.3",
    },
    {
      image: ProImg1,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      trademark: "Lavazza",
      price: "$40.00",
      rating: "4.3",
    },
    {
      image: ProImg3,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      trademark: "Lavazza",
      price: "$40.00",
      rating: "4.3",
    },
    {
      image: ProImg5,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      trademark: "Lavazza",
      price: "$40.00",
      rating: "4.3",
    },
  ]);
  return (
    <div>
      <h2 className="font-semibold text-xl mb-[24px] lg:text-2xl">Mới nhất</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-4">
        {productData.map((prod, index) => {
          return (
            <div
              key={index}
              className="lg:col-span-1 bg-white p-4 hover:cursor-pointer hover:shadow-custom-light rounded-md transition-all duration-300 ease-linear"
            >
              <div className="w-full rounded-md overflow-hidden bg-white">
                <img
                  src={prod.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-left">{prod.name}</h3>
              <p className="my-[12px] text-gray-400">{prod.trademark}</p>
              <div className="flex justify-between  ">
                <span>{prod.price}</span>
                <span className="flex items-center">
                  <StartIcon classname="w-[20px] h-[20px] text-yellow-400 mr-2" />
                  {prod.rating}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
