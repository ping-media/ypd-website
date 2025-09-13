import Link from "next/link";

export default function ComingSoon() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-white px-3 py-8 text-center sm:px-6 sm:py-12 md:px-12 lg:pb-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="bg-brand-primary h-[180px] w-[180px] rounded-full opacity-10 blur-3xl sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px]"></div>
      </div>

      {/* Heading */}
      <h2 className="font-red-rose mt-4 text-xl sm:mt-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Coming Soon 🚀
      </h2>

      {/* Paragraph */}
      <p className="text-brand-gray mt-2 max-w-xs px-2 text-sm sm:mt-3 sm:max-w-lg sm:px-0 sm:text-sm md:mt-4 md:text-base lg:text-lg xl:text-xl">
        We’re working hard to bring you something amazing. Stay tuned while we
        prepare this page.
      </p>

      {/* CTA Buttons */}
      <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 md:mt-8 md:gap-4">
        <Link
          href="/"
          className="btn-size btn-primary px-6 py-2 text-sm shadow-md sm:px-4 sm:text-xs md:px-6 md:text-sm lg:px-8 lg:text-base xl:text-lg"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="btn-size border-brand-accent text-brand-primary hover:bg-brand-primary/5 px-6 py-2 text-sm sm:px-4 sm:text-xs md:px-6 md:text-sm lg:px-8 lg:text-base xl:text-lg"
        >
          Notify Me
        </Link>
      </div>
    </section>
  );
}
