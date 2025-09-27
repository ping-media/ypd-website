"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

// Form Data interface
export interface FormData {
  // Section 1: Institute Details
  instituteName: string;
  instituteType: string;
  establishmentYear: string;
  affiliation: string;
  location: string;
  website: string;

  // Section 2: Key Contacts
  principalName: string;
  primaryContactName: string;
  primaryContactDesignation: string;
  contactNumber: string;
  emailAddress: string;

  // Section 3: Institute Profile
  studentStrength: string;
  streams: Record<string, boolean>;
  numTeachers: string;
  currentTech: string;
  previousAIExposure: string;

  // Section 4: Institute Needs & Readiness
  reasonToJoin: string;
  focusAreas: Record<string, boolean>;
  startTimeline: string;
  weeklyCommit: string;
  budgetReadiness: string;

  // Section 5: Compliance & Declaration
  ndaConsent: string;
  facultyTrainingConsent: string;
  declaration: boolean;

  // Optional: for file uploads or attachments
  documents?: FileList;
}

interface InstituteConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExpertForm({
  isOpen,
  onClose,
}: InstituteConnectModalProps) {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      streams: {
        Science: false,
        Commerce: false,
        Humanities: false,
        Vocational: false,
        Others: false,
      },
      focusAreas: {
        "Student Career Guidance": false,
        "Teacher Upskilling in AI": false,
        "Employability Skill Development": false,
        "Exposure to Global Mentors & Experts": false,
        "Differentiation from Competitor Institutes": false,
      },
      declaration: false,
    },
  });

  const totalSteps = 5;

  // Navigation
  const nextStep = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Submit handler
  const onSubmit = (data: FormData) => {
    console.log("🔍 Form submission triggered");

    if (!data.declaration) {
      alert("⚠️ Please accept the declaration before submitting.");
      return;
    }

    console.log("✅ Form Data:", data);
    onClose();
    setStep(1);
  };

  // Render current step
  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <Step1 register={register} />;
      case 2:
        return <Step2 register={register} />;
      case 3:
        return <Step3 register={register} control={control} />;
      case 4:
        return <Step4 register={register} control={control} />;
      case 5:
        return <Step5 register={register} control={control} />;
      default:
        return <Step1 register={register} />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto p-6">
        <DialogHeader className="mb-4">
          <DialogTitle>Institute Connect Application</DialogTitle>
          <DialogClose className="absolute top-4 right-4" />
          <p className="text-muted-foreground mt-1 text-sm">
            Step {step} of {totalSteps}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {renderCurrentStep()}

          <DialogFooter className="mt-4 flex justify-between">
            {step > 1 && (
              <Button
                className="cursor-pointer"
                variant="outline"
                type="button"
                onClick={prevStep}
              >
                Back
              </Button>
            )}

            {step < totalSteps ? (
              <Button
                className="bg-brand-primary border-brand-accent hover:bg-brand-primary/90 cursor-pointer border"
                type="button"
                onClick={nextStep}
              >
                Next
              </Button>
            ) : (
              <Button
                className="bg-brand-primary border-brand-accent hover:bg-brand-primary/90 cursor-pointer border"
                type="submit"
              >
                Submit Application
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
