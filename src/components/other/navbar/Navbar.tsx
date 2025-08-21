"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavLinks from "@/components/other/navbar/Navlinks";
import { ArrowRight, X, ChevronDown, AlignJustify } from "lucide-react";
import Link from "next/link";

const Links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Career Vision",
    dropdown: [
      { name: "Lorem Ipsum", href: "/#1" },
      { name: "Dolor Lorem", href: "/#2" },
      { name: "Lorem Ipsum", href: "/#3" },
    ],
  },
  { name: "Career Reinvention", href: "/career-reinvention" },
  { name: "Contact us", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Stop background scrolling when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileOpen]);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto font-lato relative">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${scrolled ? "backdrop-blur-md bg-white/70 shadow-md" : "bg-white"}`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center max-sm:p-4 sm:px-10 xl:px-20 py-8">
          {/* Left: Logo */}
          <Link href={"/"} className="flex-1 flex justify-start">
            <Image src="/logo.png" alt="logo" width={95} height={42} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-none">
            <NavLinks />
          </div>

          {/* Sign-up button */}
          <div className="hidden sm:flex flex-1 justify-end">
            <Link
              href="#"
              className="text-brand-fg rounded-lg bg-brand-primary border border-brand-accent text-base uppercase flex justify-center items-center py-2.5 px-5 space-x-0.5"
            >
              <span>
                Sign up{" "}
                <span className="hidden max-lg:inline-block xl:inline-block">
                  for free{" "}
                </span>
              </span>
              <ArrowRight className="hidden xl:block" />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center pl-4"
          >
            {mobileOpen ? (
              <X size={28} className="text-gray-800" />
            ) : (
              <AlignJustify size={28} className="text-gray-800" />
            )}
          </button>
        </div>
      </header>

      <div className="h-28" />
      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-white border-l border-gray-200 shadow-2xl transform transition-transform duration-300 ease-in-out z-50
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-end px-6 pt-6 pb-4 border-b border-gray-200">
          <button onClick={() => setMobileOpen(false)}>
            <X size={28} className="text-gray-700" />
          </button>
        </div>

        <div className="px-6 pt-4 pb-6 space-y-4 text-gray-800">
          {Links.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name
                    )
                  }
                  className="w-full flex justify-between items-center text-left font-medium py-2 border-b border-gray-200"
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === link.name && (
                  <div className="pl-4 mt-2 space-y-2 text-sm">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block hover:text-brand-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block font-medium py-2 border-b border-gray-200 hover:text-brand-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}

          <div className="hidden max-sm:block pt-4">
            <Link
              href="#"
              className="w-full text-center block text-brand-fg rounded-lg bg-brand-primary border border-brand-accent text-base uppercase py-2.5"
              onClick={() => setMobileOpen(false)}
            >
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
