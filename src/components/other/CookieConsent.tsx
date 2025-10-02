"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  // Show banner only if no choice stored
  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setShow(true);
    }
  }, []);

  // Unified handler for accept/reject
  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookieConsent", choice);
    setShow(false);

    if (choice === "accepted") {
      // ✅ Place analytics/init scripts here
      console.log("Cookies accepted");
    } else {
      // 🚫 Block analytics/clear cookies here
      console.log("Cookies rejected");
    }
  };

  const handleClose = () => setShow(false);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white px-20 pt-4 pb-8 shadow-lg">
      <div className="mx-auto max-w-7xl text-sm">
        {/* Wrap everything */}
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
              <Link
                href={"/coming-soon"}
                className="border-brand-accent flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 hover:bg-green-100 sm:w-auto sm:px-5 sm:py-3.5"
              >
                Cookies Settings
              </Link>
              <button
                onClick={() => handleConsent("accepted")}
                className="text-brand-fg bg-brand-primary border-brand-accent hover:bg-brand-primary/90 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-3 sm:w-auto sm:px-5 sm:py-3.5"
              >
                Accept All
              </button>
              <button
                onClick={() => handleConsent("rejected")}
                className="text-brand-fg bg-brand-primary border-brand-accent hover:bg-brand-primary/90 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-3 sm:w-auto sm:px-5 sm:py-3.5"
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
