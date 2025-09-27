import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../InstituteForm";

interface Step5Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step5({ register, control }: Step5Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>
          Are you open to signing a Partnership Agreement / NDA with YPD?
        </Label>
        <Controller
          name="ndaConsent"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
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
      </div>

      <div>
        <Label>
          Are you willing to nominate faculty for AI training & onboarding?
        </Label>
        <Controller
          name="facultyTrainingConsent"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
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
      </div>

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
                We hereby declare that the information provided is true and
                accurate. We understand that joining YPD Institute Connect
                requires commitment to student outcomes, teacher training, and
                ethical use of AI tools.
              </Label>
            </div>
          )}
        />
      </div>
    </div>
  );
}
