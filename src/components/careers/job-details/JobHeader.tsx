import {
  BookmarkIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ShareIcon,
} from "lucide-react";
import { JobDetails } from "@/components/careers/jobs/jobData";

export default function JobHeader({ job }: { job: JobDetails }) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* Left */}
        <div>
          <h1 className="font-red-rose mb-2 text-2xl leading-snug sm:text-3xl lg:text-4xl">
            {job.title}
          </h1>
          <p className="text-brand-gray mb-4 text-sm sm:text-base lg:text-lg">
            {job.description}
          </p>
          <div className="text-brand-gray flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              {job.jobType}
            </span>
            <span className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              {job.postedDate}
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="mt-2 flex items-center gap-2 sm:mt-0 sm:gap-3">
          <button className="bg-brand-primary hover:bg-brand-primary/90 h-11 cursor-pointer rounded-lg border border-gray-300 px-5 text-sm font-medium whitespace-nowrap text-white transition-colors sm:text-base">
            Apply Now
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 transition-colors hover:bg-gray-50">
            <BookmarkIcon className="text-brand-gray h-6 w-6 cursor-pointer" />
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 transition-colors hover:bg-gray-50">
            <ShareIcon className="text-brand-gray h-6 w-6 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}
