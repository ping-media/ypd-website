import { SquareCheck } from "lucide-react";
import { JobDetails } from "@/components/careers/jobs/jobData";

export default function JobRequirements({ job }: { job: JobDetails }) {
  return (
    <div>
      <h2 className="font-red-rose mb-6 text-xl sm:text-2xl">Requirements</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Must Have */}
        <div className="border-brand-primary rounded-lg border p-4 sm:p-6">
          <h3 className="font-red-rose mb-4 text-lg">Must Have</h3>
          <ul className="space-y-3">
            {job.mustHave.map((req, i) => (
              <li key={i} className="flex items-start gap-2">
                <SquareCheck className="text-brand-primary mt-1 h-5 w-5 shrink-0" />
                <p className="text-brand-gray text-sm sm:text-base">{req}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Nice to Have */}
        <div className="border-brand-primary rounded-lg border p-4 sm:p-6">
          <h3 className="font-red-rose mb-4 text-lg">Nice to Have</h3>
          <ul className="space-y-3">
            {job.niceToHave.map((req, i) => (
              <li key={i} className="flex items-start gap-2">
                <SquareCheck className="text-brand-primary mt-1 h-5 w-5 shrink-0" />
                <p className="text-brand-gray text-sm sm:text-base">{req}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
