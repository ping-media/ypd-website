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
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50 px-20 pt-4 pb-8">
      <div className="max-w-7xl mx-auto text-sm">
        {/* Wrap everything */}
        <div className="flex flex-col gap-4">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              className="cursor-pointer p-2 rounded-md hover:bg-gray-100 transition"
              aria-label="Close cookie banner"
            >
              <X size={22} />
            </button>
          </div>

          {/* Content row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Message */}
            <p className="flex-1 text-sm sm:text-base lg:text-lg font-red-rose leading-relaxed">
              This website uses cookies to personalize content, provide career
              recommendations, and improve platform performance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 text-sm sm:text-base lg:text-lg w-full sm:w-auto">
              <Link
                href={"/#"}
                className="flex justify-center items-center gap-2 border border-brand-accent rounded-lg py-3 px-4 sm:py-3.5 sm:px-5 w-full sm:w-auto hover:bg-green-100"
              >
                Cookies Settings
              </Link>
              <button
                onClick={() => handleConsent("accepted")}
                className="flex justify-center items-center gap-2 rounded-lg text-brand-fg bg-brand-primary border border-brand-accent py-3 px-4 sm:py-3.5 sm:px-5 w-full sm:w-auto hover:bg-brand-primary/90"
              >
                Accept All
              </button>
              <button
                onClick={() => handleConsent("rejected")}
                className="flex justify-center items-center gap-2 rounded-lg text-brand-fg bg-brand-primary border border-brand-accent py-3 px-4 sm:py-3.5 sm:px-5 w-full sm:w-auto hover:bg-brand-primary/90"
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
