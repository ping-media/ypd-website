"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../MentorForm";

export default function Step3() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<FormData>();

  // Get keys dynamically
  const subjects = Object.keys(
    watch("subjects", {
      Math: false,
      Science: false,
      Humanities: false,
      Commerce: false,
      Technology: false,
      Vocational: false,
      Others: false,
    }),
  );
  const skills = Object.keys(
    watch("skills", {
      "Critical Thinking": false,
      "Problem Solving": false,
      Innovation: false,
      Leadership: false,
      Communication: false,
      "Digital Skills": false,
      Others: false,
    }),
  );
  const grades = Object.keys(
    watch("grades", {
      "5–7": false,
      "8–10": false,
      "11–12": false,
      UG: false,
      PG: false,
    }),
  );

  return (
    <div className="space-y-4">
      {/* Subject Areas */}
      <div>
        <Label>Subject Areas</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {subjects.map((subj) => (
            <div key={subj} className="flex items-center gap-2">
              <Controller
                name={`subjects.${subj}` as const}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{subj}</span>
            </div>
          ))}
        </div>
        {errors.subjects?.message && (
          <p className="mt-1 text-sm text-red-500">
            {String(errors.subjects.message)}
          </p>
        )}
      </div>

      {/* Industry Expertise */}
      <div>
        <Label>Industry Expertise</Label>
        <Controller
          name="industry"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Select Industry" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                {[
                  "IT",
                  "Healthcare",
                  "Finance",
                  "Creative Arts",
                  "Engineering",
                  "Education",
                  "Retail",
                  "Hospitality",
                  "Manufacturing",
                  "Construction",
                  "Telecommunications",
                  "Transportation",
                  "Energy & Utilities",
                  "Agriculture",
                  "Legal Services",
                  "Media & Entertainment",
                  "Consulting",
                  "Real Estate",
                  "Government",
                  "Other",
                ].map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.industry?.message && (
          <p className="mt-1 text-sm text-red-500">
            {String(errors.industry.message)}
          </p>
        )}
      </div>

      {/* Skills Focus */}
      <div>
        <Label>Skills Focus</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center gap-2">
              <Controller
                name={`skills.${skill}` as const}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{skill}</span>
            </div>
          ))}
        </div>
        {errors.skills?.message && (
          <p className="mt-1 text-sm text-red-500">
            {String(errors.skills.message)}
          </p>
        )}
      </div>

      {/* Grades Comfortable Mentoring */}
      <div>
        <Label>Grades Comfortable Mentoring</Label>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {grades.map((grade) => (
            <div key={grade} className="flex items-center gap-2">
              <Controller
                name={`grades.${grade}` as const}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <span className="cursor-pointer">{grade}</span>
            </div>
          ))}
        </div>
        {errors.grades?.message && (
          <p className="mt-1 text-sm text-red-500">
            {String(errors.grades.message)}
          </p>
        )}
      </div>
    </div>
  );
}
