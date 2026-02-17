import { ChevronDown } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <nav className="hidden md:block w-fit p-2">
      <ul className="flex items-center justify-center gap-16">
        <li className="flex items-center gap-1 cursor-pointer">
          <NavLink className="uppercase tracking-wide">fashion</NavLink>
          <ChevronDown size={20} />
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <NavLink className="uppercase tracking-wide">shop</NavLink>
          <ChevronDown size={20} />
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <NavLink className="uppercase tracking-wide">kids</NavLink>
          <ChevronDown size={20} />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
