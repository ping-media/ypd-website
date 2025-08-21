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
      className={`border border-brand-gray/10 bg-white shadow-[inset_0_0_30px_#eeeeee] rounded-lg p-6 sm:p-10 flex flex-col justify-between gap-3 w-full h-full ${className}`}
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
            <div className="text-base text-brand-gray">{classInfo}</div>
          </div>
        </div>

        {/* Details */}
        <div className="text-brand-gray text-sm space-y-4">
          <div>{traits}</div>
          <div>{recommendation}</div>
          {parentNote && <div>{parentNote}</div>}
        </div>
      </div>

      {/* Verdict */}
      <div className="text-sm font-semibold text-brand-primary">{verdict}</div>
    </div>
  );
};

export default FeedbackCard;
