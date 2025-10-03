"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../MsmeForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryCodes } from "@/config/formFieldsData";

export default function Step2() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      {/* Owner / CEO / Director Name */}
      <div>
        <Label>Owner / CEO / Director Name</Label>
        <Input
          {...register("ownerName", {
            required: "Owner / CEO / Director Name is required",
          })}
          placeholder="John Doe"
          className="mt-2"
        />
        {errors.ownerName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.ownerName.message}
          </p>
        )}
      </div>

      {/* Primary Contact Person Name */}
      <div>
        <Label>Primary Contact Person Name</Label>
        <Input
          {...register("primaryContactName", {
            required: "Primary Contact Name is required",
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

      {/* Primary Contact Designation */}
      <div>
        <Label>Primary Contact Designation</Label>
        <Input
          {...register("primaryContactDesignation", {
            required: "Designation is required",
          })}
          placeholder="Admin Head"
          className="mt-2"
        />
        {errors.primaryContactDesignation && (
          <p className="mt-1 text-sm text-red-500">
            {errors.primaryContactDesignation.message}
          </p>
        )}
      </div>

      {/* Contact Number */}
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

      {/* Email Address */}
      <div>
        <Label>Email Address</Label>
        <Input
          type="email"
          {...register("emailAddress", {
            required: "Email Address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          placeholder="contact@enterprise.com"
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
