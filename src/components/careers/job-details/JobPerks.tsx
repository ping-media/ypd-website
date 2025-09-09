import { JobDetails } from "@/components/careers/jobs/jobData";

export default function JobPerks({ job }: { job: JobDetails }) {
  return (
    <div>
      <h2 className="font-red-rose mb-6 text-xl sm:text-2xl">
        Perks & Benefits
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {job.perks.map((perk, idx) => (
          <div key={idx}>
            <h4 className="font-red-rose text-lg">{perk.title}</h4>
            <p className="text-brand-gray text-sm leading-relaxed sm:text-base">
              {perk.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
