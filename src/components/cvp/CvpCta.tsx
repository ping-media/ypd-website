import { Zap, UserPlus } from "lucide-react";

export default function CvpCta() {
  return (
    <section className="p-6 sm:p-12 lg:p-20 flex justify-center bg-[#F3FFF8]">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-4 text-center font-lato">
        {/* Heading */}
        <h2 className="font-red-rose text-2xl sm:text-3xl">
          Start Your Career Vision Journey
        </h2>
        <p className="text-sm sm:text-base text-brand-gray">
          You’ve reflected. You’re ready.
        </p>

        {/* Subheading */}
        <p className="text-lg sm:text-xl max-w-3xl font-red-rose">
          Now it’s time to unlock your personalized career vision and take your
          first step into a future built with clarity, confidence, and purpose.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium shadow-sm transition-colors">
            <Zap size={18} /> Unlock Full Access – ₹899
          </button>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-black hover:bg-green-100 px-6 sm:px-8 py-3 sm:py-4 font-medium text-gray-800 transition-colors">
            <UserPlus size={18} /> Create Account Now
          </button>
        </div>
      </div>
    </section>
  );
}
