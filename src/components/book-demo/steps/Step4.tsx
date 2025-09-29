import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../DemoForm";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Step4Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step4({ register, control }: Step4Props) {
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

  return (
    <div className="space-y-6">
      {/* How YPD Can Add Value */}
      <div>
        <Label>How can YPD add value to your initiatives?</Label>
        <Textarea
          {...register("valueAdd")}
          placeholder="Your answer..."
          className="mt-2"
        />
      </div>

      {/* Important Outcomes */}
      <div>
        <Label className="mb-2">
          Which outcomes are most important? (select all that apply)
        </Label>
        <div className="grid grid-cols-2 gap-2">
          {outcomes.map((area) => (
            <div key={area} className="flex items-center gap-2">
              <Controller
                name={`importantOutcomes.${area}`}
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
      </div>

      {/* Preferred Collaboration Model */}
      <div>
        <Label>Preferred Collaboration Model</Label>
        <Controller
          name="collaborationModel"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
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
      </div>

      {/* Average Candidates / Batch */}
      <div>
        <Label>Average Number of Candidates Per Batch</Label>
        <input
          type="number"
          {...register("employeesPerBatch")}
          placeholder="Number of candidates"
          className="mt-2 w-full rounded border px-3 py-2"
        />
      </div>

      {/* Expected Start Timeline */}
      <div>
        <Label>Expected Start Timeline</Label>
        <Controller
          name="expectedTimeline"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Immediate / 3 months / 6 months" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Immediate">Immediate</SelectItem>
                <SelectItem value="3 months">3 months</SelectItem>
                <SelectItem value="6 months">6 months</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </div>
  );
}
