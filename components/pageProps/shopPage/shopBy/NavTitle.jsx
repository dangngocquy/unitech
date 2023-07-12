import React from "react";
import { BiCaretDown } from "react-icons/bi";

const NavTitle = ({ title, icons }) => {
  return (
    <div>
      {icons ? (
        <>
          <h3>{title}</h3>
          {icons && <BiCaretDown />}
        </>
      ) : (
        <>
          <h3>{title}</h3>
        </>
      )}
    </div>
  );
};

export default NavTitle;
