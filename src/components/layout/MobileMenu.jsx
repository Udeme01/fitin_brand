import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const navLinks = [
  { label: "Home", href: "/", icon: "⌂" },
  { label: "About", href: "/about", icon: "◎" },
  { label: "Shop", href: "/shop", icon: "◈" },
  { label: "Contact", href: "/contact", icon: "◉" },
];

const MobileMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => setVisible(true), 5);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className={`fixed bg-black/40 inset-0 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        />
      )}
      <section
        className={`bg-white p-6 absolute left-0 right-0 z-100 w-[90%] max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden md:hidden duration-300 ease-out ${visible ? "top-1/6 opacity-100 translate-y-0" : "top-0 opacity-0 -translate-y-8"}`}
      >
        <nav>
          <ul className="flex flex-col gap-1 h-full justify-center">
            {navLinks.map((link, i) => {
              return (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    end={link.href === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3 ${isActive ? "ml-3" : "group"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div
                          className={`flex items-center gap-2 duration-300 ${isActive ? "font-bold tracking-wider" : "font-normal"}`}
                        >
                          <span
                            className={`text-base w-6 text-center duration-300`}
                          >
                            {link.icon}
                          </span>
                          <span className={`text-md tracking-wide`}>
                            {link.label}
                          </span>
                        </div>
                        <span
                          className={`text-green-800 transition-all duration-200 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                        >
                          →
                        </span>
                      </>
                    )}
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
        <section className="p-2 flex items-center justify-center flex-col gap-3 my-3">
          <button
            onClick={() => navigate("/auth?mode=login")}
            className="cursor-pointer hover:underline"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/auth?mode=register")}
            className="cursor-pointer hover:underline"
          >
            Create account
          </button>
        </section>

        {/* social media */}
        <section className="flex items-center justify-center gap-4 p-2">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
          <FontAwesomeIcon icon={faTiktok} size="xl" />
        </section>
      </section>
    </>
  );
};

export default MobileMenu;
