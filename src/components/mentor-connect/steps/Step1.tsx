"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../MentorForm";
import { countries, countryCodes } from "@/config/formFieldsData";

export default function Step1() {
  // ✅ get register, control, errors from FormProvider
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      {/* Full Name */}
      <div>
        <Label>Full Name</Label>
        <Input
          {...register("fullName", { required: "Full Name is required" })}
          placeholder="John Doe"
          className="mt-2"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      {/* Gender */}
      <div>
        <Label>Gender</Label>
        <Controller
          name="gender"
          control={control}
          rules={{ required: "Please select gender" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
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
          )}
        />
        {errors.gender && (
          <p className="mt-1 text-sm text-red-500">{errors.gender.message}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <Label>Date of Birth</Label>
        <Input
          type="date"
          {...register("dob", { required: "Date of Birth is required" })}
          className="mt-2 cursor-pointer"
          onFocus={(e) => e.target.showPicker?.()}
        />
        {errors.dob && (
          <p className="mt-1 text-sm text-red-500">{errors.dob.message}</p>
        )}
      </div>

      {/* Contact Number + Country Code */}
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
            {...register("contact", {
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
        {errors.contact && (
          <p className="mt-1 text-sm text-red-500">{errors.contact.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label>Email Address</Label>
        <Input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          placeholder="example@mail.com"
          className="mt-2"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Current Location */}
      <div>
        <Label>Current Location</Label>
        <Input
          {...register("location", { required: "Location is required" })}
          placeholder="City, Country"
          className="mt-2"
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
        )}
      </div>

      {/* Nationality */}
      <div>
        <Label>Nationality</Label>
        <Controller
          name="nationality"
          control={control}
          rules={{ required: "Please select nationality" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="max-h-64">
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.nationality && (
          <p className="mt-1 text-sm text-red-500">
            {errors.nationality.message}
          </p>
        )}
      </div>
    </div>
  );
}
