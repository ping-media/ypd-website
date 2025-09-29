import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../DemoForm";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Step3Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step3({ register, control }: Step3Props) {
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
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Online" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Online">Online</SelectItem>
              </SelectContent>
            </Select>
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
          render={({ field }) => (
            <div className="mt-2 flex items-start gap-2">
              <Checkbox
                id="declaration"
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
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
      </div>
    </div>
  );
}
