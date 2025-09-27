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
      <div>
        <Label>Current Role / Designation</Label>
        <Input
          {...register("role")}
          placeholder="Lecturer, Industry Expert"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Organization / Institution Name</Label>
        <Input
          {...register("organization")}
          placeholder="XYZ University / Company"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Total Years of Work Experience</Label>
        <Input type="number" {...register("experience")} className="mt-2" />
      </div>

      <div>
        <Label>Previous Teaching / Mentoring Experience</Label>
        <Textarea
          {...register("experienceDetails")}
          placeholder="Yes/No + Details"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Upload CV / Resume</Label>
        <Input
          type="file"
          {...register("cv")}
          accept=".pdf,.doc,.docx"
          className="mt-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
