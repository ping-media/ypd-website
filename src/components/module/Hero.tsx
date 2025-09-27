import { ReactNode } from "react";
import Link from "next/link";

// interface HeroProps {
//   heading: string;
//   subheading: string;
//   ctaLabel: string;
//   ctaHref: string;
//   ctaIcon?: ReactNode;
//   secondaryCtaLabel?: string;
//   secondaryCtaHref?: string;
//   secondaryCtaIcon?: ReactNode;
// }
interface HeroProps {
  heading: string;
  subheading: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaIcon?: ReactNode;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaIcon?: ReactNode;
  ctaComponent?: ReactNode; // new prop
}

export default function Hero({
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  ctaIcon,
  secondaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaIcon,
  ctaComponent,
}: HeroProps) {
  return (
    <section className="p flex justify-center bg-gradient-to-t from-green-50 to-white p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-14">
        {/* Heading */}
        <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-4">
          <h2 className="font-red-rose text-center text-2xl leading-snug sm:text-3xl lg:text-[42px]">
            {heading}
          </h2>
          <p className="text-brand-gray max-w-4xl text-center text-base sm:text-lg lg:text-xl">
            {subheading}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {ctaComponent ? (
            ctaComponent
          ) : (
            <Link href={ctaHref || "#"} className="btn-primary btn-size">
              {ctaIcon && <span className="mr-2">{ctaIcon}</span>}
              {ctaLabel}
            </Link>
          )}

          {secondaryCtaLabel && secondaryCtaHref && (
            <Link href={secondaryCtaHref} className="btn-size btn-transparent">
              {secondaryCtaIcon && (
                <span className="mr-2">{secondaryCtaIcon}</span>
              )}
              {secondaryCtaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
