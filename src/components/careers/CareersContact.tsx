import CareersContactForm from "@/components/careers/CareersContactForm";
import Image from "next/image";

interface CareersContactProps {
  headline?: string;
  subheading?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function CareersContact({
  headline = "You Didn't Find Your Role?",
  subheading = "We're always looking for passionate people. Send us your CV and let's connect.",
  imageSrc = "/careers/contact.png",
  imageAlt = "Office",
}: CareersContactProps) {
  return (
    <section className="flex justify-center bg-white">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 p-4 sm:gap-12 sm:p-10 lg:p-20">
        <div className="grid w-full gap-8 sm:grid-cols-2 [&>*:first-child]:order-2 sm:[&>*:first-child]:order-1 [&>*:last-child]:order-1 sm:[&>*:last-child]:order-2">
          {/* Left Image */}
          <div className="relative h-64 w-full overflow-hidden rounded-xl sm:h-auto">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="flex w-full flex-col justify-center">
            <h2 className="font-red-rose text-center text-2xl sm:text-3xl">
              {headline}
            </h2>
            <p className="text-brand-gray mb-6 text-center text-sm sm:text-base">
              {subheading}
            </p>

            {/* Reusable Form */}
            <CareersContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
