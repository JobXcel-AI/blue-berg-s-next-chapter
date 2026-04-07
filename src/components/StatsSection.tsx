const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "6", label: "Years as Director of Engineering" },
  { value: "VP", label: "Engineering at Pathpoint" },
  { value: "CEO", label: "Xcel Software" },
];

const StatsSection = () => (
  <section id="experience" className="py-20 bg-hero">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl sm:text-5xl font-extrabold text-primary-foreground">
              {s.value}
            </p>
            <p className="mt-2 text-sm font-medium text-primary-foreground/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
