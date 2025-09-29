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
import { FormData } from "../GovtForm";

interface Step1Props {
  register: UseFormRegister<FormData>;
}

export default function Step1({ register }: Step1Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Organization Name</Label>
        <Input
          {...register("organizationName")}
          placeholder="Ministry of Skill Development"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Type of Organization</Label>
        <Select {...register("organizationType")}>
          <SelectTrigger className="mt-2 cursor-pointer">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Central Govt",
              "State Govt",
              "Govt Agency",
              "PPP",
              "NGO Partner",
            ].map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Department / Mission Name</Label>
        <Input
          {...register("departmentName")}
          placeholder="Skill India Mission"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Location</Label>
        <Input
          {...register("location")}
          placeholder="City, State, Country"
          className="mt-2"
        />
      </div>

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
