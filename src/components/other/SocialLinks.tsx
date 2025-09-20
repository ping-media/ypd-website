import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "/contact",
    src: "/icons/ig.svg",
    alt: "Instagram",
    label: "Instagram",
  },
  { href: "/contact", src: "/icons/yt.svg", alt: "YouTube", label: "YouTube" },
  {
    href: "/contact",
    src: "/icons/fb.svg",
    alt: "Facebook",
    label: "Facebook",
  },
  {
    href: "/contact",
    src: "/icons/li.svg",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3 font-sans">
      <span className="text-sm">Follow us:</span>
      {socialLinks.map(({ href, src, alt, label }) => (
        <Link key={label} href={href} aria-label={label}>
          <Image
            src={src}
            alt={alt}
            width={24}
            height={24}
            className="hover:opacity-60"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
