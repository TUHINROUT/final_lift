interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-gold text-xs font-semibold border border-border rounded-full w-8 h-8 flex items-center justify-center">
        {number}
      </span>
      <span className="eyebrow">{label}</span>
    </div>
  );
}
