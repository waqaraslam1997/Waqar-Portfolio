"use client";
import React, { useState, useEffect } from "react";

// components
import Logo from "./Logo";
import ThemeToogler from "./themetoogler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? `py-4 bg-white shadow-lg dark:bg-accent`
          : `py-6 dark:bg-transparent`
      } sticky top-0 z-30 transition-all
            ${pathName === "/" && "bg-[#f5f5fe]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}

            <Nav
              containerStyles="hidden xl:flex items-center gap-x-8 "
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToogler />

            {/* Mobile Nav */}

            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
