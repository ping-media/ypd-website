import Image from "next/image";
import React from "react";

export interface FeedbackCardProps {
  image: string;
  name: string;
  classInfo: string;
  traits: string;
  recommendation: string;
  parentNote?: string;
  verdict: string;
  className?: string; // for custom grid span
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  image,
  name,
  classInfo,
  traits,
  recommendation,
  parentNote,
  verdict,
  className = "",
}) => {
  return (
    <div
      className={`border-brand-gray/10 flex h-full w-full flex-col justify-between gap-3 rounded-lg border bg-white p-6 shadow-[inset_0_0_30px_#eeeeee] sm:p-10 ${className}`}
    >
      {/* Header + Details */}
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <div className="font-red-rose text-xl">{name}</div>
            <div className="text-brand-gray text-base">{classInfo}</div>
          </div>
        </div>

        {/* Details */}
        <div className="text-brand-gray space-y-4 text-sm">
          <div>{traits}</div>
          <div>{recommendation}</div>
          {parentNote && <div>{parentNote}</div>}
        </div>
      </div>

      {/* Verdict */}
      <div className="text-brand-primary text-sm font-semibold">{verdict}</div>
    </div>
  );
};

export default FeedbackCard;
