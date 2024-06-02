import React from "react";
import styles from "./DefaultLayout.module.scss";
import classnames from "classnames/bind";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const cx = classnames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className={cx("header fixed top-0 w-full z-50")}>
        <Header />
      </div>
      <div
        className={cx(
          "content px-[12px] py-[16px] lg:px-[86px] bg-gray-100 pt-28"
        )}
      >
        {children}
      </div>
      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
