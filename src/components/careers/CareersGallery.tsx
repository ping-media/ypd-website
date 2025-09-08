import { Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface CareersGalleryProps {
  heading?: string;
  subheading?: string;
  images: GalleryImage[];
  ctaText?: string;
  ctaLink?: string;
}

const CareersGallery = ({
  heading,
  subheading,
  images,
  ctaText,
  ctaLink,
}: CareersGalleryProps) => {
  return (
    <section className="flex justify-center bg-white p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 sm:gap-12">
        {/* Heading */}
        {(heading || subheading) && (
          <div className="flex flex-col items-center gap-2 text-center">
            {heading && (
              <h2 className="font-red-rose text-2xl sm:text-3xl lg:text-4xl">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-brand-gray text-sm sm:text-base lg:text-lg">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* Image Gallery */}
        <div className="grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <div className="mt-6 flex w-full justify-center sm:w-auto">
            <Link
              href={ctaLink}
              className="btn-size btn-primary flex items-center gap-2 font-medium shadow-sm"
            >
              <Zap size={18} /> {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareersGallery;
