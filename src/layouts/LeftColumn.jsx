import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavList from "../components/NavList";

function LeftColumn() {
  return (
    <div className="w-1/3 pt-8">
      <FontAwesomeIcon
        icon={faTwitter}
        className="text-blue-400 text-5xl mb-8"
      />
      <NavList />
    </div>
  );
}

export default LeftColumn;
