import Image from "next/image";

const CvpImpact = () => {
  return (
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-4 sm:gap-10 lg:gap-14 font-lato">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-10 lg:gap-14 w-full bg-gray-50 rounded-xl p-4 sm:p-10">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-red-rose">
              Real Impact, Real Results
            </h2>
            {/* Description */}
            <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
              Since its pilot rollout in early 2023, Youth Pulse Digital™ has
              empowered over 2,000 students from Tier 1 to Tier 4 cities across
              India to gain their first real sense of career clarity without
              pressure, without jargon, and without bias.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 pt-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl sm:text-4xl font-red-rose border-b-2">
                  93%
                </h3>
                <p className="text-sm sm:text-base text-brand-gray">
                  of students said CVP Lite helped them understand their own
                  interests better than any school-level career lecture or test.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-3xl sm:text-4xl font-red-rose border-b-2">
                  89%
                </h3>
                <p className="text-sm sm:text-base text-brand-gray">
                  of parents reported feeling more confident supporting their
                  child’s stream or college decisions after seeing the final
                  report.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-3xl sm:text-4xl font-red-rose border-b-2">
                  92%
                </h3>
                <p className="text-sm sm:text-base text-brand-gray">
                  of students said they would recommend CVP Lite to their
                  juniors, cousins, or friends especially those who feel lost or
                  under pressure.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-md min-h-[280px] sm:min-h-[400px] lg:min-h-[520px] mt-6 lg:mt-0">
            <Image
              src="/cvplite/impact.png"
              alt="Student and parent smiling"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvpImpact;
