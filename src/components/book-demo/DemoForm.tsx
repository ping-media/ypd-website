"use client";

import { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
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

// --- Form Data Interface ---
export interface FormData {
  organizationName: string;
  organizationType: string;
  location: string;
  website?: string;

  fullName: string;
  designation: string;
  contactNumber: string;
  countryCode: string;
  emailAddress: string;

  interestedSolutions: Record<string, boolean>;
  preferredDemoMode: string;
  preferredTimeSlots: Record<string, boolean>;
  expectedParticipants: Record<string, boolean>;
  declaration: boolean;
}

interface DemoBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoBookForm({ isOpen, onClose }: DemoBookModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 3;

  const methods = useForm<FormData>({
    mode: "onChange",
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

  const { handleSubmit, trigger, getValues, setError, clearErrors, reset } =
    methods;

  const hasAtLeastOneSelected = (obj: Record<string, boolean>) =>
    Object.values(obj || {}).some((value) => value === true);

  const nextStep = async (e?: React.MouseEvent) => {
    e?.preventDefault();

    let fieldsToValidate: (keyof FormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = [
          "organizationName",
          "organizationType",
          "location",
          "website",
        ];
        break;
      case 2:
        fieldsToValidate = [
          "fullName",
          "designation",
          "contactNumber",
          "countryCode",
          "emailAddress",
        ];
        break;
      case 3:
        fieldsToValidate = [
          "interestedSolutions",
          "preferredDemoMode",
          "preferredTimeSlots",
          "expectedParticipants",
          "declaration",
        ];

        const solutions = getValues("interestedSolutions") ?? {};
        if (!hasAtLeastOneSelected(solutions)) {
          setError("interestedSolutions", {
            type: "manual",
            message: "Please select at least one solution",
          });
          return;
        } else clearErrors("interestedSolutions");

        const timeSlots = getValues("preferredTimeSlots") ?? {};
        if (!hasAtLeastOneSelected(timeSlots)) {
          setError("preferredTimeSlots", {
            type: "manual",
            message: "Please select at least one time slot",
          });
          return;
        } else clearErrors("preferredTimeSlots");

        const participants = getValues("expectedParticipants") ?? {};
        if (!hasAtLeastOneSelected(participants)) {
          setError("expectedParticipants", {
            type: "manual",
            message: "Please select expected participants",
          });
          return;
        } else clearErrors("expectedParticipants");
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
    console.log("✅ Demo Book Form Data:", data);
    reset();
    setIsSubmitted(true);
  };

  const renderCurrentStep = () => {
    if (isSubmitted) {
      return (
        <div className="space-y-4 py-8 text-center">
          <div className="text-6xl">🙏</div>
          <h3 className="text-brand-primary text-2xl font-semibold">
            Thank You for Booking a Demo with Youth Pulse Digital™
          </h3>
          <div className="text-5xl">✅</div>
          <p className="text-lg font-medium text-green-600">
            Your Demo Request Has Been Received.
          </p>
          <p className="mx-auto max-w-md text-gray-600">
            Our team will connect with you within 48 hours to schedule the demo.
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
      default:
        return <Step1 />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto p-6">
        <DialogHeader className="mb-4">
          <DialogTitle>Demo Application</DialogTitle>
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
                    Submit Demo Request
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
