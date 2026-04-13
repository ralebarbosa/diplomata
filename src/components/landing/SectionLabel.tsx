interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
  <span className="text-[10px] font-semibold text-primary tracking-[0.18em] uppercase block mb-3">
    {children}
  </span>
);

export default SectionLabel;
