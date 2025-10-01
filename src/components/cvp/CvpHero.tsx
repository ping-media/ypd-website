import { BASE_URL } from "@/lib/url";
import { BriefcaseBusiness, Sparkles, SquareCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CvpHeroProps {
  title: string;
  subtitle: ReactNode;
  description?: ReactNode;
  features?: string[];
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  featuresTwoCols?: boolean;
  ctaComponent?: ReactNode; // new prop
}

export default function CvpHero({
  title,
  subtitle,
  description,
  features,
  buttonText,
  buttonLink = "/coming-soon",
  secondaryButtonText,
  secondaryButtonLink = "/coming-soon",
  image,
  imageAlt = "Feature Image",
  reverse = false,
  featuresTwoCols = false,
  ctaComponent,
}: CvpHeroProps) {
  return (
    <div
      id="form"
      className="font-lato mx-auto flex max-w-[1440px] flex-col gap-8 px-4 py-6 sm:gap-12 sm:px-10 sm:py-10 lg:gap-16 lg:px-20"
    >
      <div
        className={`flex w-full flex-col items-center gap-6 sm:gap-10 md:flex-row lg:gap-20 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="flex-1 space-y-5 text-center sm:space-y-6 sm:text-left">
          <h2 className="font-red-rose relative inline-block text-2xl leading-snug sm:text-3xl lg:text-4xl xl:text-[42px]">
            {/* SVG positioned absolutely */}
            <div className="absolute -top-12 -left-16 hidden h-24 w-24 lg:block">
              <Image
                src="/icons/top.svg"
                alt="Decorative SVG"
                fill
                className="object-contain"
              />
            </div>
            {title}
          </h2>

          <p className="text-brand-gray text-base sm:text-lg">{subtitle}</p>

          {description && (
            <p className="text-brand-gray text-sm sm:text-base">
              {description}
            </p>
          )}

          <ul
            className={`text-sm sm:text-base ${
              featuresTwoCols
                ? "grid grid-cols-1 gap-y-3 sm:grid-cols-2"
                : "space-y-3"
            }`}
          >
            {features?.map((feature, idx) => (
              <li key={idx} className="flex items-start justify-start gap-3">
                <SquareCheck className="text-brand-primary bg-brand-bg mt-1 h-5 w-5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* ✅ Buttons Section */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            {ctaComponent
              ? ctaComponent
              : buttonText && (
                  <Link
                    href={`${BASE_URL}${buttonLink}`}
                    className="btn-size btn-primary shadow"
                  >
                    <Sparkles className="h-5 w-5" />
                    {buttonText}
                  </Link>
                )}

            {secondaryButtonText && (
              <Link
                href={secondaryButtonLink}
                className="btn-size btn-transparent shadow"
              >
                <BriefcaseBusiness className="h-5 w-5" />
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-full flex-1 self-stretch">
          <div className="h-[300px] w-full sm:h-[400px] md:h-full">
            <Image
              src={image}
              alt={imageAlt}
              width={800}
              height={600}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
