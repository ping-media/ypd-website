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
import { FormData } from "../MentorForm";

interface Step5Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step5({ register, control }: Step5Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Willing to sign NDA?</Label>
        <Controller
          name="ndaConsent"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2">
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
        <Label>Open to using devices & tools provided by YPD?</Label>
        <Controller
          name="toolsConsent"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2">
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
        <Label>Upload ID Proof</Label>
        <Input
          type="file"
          {...register("idProof")}
          accept=".pdf,.jpg,.png"
          className="mt-2"
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
              <Label htmlFor="declaration" className="text-sm leading-relaxed">
                I hereby declare that the information provided is true and
                accurate. I understand that joining Mentor Connect requires
                commitment to YPD's values, ethical use of AI, and
                confidentiality standards.
              </Label>
            </div>
          )}
        />
      </div>
    </div>
  );
}
