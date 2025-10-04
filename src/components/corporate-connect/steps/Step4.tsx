"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../CorporateForm";

export default function Step4() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const programOptions = Object.keys(control._defaultValues.programsToSupport!);

  return (
    <div className="space-y-4">
      <div>
        <Label>
          Why does your organization want to join YPD Corporate Connect?
        </Label>
        <Textarea
          {...register("reasonToJoin", {
            required: "This field is required",
            minLength: {
              value: 30,
              message: "Please provide at least 30 characters",
            },
          })}
          placeholder="Describe your organization's interest in partnering with YPD for CSR initiatives..."
          className="mt-2 min-h-[100px]"
        />
        {errors.reasonToJoin && (
          <p className="mt-1 text-sm text-red-500">
            {errors.reasonToJoin.message}
          </p>
        )}
      </div>
      {/* Programs to Support */}
      <div>
        <Label className="mb-2">
          Which programs do you want to support? (select all that apply)
        </Label>
        <div className="mt-2 flex flex-col gap-3">
          {programOptions.map((program) => (
            <div key={program} className="flex items-start gap-2">
              <Controller
                name={`programsToSupport.${program}` as const}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={`programsToSupport.${program}`}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 mt-1 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <label
                htmlFor={`programsToSupport.${program}`}
                className="cursor-pointer text-sm"
              >
                {program}
              </label>
            </div>
          ))}
        </div>
        {errors.programsToSupport &&
          typeof errors.programsToSupport.message === "string" && (
            <p className="mt-1 text-sm text-red-500">
              {errors.programsToSupport.message}
            </p>
          )}
      </div>
      {/* Target Beneficiary Group */}
      <div>
        <Label>Target Beneficiary Group</Label>
        <Controller
          name="targetBeneficiaries"
          control={control}
          rules={{ required: "Please select target beneficiaries" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="Select Target Group" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Students">Students</SelectItem>
                <SelectItem value="Fresh Graduates">Fresh Graduates</SelectItem>
                <SelectItem value="Underserved Youth">
                  Underserved Youth
                </SelectItem>
                <SelectItem value="Early-Career Professionals">
                  Early-Career Professionals
                </SelectItem>
                <SelectItem value="Mid-Career Professionals">
                  Mid-Career Professionals
                </SelectItem>
                <SelectItem value="Multiple Groups">Multiple Groups</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.targetBeneficiaries && (
          <p className="mt-1 text-sm text-red-500">
            {errors.targetBeneficiaries.message}
          </p>
        )}
      </div>
      {/* Preferred Delivery Model */}
      <div>
        <Label>Preferred Delivery Model</Label>
        <Controller
          name="deliveryModel"
          control={control}
          rules={{ required: "Please select a delivery model" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="Select Delivery Model" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Blended">
                  Blended (Online + Offline)
                </SelectItem>
                <SelectItem value="Institutional Partnerships">
                  Institutional Partnerships
                </SelectItem>
                <SelectItem value="Flexible">
                  Flexible / Open to Options
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.deliveryModel && (
          <p className="mt-1 text-sm text-red-500">
            {errors.deliveryModel.message}
          </p>
        )}
      </div>
    </div>
  );
}
