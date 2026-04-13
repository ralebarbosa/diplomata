interface SectionTitleProps {
  children: React.ReactNode;
  light?: boolean;
  size?: number;
  mb?: number;
}

const SectionTitle = ({ children, light, size = 42, mb = 40 }: SectionTitleProps) => (
  <h2
    className="font-display tracking-[0.06em] leading-none"
    style={{
      fontSize: size,
      marginBottom: mb,
      color: light ? '#fff' : 'hsl(var(--dark))',
    }}
  >
    {children}
  </h2>
);

export default SectionTitle;
