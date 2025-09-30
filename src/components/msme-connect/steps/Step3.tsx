"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../MsmeForm";

export default function Step3() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const roles = [
    "Sales",
    "Operations",
    "Finance",
    "Production",
    "HR",
    "Marketing",
    "Others",
  ];
  const trainingMethods = ["In-house", "External Trainers", "None", "Other"];

  return (
    <div className="space-y-4">
      {/* Total Employees */}
      <div>
        <Label>Total Number of Employees</Label>
        <Input
          type="number"
          {...register("totalEmployees", {
            required: "Total employees is required",
          })}
          placeholder="100"
          className="mt-2"
        />
        {errors.totalEmployees && (
          <p className="mt-1 text-sm text-red-500">
            {errors.totalEmployees.message}
          </p>
        )}
      </div>

      {/* Fresh Hires */}
      <div>
        <Label>Number of Fresh Hires in Last 12 Months</Label>
        <Input
          type="number"
          {...register("freshHiresLast12Months", {
            required: "Number of fresh hires is required",
          })}
          placeholder="10"
          className="mt-2"
        />
        {errors.freshHiresLast12Months && (
          <p className="mt-1 text-sm text-red-500">
            {errors.freshHiresLast12Months.message}
          </p>
        )}
      </div>

      {/* Key Roles */}
      <div>
        <Label>Key Roles / Departments</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {roles.map((role) => (
            <div key={role} className="flex items-center gap-2">
              <Controller
                name={`keyRoles.${role}`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Current Training Methods */}
      <div>
        <Label>Current Training Methods</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {trainingMethods.map((method) => (
            <div key={method} className="flex items-center gap-2">
              <Controller
                name={`currentTrainingMethods.${method}`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{method}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
