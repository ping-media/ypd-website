import { AlertCircle } from "lucide-react";

const NoPlan = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col items-center gap-4 sm:gap-6 text-center p-4 sm:py-8 lg:py-16">
      <div className="w-16 h-16 rounded-full border bg-red-50 border-red-400 flex items-center justify-center">
        <AlertCircle className="text-red-500 w-9 h-9" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-red-rose ">
        Please Select a Program
      </h2>
      <p className="text-brand-gray text-center text-base sm:text-lg max-w-5xl">
        To view the right pricing and benefits, start by choosing a program that
        fits your career journey. Each option is designed with unique features,
        timelines, and mentorship paths so you get a plan that truly matches
        your goals.
      </p>
    </div>
  );
};

export default NoPlan;
