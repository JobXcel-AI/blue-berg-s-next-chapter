import { Smartphone, Globe, ShoppingCart, Users, Lightbulb, Shield } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps built for performance, scalability, and beautiful user experiences.",
  },
  {
    icon: Globe,
    title: "Web App Development",
    description:
      "Modern, responsive web applications using cutting-edge frameworks — from MVPs to enterprise platforms.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "End-to-end e-commerce platforms with seamless checkout, inventory management, and analytics.",
  },
  {
    icon: Users,
    title: "Engineering Leadership",
    description:
      "Director & VP-level engineering guidance to build and scale high-performing development teams.",
  },
  {
    icon: Lightbulb,
    title: "Technical Strategy",
    description:
      "Architecture reviews, technology roadmaps, and strategic planning to align tech with business goals.",
  },
  {
    icon: Shield,
    title: "Service Company Solutions",
    description:
      "Custom software for service businesses — scheduling, CRM, workflow automation, and customer portals.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent">
          What We Do
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
          Professional Consulting Services
        </h2>
        <p className="mt-4 text-muted-foreground">
          From concept to launch, we deliver best-in-class development for businesses of all sizes.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl bg-card p-8 card-elevated border border-border"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={24} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-card-foreground">
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
