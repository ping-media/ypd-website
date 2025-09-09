import { JobDetails } from "@/components/careers/jobs/jobData";

export default function JobResponsibilities({ job }: { job: JobDetails }) {
  return (
    <div>
      {/* About Role */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="font-red-rose mb-4 text-xl sm:text-2xl">
          About the Role
        </h2>
        <p className="text-brand-gray text-sm leading-relaxed sm:text-base">
          {job.aboutRole}
        </p>
      </div>

      {/* Responsibilities */}
      <div>
        <h2 className="font-red-rose mb-6 pt-4 text-xl sm:text-2xl">
          Responsibilities
        </h2>
        <ul className="space-y-4">
          {job.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-neutral-700"></div>
              <p className="text-brand-gray text-sm sm:text-base">{resp}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
