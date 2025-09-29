"use client";

import { useEffect, useState } from "react";

const PIN = process.env.NEXT_PUBLIC_PIN ?? "12345"; // PIN can be stored in .env.local
const STORAGE_KEY = "pin-unlocked-v1";

export default function PinGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState("");

  useEffect(() => {
    const unlocked = sessionStorage.getItem(STORAGE_KEY);
    if (unlocked === "true") setAuthenticated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === PIN) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
    } else {
      alert("Wrong PIN");
      setPin("");
    }
  };

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-80 rounded-xl bg-white p-6 shadow-lg"
        >
          <h2 className="mb-4 text-xl font-semibold">Enter PIN</h2>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN"
            autoFocus
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-brand-primary hover:bg-brand-primary/90 w-full rounded p-3 text-white transition"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
