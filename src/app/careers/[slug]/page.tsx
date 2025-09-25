import { jobs } from "@/components/careers/jobs/jobData";
import JobHeader from "@/components/careers/job-details/JobHeader";
import JobSidebar from "@/components/careers/job-details/JobSidebar";
import JobResponsibilities from "@/components/careers/job-details/JobResponsibilities";
import JobRequirements from "@/components/careers/job-details/JobRequirements";
import JobPerks from "@/components/careers/job-details/JobPerks";
import JobWhyYPD from "@/components/careers/job-details/JobWhyYPD";
import Separator from "@/components/careers/job-details/Separator";
import JobApply from "@/components/careers/job-details/JobApply";
import Link from "next/link";

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-white px-4 py-10 text-center sm:px-6 sm:py-12 md:px-12 lg:py-20">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="bg-brand-primary h-[220px] w-[220px] rounded-full opacity-10 blur-3xl sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"></div>
        </div>

        {/* Heading */}
        <h2 className="font-red-rose text-brand-primary text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Job Not Found
        </h2>

        {/* Accent underline */}
        <div className="bg-brand-accent mt-2 h-1 w-16 rounded-full sm:w-20 md:w-24"></div>

        {/* Paragraph */}
        <p className="text-brand-gray mt-4 max-w-lg px-3 text-sm sm:text-base md:mt-6 md:text-lg lg:text-xl">
          The job listing you’re looking for doesn’t exist or may have been
          closed. Explore our open positions or reach out to our team for
          assistance.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:mt-8 md:gap-4">
          <Link
            href="/careers#jobs"
            className="btn-size btn-primary px-6 py-2 text-sm shadow-md sm:px-5 sm:text-base md:px-6 md:text-lg lg:px-8"
          >
            View Open Roles
          </Link>
          <Link
            href="/contact"
            className="btn-size border-brand-accent text-brand-primary hover:bg-brand-primary/5 px-6 py-2 text-sm sm:px-5 sm:text-base md:px-6 md:text-lg lg:px-8"
          >
            Contact Us
          </Link>
        </div>
      </section>
    );
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
