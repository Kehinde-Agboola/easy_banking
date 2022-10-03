import React from "react";
import logo from "../images/logow.svg";
import twit from "../images/icon-twitter.svg";
import fbook from "../images/icon-facebook.svg";
import you from "../images/icon-youtube.svg";
import pint from "../images/icon-pinterest.svg";
import insta from "../images/icon-instagram.svg";
import Buttons from "./Button";

const Footer = () => {
  return (
    <footer className="">
      <div className="container md:grid md:grid-cols-3 xl:grid-cols-4 md:place-content-center">
        <article className="xl:py-20 py-5">
          <img src={logo} alt="" className="footer_logo w-40 m-auto block" />
          <article className=" social__links">
            <ul className="flex flex-wrap items-center justify-center gap-2 xl:my-2 xl:mt-12 py-4">
              <li>
                <img src={fbook} alt="" />
              </li>
              <li>
                <img src={you} alt="" />
              </li>
              <li>
                <img src={twit} alt="" />
              </li>
              <li>
                <img src={pint} alt="" />
              </li>
              <li>
                <img src={insta} alt="" />
              </li>
            </ul>
          </article>
        </article>

        <article className="text-center xl:py-20 ">
          <ul className="">
            <li className="py-2">
              <a href="#"> About Us</a>
            </li>
            <li className="py-2">
              <a href="#"> Contact</a>
            </li>
            <li className="py-2">
              <a href="#"> Blog</a>
            </li>
          </ul>
        </article>

        <article className="text-center xl:py-20">
          <ul className="">
            <li className="py-2">
              <a href="#">Careers</a>
            </li>
            <li className="py-2">
              <a href="#"> Support</a>
            </li>
            <li className="py-2">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </article>

        <article className="text-center xl:py-20 md:py-0 md:pb-20 py-2">
          <div className="w-40 m-auto ">
            <ul>
              <li>
                <Buttons />
              </li>
            </ul>
          </div>
          <p className="xl:mt-5 py-9"> © Easybank. All Rights Reserved</p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
