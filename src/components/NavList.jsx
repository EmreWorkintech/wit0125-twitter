import React from "react";
import { navigationMenuItems } from "../data";
import NavItem from "./NavItem";

function NavList() {
  return (
    <div>
      {navigationMenuItems.map((item, index) => (
        <NavItem key={index} icon={item.icon} title={item.title} />
      ))}
    </div>
  );
}

export default NavList;
