"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setShow(true);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookieConsent", choice);
    setShow(false);

    if (choice === "accepted") {
      console.log("Cookies accepted");
    } else {
      console.log("Cookies rejected");
    }
  };

  const handleClose = () => setShow(false);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white px-4 pt-4 pb-8 shadow-lg sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl text-sm">
        <div className="flex flex-col gap-4">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              className="cursor-pointer rounded-md p-2 transition hover:bg-gray-100"
              aria-label="Close cookie banner"
            >
              <X size={22} />
            </button>
          </div>

          {/* Content row */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            {/* Message */}
            <p className="font-red-rose flex-1 text-sm leading-relaxed sm:text-base lg:text-lg">
              This website uses cookies to personalize content, provide career
              recommendations, and improve platform performance.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col items-center justify-center gap-3 text-sm sm:w-auto sm:flex-row sm:gap-5 sm:text-base lg:text-lg">
              <button
                onClick={() => handleConsent("accepted")}
                className="btn-size btn-primary cursor-pointer max-sm:w-full"
              >
                Necessary Cookies Only
              </button>
              <button
                onClick={() => handleConsent("accepted")}
                className="btn-size btn-primary w-full cursor-pointer sm:w-auto"
              >
                Accept All
              </button>
              <button
                onClick={() => handleConsent("rejected")}
                className="btn-size btn-primary w-full cursor-pointer sm:w-auto"
              >
                Reject All Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
