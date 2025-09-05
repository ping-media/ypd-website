import Image from "next/image";
import Link from "next/link";

const Vision = () => {
  return (
    <section className="flex w-full justify-center p-4 sm:p-10 lg:px-20 lg:py-16">
      {/* Outer Wrapper (max 1440px) */}
      <div className="flex w-full max-w-[1440px] justify-center">
        {/* Inner Wrapper (max 800px) */}
        <div className="relative flex w-full max-w-[800px] flex-col items-center">
          {/* Background Image */}
          <Image
            src="/about/vision.png"
            alt="Vision Background"
            width={800}
            height={400}
            className="pointer-events-none w-full object-contain select-none"
            priority
          />

          {/* --- Mobile content (below sm) --- */}
          <div className="mt-4 flex flex-col items-center gap-4 text-center sm:hidden">
            <p className="text-brand-primary text-xs font-semibold">
              Youth Pulse Digital™
            </p>
            <h2 className="font-red-rose text-lg leading-snug">
              Empowering Youth Through <br />
              Purposeful, Personalized Journeys
            </h2>
            <Link
              href="#"
              className="bg-brand-primary rounded-md px-5 py-2 text-sm text-white shadow-md"
            >
              Explore YPD&apos;s Vision
            </Link>
          </div>

          {/* --- Overlay content (sm and above) --- */}
          <div className="absolute bottom-8 left-1/2 hidden w-full max-w-xl -translate-x-1/2 flex-col items-center gap-4 text-center sm:flex sm:gap-6">
            <div className="px-2">
              <p className="text-brand-primary text-sm font-semibold">
                Youth Pulse Digital™
              </p>
              <h2 className="font-red-rose text-2xl leading-snug md:text-3xl">
                Empowering Youth Through <br />
                Purposeful, Personalized Journeys
              </h2>
            </div>
            <Link href="#" className="btn-primary btn-size shadow-md">
              Explore CRP
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
