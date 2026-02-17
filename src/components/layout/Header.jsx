import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { LayoutGrid, Search, ShoppingBag, UserRound } from "lucide-react";
import DesktopMenu from "./DesktopMenu";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";
// import headerlogo from "/images/brands/fitinLogo.avif";

const Header = () => {
  return (
    <header>
      <section className="flex items-center justify-between h-[10vh] w-[90%] mx-auto">
        {/* <h1 className="text-2xl uppercase font-bold tracking-wider">
          fitin
        </h1> */}
        <Logo />

        <DesktopMenu />

        <section className="flex items-center">
          <div className="flex items-center gap-">
            <div className="ml-1.5">
              <h4 className="bg-red-200 px-2 py-2 rounded-lg text-red-500 flex items-center gap-2 cursor-pointer border">
                <span>
                  <LayoutGrid size={14} />
                </span>
                <span className="capitalize font-semibold text-xs tracking-wide">
                  dashboard
                </span>
              </h4>
            </div>
            <Search
              size={28}
              className="cursor-pointer hover:bg-black/10 p-1.5 rounded-full"
            />
            <Link to={`auth?mode="register"`}>
              <UserRound
                size={28}
                className="cursor-pointer hover:bg-black/10 p-1.5 rounded-full"
              />
            </Link>
            <div className="relative">
              <ShoppingBag
                size={28}
                className="cursor-pointer hover:bg-black/10 p-1.5 rounded-full"
              />
              <span className="text-white font-semibold text-sm text-center flex items-center justify-center absolute -top-2 right-0 bg-black/90 p-1 rounded-full w-6 h-6">
                0
              </span>
            </div>
          </div>
          <div>
            <Hamburger size={18} />
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
