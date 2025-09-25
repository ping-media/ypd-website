import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  heading: string;
  subheading: string;
  imageSrc: string;
  imageAlt?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaIcon?: ReactNode;
}

export default function Hero({
  heading,
  subheading,
  imageSrc,
  imageAlt = "Hero Image",
  ctaLabel,
  ctaHref,
  ctaIcon,
}: HeroProps) {
  return (
    <section className="flex justify-center bg-gradient-to-t from-green-50 to-white px-4 pb-4 sm:px-10 sm:pb-10 lg:px-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-10">
        {/* Heading */}
        <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-4">
          <h2 className="font-red-rose text-center text-2xl leading-snug sm:text-3xl lg:text-[42px]">
            {heading}
          </h2>
          <p className="text-brand-gray max-w-3xl text-center text-base sm:text-lg lg:text-xl">
            {subheading}
          </p>
          {/* CTA Button */}
          <Link href={ctaHref} className="btn-primary btn-size max-sm:w-full">
            {ctaIcon && <span className="mr-2">{ctaIcon}</span>}
            {ctaLabel}
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative h-[320px] w-full max-w-7xl overflow-hidden rounded-3xl shadow-md sm:h-[420px] lg:h-[500px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
