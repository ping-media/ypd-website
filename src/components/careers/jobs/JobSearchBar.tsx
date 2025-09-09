import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  search: string;
  setSearch: (val: string) => void;
  setLocation: (val: string | undefined) => void;
  setFlexibility: (val: string | undefined) => void;
}

export default function JobSearchBar({
  search,
  setSearch,
  setLocation,
  setFlexibility,
}: Props) {
  return (
    <div className="flex w-full max-w-7xl flex-col gap-4 rounded-2xl border bg-green-50/50 p-4 lg:flex-row lg:items-center lg:gap-6">
      {/* Search Input */}
      <Input
        placeholder="Search Job"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-brand-primary w-full border bg-white lg:flex-1"
      />

      {/* Middle Row (Location + Flexibility + Button) */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 lg:flex lg:flex-1 lg:items-center lg:gap-6">
        {/* Location Select */}
        <Select onValueChange={(val) => setLocation(val)}>
          <SelectTrigger className="border-brand-primary w-full border bg-white sm:flex-1 lg:flex-1">
            <SelectValue placeholder="Where you Work" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bengaluru">Bengaluru</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
          </SelectContent>
        </Select>

        {/* Flexibility Select */}
        <Select onValueChange={(val) => setFlexibility(val)}>
          <SelectTrigger className="border-brand-primary w-full border bg-white sm:flex-1 lg:flex-1">
            <SelectValue placeholder="Work Flexibility" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="onsite">On-Site</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button className="text-brand-fg bg-brand-primary border-brand-accent hover:bg-brand-primary/90 h-12 w-full rounded-lg border px-6 text-sm transition sm:flex-1 lg:w-auto lg:flex-none">
          Search
        </Button>
      </div>
    </div>
  );
}
