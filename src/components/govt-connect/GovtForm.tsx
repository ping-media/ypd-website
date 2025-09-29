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

// Placeholder steps (to implement step by step)
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

// --- Form Data Interface ---
export interface FormData {
  // Section 1: Organization Details
  organizationName: string;
  organizationType: string;
  departmentName: string;
  location: string;
  website?: string;

  // Section 2: Key Contacts
  headName: string;
  primaryContactName: string;
  primaryContactDesignation: string;
  contactNumber: string;
  emailAddress: string;

  // Section 3: Program Details
  currentPrograms: string;
  targetGroups: Record<string, boolean>;
  annualBudget: string;
  avgCandidatesTrained: string;
  keyChallenges: Record<string, boolean>;

  // Section 4: YPD-Specific Fit
  importantOutcomes: Record<string, boolean>;
  valueAdd: string;
  collaborationModel: string;
  expectedTimeline: string;
  employeesPerBatch: string;

  // Section 5: Compliance & Declaration
  mouConsent: string;
  trackingConsent: string;
  declaration: boolean;

  // Optional attachments
  documents?: FileList;
}

interface GovtConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GovtConnectForm({
  isOpen,
  onClose,
}: GovtConnectModalProps) {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      // Section 3: Program Details
      targetGroups: {
        FreshGraduates: false,
        Students: false,
        Jobseekers: false,
        MicroEntrepreneurs: false,
        Others: false,
      },
      keyChallenges: {
        OneSizeFitsAll: false,
        LackOfOutcomes: false,
        PoorScalability: false,
        WeakMonitoring: false,
        Other: false,
      },

      // Section 4: YPD-Specific Fit
      importantOutcomes: {
        EmployabilitySkills: false,
        CriticalThinking: false,
        Entrepreneurship: false,
        IndustryReadiness: false,
        DigitalLiteracy: false,
        Other: false,
      },

      // Section 5: Compliance & Declaration
      mouConsent: "",
      trackingConsent: "",
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

    console.log("✅ Govt Connect Form Data:", data);
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
          <DialogTitle>Govt Connect Application</DialogTitle>
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
                Submit Application
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
