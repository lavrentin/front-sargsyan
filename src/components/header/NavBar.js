import React from "react";
import "../../assets/styles/Navigation.scss";
import Menu from "./Menu";

const Header = () => {

  return (
    <div>
      <div className="Logo">
        <div></div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
