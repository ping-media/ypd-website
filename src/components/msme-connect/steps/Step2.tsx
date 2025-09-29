import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../MsmeForm";

interface Step2Props {
  register: UseFormRegister<FormData>;
}

export default function Step2({ register }: Step2Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Owner / CEO / Director Name</Label>
        <Input
          {...register("ownerName")}
          placeholder="John Doe"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Primary Contact Person Name</Label>
        <Input
          {...register("primaryContactName")}
          placeholder="Jane Smith"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Primary Contact Designation</Label>
        <Input
          {...register("primaryContactDesignation")}
          placeholder="Admin Head"
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
          placeholder="contact@enterprise.com"
          className="mt-2"
        />
      </div>
    </div>
  );
}
