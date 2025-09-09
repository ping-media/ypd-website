import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Job } from "./JobList";

export default function JobCard({ job }: { job: Job }) {
  return (
    <Card className="font-red-rose flex flex-col gap-2 rounded-2xl px-4 py-4 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:justify-between md:gap-0 md:rounded-full md:px-6 md:py-2">
      {/* Title */}
      <h3 className="font-medium md:flex-1">{job.title}</h3>

      {/* Location */}
      <p className="text-muted-foreground text-sm md:flex-1 md:text-center">
        {job.location}
      </p>

      {/* Job Type / Flexibility */}
      <p className="text-muted-foreground text-sm md:flex-1 md:text-center">
        {job.flexibility}
      </p>

      {/* External link */}
      <a
        href={job.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-brand-accent flex items-center gap-1 pt-1 md:ml-4 md:shrink-0 md:p-2 md:pt-0"
      >
        <ExternalLink className="h-5 w-5" />
        <span className="text-sm md:hidden">Apply</span>
      </a>
    </Card>
  );
}
