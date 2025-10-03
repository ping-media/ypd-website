import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "../InstituteForm";
import { countryCodes } from "@/config/formFieldsData";

export default function Step2() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      <div>
        <Label>Principal / Director Name</Label>
        <Input
          {...register("principalName", {
            required: "Principal/Director name is required",
          })}
          placeholder="John Doe"
          className="mt-2"
        />
        {errors.principalName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.principalName.message}
          </p>
        )}
      </div>

      <div>
        <Label>Primary Contact Person Name</Label>
        <Input
          {...register("primaryContactName", {
            required: "Primary contact name is required",
          })}
          placeholder="Jane Smith"
          className="mt-2"
        />
        {errors.primaryContactName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.primaryContactName.message}
          </p>
        )}
      </div>

      <div>
        <Label>Primary Contact Designation</Label>
        <Input
          {...register("primaryContactDesignation", {
            required: "Designation is required",
          })}
          placeholder="Admin Head / Coordinator"
          className="mt-2"
        />
        {errors.primaryContactDesignation && (
          <p className="mt-1 text-sm text-red-500">
            {errors.primaryContactDesignation.message}
          </p>
        )}
      </div>

      <div>
        <Label>Contact Number</Label>
        <div className="mt-2 flex gap-2">
          <Controller
            name="countryCode"
            control={control}
            defaultValue="+91"
            rules={{ required: "Select country code" }}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-28 px-2">
                  <SelectValue placeholder="+91">
                    {field.value &&
                      countryCodes.find((c) => c.value === field.value)?.label}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((code) => (
                    <SelectItem key={code.value} value={code.value}>
                      {code.label} {code.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          <Input
            type="tel"
            {...register("contactNumber", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Must be 10 digits",
              },
            })}
            placeholder="9876543210"
            className="flex-1"
            inputMode="numeric"
            maxLength={10}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = target.value.replace(/\D/g, "").slice(0, 10);
            }}
          />
        </div>
        {errors.contactNumber && (
          <p className="mt-1 text-sm text-red-500">
            {errors.contactNumber.message}
          </p>
        )}
      </div>

      <div>
        <Label>Email Address</Label>
        <Input
          type="email"
          {...register("emailAddress", {
            required: "Email address is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
          placeholder="contact@institute.com"
          className="mt-2"
        />
        {errors.emailAddress && (
          <p className="mt-1 text-sm text-red-500">
            {errors.emailAddress.message}
          </p>
        )}
      </div>
    </div>
  );
}
