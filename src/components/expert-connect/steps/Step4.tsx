"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FormData } from "../ExpertForm";

export default function Step4() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Reason to Join */}
      <div>
        <Label>
          Why do you want to contribute as an Industry Expert with YPD?
        </Label>
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

      {/* Hours Per Month */}
      <div>
        <Label>How many hours per month can you realistically dedicate?</Label>
        <Controller
          name="hoursPerMonth"
          control={control}
          rules={{ required: "Please select hours per month" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="2 / 3 / 4+" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4+">4+</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.hoursPerMonth && (
          <p className="mt-1 text-sm text-red-500">
            {errors.hoursPerMonth.message}
          </p>
        )}
      </div>

      {/* Comfortable with Tools */}
      <div>
        <Label>
          Are you comfortable using YPD&apos;s AI-powered tools & platforms for
          delivery?
        </Label>
        <Controller
          name="comfortableWithTools"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="Yes / No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
                <SelectItem value="Prefer Not To Answer">
                  Prefer Not To Answer
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.comfortableWithTools && (
          <p className="mt-1 text-sm text-red-500">
            {errors.comfortableWithTools.message}
          </p>
        )}
      </div>

      {/* Open to Guidelines */}
      <div>
        <Label>
          Are you open to YPD&apos;s session structuring guidelines to align
          with student needs?
        </Label>
        <Controller
          name="openToGuidelines"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="Yes / No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
                <SelectItem value="Prefer Not To Answer">
                  Prefer Not To Answer
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.openToGuidelines && (
          <p className="mt-1 text-sm text-red-500">
            {errors.openToGuidelines.message}
          </p>
        )}
      </div>
    </div>
  );
}
