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
import { FormData } from "../CorporateForm";

export default function Step1() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      <div>
        <Label>Corporate Name</Label>
        <Input
          {...register("corporateName", {
            required: "Corporate name is required",
          })}
          placeholder="ABC Corp Ltd. / XYZ Industries"
          className="mt-2"
        />
        {errors.corporateName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.corporateName.message}
          </p>
        )}
      </div>

      <div>
        <Label>Industry Sector</Label>
        <Controller
          name="industrySector"
          control={control}
          rules={{ required: "Industry sector is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Select Industry Sector" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "IT & Technology",
                  "Manufacturing",
                  "Banking & Finance",
                  "Healthcare & Pharmaceuticals",
                  "Education & EdTech",
                  "Retail & E-commerce",
                  "Telecommunications",
                  "Energy & Utilities",
                  "Construction & Real Estate",
                  "Consulting & Professional Services",
                  "FMCG",
                  "Automotive",
                  "Other",
                ].map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.industrySector && (
          <p className="mt-1 text-sm text-red-500">
            {errors.industrySector.message}
          </p>
        )}
      </div>

      <div>
        <Label>Year of Establishment</Label>
        <Controller
          name="establishmentYear"
          control={control}
          rules={{ required: "Establishment year is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(
                  { length: new Date().getFullYear() - 1900 + 1 },
                  (_, i) => new Date().getFullYear() - i,
                ).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.establishmentYear && (
          <p className="mt-1 text-sm text-red-500">
            {errors.establishmentYear.message}
          </p>
        )}
      </div>

      <div>
        <Label>Location (City, State, Country)</Label>
        <Input
          {...register("location", {
            required: "Location is required",
          })}
          placeholder="Mumbai, Maharashtra, India"
          className="mt-2"
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
        )}
      </div>

      <div>
        <Label>Website (If Any)</Label>
        <Input
          {...register("website", {
            // required: "Website is required",
            pattern: {
              value: /^https?:\/\/.+/,
              message:
                "Please enter a valid URL (starting with http:// or https://)",
            },
          })}
          placeholder="https://www.yourcompany.com"
          className="mt-2"
        />
        {errors.website && (
          <p className="mt-1 text-sm text-red-500">{errors.website.message}</p>
        )}
      </div>

      <div>
        <Label>Registration / CSR Identification Number</Label>
        <Input
          {...register("registrationNumber", {
            required: "Registration/CSR number is required",
          })}
          placeholder="CSR00012345 or CIN: U12345AB1234PLC567890"
          className="mt-2"
        />
        {errors.registrationNumber && (
          <p className="mt-1 text-sm text-red-500">
            {errors.registrationNumber.message}
          </p>
        )}
      </div>
    </div>
  );
}
