const SectionHeader = ({ heading }: { heading: string }) => {
  return (
    <div className="flex items-center justify-center gap-8 mb-12 sm:gap-24">
      <div className={`flex gap-2 items-center justify-center flex-row`}>
        <span className="w-3 h-3 border rounded-sm border-background-primary/80" />
        <span className="w-8 h-2 rounded-sm bg-background-primary/80" />
      </div>
      <h1 className="text-xl font-bold text-center text-heading-secondary">
        {heading}
      </h1>
      <div
        className={`flex gap-2 items-center justify-center flex-row-reverse`}
      >
        <span className="w-3 h-3 border rounded-sm border-background-primary/80" />
        <span className="w-8 h-2 rounded-sm bg-background-primary/80" />
      </div>
    </div>
  );
};

export default SectionHeader;
