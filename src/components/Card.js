import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Card = (props) => {
  return (
    <div
      className="card"
      style={{ background: props.theme, boxShadow: props.boxShadow }}
    >
      <Header />
      <Body />
      <Footer background={props.footerBg} />
    </div>
  );
};

export default Card;
