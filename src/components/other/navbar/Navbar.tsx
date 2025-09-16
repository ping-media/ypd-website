"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavLinks from "@/components/other/navbar/Navlinks";
import {
  ArrowRight,
  X,
  ChevronDown,
  ChevronRight,
  AlignJustify,
} from "lucide-react";
import Link from "next/link";

const Links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Students",
    dropdown: [
      { name: "Career Vision Program™", href: "/career-vision" },
      {
        name: "Career Clarity",
        subDropdown: [
          { name: "CVP Lite™", href: "/cvp-lite" },
          { name: "CVP Advance™", href: "/cvp-advance" },
          { name: "CareerVerse™", href: "/careerverse" },
        ],
      },
      // hidden for now
      // {
      //   name: "Exam Mentors",
      //   subDropdown: [
      //     { name: "CBSE 10th Mentor™", href: "/10-cbse" },
      //     { name: "CBSE 12th Mentor™", href: "/12-cbse" },
      //   ],
      // },
      // {
      //   name: "Entrance Mentors",
      //   subDropdown: [
      //     { name: "Mission SSB™", href: "/mission-ssb" },
      //     { name: "UPSC Mentor™", href: "/upsc-mentor" },
      //   ],
      // },
      {
        name: "Counseling Mentors",
        subDropdown: [
          { name: "Counseling Guru™", href: "/counseling-guru" },
          { name: "Global Navigator™", href: "/global-navigator" },
          { name: "SparkPath™", href: "/coming-soon" },
          { name: "SpecialStars™", href: "/coming-soon" },
        ],
      },
      { name: "Mentor Connect", href: "/coming-soon" },
    ],
  },
  {
    name: "Professionals",
    dropdown: [
      { name: "Career Reinvention Program™", href: "/career-reinvention" },
      {
        name: "Professional Clarity",
        subDropdown: [{ name: "Reboot Navigator™", href: "/career-reboot" }],
      },
      {
        name: "Skilled Mentors",
        subDropdown: [
          { name: "Aptitude Trainer™", href: "/crp-aptitude" },
          { name: "Reinvention Guru™", href: "/coming-soon" },
        ],
      },
    ],
  },
  {
    name: "Corporate",
    dropdown: [
      { name: "Admission Test", href: "/coming-soon" },
      { name: "Hiring & Onboarding", href: "/coming-soon" },
      { name: "School / Institute OS", href: "/coming-soon" },
      // { name: "Institute Connect", href: "/coming-soon" },
      // { name: "MSME Connect", href: "/coming-soon" },
      // { name: "Corporate Connect", href: "/coming-soon" },
      // { name: "Govt Connect", href: "/coming-soon" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
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
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  const handleDropdownToggle = (linkName: string) => {
    if (openDropdown === linkName) {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    } else {
      setOpenDropdown(linkName);
      setOpenSubDropdown(null);
    }
  };

  const handleSubDropdownToggle = (itemName: string) => {
    setOpenSubDropdown(openSubDropdown === itemName ? null : itemName);
  };

  return (
    <div className="font-lato relative mx-auto max-w-[1440px]">
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/70 shadow-md backdrop-blur-md" : "bg-white"}`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between py-2 max-sm:p-4 sm:px-10 xl:px-20">
          {/* Left: Logo */}
          <Link href={"/"} className="flex flex-1 justify-start">
            <Image src="/logo.png" alt="logo" width={120} height={42} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden flex-none lg:flex">
            <NavLinks links={Links} />
          </div>

          {/* Sign-up button */}
          <div className="hidden flex-1 justify-end sm:flex">
            <Link
              href="/coming-soon"
              className="btn-primary btn-size space-x-0.5 capitalize"
            >
              <span className="whitespace-nowrap">
                Create Account
                {/* Sign up{" "}
                <span className="hidden max-lg:inline-block xl:inline-block">
                  for free{" "}
                </span> */}
              </span>
              <ArrowRight className="hidden xl:block" />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center pl-4 lg:hidden"
          >
            {mobileOpen ? (
              <X size={28} className="text-gray-800" />
            ) : (
              <AlignJustify size={28} className="text-gray-800" />
            )}
          </button>
        </div>
      </header>
      <div className="h-24 sm:h-28" />
      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 transform border-l border-gray-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-end border-b border-gray-200 px-6 pt-6 pb-4">
          <button onClick={() => setMobileOpen(false)}>
            <X size={28} className="text-gray-700" />
          </button>
        </div>

        <div className="max-h-[calc(100vh-100px)] space-y-4 overflow-y-auto px-6 pt-4 pb-6 text-gray-800">
          {Links.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => handleDropdownToggle(link.name)}
                  className="flex w-full items-center justify-between border-b border-gray-200 py-2 text-left font-medium"
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
                  <div className="mt-2 space-y-2 pl-4 text-sm">
                    {link.dropdown.map((item) => (
                      <div key={item.name || item.href}>
                        {item.subDropdown ? (
                          <div>
                            <button
                              onClick={() => handleSubDropdownToggle(item.name)}
                              className="hover:text-brand-primary flex w-full items-center justify-between py-1 text-left"
                            >
                              {item.name}
                              <ChevronRight
                                size={16}
                                className={`transition-transform ${
                                  openSubDropdown === item.name
                                    ? "rotate-90"
                                    : ""
                                }`}
                              />
                            </button>
                            {openSubDropdown === item.name && (
                              <div className="mt-1 space-y-1 pl-4">
                                {item.subDropdown.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="hover:text-brand-primary block py-1"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="hover:text-brand-primary block py-1"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-primary block border-b border-gray-200 py-2 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ),
          )}

          <div className="hidden pt-4 max-sm:block">
            <Link
              href="/coming-soon"
              className="btn-primary btn-size block w-full text-center uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
