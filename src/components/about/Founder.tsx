import Image from "next/image";

export default function Founder() {
  return (
    <section className="bg-gray-50 p-4 sm:p-10 lg:p-20">
      <div className="font-lato mx-auto flex max-w-7xl flex-col gap-8 sm:gap-12 lg:gap-16">
        {/* Top Vision Statement */}
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Founder&apos;s Vision
          </h2>
          <p className="text-brand-gray text-base leading-relaxed sm:text-xl">
            At Youth Pulse Digital™, we don’t believe career success is found
            we believe it’s architected. In a world overwhelmed by noise,
            complexity, and algorithmic distraction, clarity is the rarest form
            of power.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse items-center gap-8 sm:gap-12 lg:flex-row lg:gap-16">
          {/* Text */}
          <div className="flex flex-1 flex-col gap-4 sm:gap-6">
            <h3 className="font-red-rose text-2xl sm:text-3xl">
              That’s why we built YPD
            </h3>
            <div className="text-brand-gray flex flex-col gap-4 text-base leading-relaxed sm:text-xl">
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
          <div className="relative aspect-[3/4] w-full max-w-sm flex-1 overflow-hidden rounded-xl shadow-lg sm:max-w-md lg:max-w-lg">
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
