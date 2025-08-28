interface InsightCardProps {
  number: string;
  title: string;
  description: string;
}

const InsightCard = ({ number, title, description }: InsightCardProps) => {
  return (
    <div className="flex h-full gap-4 rounded-lg border border-[#CCE0CC] bg-white p-6 shadow-sm">
      {/* Number */}
      <div className="font-red-rose shrink-0 text-5xl font-bold text-[#CCE0CC]">
        {number}
      </div>

      {/* Text Content */}
      <div className="flex min-w-0 flex-col gap-2">
        <h3 className="font-red-rose text-lg">{title}</h3>
        <p className="text-brand-gray text-base break-words hyphens-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InsightCard;
