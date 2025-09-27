import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../InstituteForm";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface Step4Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step4({ register, control }: Step4Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>
          Why does your institute want to join YPD Institute Connect?
        </Label>
        <Textarea
          {...register("reasonToJoin")}
          placeholder="Your answer..."
          className="mt-2"
        />
      </div>

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

      <div>
        <Label>Preferred Start Timeline</Label>
        <Controller
          name="startTimeline"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Immediate / 3 months / 6 months / Other" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Immediate">Immediate</SelectItem>
                <SelectItem value="3 months">3 months</SelectItem>
                <SelectItem value="6 months">6 months</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <Label>Expected Weekly Commitment from Teachers (hours)</Label>
        <Input
          type="number"
          {...register("weeklyCommit")}
          placeholder="Hours per week"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Approximate Budget Readiness for AI Integration</Label>
        <Controller
          name="budgetReadiness"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Low / Medium / High" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </div>
  );
}
