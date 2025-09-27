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
  fullName: string;
  gender: string;
  dob: string;
  contact: string;
  email: string;
  location: string;
  nationality: string;
  role: string;
  organization: string;
  experience: number;
  experienceDetails: string;
  cv: FileList;
  subjects: Record<string, boolean>;
  industry: string;
  skills: Record<string, boolean>;
  grades: Record<string, boolean>;
  whyJoin: string;
  aiComfort: string;
  trainingConsent: string;
  weeklyCommit: string;
  mode: string;
  ndaConsent: string;
  toolsConsent: string;
  idProof: FileList;
  declaration: boolean; // ✅ required checkbox
}

interface MentorConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MentorForm({
  isOpen,
  onClose,
}: MentorConnectModalProps) {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      subjects: {
        Math: false,
        Science: false,
        Humanities: false,
        Commerce: false,
        Technology: false,
        Vocational: false,
        Others: false,
      },
      skills: {
        "Critical Thinking": false,
        "Problem Solving": false,
        Innovation: false,
        Leadership: false,
        Communication: false,
        "Digital Skills": false,
        Others: false,
      },
      grades: {
        "5–7": false,
        "8–10": false,
        "11–12": false,
        UG: false,
        PG: false,
      },
      declaration: false,
    },
  });

  const totalSteps = 5;

  // Prevent form submission on "Next" button clicks
  const nextStep = (e?: React.MouseEvent) => {
    e?.preventDefault(); // Prevent any form submission
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = (e?: React.MouseEvent) => {
    e?.preventDefault(); // Prevent any form submission
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Submit handler - only called when Submit button is clicked
  const onSubmit = (data: FormData) => {
    console.log("🔍 Form submission triggered");

    if (!data.declaration) {
      alert("⚠️ Please accept the declaration before submitting.");
      return;
    }

    console.log("✅ Form Data:", data);
    onClose();
    setStep(1); // reset step after submit
  };

  // Render current step component
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
          <DialogTitle>Mentor Connect Application</DialogTitle>
          <DialogClose className="absolute top-4 right-4" />
          <p className="text-muted-foreground mt-1 text-sm">
            Step {step} of {totalSteps}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Render current step */}
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
