import Image from "next/image";

export default function Differentiators() {
  return (
    <section className="font-lato flex justify-center bg-white p-4 sm:p-10 lg:p-20">
      <div className="flex w-full max-w-[1440px] flex-col gap-4 sm:gap-10 lg:gap-14">
        {/* Heading + Intro */}
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center">
          <h1 className="font-red-rose text-center text-3xl font-semibold text-gray-900 sm:text-4xl">
            Our Differentiators
          </h1>
          <p className="text-brand-gray max-w-4xl text-center text-base sm:text-lg">
            At <span className="font-semibold">Youth Pulse Digital</span>, we
            don&apos;t just run assessments or just train you — we build living,
            breathing ecosystems of clarity, structure, and career
            transformation. Here&apos;s what sets us apart from conventional
            EdTech or generic career testing tools:
          </p>
        </div>

        {/* Image */}
        <div className="mx-auto w-full max-w-7xl">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/about/diff.png"
              alt="Career Differentiators"
              width={800}
              height={450}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto w-full max-w-7xl space-y-4">
          <div className="grid gap-4 text-sm sm:text-base md:gap-6">
            <p>
              <strong>Clarity Beyond Scores:</strong> We design future pathways,
              not just categorize aptitude.
            </p>

            <p>
              <strong>AI + Human Synergy:</strong> Every step combines adaptive
              AI intelligence with deep human mentorship - personal journeys
            </p>

            <p>
              <strong>Emotion-Centric Design:</strong> EQ, SQ, resilience, and
              adaptability are at the heart of every AI output.
            </p>

            <p>
              <strong>Alternate Pathways Engine:</strong> Career journeys evolve
              — our systems offer dynamic, backup, and bridge roles tailored to
              the learner whether student or professional.
            </p>

            <p>
              <strong>Self-Paced with Feedback Loops:</strong> Learners grow; so
              does the journey. Our AI Mentors adapt in real-time with
              reflection checkpoints.
            </p>

            <p>
              <strong>Real Industry Alignment:</strong> Skill portfolios and
              future-role mapping directly tied to hiring trends and role
              expectations.
            </p>

            <p>
              <strong>Inclusive Ecosystem:</strong> Parents, mentors, industry
              experts and educators are not optional — they are embedded into
              structured guidance flows.
            </p>

            <p>
              <strong>Research-Driven Logic:</strong> Every framework is
              grounded in psychometrics, behavioral science, and future-of-work
              studies.
            </p>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-8 sm:pt-6">
            <p className="text-sm font-medium sm:text-base">
              <span className="font-bold">Youth Pulse Digital</span> isn&apos;t
              just another platform. It&apos;s your career clarity engine -
              built to evolve with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
