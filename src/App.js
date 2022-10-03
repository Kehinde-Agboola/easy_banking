import React from "react";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Body from "./component/Body";
import Articules from "./component/Articules";
import Footer from "./component/Footer";
import DeskNav from "./component/DeskNav.jsx";

export const App = () => {
  return (
    <>
      <Nav />
      <Body />
      <Header />
      <Articules />
      <Footer />
    </>
  );
};

export default App;
