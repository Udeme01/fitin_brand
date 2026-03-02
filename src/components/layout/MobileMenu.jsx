import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", href: "/", icon: "⌂" },
  { label: "About", href: "/about", icon: "◎" },
  { label: "Shop", href: "/shop", icon: "◈" },
  { label: "Contact", href: "/contact", icon: "◉" },
];

const MobileMenu = () => {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  return (
    <section className="bg-white p-6 absolute top-1/6 left-0 right-0 z-100 w-[90%] max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden md:hidden">
      <nav>
        <ul className="flex flex-col gap-1 h-full justify-center">
          {navLinks.map((link, i) => {
            const isActiveLink = active === link.label;
            return (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  onClick={() => setActive(link.label)}
                  className={`${isActiveLink ? "flex items-center justify-between py-3" : "flex py-3 group"}`}
                >
                  <div
                    className={`flex items-center gap-2 duration-300 ${isActiveLink ? "ml-3" : ""}`}
                  >
                    <span className={`text-base w-6 text-center duration-300`}>
                      {link.icon}
                    </span>
                    <span
                      className={`text-sm tracking-wide ${isActiveLink ? "font-bold tracking-wider" : "font-regular tracking-wide"}`}
                    >
                      {link.label}
                    </span>
                  </div>
                  <span
                    className={`text-green-800 transition-all duration-200 ${isActiveLink ? "opacity-100 transformX(0)" : "opacity-0 translateX(-6px)"}`}
                  >
                    →
                  </span>
                </NavLink>

                {/* Subtle divider */}
                {i < navLinks.length - 1 && (
                  <div className="mx-4 h-px bg-green-900 opacity-10" />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* auth */}
      <section className="flex items-center justify-center gap-8 my-3 mt-6">
        <button
          onClick={() => navigate("login")}
          className="cursor-pointer hover:underline"
        >
          Login
        </button>
        <button type="button" className="cursor-pointer hover:underline">
          Create account
        </button>
      </section>

      {/* social media */}
      <section>
        <p>...</p>
      </section>
    </section>
  );
};

export default MobileMenu;
