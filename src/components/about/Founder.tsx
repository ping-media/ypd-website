import Image from "next/image";

export default function Founder() {
  return (
    <section className="bg-gray-50 p-4 sm:p-10 lg:p-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16 font-lato">
        {/* Top Vision Statement */}
        <div className="text-center max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-red-rose">
            Founder&apos;s Vision
          </h2>
          <p className="text-brand-gray text-base sm:text-xl leading-relaxed">
            At Youth Pulse Digital™, we don’t believe career success is found we
            believe it’s architected. In a world overwhelmed by noise,
            complexity, and algorithmic distraction, clarity is the rarest form
            of power.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-6">
            <h3 className="text-2xl sm:text-3xl font-red-rose">
              That’s why we built YPD
            </h3>
            <div className="flex flex-col gap-4 text-base text-brand-gray sm:text-xl leading-relaxed">
              <p>
                Not as another EdTech app, but as a purpose-led intelligent
                ecosystem. One that fuses AI, behavioral science, and lived
                mentorship into one singular mission: To help every learner see
                clearly, act confidently, and grow purposefully.
              </p>
              <p>
                Our ecosystem is born from over 25 years of ground-level
                experience decoding human potential, building scalable learning
                frameworks, designing systems for clarity, resilience, and
                lifelong success.
              </p>
              <p>
                We bring that depth to career design helping every learner
                unlock not just professional success, but personal purpose.
              </p>
              <p>
                At YPD, your career isn’t just a path. It’s a vision. And we’re
                here to walk that journey with you every step of the way.
              </p>
              <p className="font-semibold">
                — A Biswas
                <br />
                Founder, Youth Pulse Digital™
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about/founder.png"
              alt="Founder"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
