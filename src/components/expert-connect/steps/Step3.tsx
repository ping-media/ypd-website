"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../ExpertForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Step3() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  // Match ExpertForm defaultValues
  const expertiseAreas = [
    "AI/ML",
    "Renewable Energy",
    "Finance & Markets",
    "Creative Arts",
    "Supply Chain",
    "Social Impact",
    "Others",
  ];

  const gradesComfortable = [
    "9–10",
    "11–12",
    "UG",
    "PG",
    "Early Professionals",
  ];

  return (
    <div className="space-y-4">
      {/* Specific Areas of Expertise */}
      <div>
        <Label>Specific Areas of Expertise</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {expertiseAreas.map((area) => (
            <div key={area} className="flex items-center gap-2">
              <Controller
                name={`expertiseAreas.${area}` as const}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300"
                  />
                )}
              />
              <span className="cursor-pointer">{area}</span>
            </div>
          ))}
        </div>
        {errors.expertiseAreas?.message && (
          <p className="mt-1 text-sm text-red-500">
            {String(errors.expertiseAreas.message)}
          </p>
        )}
      </div>

      {/* Topics You Would Like to Deliver Sessions On */}
      <div>
        <Label>Topics You Would Like to Deliver Sessions On</Label>
        <Input
          {...register("sessionTopics", { required: "This field is required" })}
          placeholder="Short answer"
          className="mt-2"
        />
        {errors.sessionTopics && (
          <p className="mt-1 text-sm text-red-500">
            {errors.sessionTopics.message}
          </p>
        )}
      </div>

      {/* Grades / Levels Comfortable Addressing */}
      <div>
        <Label>Grades / Levels Comfortable Addressing</Label>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {gradesComfortable.map((grade) => (
            <div key={grade} className="flex items-center gap-2">
              <Controller
                name={`gradesComfortable.${grade}` as const}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300"
                  />
                )}
              />
              <span className="cursor-pointer">{grade}</span>
            </div>
          ))}
        </div>
        {errors.gradesComfortable?.message && (
          <p className="mt-1 text-sm text-red-500">
            {String(errors.gradesComfortable.message)}
          </p>
        )}
      </div>

      {/* Preferred Session Type */}
      <div>
        <Label>Preferred Session Type</Label>
        <Controller
          name="preferredSessionType"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Webinar / Panel Discussion / Guest Lecture" />
              </SelectTrigger>
              <SelectContent>
                {["Webinar", "Panel Discussion", "Guest Lecture"].map(
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
        {errors.preferredSessionType && (
          <p className="mt-1 text-sm text-red-500">
            {errors.preferredSessionType.message}
          </p>
        )}
      </div>
    </div>
  );
}
