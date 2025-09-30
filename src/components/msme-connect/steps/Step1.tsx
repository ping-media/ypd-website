"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../MsmeForm";

export default function Step1() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      {/* Enterprise Name */}
      <div>
        <Label>Enterprise Name</Label>
        <Input
          {...register("enterpriseName", {
            required: "Enterprise name is required",
          })}
          placeholder="ABC Enterprises Pvt. Ltd."
          className="mt-2"
        />
        {errors.enterpriseName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.enterpriseName.message}
          </p>
        )}
      </div>

      {/* Enterprise Type */}
      <div>
        <Label>Type of Enterprise</Label>
        <Controller
          name="enterpriseType"
          control={control}
          rules={{ required: "Please select enterprise type" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
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
          )}
        />
        {errors.enterpriseType && (
          <p className="mt-1 text-sm text-red-500">
            {errors.enterpriseType.message}
          </p>
        )}
      </div>

      {/* Industry Sector */}
      <div>
        <Label>Industry Sector</Label>
        <Controller
          name="industrySector"
          control={control}
          rules={{ required: "Please select industry sector" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
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
          )}
        />
        {errors.industrySector && (
          <p className="mt-1 text-sm text-red-500">
            {errors.industrySector.message}
          </p>
        )}
      </div>

      {/* Year of Establishment */}
      <div>
        <Label>Year of Establishment</Label>
        <Controller
          name="establishmentYear"
          control={control}
          rules={{
            required: "Establishment year is required",
          }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Select Year" />
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

      {/* Location */}
      <div>
        <Label>Location</Label>
        <Input
          {...register("location", { required: "Location is required" })}
          placeholder="City, State, Country"
          className="mt-2"
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
        )}
      </div>

      {/* Website */}
      <div>
        <Label>Website (if any)</Label>
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

      {/* Registration Details */}
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
