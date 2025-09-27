import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../MentorForm";
interface Step2Props {
  register: UseFormRegister<FormData>;
}

export default function Step2({ register }: Step2Props) {
  return (
    <div className="space-y-4">
      <Label>Current Role / Designation</Label>
      <Input {...register("role")} placeholder="Lecturer, Industry Expert" />

      <Label>Organization / Institution Name</Label>
      <Input
        {...register("organization")}
        placeholder="XYZ University / Company"
      />

      <Label>Total Years of Work Experience</Label>
      <Input type="number" {...register("experience")} />

      <Label>Previous Teaching / Mentoring Experience</Label>
      <Textarea
        {...register("experienceDetails")}
        placeholder="Yes/No + Details"
      />

      <Label>Upload CV / Resume</Label>
      <Input type="file" {...register("cv")} accept=".pdf,.doc,.docx" />
    </div>
  );
}
