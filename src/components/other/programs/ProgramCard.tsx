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
      className={`flex cursor-pointer items-center gap-3 rounded-lg border-l-4 p-4 shadow-md transition-all duration-200 sm:p-5 ${
        isActive
          ? "border-brand-primary bg-white"
          : "border-transparent bg-white shadow-transparent hover:bg-white/80"
      }`}
    >
      {Icon && (
        <Icon
          size={30}
          className={isActive ? "text-brand-primary" : "text-gray-500"}
        />
      )}
      <span
        className={`font-poppins text-base sm:text-lg lg:text-xl ${
          isActive
            ? "text-brand-primary font-semibold"
            : "font-medium text-black"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
