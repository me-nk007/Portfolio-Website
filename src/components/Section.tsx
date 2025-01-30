interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gradient text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
}

