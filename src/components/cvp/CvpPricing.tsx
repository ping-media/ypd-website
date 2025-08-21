import Link from "next/link";

const CvpPricing = () => {
  return (
    <section className="p-6 sm:p-12 lg:p-2 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Pricing & Access
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl">
            CareerVerse™ is a premium experience made affordable.
          </p>
        </div>

        {/* Text + Image Section */}

        {/* CTA */}
        <div className="flex flex-col items-center gap-6">
          <h2 className=" text-base sm:text-lg text-center font-semibold">
            Institutional Pricing Available. Please{" "}
            <Link
              href={"/contact"}
              className=" border-b-brand-primary border border-x-0 border-t-0 text-brand-primary hover:text-brand-primary/80 "
            >
              Contact Us
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CvpPricing;
