import CareersContactForm from "@/components/careers/CareersContactForm";

export default function JobApply() {
  return (
    <section className="bg-white">
      {/* Container is only applied for md+ screens */}
      <div className="w-full md:rounded-2xl md:border md:border-gray-200 md:bg-white md:p-6 md:shadow-sm md:sm:p-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Ready to Apply?
          </h2>
          <p className="text-brand-gray mt-2 text-sm sm:text-base">
            Ready to shape the future with us? Fill in your details and let’s
            start the journey.
          </p>
        </div>
        {/* Form */}
        <CareersContactForm />
      </div>
    </section>
  );
}
