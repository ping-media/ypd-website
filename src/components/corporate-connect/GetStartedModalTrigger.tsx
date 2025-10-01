"use client";

import { useState } from "react";
import MentorForm from "./CorporateForm"; // path to your modal
import { Sparkles } from "lucide-react";

interface GetStartedButtonProps {
  label?: string;
}

export default function GetStartedButton({
  label = "Get Started",
}: GetStartedButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn-primary btn-size flex cursor-pointer items-center gap-2"
      >
        <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
        {label}
      </button>

      <MentorForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
