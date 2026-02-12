import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "../ui/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Button from "../ui/Button";
import { footerdata, socialicons } from "../../data/footerdata";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white mt-12">
      <section className="w-[90%] mx-auto py-12">
        <section className="w-[90%] mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Footer Navigation - takes 2 columns on md */}
            <nav className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {footerdata.map((data) => {
                const { title, link } = data;
                return (
                  <div key={title} className="mb-6">
                    <Typography className="mb-4 text-base font-normal">
                      {title}
                    </Typography>
                    <ul className="space-y-3">
                      {link.map((item) => {
                        const { name, href } = item;
                        return (
                          <li key={name}>
                            <NavLink
                              to={href}
                              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                            >
                              {name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </nav>

            {/* Email Newsletter - takes 1 column on md */}
            <div>
              <Typography className="mb-4 text-base font-normal">
                Subscribe to our emails
              </Typography>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="border border-gray-600 bg-transparent py-3 px-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
                />
                <Button variant="solid">Subscribe</Button>
              </div>

              {/* Social icons */}
              <div className="flex gap-6 mt-6">
                {socialicons.map((social) => {
                  const { name, icon, href } = social;
                  return (
                    <a
                      key={name}
                      rel="noopenner noreferrer"
                      aria-label={name}
                      target="_blank"
                      href={href}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <FontAwesomeIcon icon={icon} className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* horizontal line */}
        <hr className="opacity-10" />

        {/* rights reserve */}
        <section className="text-center py-8 mt-10">
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            &copy; {currentYear} Fitin. All rights reserved.
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
