import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function ContactFloating() {
  return (
    <Link
      href="/contact"
      className="fixed top-1/2 right-0 -translate-y-1/2 group"
    >
      <div
        className="bg-gradient-to-r from-brand-primary to-brand-accent text-white 
                   pl-3 pr-2 py-2 rounded-l-2xl shadow-lg flex items-center 
                   transition-all duration-300 ease-in-out hover:shadow-2xl"
      >
        {/* Icon */}
        <MessageCircle className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />

        {/* Animated text reveal */}
        <span
          className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 
                     text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out ml-2"
        >
          Contact Us
        </span>
      </div>
    </Link>
  );
}
