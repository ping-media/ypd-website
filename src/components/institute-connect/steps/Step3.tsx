"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "../InstituteForm";

export default function Step3() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const streamOptions = [
    "Science",
    "Commerce",
    "Humanities",
    "Vocational",
    "Others",
  ];

  return (
    <div className="space-y-4">
      {/* Student Strength */}
      <div>
        <Label>Student Strength</Label>
        <Input
          type="number"
          placeholder="Enter number of students"
          {...register("studentStrength", {
            required: "Student strength is required",
          })}
          className="mt-2"
        />
        {errors.studentStrength && (
          <p className="mt-1 text-sm text-red-500">
            {errors.studentStrength.message}
          </p>
        )}
      </div>

      {/* Streams */}
      <div>
        <Label>Streams Offered</Label>
        <div className="mt-2 flex flex-col space-y-2">
          {streamOptions.map((stream) => (
            <Controller
              key={stream}
              name={`streams.${stream}`}
              control={control}
              render={({ field }) => (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                  <span>{stream}</span>
                </div>
              )}
            />
          ))}
        </div>
        {/* Validation error for streams */}
        {errors.streams && typeof errors.streams.message === "string" && (
          <p className="mt-1 text-sm text-red-500">{errors.streams.message}</p>
        )}
      </div>

      {/* Number of Teachers */}
      <div>
        <Label>Number of Teachers</Label>
        <Input
          type="number"
          placeholder="Enter number of teachers"
          {...register("numTeachers", {
            required: "Number of teachers is required",
          })}
          className="mt-2"
        />
        {errors.numTeachers && (
          <p className="mt-1 text-sm text-red-500">
            {errors.numTeachers.message}
          </p>
        )}
      </div>

      {/* Current Technology */}
      <div>
        <Label>Current Technology Used</Label>
        <Input
          type="text"
          placeholder="E.g., LMS, AI Tools"
          {...register("currentTech", {
            required: "Current technology is required",
          })}
          className="mt-2"
        />
        {errors.currentTech && (
          <p className="mt-1 text-sm text-red-500">
            {errors.currentTech.message}
          </p>
        )}
      </div>

      {/* Previous AI Exposure */}
      <div>
        <Label>Previous AI Exposure</Label>
        <Input
          type="text"
          placeholder="E.g., AI workshops, courses"
          {...register("previousAIExposure", {
            required: "Previous AI exposure is required",
          })}
          className="mt-2"
        />
        {errors.previousAIExposure && (
          <p className="mt-1 text-sm text-red-500">
            {errors.previousAIExposure.message}
          </p>
        )}
      </div>
    </div>
  );
}
