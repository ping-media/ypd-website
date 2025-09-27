import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FormData } from "../ExpertForm";

interface Step4Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step4({ register, control }: Step4Props) {
  return (
    <div className="space-y-6">
      <div>
        <Label>
          Why do you want to contribute as an Industry Expert with YPD?
        </Label>
        <Textarea
          {...register("reasonToJoin")}
          placeholder="Your answer..."
          className="mt-2"
        />
      </div>

      <div>
        <Label>How many hours per month can you realistically dedicate?</Label>
        <Controller
          name="hoursPerMonth"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="2 / 3 / 4+" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4+">4+</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <Label>
          Are you comfortable using YPD’s AI-powered tools & platforms for
          delivery?
        </Label>
        <Controller
          name="comfortableWithTools"
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
          Are you open to YPD’s session structuring guidelines to align with
          student needs?
        </Label>
        <Controller
          name="openToGuidelines"
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
    </div>
  );
}
