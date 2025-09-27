import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../MentorForm";

interface Step1Props {
  register: UseFormRegister<FormData>;
}

export default function Step1({ register }: Step1Props) {
  return (
    <div className="space-y-4">
      <Label>Full Name</Label>
      <Input {...register("fullName")} placeholder="John Doe" />

      <Label>Gender</Label>
      <Select {...register("gender")}>
        <SelectTrigger>
          <SelectValue placeholder="Select Gender" />
        </SelectTrigger>
        <SelectContent>
          {["Male", "Female"].map((g) => (
            <SelectItem key={g} value={g}>
              {g}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label>Date of Birth</Label>
      <Input type="date" {...register("dob")} />

      <Label>Contact Number</Label>
      <Input type="tel" {...register("contact")} />

      <Label>Email Address</Label>
      <Input type="email" {...register("email")} />

      <Label>Current Location</Label>
      <Input {...register("location")} placeholder="City, Country" />

      <Label>Nationality</Label>
      <Input {...register("nationality")} placeholder="Country" />
    </div>
  );
}
