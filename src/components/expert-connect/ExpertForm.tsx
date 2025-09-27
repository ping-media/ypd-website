"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
  contactNumber: string;
  emailAddress: string;
  location: string;
  nationality: string;
  linkedInProfile?: string;

  currentRole: string;
  organizationName: string;
  totalExperience: number;
  keySectors: Record<string, boolean>;
  cv?: FileList;

  expertiseAreas: Record<string, boolean>;
  sessionTopics: string;
  gradesComfortable: Record<string, boolean>;
  preferredSessionType: string;

  reasonToJoin: string;
  hoursPerMonth: string;
  comfortableWithTools: string;
  openToGuidelines: string;

  ndaConsent: string;
  recordingConsent: string;
  idProof?: FileList;
  declaration: boolean;
}

interface ExpertConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExpertConnectForm({
  isOpen,
  onClose,
}: ExpertConnectModalProps) {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      keySectors: {
        IT: false,
        Finance: false,
        Healthcare: false,
        Manufacturing: false,
        Education: false,
        Design: false,
        Others: false,
      },
      expertiseAreas: {
        "AI/ML": false,
        "Renewable Energy": false,
        "Finance & Markets": false,
        "Creative Arts": false,
        "Supply Chain": false,
        "Social Impact": false,
        Others: false,
      },
      gradesComfortable: {
        "9–10": false,
        "11–12": false,
        UG: false,
        PG: false,
        "Early Professionals": false,
      },
      declaration: false,
    },
  });

  const totalSteps = 5;

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
      alert("⚠️ Please accept the declaration before submitting.");
      return;
    }
    console.log("✅ Expert Connect Form Data:", data);
    onClose();
    setStep(1);
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <Step1 register={register} />;
      case 2:
        return <Step2 register={register} control={control} />;
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
          <DialogTitle>Expert Connect Application</DialogTitle>
          <DialogClose className="absolute top-4 right-4" />
          <p className="text-muted-foreground mt-1 text-sm">
            Step {step} of {totalSteps}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {renderCurrentStep()}

          <DialogFooter className="mt-4 flex justify-between">
            {step > 1 && (
              <Button variant="outline" type="button" onClick={prevStep}>
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
                Submit Application
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
