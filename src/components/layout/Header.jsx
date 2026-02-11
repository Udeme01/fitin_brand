import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Search, ShoppingBag, UserRound } from "lucide-react";
import DesktopMenu from "./DesktopMenu";
// import headerlogo from "/images/brands/fitinLogo.avif";

const Header = () => {
  return (
    <header>
      <section className="flex items-center justify-between h-[10vh] w-[80%] mx-auto">
        <h1 className="text-2xl uppercase font-bold tracking-wider">
          {/* <img src={headerlogo} alt="" /> */}
          fitin
        </h1>
        <DesktopMenu />

        <section className="flex items-center">
          <div className="flex gap-2">
            <Search
              size={34}
              className="cursor-pointer hover:bg-black/10 p-1.5 rounded-full"
            />
            <UserRound
              size={34}
              className="cursor-pointer hover:bg-black/10 p-1.5 rounded-full"
            />
            <ShoppingBag
              size={34}
              className="cursor-pointer hover:bg-black/10 p-1.5 rounded-full"
            />
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
