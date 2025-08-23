import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "#", src: "/icons/yt.png", alt: "YouTube", label: "YouTube" },
  { href: "#", src: "/icons/ig.png", alt: "Instagram", label: "Instagram" },
  { href: "#", src: "/icons/fb.png", alt: "Facebook", label: "Facebook" },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-3 font-sans items-center">
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
