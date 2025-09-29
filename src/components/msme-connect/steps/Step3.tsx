import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../MsmeForm";

interface Step3Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step3({ register, control }: Step3Props) {
  const roles = [
    "Sales",
    "Operations",
    "Finance",
    "Production",
    "HR",
    "Marketing",
    "Others",
  ];

  const trainingMethods = ["In-house", "External Trainers", "None", "Other"];

  return (
    <div className="space-y-4">
      {/* Total Employees */}
      <div>
        <Label>Total Number of Employees</Label>
        <Input
          type="number"
          {...register("totalEmployees")}
          placeholder="100"
          className="mt-2"
        />
      </div>

      {/* Fresh Hires */}
      <div>
        <Label>Number of Fresh Hires in Last 12 Months</Label>
        <Input
          type="number"
          {...register("freshHiresLast12Months")}
          placeholder="10"
          className="mt-2"
        />
      </div>

      {/* Key Roles */}
      <div>
        <Label>Key Roles / Departments</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {roles.map((role) => (
            <div key={role} className="flex items-center gap-2">
              <Controller
                name={`keyRoles.${role}`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Current Training Methods */}
      <div>
        <Label>Current Training Methods</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {trainingMethods.map((method) => (
            <div key={method} className="flex items-center gap-2">
              <Controller
                name={`currentTrainingMethods.${method}`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{method}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
