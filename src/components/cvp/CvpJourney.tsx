import Image from "next/image";
import { Zap } from "lucide-react";
import Link from "next/link";

const journeySteps = [
  {
    id: "01",
    text: "The CVP Lite™ doesn’t throw options at you. It walks with you, helping you unlock who you are, how you think, how you dream, and where your natural strengths want to grow.",
  },
  {
    id: "02",
    text: "Through human-structured AI conversations, reflective journaling moments, and dynamic career mapping, we help you build not just a choice but a vision.",
  },
  {
    id: "03",
    text: "Every step is designed to be warm, personalized, and structured ensuring that you don’t just explore careers randomly but architect your future thoughtfully, courageously, and joyfully.",
  },
];

const CvpJourney = () => {
  return (
    <section className="p-6 sm:p-12 lg:p-20 bg-brand-bg flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Why This Journey is Unique
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl">
            Youth Pulse Digital™ believes that career clarity is not just a goal
            it’s a guided evolution.
          </p>
        </div>

        {/* Text + Image Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center w-full max-w-7xl">
          {/* Left: Numbered steps (60%) */}
          <div className="basis-[60%] flex flex-col gap-6">
            {journeySteps.map((step) => (
              <div
                key={step.id}
                className="flex items-start gap-4 p-4 border border-[#cce0cc] rounded-lg "
              >
                {/* Number */}
                <div className="text-4xl sm:text-5xl font-poppins font-bold text-[#cce0cc] shrink-0">
                  {step.id}
                </div>

                {/* Text with underline effect */}
                <div className="flex-1">
                  <p className="text-base sm:text-xl font-red-rose inline-block border-b border-[#cce0cc] pb-1">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image (40%) */}
          <div className="basis-[40%] relative rounded-lg overflow-hidden shadow-lg w-full min-h-[280px] md:min-h-[400px]">
            <Image
              src="/cvplite/journey.png"
              alt="CVP Journey"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6">
          <Link
            href="/start"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium shadow-sm transition-colors"
          >
            <Zap size={18} /> Start CVP Lite™
          </Link>

          <h2 className=" text-base sm:text-lg text-center">
            Try our CVP Advance™ a 7-day exploration into Career Pathway for
            deeper insights into Career Pathways.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CvpJourney;
