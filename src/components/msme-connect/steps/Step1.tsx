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
import { FormData } from "../MsmeForm";

interface Step1Props {
  register: UseFormRegister<FormData>;
}

export default function Step1({ register }: Step1Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Enterprise Name</Label>
        <Input
          {...register("enterpriseName")}
          placeholder="ABC Enterprises Pvt. Ltd."
          className="mt-2"
        />
      </div>

      <div>
        <Label>Type of Enterprise</Label>
        <Select {...register("enterpriseType")}>
          <SelectTrigger className="mt-2 cursor-pointer">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            {["Micro", "Small", "Medium", "Other"].map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Industry Sector</Label>
        <Select {...register("industrySector")}>
          <SelectTrigger className="mt-2 cursor-pointer">
            <SelectValue placeholder="Select Industry Sector" />
          </SelectTrigger>
          <SelectContent>
            {["Manufacturing", "Services", "IT", "Retail", "Other"].map(
              (sector) => (
                <SelectItem key={sector} value={sector}>
                  {sector}
                </SelectItem>
              ),
            )}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Year of Establishment</Label>
        <Input
          type="number"
          {...register("establishmentYear")}
          placeholder="YYYY"
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

      <div>
        <Label>Registration Details (Udyam / GST / Other)</Label>
        <Input
          {...register("registrationDetails")}
          placeholder="Enter registration numbers"
          className="mt-2"
        />
      </div>
    </div>
  );
}
