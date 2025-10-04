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
import { FormData } from "../DemoForm";

export default function Step1() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      {/* Organization / Institute / Enterprise Name */}
      <div>
        <Label>Organization / Institute / Enterprise Name</Label>
        <Input
          {...register("organizationName", {
            required: "Organization name is required",
          })}
          placeholder="Ministry of Skill Development"
          className="mt-2"
        />
        {errors.organizationName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.organizationName.message}
          </p>
        )}
      </div>

      {/* Organization Type */}
      <div>
        <Label>Type</Label>
        <Controller
          name="organizationType"
          control={control}
          rules={{ required: "Organization type is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
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
          )}
        />
        {errors.organizationType && (
          <p className="mt-1 text-sm text-red-500">
            {errors.organizationType.message}
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
          {...register("website")}
          placeholder="https://www.example.com"
          className="mt-2"
        />
      </div>
    </div>
  );
}
