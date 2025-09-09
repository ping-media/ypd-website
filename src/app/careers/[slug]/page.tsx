import { jobs } from "@/components/careers/jobs/jobData";
import JobHeader from "@/components/careers/job-details/JobHeader";
import JobSidebar from "@/components/careers/job-details/JobSidebar";
import JobResponsibilities from "@/components/careers/job-details/JobResponsibilities";
import JobRequirements from "@/components/careers/job-details/JobRequirements";
import JobPerks from "@/components/careers/job-details/JobPerks";
import JobWhyYPD from "@/components/careers/job-details/JobWhyYPD";
import Separator from "@/components/careers/job-details/Separator";
import JobApply from "@/components/careers/job-details/JobApply";

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <section className="flex justify-center bg-white p-4 sm:px-6 lg:px-10 xl:px-20">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">
            <JobHeader job={job} />
            <JobResponsibilities job={job} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <JobSidebar job={job} />
          </div>
        </div>

        <Separator />
        <JobWhyYPD job={job} />
        <Separator />
        <JobRequirements job={job} />
        <Separator />
        <JobPerks job={job} />
        <Separator />
        <JobApply />
      </div>
    </section>
  );
}
