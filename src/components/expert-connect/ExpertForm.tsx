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

// Form Data interface
export interface FormData {
  fullName: string;
  gender: string;
  contactNumber: string;
  countryCode: string;
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 5;

  const methods = useForm<FormData>({
    mode: "onChange",
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

  const { handleSubmit, trigger, getValues, setError, clearErrors, reset } =
    methods;

  // Helper function to check if at least one checkbox is selected
  const hasAtLeastOneSelected = (obj: Record<string, boolean>) => {
    return Object.values(obj || {}).some((value) => value === true);
  };

  const nextStep = async (e?: React.MouseEvent) => {
    e?.preventDefault();

    let fieldsToValidate: (keyof FormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = [
          "fullName",
          "gender",
          "contactNumber",
          "emailAddress",
          "location",
          "nationality",
          "linkedInProfile",
        ];
        break;
      case 2:
        fieldsToValidate = [
          "currentRole",
          "organizationName",
          "totalExperience",
          "keySectors",
          "cv",
        ];

        // custom validation for keySectors
        const keySectors = (getValues("keySectors") ?? {}) as Record<
          string,
          boolean
        >;
        if (!hasAtLeastOneSelected(keySectors)) {
          setError("keySectors", {
            type: "manual",
            message: "Please select at least one key sector",
          });
          return;
        } else {
          clearErrors("keySectors");
        }
        break;
      case 3:
        fieldsToValidate = [
          "expertiseAreas",
          "sessionTopics",
          "gradesComfortable",
          "preferredSessionType",
        ];

        // Custom validation for Step 3 (expertiseAreas & gradesComfortable)
        const expertiseAreas = (getValues("expertiseAreas") ?? {}) as Record<
          string,
          boolean
        >;
        const gradesComfortable = (getValues("gradesComfortable") ??
          {}) as Record<string, boolean>;

        let hasError = false;

        if (!hasAtLeastOneSelected(expertiseAreas)) {
          setError("expertiseAreas", {
            type: "manual",
            message: "Please select at least one expertise area",
          });
          hasError = true;
        } else {
          clearErrors("expertiseAreas");
        }

        if (!hasAtLeastOneSelected(gradesComfortable)) {
          setError("gradesComfortable", {
            type: "manual",
            message: "Please select at least one grade level",
          });
          hasError = true;
        } else {
          clearErrors("gradesComfortable");
        }

        if (hasError) {
          return;
        }
        break;
      case 4:
        fieldsToValidate = [
          "reasonToJoin",
          "hoursPerMonth",
          "comfortableWithTools",
          "openToGuidelines",
        ];
        break;
      case 5:
        fieldsToValidate = [
          "ndaConsent",
          "recordingConsent",
          "idProof",
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
    console.log("✅ Expert Connect Form Data:", data);
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
            We&apos;ve received your application and our team will connect with
            you within 48 hours to confirm the next steps.
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
          <DialogTitle>Expert Connect Application</DialogTitle>
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
