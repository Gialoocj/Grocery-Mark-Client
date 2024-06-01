import React, { useState } from "react";
import styles from "./Home.module.scss";
import classnames from "classnames/bind";
import ProImg1 from "../../assets/images/products/1.png";
import ProImg2 from "../../assets/images/products/2.png";
import ProImg3 from "../../assets/images/products/3.png";
import ProImg4 from "../../assets/images/products/4.png";
import ProImg5 from "../../assets/images/products/5.png";
import ProImg6 from "../../assets/images/products/6.png";
import Banner1 from "../../assets/images/products/banner1.jpg";
import Banner3 from "../../assets/images/products/banner3.jpg";
import Banner5 from "../../assets/images/products/banner5.png";
import { StartIcon } from "../../components/icons/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate } from "react-router-dom";
import ProductContext from "../../context/ProductContext/Context";

const cx = classnames.bind(styles);

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

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

  const banner = [
    {
      image: Banner1,
    },
    {
      image: Banner3,
    },
    {
      image: Banner5,
    },
  ];

  const categories = [
    {
      image: ProImg4,
      range: "$24 - $50",
      desc: "New sumatra mandeling coffe blend",
    },

    {
      image: ProImg5,
      range: "$24 - $50",
      desc: "New sumatra mandeling coffe blend",
    },

    {
      image: ProImg6,
      range: "$24 - $50",
      desc: "New sumatra mandeling coffe blend",
    },
  ];

  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <div className="overflow-hidden h-[300px] lg:h-[500px] rounded-xl my-[20px] ">
        <Slider {...settings}>
          {banner.map((ban, index) => (
            <div
              key={index}
              className="w-full h-[500px] rounded-xl overflow-hidden"
            >
              <img
                src={ban.image}
                alt="banner"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-[24px] lg:text-2xl">
          Danh mục
        </h2>
        <div className="grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-3 justify-between mb-[20px]">
          {categories.map((cat, index) => {
            return (
              <div className="flex col-span-1 w-full h-[160px] p-[12px] bg-white shadow-custom-light rounded-md hover:cursor-pointer transform hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="w-[160px] h-full rounded-md flex items-center justify-center  bg-white">
                  <img
                    src={cat.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-[12px]">
                  <h4 className="text-xl font-semibold">{cat.range}</h4>
                  <p className="text-md mt-[12px]">{cat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-[24px] lg:text-2xl">
          Mới nhất
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-4">
          {productData.map((prod, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedProduct(prod);
                  navigate("/product-details", { prod });
                }}
                className="lg:col-span-1 bg-white p-4 hover:cursor-pointer hover:shadow-custom-dark rounded-md transition-all duration-300 ease-linear"
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
    </div>
  );
};

export default Home;
