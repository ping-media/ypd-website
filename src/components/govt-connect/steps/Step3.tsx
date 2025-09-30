"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../GovtForm";

export default function Step3() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const challenges = [
    "One-size-fits-all training",
    "Lack of employability outcomes",
    "Poor scalability to Tier 2–4 areas",
    "Weak monitoring & reporting",
    "Other",
  ];

  const beneficiaries = [
    "Fresh Graduates",
    "Students",
    "Jobseekers",
    "Micro-entrepreneurs",
    "Others",
  ];

  return (
    <div className="space-y-6">
      {/* Current Programs */}
      <div>
        <Label>Current Skilling / Upskilling Programs</Label>
        <Input
          {...register("currentPrograms", {
            required: "Current programs are required",
          })}
          placeholder="Brief description of programs"
          className="mt-2"
        />
        {errors.currentPrograms && (
          <p className="mt-1 text-sm text-red-500">
            {errors.currentPrograms.message}
          </p>
        )}
      </div>

      {/* Target Beneficiary Groups */}
      <div>
        <Label>Target Beneficiary Groups</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {beneficiaries.map((b) => (
            <Controller
              key={b}
              name={`targetGroups.${b}`}
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                  <span>{b}</span>
                </div>
              )}
            />
          ))}
        </div>
      </div>

      {/* Annual Budget */}
      <div>
        <Label>Annual Training Budget Allocated</Label>
        <Input
          {...register("annualBudget", {
            required: "Annual budget is required",
          })}
          placeholder="Amount or Range"
          className="mt-2"
        />
        {errors.annualBudget && (
          <p className="mt-1 text-sm text-red-500">
            {errors.annualBudget.message}
          </p>
        )}
      </div>

      {/* Average Candidates Trained */}
      <div>
        <Label>Average Number of Candidates Trained Per Year</Label>
        <Input
          type="number"
          {...register("avgCandidatesTrained", {
            required: "Average candidates trained is required",
          })}
          placeholder="100"
          className="mt-2"
        />
        {errors.avgCandidatesTrained && (
          <p className="mt-1 text-sm text-red-500">
            {errors.avgCandidatesTrained.message}
          </p>
        )}
      </div>

      {/* Key Challenges */}
      <div>
        <Label>Key Challenges Faced in Implementation</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {challenges.map((challenge) => (
            <Controller
              key={challenge}
              name={`keyChallenges.${challenge}`}
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                  <span>{challenge}</span>
                </div>
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
