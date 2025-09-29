import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../MsmeForm";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Step5Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step5({ register, control }: Step5Props) {
  return (
    <div className="space-y-6">
      {/* Weekly Commitment */}
      <div>
        <Label>How many hours per week can employees commit to training?</Label>
        <Controller
          name="weeklyCommitment"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="2–4 / 5–8 / Other" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2-4">2–4</SelectItem>
                <SelectItem value="5-8">5–8</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {/* Budget Readiness */}
      <div>
        <Label>Budget Readiness for Upskilling</Label>
        <Controller
          name="budgetReadiness"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Low / Medium / High" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {/* AI Tools Consent */}
      <div>
        <Label>
          Are you open to adopting AI-enabled tools for training delivery?
        </Label>
        <Controller
          name="adoptAITools"
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

      {/* NDA Consent */}
      <div>
        <Label>
          Are you willing to sign a Partnership Agreement / NDA with YPD?
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
                We hereby declare that the information provided is true and
                accurate. We understand that joining YPD MSME Connect requires
                commitment to workforce development, employee participation, and
                ethical use of AI-enabled tools.
              </Label>
            </div>
          )}
        />
      </div>
    </div>
  );
}
