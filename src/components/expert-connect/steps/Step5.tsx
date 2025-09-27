import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FormData } from "../ExpertForm";

interface Step5Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step5({ register, control }: Step5Props) {
  return (
    <div className="space-y-6">
      <div>
        <Label>
          Are you willing to sign a Non-Disclosure Agreement (NDA) with YPD?
        </Label>
        <Controller
          name="ndaConsent"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes/No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <Label>
          Are you open to your sessions being recorded for student learning
          archives?
        </Label>
        <Controller
          name="recordingConsent"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes/No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <Label>
          Upload a valid ID Proof (Aadhaar / Passport / Driver’s License)
        </Label>
        <Input
          type="file"
          {...register("idProof")}
          accept=".pdf,.jpg,.jpeg,.png"
          className="mt-2 cursor-pointer"
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
                I hereby declare that the information provided is true and
                accurate. I understand that joining YPD Expert Connect requires
                commitment to ethical knowledge sharing, student-focused
                pedagogy, and confidentiality standards.
              </Label>
            </div>
          )}
        />
      </div>
    </div>
  );
}
