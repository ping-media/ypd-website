"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../InstituteForm";

export default function Step4() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const focusAreas = Object.keys(control._defaultValues.focusAreas!);

  return (
    <div className="space-y-4">
      {/* Reason to Join */}
      <div>
        <Label>
          Why does your institute want to join YPD Institute Connect?
        </Label>
        <Textarea
          {...register("reasonToJoin", {
            required: "This field is required",
          })}
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
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{area}</span>
            </div>
          ))}
        </div>
        {errors.focusAreas && typeof errors.focusAreas.message === "string" && (
          <p className="mt-1 text-sm text-red-500">
            {errors.focusAreas.message}
          </p>
        )}
      </div>

      {/* Start Timeline */}
      <div>
        <Label>Preferred Start Timeline</Label>
        <Controller
          name="startTimeline"
          control={control}
          rules={{ required: "Please select a start timeline" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Immediate / 3 months / 6 months / Other" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Immediate">Immediate</SelectItem>
                <SelectItem value="3 months">3 months</SelectItem>
                <SelectItem value="6 months">6 months</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.startTimeline && (
          <p className="mt-1 text-sm text-red-500">
            {errors.startTimeline.message}
          </p>
        )}
      </div>

      {/* Weekly Commitment */}
      <div>
        <Label>Expected Weekly Commitment from Teachers (hours)</Label>
        <Input
          type="number"
          {...register("weeklyCommit", {
            required: "Weekly commitment is required",
          })}
          placeholder="Hours per week"
          className="mt-2"
        />
        {errors.weeklyCommit && (
          <p className="mt-1 text-sm text-red-500">
            {errors.weeklyCommit.message}
          </p>
        )}
      </div>

      {/* Budget Readiness */}
      <div>
        <Label>Approximate Budget Readiness for AI Integration</Label>
        <Controller
          name="budgetReadiness"
          control={control}
          rules={{ required: "Please select a budget readiness" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Low / Medium / High" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Prefer Not To Answer">
                  Prefer Not To Answer
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.budgetReadiness && (
          <p className="mt-1 text-sm text-red-500">
            {errors.budgetReadiness.message}
          </p>
        )}
      </div>
    </div>
  );
}
