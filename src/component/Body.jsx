import React from "react";
import desktop from "../images/bg-intro-desktop.svg";
import mobile from "../images/bg-intro-mobile.svg";
import mock from "../images/image-mockups.png";
import Buttons from "./Button";
const Body = () => {
  return (
    <div className="container flex flex-col-reverse md:flex md:flex-row">
      <div className="heading max-w-sm text-center md:text-left xl:text-md md:self-center px-5">
        <h1>
          Next generation <br /> digital banking
        </h1>
        <p className="xl:text-md">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="w-40 text-center pt-5 m-auto md:m-0">
          <Buttons />
        </div>
      </div>
      <div className="head-img md:overflow-y-hidden">
        <div className="background relative -z-10">
          <picture>
            <source media="(min-width: 880px)" srcSet={desktop} />
            <img src={mobile} alt="" className="w-full block mt-auto" />
          </picture>
        </div>
        <div className="mock_up absolute -top-16 -z-10 md:-top-12">
          <img src={mock} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
