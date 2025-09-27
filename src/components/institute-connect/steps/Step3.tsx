import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../InstituteForm";

interface Step3Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step3({ register, control }: Step3Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Student Strength (total + per grade/stream)</Label>
        <Input
          {...register("studentStrength")}
          placeholder="500 (Grade-wise: 5–12)"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Streams / Programs Offered</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {Object.keys(control._defaultValues.streams!).map((stream) => (
            <div key={stream} className="flex items-center gap-2">
              <Controller
                name={`streams.${stream}`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{stream}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label>Number of Teachers / Faculty</Label>
        <Input {...register("numTeachers")} placeholder="50" className="mt-2" />
      </div>

      <div>
        <Label>Current Use of Technology in Classrooms</Label>
        <Input
          {...register("currentTech")}
          placeholder="Projectors, Smart Boards, LMS, etc."
          className="mt-2"
        />
      </div>

      <div>
        <Label>Previous Exposure to AI / EdTech tools</Label>
        <Input
          {...register("previousAIExposure")}
          placeholder="Yes/No + Details"
          className="mt-2"
        />
      </div>
    </div>
  );
}
