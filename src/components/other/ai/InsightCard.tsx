interface InsightCardProps {
  number: string;
  title: string;
  description: string;
}

const InsightCard = ({ number, title, description }: InsightCardProps) => {
  return (
    <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-[#CCE0CC] h-full">
      {/* Number */}
      <div className="font-red-rose text-5xl font-bold text-[#CCE0CC] shrink-0">
        {number}
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-2 min-w-0">
        <h3 className="font-red-rose text-lg">{title}</h3>
        <p className="text-brand-gray text-base break-words hyphens-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InsightCard;
