import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import Menu from "./data/Menu";
import Buttons from "./Button";
import Navbar from "./Navbar";
import close from "../images/icon-close.svg";
import open from "../images/icon-open.svg";
const Nav = () => {
  const ShowButton = () => {
    if (window.innerWidth >= 769) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  useEffect(() => {
    // if (window.innerWidth >= width) {
    //   setOpen(true);
    // }
    ShowButton();
  }, []);
  const [isOpen, setOpen] = useState(true);
  const [Navlinks, setnavLinks] = useState(Menu);
  return (
    <>
      <header className="absolute p-3 bg-white w-full">
        <div className="container flex space-x-10 items-center justify-around">
          <div>
            <img src={logo} alt="" />
          </div>
          {/* Links */}
          <nav className="navbar md:flex md:items-center md:justify-between hidden">
            <ul className="flex justify-evenly items-center cursor-pointer gap-5">
              {Navlinks.map(({ id, title, links }) => (
                <li key={id}>{title}</li>
              ))}
            </ul>
            <div className="ml-20 ">
              <Buttons />
            </div>
          </nav>

          <div className="sm:hidden flex flex-col items-center">
            <img
              src={isOpen ? close : open}
              alt="menu"
              className="object-contain cursor pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
            <div
              className={`${
                isOpen ? "flex" : "hidden"
              } absolute bg-white navbar`}
            >
              <ul className="flex-col px-20 justify-center items-center text-center shadow-lg">
                {Navlinks.map(({ id, title, links }) => (
                  <li key={id} className="m-2">
                    {title}
                  </li>
                ))}
              </ul>
              {/* <div className="mx-10">
                <Buttons />
              </div> */}
            </div>
          </div>

          {/* <Navbar isOpen={isOpen} setOpen={setOpen} /> */}
        </div>
      </header>
    </>
  );
};

export default Nav;
