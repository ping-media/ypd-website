import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  content: string[];
  imageSrc: string;
  reverse?: boolean;
  checklist?: boolean;
}

function FeatureSection({
  title,
  content,
  imageSrc,
  reverse = false,
  checklist = false,
}: FeatureSectionProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center gap-4 sm:gap-10 lg:gap-14`}
    >
      {/* Text Content */}
      <div className="flex w-full flex-1 flex-col gap-4 sm:gap-6">
        <h3 className="font-red-rose text-lg sm:text-2xl">{title}</h3>
        <ul className="text-brand-gray flex flex-col items-start gap-4 text-base leading-relaxed sm:text-lg">
          {content.map((text, i) =>
            checklist ? (
              <li key={i} className="flex items-start justify-center gap-3">
                <CheckCircle2 className="text-brand-primary mt-1 h-6 w-6 flex-shrink-0" />
                <span className="text-brand-gray text-sm sm:text-lg">
                  {text}
                </span>
              </li>
            ) : (
              <li
                key={i}
                className="text-brand-gray list-inside text-sm sm:text-lg"
              >
                {text}
              </li>
            ),
          )}
        </ul>
      </div>

      {/* Image */}
      <div className="relative h-[240px] w-full flex-shrink-0 overflow-hidden rounded-2xl shadow-md sm:h-[300px] lg:h-[360px] lg:flex-1">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="font-lato flex justify-center bg-white p-4 sm:p-10 lg:p-20">
      <div className="flex w-full max-w-[1440px] flex-col gap-4 sm:gap-10 lg:gap-14">
        {/* Heading + Intro */}
        <div className="mx-auto flex max-w-5xl flex-col gap-4 text-center">
          <h1 className="font-red-rose text-center text-3xl font-semibold sm:text-4xl">
            Vision & Mission
          </h1>
          <h2 className="font-red-rose text-center text-2xl sm:text-3xl">
            Youth Pulse Digital™ Your Complete AI-Powered Learning Companion
          </h2>
          <p className="text-brand-gray max-w-4xl text-center text-base sm:text-lg">
            Help students and professionals go from &quot;I&apos;m confused
            about my future&quot; to &quot;I know exactly what to do next&quot;
            through India’s most advanced Self-Serve AI Platform.
          </p>
        </div>

        {/* Section 1 */}
        <FeatureSection
          title="What Makes Us Different:"
          checklist
          imageSrc="/about/info.png"
          content={[
            "24/7 AI Mentors that understand you emotionally and culturally like talking to a friend who gets Indian students",
            "Private Space for your personal learning journey completely confidential and judgement-free",
            "Personalized Learning Paths for CBSE Class 10, NDA entrance, career planning, and more",
            "Conversational AI powered by our proprietary framework not generic chatbots, but mentors trained specifically for Indian learners",
            "Bridges Employability Gaps from Tier-1 metros to Tier-4 cities, we ensure every student gets industry-ready skills and career opportunities regardless of location",
          ]}
        />

        {/* Section 2 */}
        <FeatureSection
          title="Our Unique Approach:"
          imageSrc="/about/info1.png"
          reverse
          content={[
            "We blend critical thinking, problem-solving, and innovative mindset into every conversation. Whether you're studying for exams or planning your career, our platform builds these essential skills naturally through experiential learning methods.",
            "Built for India, Global Standards:",
            "Aligned with NEP 2020 guidelines, our Al mentors understand Indian family dynamics, cultural values, and educational pressures while maintaining international quality standards. Every interaction is designed with emotional integrity and cultural sensitivity.",
            "Simple Promise: Advanced Al technology + Deep Indian context + 24/7 personal support = Your success, guaranteed.",
            " No more confusion. No more walking alone. Just clear, personalized guidance whenever you need it",
          ]}
        />
      </div>
    </section>
  );
}

//
//
//
//.
