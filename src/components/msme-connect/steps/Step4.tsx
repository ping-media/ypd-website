import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../MsmeForm";
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
  return (
    <div className="space-y-6">
      {/* Reason to Join */}
      <div>
        <Label>Why does your enterprise want to join YPD MSME Connect?</Label>
        <Textarea
          {...register("reasonToJoin")}
          placeholder="Your answer..."
          className="mt-2"
        />
      </div>

      {/* Focus Areas */}
      <div>
        <Label className="mb-2">
          Which areas are most important? (select all that apply)
        </Label>
        <div className="grid grid-cols-2 gap-2">
          {Object.keys(control._defaultValues.focusAreas!).map((area) => (
            <div key={area} className="flex items-center gap-2">
              <Controller
                name={`focusAreas.${area}`}
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

      {/* Preferred Delivery Mode */}
      <div>
        <Label>Preferred Delivery Mode</Label>
        <Controller
          name="preferredDeliveryMode"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Online / Blended / On-site" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Blended">Blended</SelectItem>
                <SelectItem value="On-site">On-site</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {/* Employees per Batch */}
      <div>
        <Label>Approximate Number of Employees to be Trained (per batch)</Label>
        <input
          type="number"
          {...register("employeesPerBatch")}
          placeholder="Number of employees"
          className="mt-2 w-full rounded border px-3 py-2"
        />
      </div>

      {/* Expected Timeline */}
      <div>
        <Label>Expected Timeline for Training</Label>
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
