import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function ContactFloating() {
  return (
    <Link
      href="/contact"
      className="group fixed top-1/2 right-0 z-10 -translate-y-1/2"
    >
      <div className="from-brand-primary to-brand-accent flex items-center rounded-l-2xl bg-gradient-to-r py-2 pr-2 pl-3 text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
        {/* Icon */}
        <MessageCircle className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />

        {/* Animated text reveal */}
        <span className="ml-2 max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:opacity-100">
          Contact Us
        </span>
      </div>
    </Link>
  );
}
