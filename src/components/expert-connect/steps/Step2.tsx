import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../ExpertForm";

interface Step2Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step2({ register, control }: Step2Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Current Role / Designation</Label>
        <Input
          {...register("currentRole")}
          placeholder="Lecturer, Industry Expert"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Organization / Institution Name</Label>
        <Input
          {...register("organizationName")}
          placeholder="XYZ University / Company"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Total Years of Industry Experience</Label>
        <Input
          type="number"
          {...register("totalExperience")}
          placeholder="0"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Key Industry Sectors Worked In (select all that apply)</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {Object.keys(control._defaultValues.keySectors!).map((sector) => (
            <div key={sector} className="flex items-center gap-2">
              <Controller
                name={`keySectors.${sector}`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{sector}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label>Upload CV / Profile</Label>
        <Input
          type="file"
          {...register("cv")}
          accept=".pdf,.doc,.docx"
          className="mt-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
