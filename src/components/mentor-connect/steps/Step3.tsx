import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../MentorForm";

interface Step3Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step3({ register, control }: Step3Props) {
  return (
    <div className="space-y-4">
      <Label>Subject Areas</Label>
      <div className="grid grid-cols-2 gap-2">
        {Object.keys(control._defaultValues.subjects!).map((subj) => (
          <div key={subj} className="flex items-center gap-2">
            <Controller
              name={`subjects.${subj}`}
              control={control}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                />
              )}
            />
            <span className="cursor-pointer">{subj}</span>
          </div>
        ))}
      </div>

      <Label>Industry Expertise</Label>
      <Controller
        name="industry"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="mt-2 cursor-pointer">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent className="cursor-pointer">
              {[
                "IT",
                "Healthcare",
                "Finance",
                "Creative Arts",
                "Engineering",
              ].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      <Label>Skills Focus</Label>
      <div className="grid grid-cols-2 gap-2">
        {Object.keys(control._defaultValues.skills!).map((skill) => (
          <div key={skill} className="flex items-center gap-2">
            <Controller
              name={`skills.${skill}`}
              control={control}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                />
              )}
            />
            <span className="cursor-pointer">{skill}</span>
          </div>
        ))}
      </div>

      <Label>Grades Comfortable Mentoring</Label>
      <div className="grid grid-cols-3 gap-2">
        {Object.keys(control._defaultValues.grades!).map((grade) => (
          <div key={grade} className="flex items-center gap-2">
            <Controller
              name={`grades.${grade}`}
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
        ))}
      </div>
    </div>
  );
}
