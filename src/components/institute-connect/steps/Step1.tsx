import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "../InstituteForm";

export default function Step1() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      <div>
        <Label>Institute Name</Label>
        <Input
          {...register("instituteName", {
            required: "Institute name is required",
          })}
          placeholder="ABC School / XYZ College"
          className="mt-2"
        />
        {errors.instituteName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.instituteName.message}
          </p>
        )}
      </div>

      <div>
        <Label>Type of Institute</Label>
        <Controller
          name="instituteType"
          control={control}
          rules={{ required: "Institute type is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
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
          )}
        />
        {errors.instituteType && (
          <p className="mt-1 text-sm text-red-500">
            {errors.instituteType.message}
          </p>
        )}
      </div>

      <div>
        <Label>Year of Establishment</Label>
        <Controller
          name="establishmentYear"
          control={control}
          rules={{ required: "Establishment year is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="Select Year" />{" "}
                {/* <-- placeholder here */}
              </SelectTrigger>
              <SelectContent>
                {Array.from(
                  { length: new Date().getFullYear() - 1900 + 1 },
                  (_, i) => new Date().getFullYear() - i,
                ).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.establishmentYear && (
          <p className="mt-1 text-sm text-red-500">
            {errors.establishmentYear.message}
          </p>
        )}
      </div>

      <div>
        <Label>Affiliation / Accreditation</Label>
        <Controller
          name="affiliation"
          control={control}
          rules={{ required: "Affiliation is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
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
          )}
        />
        {errors.affiliation && (
          <p className="mt-1 text-sm text-red-500">
            {errors.affiliation.message}
          </p>
        )}
      </div>

      <div>
        <Label>Location</Label>
        <Input
          {...register("location", {
            required: "Location is required",
          })}
          placeholder="City, State, Country"
          className="mt-2"
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
        )}
      </div>

      <div>
        <Label>Website</Label>
        <Input
          {...register("website", {
            pattern: {
              value: /^https?:\/\/.+/,
              message:
                "Please enter a valid URL (starting with http:// or https://)",
            },
          })}
          placeholder="https://www.example.com"
          className="mt-2"
        />
        {errors.website && (
          <p className="mt-1 text-sm text-red-500">{errors.website.message}</p>
        )}
      </div>
    </div>
  );
}
