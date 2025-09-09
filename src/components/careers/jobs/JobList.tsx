import JobCard from "./JobCard";

export interface Job {
  id: number;
  title: string;
  location: string;
  flexibility: string;
  role: string;
  slug: string;
}
export default function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <div className="flex w-full max-w-7xl flex-col gap-4">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p className="text-muted-foreground py-8 text-center text-sm">
          No jobs found matching your filters.
        </p>
      )}
    </div>
  );
}
