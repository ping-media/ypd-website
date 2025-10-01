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
  // Section 1: Corporate Details
  corporateName: string;
  industrySector: string;
  establishmentYear: string;
  location: string;
  website: string;
  registrationNumber: string;

  // Section 2: Key Contacts
  csrHeadName: string;
  primaryContactName: string;
  primaryContactDesignation: string;
  contactNumber: string;
  countryCode: string;
  emailAddress: string;

  // Section 3: CSR Profile
  annualCSRBudget: string;
  csrFocusAreas: Record<string, boolean>;
  beneficiariesSupported: string;

  // Section 4: Partnership Interest
  reasonToJoin: string;
  programsToSupport: Record<string, boolean>;
  targetBeneficiaries: string;
  deliveryModel: string;

  // Section 5: Commitment & Readiness + Declaration
  budgetAllocationReadiness: string;
  coBrandedReports: string;
  partnershipAgreement: string;
  declaration: boolean;
}

interface CorporateConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CorporateConnectForm({
  isOpen,
  onClose,
}: CorporateConnectModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 5;

  const methods = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      csrFocusAreas: {
        Education: false,
        Health: false,
        Skilling: false,
        Others: false,
      },
      programsToSupport: {
        "Career Vision Program™ (CVP) – School/College Youth": false,
        "Career Reinvention Program™ (CRP) – Early/Mid-Career Professionals": false,
        "Both Programs": false,
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
          "corporateName",
          "industrySector",
          "establishmentYear",
          "location",
          "website",
          "registrationNumber",
        ];
        break;
      case 2:
        fieldsToValidate = [
          "csrHeadName",
          "primaryContactName",
          "primaryContactDesignation",
          "contactNumber",
          "emailAddress",
        ];
        break;
      case 3:
        fieldsToValidate = [
          "annualCSRBudget",
          "csrFocusAreas",
          "beneficiariesSupported",
        ];

        // Custom validation for CSR focus areas
        const csrFocusAreas = (getValues("csrFocusAreas") ?? {}) as Record<
          string,
          boolean
        >;
        if (!hasAtLeastOneSelected(csrFocusAreas)) {
          setError("csrFocusAreas", {
            type: "manual",
            message: "Please select at least one CSR focus area",
          });
          return;
        } else {
          clearErrors("csrFocusAreas");
        }
        break;
      case 4:
        fieldsToValidate = [
          "reasonToJoin",
          "programsToSupport",
          "targetBeneficiaries",
          "deliveryModel",
        ];

        // Custom validation for programs to support
        const programsToSupport = (getValues("programsToSupport") ??
          {}) as Record<string, boolean>;
        if (!hasAtLeastOneSelected(programsToSupport)) {
          setError("programsToSupport", {
            type: "manual",
            message: "Please select at least one program to support",
          });
          return;
        } else {
          clearErrors("programsToSupport");
        }
        break;
      case 5:
        fieldsToValidate = [
          "budgetAllocationReadiness",
          "coBrandedReports",
          "partnershipAgreement",
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
    console.log("✅ Corporate Connect Form Data:", data);
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
            Your CSR Partnership Request Has Been Received.
          </p>
          <p className="mx-auto max-w-md text-gray-600">
            We&apos;ve received your Corporate Connect application and our CSR
            partnership team will connect with you within 48 hours to discuss
            collaboration opportunities.
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
          <DialogTitle>Corporate Connect Application</DialogTitle>
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
