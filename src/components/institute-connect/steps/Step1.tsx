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
import { FormData } from "../InstituteForm";

interface Step1Props {
  register: UseFormRegister<FormData>;
}

export default function Step1({ register }: Step1Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Institute Name</Label>
        <Input
          {...register("instituteName")}
          placeholder="ABC School / XYZ College"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Type of Institute</Label>
        <Select {...register("instituteType")}>
          <SelectTrigger className="mt-2 cursor-pointer">
            <SelectValue placeholder="Select Institute Type" />
          </SelectTrigger>
          <SelectContent>
            {["School", "College", "Coaching", "Vocational", "Other"].map(
              (type) => (
                <SelectItem key={type} value={type}>
                  {type}
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
        <Label>Affiliation / Accreditation</Label>
        <Select {...register("affiliation")}>
          <SelectTrigger className="mt-2 cursor-pointer">
            <SelectValue placeholder="Select Affiliation" />
          </SelectTrigger>
          <SelectContent>
            {[
              "CBSE",
              "ICSE",
              "State Board",
              "University",
              "Autonomous",
              "Other",
            ].map((aff) => (
              <SelectItem key={aff} value={aff}>
                {aff}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
        <Label>Website</Label>
        <Input
          {...register("website")}
          placeholder="https://www.example.com"
          className="mt-2"
        />
      </div>
    </div>
  );
}
