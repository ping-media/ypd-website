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
            GST: 19AACCY0548C1ZG
          </p>

          <div className="space-y-5 text-white">
            <p className="flex items-center gap-2 text-sm hover:opacity-60">
              <Image
                className="invert"
                src="/icons/phone.svg"
                alt="Email"
                width={20}
                height={20}
              />
              <a href="tel:+918650126521">+91 8650126521</a>
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
              GST: 19AACCY0548C1ZG
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
                <a href="tel:+918650126521">+91 8650126521</a>
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
              { label: "Careers", href: "/careers" },
              { label: "Contact Us", href: "/contact" },
              { label: "Mentor Connect", href: "/coming-soon" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Subscribe to Newsletters ", href: "/coming-soon" },
            ]}
          />
          <FooterSectionAccordion
            title="Students"
            links={[
              { label: "Career Vision Program™", href: "/career-vision" },
              { label: "CVP lite™", href: "/cvp-lite" },
              { label: "CVP Advance™", href: "/cvp-advance" },
              { label: "CareerVerse™", href: "/careerverse" },
              { label: "Counseling Guru™", href: "/counseling-guru" },
              { label: "Global Navigator™", href: "/global-navigator" },
              // { label: "Exam Mentors", href: "/exam-mentors" },
              // { label: "Entrance Mentors", href: "/entrance-mentors" },
              // { label: "Creativity Lab", href: "/coming-soon" },
              { label: "Blogs", href: "https://blog.ypd-dev.site" },
            ]}
          />
          <FooterSectionAccordion
            title="Professionals"
            links={[
              {
                label: "Career Reinvention Program™",
                href: "/career-reinvention",
              },
              { label: "Aptitude Trainer™", href: "/crp-aptitude" },
              { label: "Reboot Navigator™", href: "/career-reboot" },
              // { label: "Reinvention Guru", href: "/reinvention-guru" },
              // { label: "Innovation Hub", href: "/innovation-hub" },
              // { label: "Pulse Nexus", href: "/pulse-nexus" },
              { label: "Expert Connect", href: "/coming-soon" },
              { label: "Book A Demo", href: "/coming-soon" },
            ]}
          />
          <FooterSectionAccordion
            title="Corporate"
            links={[
              { label: "Admission Test", href: "/admission" },
              { label: "Hiring & Onboarding", href: "/hiring" },
              { label: "School / Institute OS", href: "/school-os" },
              { label: "Institute Connect", href: "/coming-soon" },
              { label: "MSME Connect", href: "/coming-soon" },
              { label: "Corporate Connect", href: "/coming-soon" },
              { label: "Govt Connect", href: "/coming-soon" },
              { label: "Refund Policy", href: "/cancellation-refund" },
            ]}
          />
        </div>
      </div>

      {/* Separator */}
      <div className="h-[1px] bg-[#335933]"></div>

      {/* Bottom Bar */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-3 px-4 py-4 text-center font-sans text-sm sm:px-10 md:flex-row md:text-left lg:px-20">
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
        <p>
          Built in Bharat. Powered by Purpose © 2025 Youth Pulse Digital™ All
          Rights Reserved.
        </p>

        {/* Copyright - last in mobile, first in desktop */}
        {/* <p className="order-3 md:order-1"></p> */}
      </div>
    </footer>
  );
}
