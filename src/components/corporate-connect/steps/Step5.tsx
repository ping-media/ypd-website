"use client";

import { Label } from "@/components/ui/label";
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

export default function Step5() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      <div>
        <Label>CSR Budget Allocation Readiness</Label>
        <Controller
          name="budgetAllocationReadiness"
          control={control}
          rules={{ required: "Please select budget allocation readiness" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Low / Medium / High" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.budgetAllocationReadiness && (
          <p className="mt-1 text-sm text-red-500">
            {errors.budgetAllocationReadiness.message}
          </p>
        )}
      </div>

      {/* Co-branded CSR Reports */}
      <div>
        <Label>Are you open to co-branded CSR reports and storytelling?</Label>
        <Controller
          name="coBrandedReports"
          control={control}
          rules={{ required: "Please select Yes or No" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes / No" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.coBrandedReports && (
          <p className="mt-1 text-sm text-red-500">
            {errors.coBrandedReports.message}
          </p>
        )}
      </div>

      {/* Partnership Agreement / NDA */}
      <div>
        <Label>
          Willingness to sign a CSR Partnership Agreement/NDA with YPD
        </Label>
        <Controller
          name="partnershipAgreement"
          control={control}
          rules={{ required: "Please select Yes or No" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes / No" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.partnershipAgreement && (
          <p className="mt-1 text-sm text-red-500">
            {errors.partnershipAgreement.message}
          </p>
        )}
      </div>

      {/* Declaration */}
      <div className="border-t border-gray-200 pt-4">
        <h4 className="mb-3 text-base font-semibold">Declaration</h4>
        <Controller
          name="declaration"
          control={control}
          rules={{ required: "You must accept the declaration" }}
          render={({ field }) => (
            <div className="flex items-start gap-2">
              <Checkbox
                id="declaration"
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 mt-1 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
              />
              <Label
                htmlFor="declaration"
                className="cursor-pointer text-sm leading-relaxed"
              >
                We hereby declare that the information provided is true and
                accurate. We understand that joining YPD Corporate Connect
                requires commitment to ethical CSR funding, transparency, and
                genuine youth impact creation.
              </Label>
            </div>
          )}
        />
        {errors.declaration && (
          <p className="mt-1 text-sm text-red-500">
            {errors.declaration.message}
          </p>
        )}
      </div>
    </div>
  );
}
