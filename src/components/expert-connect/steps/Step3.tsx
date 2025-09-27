import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../ExpertForm";

interface Step3Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step3({ register, control }: Step3Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Specific Areas of Expertise</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {Object.keys(control._defaultValues.expertiseAreas!).map((area) => (
            <div key={area} className="flex items-center gap-2">
              <Controller
                name={`expertiseAreas.${area}`}
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

      <div>
        <Label>Topics You Would Like to Deliver Sessions On</Label>
        <Input
          {...register("sessionTopics")}
          placeholder="Short answer"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Grades / Levels Comfortable Addressing</Label>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {Object.keys(control._defaultValues.gradesComfortable!).map(
            (grade) => (
              <div key={grade} className="flex items-center gap-2">
                <Controller
                  name={`gradesComfortable.${grade}`}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                    />
                  )}
                />
                <span className="cursor-pointer">{grade}</span>
              </div>
            ),
          )}
        </div>
      </div>

      <div>
        <Label>Preferred Session Type</Label>
        <Input
          {...register("preferredSessionType")}
          placeholder="Webinar / Panel Discussion / Guest Lecture"
          className="mt-2"
        />
      </div>
    </div>
  );
}
