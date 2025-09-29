import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../GovtForm";

interface Step2Props {
  register: UseFormRegister<FormData>;
}

export default function Step2({ register }: Step2Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Head of Department / Mission Director Name</Label>
        <Input
          {...register("headName")}
          placeholder="John Doe"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Primary Contact Person (Name & Designation)</Label>
        <Input
          {...register("primaryContactName")}
          placeholder="Jane Smith, Admin Head"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Contact Number</Label>
        <Input
          type="tel"
          {...register("contactNumber")}
          placeholder="+91 98765 43210"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Email Address</Label>
        <Input
          type="email"
          {...register("emailAddress")}
          placeholder="contact@organization.gov"
          className="mt-2"
        />
      </div>
    </div>
  );
}
