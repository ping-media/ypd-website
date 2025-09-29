"use client";

import { useState } from "react";
import { useForm, Control, UseFormRegister } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

// Steps
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

// --- Form Data Interface ---
export interface FormData {
  // Section 1: Organization Details
  organizationName: string;
  organizationType: string;
  location: string;
  website?: string;

  // Section 2: Contact Person
  fullName: string;
  designation: string;
  contactNumber: string;
  emailAddress: string;

  // Section 3: Demo Preferences + Declaration
  interestedSolutions: Record<string, boolean>;
  preferredDemoMode: string;
  preferredTimeSlots: Record<string, boolean>;
  expectedParticipants: Record<string, boolean>;
  declaration: boolean;
}

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoRequestForm({
  isOpen,
  onClose,
}: DemoRequestModalProps) {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      interestedSolutions: {
        "Admission Test System": false,
        "Hiring & Onboarding System": false,
        "School/Institute OS": false,
        "Counseling Guru B2B": false,
        "Global Navigator B2B": false,
        "CVP Lite B2B": false,
        "CVP Advance B2B": false,
        "CareerVerse B2B": false,
        "Reboot Navigator B2B": false,
        "Aptitude Trainer B2B": false,
        "Reinvention Guru B2B": false,
        "Smart Consulting": false,
        Other: false,
      },
      preferredDemoMode: "Online",
      preferredTimeSlots: {
        Morning: false,
        Afternoon: false,
        Evening: false,
      },
      expectedParticipants: {
        "1-5": false,
        "5-10": false,
        "10+": false,
      },
      declaration: false,
    },
  });

  const totalSteps = 3;

  const nextStep = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data: FormData) => {
    if (!data.declaration) {
      alert("⚠️ Please confirm your declaration before submitting.");
      return;
    }

    console.log("✅ Demo Request Form Data:", data);
    onClose();
    setStep(1);
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <Step1 register={register} />;
      case 2:
        return <Step2 register={register} />;
      case 3:
        return <Step3 register={register} control={control} />;
      default:
        return <Step1 register={register} />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto p-6">
        <DialogHeader className="mb-4">
          <DialogTitle>Demo Request Form</DialogTitle>
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
                variant="outline"
                type="button"
                onClick={prevStep}
                className="cursor-pointer"
              >
                Back
              </Button>
            )}
            {step < totalSteps ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-brand-primary border-brand-accent hover:bg-brand-primary/90 cursor-pointer border"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-brand-primary border-brand-accent hover:bg-brand-primary/90 cursor-pointer border"
              >
                Submit Request
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
