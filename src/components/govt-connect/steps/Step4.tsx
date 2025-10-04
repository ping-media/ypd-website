"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "../GovtForm";
import { Input } from "@/components/ui/input";

export default function Step4() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const outcomes = [
    "Employability Skills",
    "Critical Thinking & Problem Solving",
    "Entrepreneurship & Innovation",
    "Industry Readiness",
    "Digital & AI Literacy",
    "Other",
  ];

  const collaborationModels = [
    "Pilot",
    "State-wide rollout",
    "Scheme-aligned",
    "Other",
  ];

  const timelineOptions = ["Immediate", "3 months", "6 months"];

  return (
    <div className="space-y-6">
      {/* How YPD Can Add Value */}
      <div>
        <Label>How can YPD add value to your initiatives?</Label>
        <Textarea
          {...register("valueAdd", {
            required: "Please describe how YPD can add value",
          })}
          placeholder="Your answer..."
          className="mt-2"
        />
        {errors.valueAdd && (
          <p className="mt-1 text-sm text-red-500">{errors.valueAdd.message}</p>
        )}
      </div>

      {/* Important Outcomes */}
      <div>
        <Label className="mb-2">
          Which outcomes are most important? (select all that apply)
        </Label>
        <div className="grid grid-cols-2 gap-2">
          {outcomes.map((area) => (
            <Controller
              key={area}
              name={`importantOutcomes.${area}` as const}
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={`importantOutcomes.${area}`}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor={`importantOutcomes.${area}`}
                    className="cursor-pointer"
                  >
                    {area}
                  </label>
                </div>
              )}
            />
          ))}
        </div>
        {errors.importantOutcomes &&
          typeof errors.importantOutcomes.message === "string" && (
            <p className="mt-1 text-sm text-red-500">
              {errors.importantOutcomes.message}
            </p>
          )}
      </div>

      {/* Preferred Collaboration Model */}
      <div>
        <Label>Preferred Collaboration Model</Label>
        <Controller
          name="collaborationModel"
          control={control}
          rules={{ required: "Please select a collaboration model" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="Pilot / State-wide rollout / Scheme-aligned / Other" />
              </SelectTrigger>
              <SelectContent>
                {collaborationModels.map((model) => (
                  <SelectItem key={model} value={model}>
                    {model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.collaborationModel && (
          <p className="mt-1 text-sm text-red-500">
            {errors.collaborationModel.message}
          </p>
        )}
      </div>

      {/* Average Candidates / Batch */}
      <div>
        <Label>Average Number of Candidates Per Batch</Label>
        <Input
          type="number"
          {...register("employeesPerBatch", {
            required: "Please enter number of candidates per batch",
          })}
          placeholder="Number of candidates"
          className="mt-2"
        />
        {errors.employeesPerBatch && (
          <p className="mt-1 text-sm text-red-500">
            {errors.employeesPerBatch.message}
          </p>
        )}
      </div>

      {/* Expected Start Timeline */}
      <div>
        <Label>Expected Start Timeline</Label>
        <Controller
          name="expectedTimeline"
          control={control}
          rules={{ required: "Please select expected start timeline" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="Immediate / 3 months / 6 months" />
              </SelectTrigger>
              <SelectContent>
                {timelineOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.expectedTimeline && (
          <p className="mt-1 text-sm text-red-500">
            {errors.expectedTimeline.message}
          </p>
        )}
      </div>
    </div>
  );
}
