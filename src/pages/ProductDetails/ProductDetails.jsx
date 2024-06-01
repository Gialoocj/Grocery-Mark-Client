import React, { useEffect, useState } from "react";
import styles from "./ProductDetails.module.scss";
import classnames from "classnames/bind";
import ProImg1 from "../../assets/images/products/1.png";
import ProImg2 from "../../assets/images/products/2.png";
import ProImg3 from "../../assets/images/products/3.png";
import ProImg4 from "../../assets/images/products/4.png";
import {
  CartIcon,
  MinusIcon,
  PlusIcon,
  StartIcon,
} from "../../components/icons/icons";

const cx = classnames.bind(styles);

const ProductDetails = ({ location }) => {
  const product = location;
  useEffect(() => {
    console.log(product);
  }, []);
  const [currentImage, setCurrentImage] = useState(ProImg1);

  const handleChangeImage = (image) => {
    setCurrentImage(image.img);
  };

  const images = [
    { img: ProImg1, id: 0 },
    { img: ProImg2, id: 1 },
    { img: ProImg3, id: 2 },
    { img: ProImg4, id: 3 },
  ];

  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * 40);
  };

  const handleDecreaseQuantity = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
    setTotalPrice(totalPrice - 40);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full ">
      <div className="col-span-2 bg-white rounded-lg p-[20px] relative">
        <div className="w-full h-[400px]">
          <img
            src={currentImage}
            alt=""
            className="w-full h-full object-contain transition-all duration-300 ease-in-out"
          />
          {/* <span className="absolute top-4 right-4">{totalPrice}</span> */}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, index) => {
            return (
              <div
                onClick={() => handleChangeImage(img)}
                className={cx(
                  "w-full flex items-center justify-center rounded-lg border-2 border-gray-200 hover:border-[#9adce3cf] hover:cursor-pointer transition-all duration-300 ease-linear scale-0",
                  {
                    "transform scale-100 duration-300 transition-all ease-linear":
                      index === img.id,
                  }
                )}
              >
                <img src={img.img} alt="ảnh" className="w-full h-full" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-2  rounded-xl flex flex-col h-auto">
        <div className="h-auto bg-white p-[12px] rounded-xl">
          <h3 className=" text-2xl text-center">
            Coffee Beans - Espresso Arabica and Robusta Beans
          </h3>
          <div className="lg:px-[24px] p-[12px]">
            <div className="my-2">
              <h3 className="font-semibold text-lg mt-4">Mô tả sản phẩm</h3>
              <p>
                Được “MinhChau” chế biến từ 100% những hạt Cà phê Arabica Sơn La
                đặc biệt, đã qua quá trình tuyển lựa kỹ càng với một qui trình
                rang xay riêng biệt. Sản phẩm được cam kết và chứng nhận về
                ATVSTP với chất lượng thật nhất, bảo toàn hương vị cà phê tự
                nhiên
              </p>
              <p className="mt-4">
                <span className="font-semibold">Đặc tính</span>: Chua thanh,
                đắng nhẹ, ngọt hậu, hương tự nhiên, thơm êm dịu.
              </p>

              <p className="mt-4">
                <span className="font-semibold">Hương</span>: Đậm đà hương cà
                phê, thơm nhẹ mùi sữa. Nổi trội hương vị của ngũ cốc, đậu nành.
              </p>

              <p className="mt-4">
                <span className="font-semibold">Phương Pháp</span>: Công nghệ
                sấy lạnh
              </p>

              <p className="mt-4">
                <span className="font-semibold">Thương hiệu</span>: HANCOFFEE
              </p>
            </div>
          </div>
        </div>

        <div className="h-auto bg-white rounded-xl mt-4 py-[20px] px-[32px]">
          <p className="text-lg">Số lượng</p>
          <div className="flex justify-between  mt-2">
            <div className="flex items-center h-[40px]">
              <button
                onClick={handleDecreaseQuantity}
                className="w-[44px] border-2 border-gray-400 h-full flex items-center justify-center rounded-l-md"
              >
                <MinusIcon classname={cx("w-4 h-4")} />
              </button>
              <input
                type="text"
                value={quantity}
                className="text-center w-[60px] border-2 border-l-0 border-r-0 border-gray-400 h-full focus:outline-none"
              />
              <button
                onClick={handleIncreaseQuantity}
                className="w-[44px] border-2 border-gray-400 h-full flex items-center justify-center rounded-r-md"
              >
                <PlusIcon classname={cx("w-4 h-4")} />
              </button>
            </div>

            <span className="text-xl font-semibold">${totalPrice}</span>
          </div>
          <button className="lg:w-auto h-[40px] w-full lg:px-4 lg:h-[40px] rounded-md bg-yellow-300 mt-4 flex justify-center items-center">
            <CartIcon classname={cx("w-5 h-5")} />
            <span className="ml-2 font-semibold">Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
