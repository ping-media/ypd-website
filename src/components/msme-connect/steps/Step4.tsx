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
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../MsmeForm";
import { Input } from "@/components/ui/input";

export default function Step4() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const focusAreas = [
    "Skill Development",
    "Technology Adoption",
    "Market Access",
    "Funding Support",
    "Compliance",
    "Other",
  ];

  const deliveryModes = ["Online", "Blended (Online / Offline)", "On-site"];
  const timelines = ["Immediate", "3 months", "6 months"];

  return (
    <div className="space-y-6">
      {/* Reason to Join */}
      <div>
        <Label>Why does your enterprise want to join YPD MSME Connect?</Label>
        <Textarea
          {...register("reasonToJoin", { required: "This field is required" })}
          placeholder="Your answer..."
          className="mt-2"
        />
        {errors.reasonToJoin && (
          <p className="mt-1 text-sm text-red-500">
            {errors.reasonToJoin.message}
          </p>
        )}
      </div>

      {/* Focus Areas */}
      <div>
        <Label className="mb-2">
          Which areas are most important? (select all that apply)
        </Label>
        <div className="grid grid-cols-2 gap-2">
          {focusAreas.map((area) => (
            <div key={area} className="flex items-center gap-2">
              <Controller
                name={`focusAreas.${area}`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{area}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Preferred Delivery Mode */}
      <div>
        <Label>Preferred Delivery Mode</Label>
        <Controller
          name="preferredDeliveryMode"
          control={control}
          rules={{ required: "Please select a delivery mode" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Online / Blended / On-site" />
              </SelectTrigger>
              <SelectContent>
                {deliveryModes.map((mode) => (
                  <SelectItem key={mode} value={mode}>
                    {mode}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.preferredDeliveryMode && (
          <p className="mt-1 text-sm text-red-500">
            {errors.preferredDeliveryMode.message}
          </p>
        )}
      </div>

      {/* Employees per Batch */}
      <div>
        <Label>Approximate Number of Employees to be Trained (per batch)</Label>
        <Input
          type="number"
          {...register("employeesPerBatch", {
            required: "Please enter number of employees",
          })}
          placeholder="Number of employees"
          className="mt-2"
        />
        {errors.employeesPerBatch && (
          <p className="mt-1 text-sm text-red-500">
            {errors.employeesPerBatch.message}
          </p>
        )}
      </div>

      {/* Expected Timeline */}
      <div>
        <Label>Expected Timeline for Training</Label>
        <Controller
          name="expectedTimeline"
          control={control}
          rules={{ required: "Please select a timeline" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Immediate / 3 months / 6 months" />
              </SelectTrigger>
              <SelectContent>
                {timelines.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
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
