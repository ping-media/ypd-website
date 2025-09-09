import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const filters = ["All Roles", "Remote", "Developer"];

interface Props {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function JobFilters({ activeFilter, setActiveFilter }: Props) {
  return (
    <div className="flex w-full max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      {/* Left: Filters */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        {filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            variant={activeFilter === filter ? "default" : "outline"}
            className={
              activeFilter === filter
                ? "bg-brand-primary border-brand-accent hover:bg-brand-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm text-white transition"
                : "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm transition"
            }
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Right: Filter By button */}
      <div className="flex w-full sm:w-auto">
        <Button
          variant="outline"
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm transition sm:w-auto"
        >
          Filter By
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
