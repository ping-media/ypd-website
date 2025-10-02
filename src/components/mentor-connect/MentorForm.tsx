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

export interface FormData {
  fullName: string;
  gender: string;
  dob: string;
  contact: string;
  countryCode: string;
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
  dataConsent?: boolean;
  declaration: boolean;
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 5;

  const methods = useForm<FormData>({
    mode: "onChange",
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
      dataConsent: false,
      declaration: false,
    },
  });

  const { handleSubmit, trigger, getValues, setError, clearErrors, reset } =
    methods;

  // Helper function to check if at least one checkbox is selected
  const hasAtLeastOneSelected = (obj: Record<string, boolean>) => {
    return Object.values(obj).some((value) => value === true);
  };

  const nextStep = async (e?: React.MouseEvent) => {
    e?.preventDefault();

    let fieldsToValidate: (keyof FormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = [
          "fullName",
          "gender",
          "dob",
          "countryCode",
          "contact",
          "email",
          "location",
          "nationality",
        ];
        break;
      case 2:
        fieldsToValidate = [
          "role",
          "organization",
          "experience",
          "experienceDetails",
          "cv",
        ];
        break;
      case 3:
        fieldsToValidate = ["subjects", "industry", "skills", "grades"];

        // Custom validation for Step 3
        const subjects = getValues("subjects");
        const skills = getValues("skills");
        const grades = getValues("grades");
        const industry = getValues("industry");

        let hasError = false;

        if (!industry || industry.trim() === "") {
          setError("industry", {
            type: "manual",
            message: "Please select an industry",
          });
          hasError = true;
        } else {
          clearErrors("industry");
        }

        if (!hasAtLeastOneSelected(subjects)) {
          setError("subjects", {
            type: "manual",
            message: "Please select at least one subject area",
          });
          hasError = true;
        } else {
          clearErrors("subjects");
        }

        if (!hasAtLeastOneSelected(skills)) {
          setError("skills", {
            type: "manual",
            message: "Please select at least one skill",
          });
          hasError = true;
        } else {
          clearErrors("skills");
        }

        if (!hasAtLeastOneSelected(grades)) {
          setError("grades", {
            type: "manual",
            message: "Please select at least one grade level",
          });
          hasError = true;
        } else {
          clearErrors("grades");
        }

        if (hasError) {
          return;
        }
        break;
      case 4:
        fieldsToValidate = [
          "whyJoin",
          "aiComfort",
          "trainingConsent",
          "weeklyCommit",
          "mode",
        ];
        break;
      case 5:
        fieldsToValidate = [
          "ndaConsent",
          "toolsConsent",
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

    console.log("✅ Form Data:", data);

    reset();
    // Show success message
    setIsSubmitted(true);
  };

  const renderCurrentStep = () => {
    // Show success message if form is submitted
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
            We&apos;ve received your application / demo request and our team
            will connect with you within 48 hours to confirm the next steps.
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
          <DialogTitle>Mentor Connect Application</DialogTitle>
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
