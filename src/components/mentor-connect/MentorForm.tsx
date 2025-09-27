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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface MentorConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
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
}

export default function MentorForm({
  isOpen,
  onClose,
}: MentorConnectModalProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const { register, handleSubmit, control } = useForm<FormData>({
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
    },
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    // API submission or further handling here
    onClose();
    setStep(1); // reset step after submit if needed
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto p-6">
        <DialogHeader className="mb-4">
          <DialogTitle>Mentor Connect Application</DialogTitle>
          <DialogClose className="absolute top-4 right-4" />
          <p className="text-muted-foreground mt-1 text-sm">
            Step {step} of {totalSteps}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <Label>Full Name</Label>
              <Input {...register("fullName")} placeholder="John Doe" />

              <Label>Gender</Label>
              <Select {...register("gender")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  {["Male", "Female", "Other"].map((g) => (
                    <SelectItem key={g} value={g}>
                      {g}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Label>Date of Birth</Label>
              <Input type="date" {...register("dob")} />

              <Label>Contact Number</Label>
              <Input type="tel" {...register("contact")} />

              <Label>Email Address</Label>
              <Input type="email" {...register("email")} />

              <Label>Current Location</Label>
              <Input {...register("location")} placeholder="City, Country" />

              <Label>Nationality</Label>
              <Input {...register("nationality")} placeholder="Country" />
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <Label>Current Role / Designation</Label>
              <Input
                {...register("role")}
                placeholder="Lecturer, Industry Expert"
              />

              <Label>Organization / Institution Name</Label>
              <Input
                {...register("organization")}
                placeholder="XYZ University / Company"
              />

              <Label>Total Years of Work Experience</Label>
              <Input type="number" {...register("experience")} />

              <Label>Previous Teaching / Mentoring Experience</Label>
              <Textarea
                {...register("experienceDetails")}
                placeholder="Yes/No + Details"
              />

              <Label>Upload CV / Resume</Label>
              <Input type="file" {...register("cv")} accept=".pdf,.doc,.docx" />
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <Label>Subject Areas</Label>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(control._defaultValues.subjects!).map((subj) => (
                  <div key={subj} className="flex items-center gap-2">
                    <Controller
                      name={`subjects.${subj}`}
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <span>{subj}</span>
                  </div>
                ))}
              </div>

              <Label>Industry Expertise</Label>
              <Select {...register("industry")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "IT",
                    "Healthcare",
                    "Finance",
                    "Creative Arts",
                    "Engineering",
                  ].map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Label>Skills Focus</Label>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(control._defaultValues.skills!).map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <Controller
                      name={`skills.${skill}`}
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <Label>Grades Comfortable Mentoring</Label>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(control._defaultValues.grades!).map((grade) => (
                  <div key={grade} className="flex items-center gap-2">
                    <Controller
                      name={`grades.${grade}`}
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <span>{grade}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-4">
              <Label>Why do you want to join YPD Mentor Connect?</Label>
              <Textarea {...register("whyJoin")} placeholder="Your answer..." />

              <Label>Comfort with AI tools in teaching/mentorship</Label>
              <RadioGroup {...register("aiComfort")}>
                {[
                  "Very Comfortable",
                  "Comfortable",
                  "Neutral",
                  "Not Comfortable",
                ].map((opt) => (
                  <div key={opt} className="flex items-center gap-2">
                    <RadioGroupItem value={opt} />
                    <span>{opt}</span>
                  </div>
                ))}
              </RadioGroup>

              <Label>
                Open to training in ethical AI usage & YPD pedagogy?
              </Label>
              <Select {...register("trainingConsent")}>
                <SelectTrigger>
                  <SelectValue placeholder="Yes/No" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>

              <Label>Preferred Weekly Commitment</Label>
              <Select {...register("weeklyCommit")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12 hrs</SelectItem>
                  <SelectItem value="15">15 hrs</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>

              <Label>Preferred Mode</Label>
              <Select {...register("mode")}>
                <SelectTrigger>
                  <SelectValue placeholder="Remote / Hybrid / In-Person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                  <SelectItem value="In-Person">In-Person</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <div className="space-y-4">
              <Label>Willing to sign NDA?</Label>
              <Select {...register("ndaConsent")}>
                <SelectTrigger>
                  <SelectValue placeholder="Yes/No" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>

              <Label>Open to using devices & tools provided by YPD?</Label>
              <Select {...register("toolsConsent")}>
                <SelectTrigger>
                  <SelectValue placeholder="Yes/No" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>

              <Label>Upload ID Proof</Label>
              <Input
                type="file"
                {...register("idProof")}
                accept=".pdf,.jpg,.png"
              />

              <Label>Declaration</Label>
              <p className="text-muted-foreground text-sm">
                I hereby declare that the information provided is true and
                accurate. I understand that joining Mentor Connect requires
                commitment to YPD’s values, ethical use of AI, and
                confidentiality standards.
              </p>
            </div>
          )}

          <DialogFooter className="mt-4 flex justify-between">
            {step > 1 && (
              <Button variant="outline" type="button" onClick={prevStep}>
                Back
              </Button>
            )}
            {step < totalSteps ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit">Submit Application</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
