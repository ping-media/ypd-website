import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../DemoForm";

interface Step1Props {
  register: UseFormRegister<FormData>;
}

export default function Step1({ register }: Step1Props) {
  return (
    <div className="space-y-4">
      {/* Organization Name */}
      <div>
        <Label>Organization / Institute / Enterprise Name</Label>
        <Input
          {...register("organizationName")}
          placeholder="Ministry of Skill Development"
          className="mt-2"
        />
      </div>

      {/* Organization Type */}
      <div>
        <Label>Type</Label>
        <Select {...register("organizationType")}>
          <SelectTrigger className="mt-2 cursor-pointer">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            {["Institute", "MSME", "Govt Agency", "Other"].map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div>
        <Label>Location</Label>
        <Input
          {...register("location")}
          placeholder="City, State, Country"
          className="mt-2"
        />
      </div>

      {/* Website */}
      <div>
        <Label>Website (if any)</Label>
        <Input
          {...register("website")}
          placeholder="https://www.example.com"
          className="mt-2"
        />
      </div>
    </div>
  );
}
