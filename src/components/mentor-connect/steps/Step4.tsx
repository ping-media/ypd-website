"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "../MentorForm";

export default function Step4() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      {/* Why Join */}
      <div>
        <Label>Why do you want to join YPD Mentor Connect?</Label>
        <Textarea
          {...register("whyJoin", { required: "This field is required" })}
          placeholder="Your answer..."
          className="mt-2"
        />
        {errors.whyJoin && (
          <p className="mt-1 text-sm text-red-500">{errors.whyJoin.message}</p>
        )}
      </div>

      {/* AI Comfort */}
      <div>
        <Label>Comfort with AI tools in teaching/mentorship</Label>
        <Controller
          name="aiComfort"
          control={control}
          rules={{ required: "Please select your comfort level" }}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="mt-2 space-y-2"
            >
              {[
                "Very Comfortable",
                "Comfortable",
                "Neutral",
                "Not Comfortable",
              ].map((opt) => (
                <div key={opt} className="flex items-center gap-2">
                  <RadioGroupItem
                    value={opt}
                    id={opt}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-accent cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                  <Label htmlFor={opt} className="cursor-pointer">
                    {opt}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
        {errors.aiComfort && (
          <p className="mt-1 text-sm text-red-500">
            {errors.aiComfort.message}
          </p>
        )}
      </div>

      {/* Training Consent */}
      <div>
        <Label>Open to training in ethical AI usage & YPD pedagogy?</Label>
        <Controller
          name="trainingConsent"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes/No" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.trainingConsent && (
          <p className="mt-1 text-sm text-red-500">
            {errors.trainingConsent.message}
          </p>
        )}
      </div>

      {/* Weekly Commitment */}
      <div>
        <Label>Preferred Weekly Commitment</Label>
        <Controller
          name="weeklyCommit"
          control={control}
          rules={{ required: "Please select weekly commitment" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Select Hours" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="12">12 hrs</SelectItem>
                <SelectItem value="15">15 hrs</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.weeklyCommit && (
          <p className="mt-1 text-sm text-red-500">
            {errors.weeklyCommit.message}
          </p>
        )}
      </div>

      {/* Preferred Mode */}
      <div>
        <Label>Preferred Mode</Label>
        <Controller
          name="mode"
          control={control}
          rules={{ required: "Please select preferred mode" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Remote / Hybrid / In-Person" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
                <SelectItem value="In-Person">In-Person</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.mode && (
          <p className="mt-1 text-sm text-red-500">{errors.mode.message}</p>
        )}
      </div>
    </div>
  );
}
