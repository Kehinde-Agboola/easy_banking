import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import Menu from "./data/Menu";
import Buttons from "./Button";
import Navbar from "./Navbar";
import close from "../images/icon-close.svg";
import open from "../images/icon-open.svg";
const Nav = () => {
  // const ShowButton = () => {
  //   if (window.innerWidth >= 769) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // };
  // useEffect(() => {
  //   // if (window.innerWidth >= width) {
  //   //   setOpen(true);
  //   // }
  //   ShowButton();
  // }, []);
  const [isOpen, setOpen] = useState(true);
  const [Navlinks, setnavLinks] = useState(Menu);
  return (
    <>
      <header className="absolute p-3 bg-white w-full">
        <div className="max-w-[1440px] mx-auto">
          <div className="head__nav">
            <div>
              <img src={logo} alt="" />
            </div>
            {/* Links */}
            <nav className="navbar">
              <ul className="ul_nav">
                {Navlinks.map(({ id, title, links }) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
            </nav>
            <div className="button-w">
              <Buttons />
            </div>

            <div className="menu flex-col items-center">
              <img
                src={isOpen ? close : open}
                alt="menu"
                className="object-contain cursor pointer w-10"
                onClick={() => setOpen((prev) => !prev)}
              />
              <div className={`${isOpen ? "flex" : "hidden"} `}>
                <ul className="flex-col px-20 justify-center text-center shadow-lg absolute bg-white right-10  top-20 w-[80%] py-4 mt-2">
                  {Navlinks.map(({ id, title, links }) => (
                    <li key={id} className="">
                      {title}
                    </li>
                  ))}
                </ul>
                {/* <div className="mx-10">
                <Buttons />
              </div> */}
              </div>
            </div>
          </div>

          {/* <Navbar isOpen={isOpen} setOpen={setOpen} /> */}
        </div>
      </header>
    </>
  );
};

export default Nav;
