import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  icon?: LucideIcon;
}

export default function ProgramCard({
  title,
  isActive,
  onClick,
  icon: Icon,
}: ProgramCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-4 sm:p-5 rounded-lg cursor-pointer flex items-center gap-3 transition-all duration-200
        border-l-4 shadow-md
        ${
          isActive
            ? "border-brand-primary bg-white"
            : "border-transparent bg-white hover:bg-white/80 shadow-transparent"
        }`}
    >
      {Icon && (
        <Icon
          size={30}
          className={isActive ? "text-brand-primary" : "text-gray-500"}
        />
      )}
      <span
        className={`text-base sm:text-lg lg:text-xl font-poppins ${
          isActive
            ? "text-brand-primary font-semibold"
            : "text-black font-medium"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
