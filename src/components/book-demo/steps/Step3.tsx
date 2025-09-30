"use client";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../DemoForm";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Step3() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const solutions = [
    "Admission Test System",
    "Hiring & Onboarding System",
    "School/Institute OS",
    "Counseling Guru B2B",
    "Global Navigator B2B",
    "CVP Lite B2B",
    "CVP Advance B2B",
    "CareerVerse B2B",
    "Reboot Navigator B2B",
    "Aptitude Trainer B2B",
    "Reinvention Guru B2B",
    "Smart Consulting",
    "Other",
  ];

  const timeSlots = ["Morning", "Afternoon", "Evening"];
  const participantsOptions = ["1-5", "5-10", "10+"];

  return (
    <div className="space-y-6">
      {/* Interested Solutions */}
      <div>
        <Label>
          Which YPD Solutions are you interested in? (select all that apply)
        </Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {solutions.map((solution) => (
            <div key={solution} className="flex items-center gap-2">
              <Controller
                name={`interestedSolutions.${solution}`}
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{solution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Preferred Demo Mode */}
      <div>
        <Label>Preferred Demo Mode</Label>
        <Controller
          name="preferredDemoMode"
          control={control}
          rules={{ required: "Please select demo mode" }}
          defaultValue=""
          render={({ field }) => (
            <>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="mt-2 cursor-pointer">
                  <SelectValue placeholder="Select Mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Online">Online</SelectItem>
                </SelectContent>
              </Select>
              {errors.preferredDemoMode && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.preferredDemoMode.message}
                </p>
              )}
            </>
          )}
        />
      </div>

      {/* Preferred Time Slots */}
      <div>
        <Label>Preferred Time Slots</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {timeSlots.map((slot) => (
            <div key={slot} className="flex items-center gap-2">
              <Controller
                name={`preferredTimeSlots.${slot}`}
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{slot}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Expected Number of Participants */}
      <div>
        <Label>Expected Number of Participants in Demo</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {participantsOptions.map((option) => (
            <div key={option} className="flex items-center gap-2">
              <Controller
                name={`expectedParticipants.${option}`}
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{option}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Declaration */}
      <div>
        <Controller
          name="declaration"
          control={control}
          rules={{ required: "You must confirm your declaration" }}
          defaultValue={false}
          render={({ field }) => (
            <div className="mt-2 flex items-start gap-2">
              <Checkbox
                id="declaration"
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 mt-1 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
              />
              <Label
                htmlFor="declaration"
                className="cursor-pointer text-sm leading-relaxed"
              >
                I confirm my interest in booking a demo with Youth Pulse Digital
                and agree to be contacted by the YPD team for scheduling.
              </Label>
            </div>
          )}
        />
        {errors.declaration && (
          <p className="mt-1 text-sm text-red-500">
            {errors.declaration.message}
          </p>
        )}
      </div>
    </div>
  );
}
