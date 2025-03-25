import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NavItem(props) {
  const { icon, title } = props;

  return (
    <div className="flex gap-6 mb-8 text-2xl">
      <div className="text-center w-8">
        <FontAwesomeIcon icon={icon} />
      </div>

      <span className="grow-1">{title}</span>
    </div>
  );
}

export default NavItem;
