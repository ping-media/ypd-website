import React from "react";

type PersonaliseCardProps = {
  title: string;
  description: string;
};

const PersonaliseCard = ({ title, description }: PersonaliseCardProps) => {
  return (
    <div className="p-0.5 rounded-lg border border-gray-100">
      <div className="p-5 sm:p-10 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center h-56 m-1 bg-gradient-to-tr from-green-100/50 via-green-100/20  to-white">
        {/* Title */}
        <h3 className="font-red-rose text-base sm:text-lg text-black mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-brand-gray leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PersonaliseCard;
