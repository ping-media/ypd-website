"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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

// --- Form Data Interface ---
export interface FormData {
  // Section 1: Enterprise Details
  enterpriseName: string;
  enterpriseType: string;
  industrySector: string;
  establishmentYear: string;
  location: string;
  website?: string;
  registrationDetails?: string;

  // Section 2: Key Contacts
  ownerName: string;
  primaryContactName: string;
  primaryContactDesignation: string;
  contactNumber: string;
  countryCode: string;
  emailAddress: string;

  // Section 3: Workforce Profile
  totalEmployees: string;
  freshHiresLast12Months: string;
  keyRoles: Record<string, boolean>;
  currentTrainingMethods: Record<string, boolean>;

  // Section 4: Training Needs & Priorities
  reasonToJoin: string;
  focusAreas: Record<string, boolean>;
  preferredDeliveryMode: string;
  employeesPerBatch: string;
  expectedTimeline: string;

  // Section 5: Commitment & Readiness
  weeklyCommitment: string;
  budgetReadiness: string;
  adoptAITools: string;
  ndaConsent: string;
  dataConsent?: boolean;
  declaration: boolean;

  // Optional attachments
  documents?: FileList;
}

interface MSMEConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MSMEConnectForm({
  isOpen,
  onClose,
}: MSMEConnectModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 5;

  const methods = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      keyRoles: {
        Sales: false,
        Operations: false,
        Finance: false,
        Production: false,
        HR: false,
        Marketing: false,
        Others: false,
      },
      currentTrainingMethods: {
        InHouse: false,
        ExternalTrainers: false,
        None: false,
        Other: false,
      },
      focusAreas: {
        "Fresh Hire Onboarding Readiness": false,
        "Employability Skills": false,
        "Critical Thinking & Problem Solving": false,
        "Innovation & Intrapreneurship": false,
        "Digital Skills & AI Awareness": false,
        Other: false,
      },
      dataConsent: false,
      declaration: false,
    },
  });

  const { handleSubmit, trigger, getValues, setError, clearErrors, reset } =
    methods;

  // Helper to check at least one checkbox is selected
  const hasAtLeastOneSelected = (obj: Record<string, boolean>) =>
    Object.values(obj || {}).some((v) => v === true);

  const nextStep = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    let fieldsToValidate: (keyof FormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = [
          "enterpriseName",
          "enterpriseType",
          "industrySector",
          "establishmentYear",
          "location",
          "website",
        ];
        break;
      case 2:
        fieldsToValidate = [
          "ownerName",
          "primaryContactName",
          "primaryContactDesignation",
          "contactNumber",
          "emailAddress",
        ];
        break;
      case 3:
        fieldsToValidate = [
          "totalEmployees",
          "freshHiresLast12Months",
          "keyRoles",
          "currentTrainingMethods",
        ];

        const keyRoles = getValues("keyRoles") ?? {};
        if (!hasAtLeastOneSelected(keyRoles)) {
          setError("keyRoles", {
            type: "manual",
            message: "Please select at least one role",
          });
          return;
        } else clearErrors("keyRoles");

        const currentTrainingMethods =
          getValues("currentTrainingMethods") ?? {};
        if (!hasAtLeastOneSelected(currentTrainingMethods)) {
          setError("currentTrainingMethods", {
            type: "manual",
            message: "Please select at least one training method",
          });
          return;
        } else clearErrors("currentTrainingMethods");
        break;
      case 4:
        fieldsToValidate = [
          "reasonToJoin",
          "focusAreas",
          "preferredDeliveryMode",
          "employeesPerBatch",
          "expectedTimeline",
        ];

        const focusAreas = getValues("focusAreas") ?? {};
        if (!hasAtLeastOneSelected(focusAreas)) {
          setError("focusAreas", {
            type: "manual",
            message: "Please select at least one focus area",
          });
          return;
        } else clearErrors("focusAreas");
        break;
      case 5:
        fieldsToValidate = [
          "weeklyCommitment",
          "budgetReadiness",
          "adoptAITools",
          "ndaConsent",
          "declaration",
        ];
        break;
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (!isStepValid) return;

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

    console.log("✅ MSME Connect Form Data:", data);
    reset();
    setIsSubmitted(true);
  };

  const renderCurrentStep = () => {
    if (isSubmitted) {
      return (
        <div className="space-y-4 py-8 text-center">
          <div className="text-6xl">🙏</div>
          <h3 className="text-brand-primary text-2xl font-semibold">
            Thank You for Connecting with Youth Pulse Digital™
          </h3>
          <div className="text-5xl">✅</div>
          <p className="text-lg font-medium text-green-600">
            Your Request Has Been Received.
          </p>
          <p className="mx-auto max-w-md text-gray-600">
            We&apos;ll connect with you within 48 hours.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              onClose();
            }}
            className="bg-brand-primary hover:bg-brand-primary/90 mt-6 cursor-pointer"
          >
            Close
          </Button>
        </div>
      );
    }

    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto p-6">
        <DialogHeader className="mb-4">
          <DialogTitle>MSME Connect Application</DialogTitle>
          <DialogClose className="absolute top-4 right-4" />
          <Progress value={(step / totalSteps) * 100} className="mt-2 h-2" />
        </DialogHeader>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {renderCurrentStep()}

            {!isSubmitted && (
              <DialogFooter className="mt-4 flex justify-between">
                {step > 1 && (
                  <Button variant="outline" type="button" onClick={prevStep}>
                    Back
                  </Button>
                )}

                {step < totalSteps ? (
                  <Button
                    className="bg-brand-primary border-brand-accent hover:bg-brand-primary/90"
                    type="button"
                    onClick={nextStep}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    className="bg-brand-primary border-brand-accent hover:bg-brand-primary/90"
                    type="submit"
                  >
                    Submit Application
                  </Button>
                )}
              </DialogFooter>
            )}
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
