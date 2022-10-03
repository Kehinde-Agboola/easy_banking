import React from "react";
import { v4 as uuidv4 } from "uuid";
const Menu = () => [
  {
    id: uuidv4(),
    title: "Home",
    url: "#",
  },
  {
    id: uuidv4(),
    title: "About",
    url: "#",
  },
  {
    id: uuidv4(),
    title: "Contact",
    url: "#",
  },
  {
    id: uuidv4(),
    title: "Blog",
    url: "#",
  },
  {
    id: uuidv4(),
    title: "Careers",
    url: "#",
  },
];

export default Menu;
