import React from "react";
import styles from "./Footer.module.scss";
import classnames from "classnames/bind";
import logo from "../../../assets/images/logo.png";

const cx = classnames.bind(styles);

const Footer = () => {
  return (
    <div
      className={cx(
        "grid grid-cols-2 xl:grid-cols-4 bg-[#EEEEF6] lg:px-[86px] lg:py-[20px] md:px-[12px] sm:px-[12px] py-[12px] px-[12px]"
      )}
    >
      <div className={cx("col-span-2 lg:col-span-1 w-full")}>
        <div className="flex flex-col  px-[8px]">
          <div className="w-full flex text-lg lg:text-xl font-semibold">
            <img src={logo} alt="lgo" className={cx("mr-[8px]")} />
            <span>grocery mark</span>
          </div>
          <div className={cx("text-sm text-left my-4")}>
            Chúng tôi có niềm tin mạnh mẽ rằng trải nghiệm mua sắm trực tuyến
            phải đơn giản, dễ dàng và mang đến cảm xúc vui thích. Niềm tin này
            truyền cảm hứng và thúc đẩy chúng tôi mỗi ngày.
          </div>

          <div>
            <input
              type="email"
              className={cx(
                "w-[70%] h-[48px] rounded-l-md focus:outline-none px-2"
              )}
            />
            <button
              className={cx(
                "w-[30%] h-[48px] rounded-r-md bg-yellow-300 font-semibold text-white"
              )}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className={cx("col-span-2 lg:col-span-2")}>2</div>
      <div
        className={cx(
          "col-span-2 lg:col-span-1 flex justify-start lg:justify-end"
        )}
      >
        <div className="text-left px-[12px]">
          <h2 className="font-semibold text-lg">Liên hệ</h2>
          <p className="flex flex-col mb-[8px] mt-[8px]">
            <span className="font-normal">Email</span> Gialoc260202@gmail.com
          </p>
          <p className="flex flex-col mb-[8px]">
            <span className="font-normal">Số điện thoại</span> 0977888999
          </p>
          <p className="flex flex-col mb-[8px]">
            <span className="font-normal">Địa chỉ</span> Hòa Lộc, Hậu Lộc, Thanh
            Hóa
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
