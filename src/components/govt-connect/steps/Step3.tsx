import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { FormData } from "../GovtForm";

interface Step3Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
}

export default function Step3({ register, control }: Step3Props) {
  const challenges = [
    "One-size-fits-all training",
    "Lack of employability outcomes",
    "Poor scalability to Tier 2–4 areas",
    "Weak monitoring & reporting",
    "Other",
  ];

  const beneficiaries = [
    "Fresh Graduates",
    "Students",
    "Jobseekers",
    "Micro-entrepreneurs",
    "Others",
  ];

  return (
    <div className="space-y-6">
      {/* Current Programs */}
      <div>
        <Label>Current Skilling / Upskilling Programs</Label>
        <Input
          {...register("currentPrograms")}
          placeholder="Brief description of programs"
          className="mt-2"
        />
      </div>

      {/* Target Beneficiary Groups */}
      <div>
        <Label>Target Beneficiary Groups</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {beneficiaries.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <Controller
                name={`targetGroups.${b}`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Annual Budget */}
      <div>
        <Label>Annual Training Budget Allocated</Label>
        <Input
          {...register("annualBudget")}
          placeholder="Amount or Range"
          className="mt-2"
        />
      </div>

      {/* Average Candidates Trained */}
      <div>
        <Label>Average Number of Candidates Trained Per Year</Label>
        <Input
          type="number"
          {...register("avgCandidatesTrained")}
          placeholder="100"
          className="mt-2"
        />
      </div>

      {/* Key Challenges */}
      <div>
        <Label>Key Challenges Faced in Implementation</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {challenges.map((challenge) => (
            <div key={challenge} className="flex items-center gap-2">
              <Controller
                name={`keyChallenges.${challenge}`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{challenge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
