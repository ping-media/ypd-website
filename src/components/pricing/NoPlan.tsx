import { AlertCircle } from "lucide-react";

const NoPlan = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center gap-4 p-4 text-center sm:gap-6 sm:py-8 lg:py-16">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-400 bg-red-50">
        <AlertCircle className="h-9 w-9 text-red-500" />
      </div>
      <h2 className="font-red-rose text-2xl sm:text-3xl">
        Please Select a Program
      </h2>
      <p className="text-brand-gray max-w-5xl text-center text-base sm:text-lg">
        To view the right pricing and benefits, start by choosing a program that
        fits your career journey. Each option is designed with unique features,
        timelines, and mentorship paths so you get a plan that truly matches
        your goals.
      </p>
    </div>
  );
};

export default NoPlan;
