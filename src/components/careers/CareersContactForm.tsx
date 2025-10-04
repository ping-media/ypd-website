"use client";

import { useState, useCallback } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, Trash2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { countryCodes } from "@/config/formFieldsData";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\d{10}$/, "Must be 10 digits"),
  description: z.string().optional(),
  resume: z
    .any()
    .refine((file) => file, "Resume is required")
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      "File size must be ≤ 2 MB",
    ),
});

export default function CareersContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      description: "",
      resume: null,
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0];
      if (uploadedFile && uploadedFile.size > MAX_FILE_SIZE) {
        form.setError("resume", {
          message: "File size must be ≤ 2 MB",
        });
        return;
      }
      setFile(uploadedFile);
      form.setValue("resume", uploadedFile, { shouldValidate: true });
      form.clearErrors("resume");
    },
    [form],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
    },
    multiple: false,
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log(values);

    try {
      // Create FormData to handle file upload
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("countryCode", values.countryCode);
      formData.append("phone", values.phone);
      if (values.description) {
        formData.append("description", values.description);
      }
      if (values.resume) {
        formData.append("resume", values.resume);
      }

      const response = await fetch("/api/careers-contact", {
        method: "POST",
        body: formData, // Note: Don't set Content-Type header, let browser set it with boundary
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        form.reset();
        setFile(null);

        // Reset back to form after 4 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      } else {
        alert("❌ Failed to submit application. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ An error occurred. Please try again later.");
      setIsSubmitting(false);
    }
  };

  // Show success message after submission
  if (isSubmitted) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center space-y-4 text-center">
        <div className="text-6xl">🙏</div>
        <h3 className="text-brand-primary text-2xl font-semibold">
          Thank You for Connecting with Youth Pulse Digital™
        </h3>
        <div className="text-5xl">✅</div>
        <p className="text-lg font-medium text-green-600">
          Your Request Has Been Received.
        </p>
        <p className="mx-auto max-w-md text-gray-600">
          We&apos;ve received your application and our team will connect with
          you within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your name *"
                  className="h-12 rounded-lg border border-gray-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email *"
                  className="h-12 rounded-lg border border-gray-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone + Country Code */}
        <div className="flex gap-3">
          {/* Country Code Select */}
          <FormField
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(val) => field.onChange(val)}
                  >
                    <SelectTrigger className="text-muted-foreground h-12 w-28 rounded-lg border border-gray-300 px-3">
                      <SelectValue placeholder="+91">
                        {field.value &&
                          countryCodes.find((c) => c.value === field.value)
                            ?.label}
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
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Input */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="9876543210"
                    className="h-12 rounded-lg border border-gray-300"
                    inputMode="numeric"
                    maxLength={10}
                    {...field}
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      target.value = target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      field.onChange(target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Resume Upload */}
        <FormField
          control={form.control}
          name="resume"
          render={() => (
            <FormItem>
              <FormControl>
                <div
                  {...getRootProps()}
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-6 text-center transition ${
                    isDragActive ? "border-green-600 bg-green-50" : ""
                  }`}
                >
                  <input {...getInputProps()} />
                  {!file ? (
                    <>
                      <Upload className="mb-2 h-6 w-6 text-gray-500" />
                      <p className="text-sm font-medium text-gray-700">
                        Click to upload{" "}
                        <span className="text-gray-500">or Drag and Drop</span>
                      </p>
                      <p className="text-xs text-gray-400">
                        upload your Document (Max 2 MB) *
                      </p>
                    </>
                  ) : (
                    <div className="flex w-full items-center justify-between rounded-lg bg-gray-50 p-3">
                      <div>
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-gray-500">
                          {(file.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                          form.setValue("resume", null);
                          form.clearErrors("resume");
                        }}
                        className="cursor-pointer text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description (Optional) */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Description (Optional)"
                  className="min-h-[120px] rounded-lg border border-gray-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-size btn-primary cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </Form>
  );
}
