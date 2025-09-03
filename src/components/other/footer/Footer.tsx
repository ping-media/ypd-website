"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "../SocialLinks";

type SectionProps = {
  title: string;
  links: { label: string; href: string }[];
};

const FooterSectionAccordion = ({ title, links }: SectionProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#335933] last:border-none sm:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 sm:py-0"
      >
        <span className="font-poppins text-base font-medium">{title}</span>
        <ChevronDown
          size={18}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          } sm:hidden`}
        />
      </button>
      <ul
        className={`my-5 space-y-5 text-sm text-white sm:block ${
          open ? "block" : "hidden"
        }`}
      >
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="hover:opacity-60">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-[#003000] bg-[radial-gradient(ellipse_at_top,#D1D38C33_10%,#003000_40%)] font-sans text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pt-12 sm:px-10 sm:py-12 lg:flex-row lg:justify-between lg:px-20">
        {/* Column 1 */}
        <div className="hidden max-w-xs flex-col gap-5 max-lg:flex">
          <h2 className="font-poppins text-base font-medium">
            Youth Pulse Digital™
          </h2>
          <p className="text-sm font-medium">Regd Office</p>
          <p className="text-sm text-white">
            Youth Pulse Digital Pvt Ltd <br />
            Astra Tower, ASO-501, Action Area-IIC, <br />
            New Town, Kolkata-700161, West Bengal <br />
            CIN: U62010WB2025PTC281468 <br />
            PAN: AACCY0548C
          </p>

          <div className="space-y-5 text-white">
            <p className="flex items-center gap-2 text-sm hover:opacity-60">
              <Image
                className="invert"
                src="/icons/phone.svg"
                alt="Email"
                width={20}
                height={20}
              />{" "}
              +91 8650126521
            </p>
            <p className="flex items-center gap-2 text-sm hover:opacity-60">
              <Image
                src="/icons/wa.svg"
                alt="WhatsApp"
                width={20}
                height={20}
              />
              <a
                href="https://wa.me/917300868536"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 7300868536
              </a>
            </p>
            <p className="flex items-center gap-2 text-sm hover:opacity-60">
              <Image
                src="/icons/gmail.svg"
                alt="Email"
                width={20}
                height={20}
              />
              <a
                href="mailto:support@youthpulsedigital.com"
                className="hover:underline"
              >
                support@youthpulsedigital.com
              </a>
            </p>
          </div>
          <SocialLinks />
        </div>

        {/* Accordion / Columns */}
        <div className="flex-1 gap-4 max-lg:grid sm:grid-cols-2 sm:gap-12 md:grid-cols-4 lg:flex lg:justify-between">
          <div className="hidden max-w-xs flex-col gap-5 lg:flex">
            <h2 className="font-poppins text-base font-medium">
              Youth Pulse Digital™
            </h2>
            <p className="text-sm font-medium">Regd Office</p>
            <p className="text-sm text-white">
              Youth Pulse Digital Pvt Ltd <br />
              Astra Tower, ASO-501, Action Area-IIC, <br />
              New Town, Kolkata-700161, West Bengal <br />
              CIN: U62010WB2025PTC281468 <br />
              PAN: AACCY0548C
            </p>

            <div className="space-y-5 text-white">
              <p className="flex cursor-pointer items-center gap-2 text-sm hover:opacity-60">
                <Image
                  className="invert"
                  src="/icons/phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                />
                +91 8650126521
              </p>
              <p className="flex cursor-pointer items-center gap-2 text-sm hover:opacity-60">
                <Image
                  src="/icons/wa.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                <a
                  href="https://wa.me/917300868536"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 7300868536
                </a>
              </p>
              <p className="flex items-center gap-2 text-sm hover:opacity-60">
                <Image
                  src="/icons/gmail.svg"
                  alt="Email"
                  width={20}
                  height={20}
                />
                <a href="mailto:support@youthpulsedigital.com">
                  support@youthpulsedigital.com
                </a>
              </p>
            </div>
            <SocialLinks />
          </div>
          <FooterSectionAccordion
            title="Explore"
            links={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Pricing", href: "/pricing" },
              { label: "Career", href: "/career" },
              { label: "Contact Us", href: "/contact" },
              { label: "Mentor Connect", href: "/mentor-connect" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Subscribe to Newsletters ", href: "/newsletter" },
            ]}
          />
          <FooterSectionAccordion
            title="Students"
            links={[
              { label: "CVP Vision Program", href: "/cvp-vision" },
              { label: "CVP lite", href: "/cvp-lite" },
              { label: "CVP Advance", href: "/cvp-advance" },
              { label: "CareerVerse", href: "/careerverse" },
              { label: "Exam Mentors", href: "/exam-mentors" },
              { label: "Entrance Mentors", href: "/entrance-mentors" },
              { label: "Counselling Mentors", href: "/counselling-mentors" },
              { label: "Creativity Lab", href: "/counselling-mentors" },
              { label: "Blogs", href: "/counselling-mentors" },
            ]}
          />
          <FooterSectionAccordion
            title="Professionals"
            links={[
              {
                label: "Career Reinvention Program",
                href: "/career-reinvention",
              },
              { label: "Aptitude Trainer", href: "/aptitude-trainer" },
              { label: "Reboot Navigator", href: "/reboot-navigator" },
              { label: "Reinvention Guru", href: "/reinvention-guru" },
              { label: "Innovartion Hub", href: "/innovation-hub" },
              { label: "Pulse Nexus", href: "/pulse-nexus" },
              { label: "Industry Expert Connect", href: "/industry-expert" },
              { label: "Book A Demo", href: "/book-demo" },
            ]}
          />
          <FooterSectionAccordion
            title="Businesses"
            links={[
              { label: "Admission Test", href: "/admission-test" },
              { label: "Hiring & Onboarding", href: "/hiring-onboarding" },
              { label: "School / Institute OS", href: "/school-institute" },
              { label: "Institute Connect", href: "/institute-connect" },
              { label: "MSME Connect", href: "/msme-connect" },
              { label: "Corporate Connect", href: "/corporate-connect" },
              { label: "Govt Connect", href: "/govt-connect" },
              { label: "Refund Policy", href: "/cancellation-refund" },
            ]}
          />
        </div>
      </div>

      {/* Separator */}
      <div className="h-[1px] bg-[#335933]"></div>

      {/* Bottom Bar */}
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 px-4 py-4 text-center font-sans text-sm sm:px-10 md:flex-row md:text-left lg:px-20">
        {/* Links - on top in mobile, last in desktop */}
        {/* <div className="flex gap-4 justify-center md:justify-start order-1 md:order-3">
          <Link href="/privacy-policy" className="hover:opacity-60">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:opacity-60">
            Terms of Use
          </Link>
          <Link href="/faqs" className="hover:opacity-60">
            FAQs
          </Link>
        </div> */}

        {/*middle in both mobile & desktop */}
        <p className="order-2">Built in Bharat. Powered by Purpose.</p>

        {/* Copyright - last in mobile, first in desktop */}
        <p className="order-3 md:order-1">
          © 2025 Youth Pulse Digital™ All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
