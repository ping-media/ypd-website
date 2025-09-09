import {
  CalendarIcon,
  CaptionsIcon,
  ClockIcon,
  IndianRupee,
  MapPinIcon,
} from "lucide-react";
import { JobDetails } from "@/components/careers/jobs/jobData";

export default function JobSidebar({ job }: { job: JobDetails }) {
  return (
    <div className="sticky top-20 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <h3 className="font-red-rose mb-4 text-center text-lg sm:text-xl">
        Job Description
      </h3>

      <p className="text-brand-gray mb-6 text-center text-xs leading-relaxed sm:text-sm">
        {job.description}
      </p>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
        <div>
          <h4 className="mb-1 font-semibold">Salary</h4>
          <div className="text-brand-gray flex items-center gap-1">
            <IndianRupee className="h-4 w-4" />
            <span>{job.salary}</span>
          </div>
        </div>
        <div>
          <h4 className="mb-1 font-semibold">Experience</h4>
          <p className="text-brand-gray">{job.experience}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-xs sm:text-sm">
        <div>
          <h4 className="mb-1 font-semibold">Location</h4>
          <div className="text-brand-gray flex items-center gap-1">
            <MapPinIcon className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
        </div>
        <div>
          <h4 className="mb-1 font-semibold">Job Type</h4>
          <div className="text-brand-gray flex items-center gap-1">
            <ClockIcon className="h-4 w-4" />
            <span>{job.jobType}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-xs sm:text-sm">
        <div>
          <h4 className="mb-1 font-semibold">Posted</h4>
          <div className="text-brand-gray flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{job.postedDate}</span>
          </div>
        </div>
        <div>
          <h4 className="mb-1 font-semibold">Experience</h4>
          <div className="text-brand-gray flex items-center gap-1">
            <CaptionsIcon className="h-4 w-4" />
            <span>{job.experience}</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {job.tags.map((tag, idx) => (
          <span
            key={idx}
            className="rounded-sm border border-gray-200 px-2 py-1 text-xs font-medium sm:px-3"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
