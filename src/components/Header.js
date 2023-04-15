import React from "react";
import Troll from "../images/Troll Face.png";

export default function Header() {
  return (
    <section className="header">
      <img className="header__logo" src={Troll}></img>
      <p className="header__title">React Course - Project 3</p>
    </section>
  );
}