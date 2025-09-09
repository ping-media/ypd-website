import { JobDetails } from "@/components/careers/jobs/jobData";

export default function JobWhyYPD({ job }: { job: JobDetails }) {
  return (
    <div>
      <h2 className="font-red-rose mb-4 text-xl sm:text-2xl">Why YPD?</h2>
      <p className="text-brand-gray text-sm leading-relaxed sm:text-base">
        {job.whyYPD}
      </p>
    </div>
  );
}
