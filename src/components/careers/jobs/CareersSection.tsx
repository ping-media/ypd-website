"use client";

import { useState } from "react";
import JobSearchBar from "./JobSearchBar";
import JobFilters from "./JobFilters";
import JobList from "./JobList";
import { jobs } from "./jobData";

export default function CareersSection({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState<string | undefined>();
  const [flexibility, setFlexibility] = useState<string | undefined>();
  const [activeFilter, setActiveFilter] = useState("All Roles");

  const filteredJobs = jobs.filter((job) => {
    const jobLocation = job.location.toLowerCase();
    const jobFlexibility = job.flexibility.toLowerCase();
    const jobRole = job.role.toLowerCase();

    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesLocation = location ? jobLocation.includes(location) : true;
    const matchesFlexibility = flexibility
      ? jobFlexibility.includes(flexibility)
      : true;

    // 👇 Fix: Handle Remote filter specially
    const matchesFilter =
      activeFilter === "All Roles"
        ? true
        : activeFilter === "Remote"
          ? jobFlexibility.includes("remote")
          : jobRole.includes(activeFilter.toLowerCase());

    return (
      matchesSearch && matchesLocation && matchesFlexibility && matchesFilter
    );
  });
  return (
    <section
      id="jobs"
      className="flex justify-center bg-white p-4 sm:px-10 sm:py-5 lg:px-20 lg:py-10"
    >
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 sm:gap-12">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          {subheading && (
            <p className="text-brand-gray text-sm leading-relaxed sm:text-base lg:text-lg">
              {subheading}
            </p>
          )}
        </div>

        {/* Search + Filters grouped with their own spacing */}
        <div className="flex w-full max-w-7xl flex-col gap-8">
          <JobSearchBar
            search={search}
            setSearch={setSearch}
            setLocation={setLocation}
            setFlexibility={setFlexibility}
          />
          <JobFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>

        {/* Jobs */}
        <JobList jobs={filteredJobs} />
      </div>
    </section>
  );
}
