import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    className="relative min-h-[90vh] flex items-center overflow-hidden"
    style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-hero opacity-80" />
    <div className="relative container mx-auto px-4 py-32">
      <p className="text-sm font-semibold tracking-widest uppercase text-primary-glow animate-fade-up">
        Hagberg Consulting LLC
      </p>
      <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground animate-fade-up-delay-1 max-w-3xl">
        Technology Leadership{" "}
        <span className="text-primary-glow">Built on Experience</span>
      </h1>
      <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl animate-fade-up-delay-2">
        Best-in-class mobile & web app development for e-commerce and service
        companies of all sizes — backed by 25+ years of engineering leadership.
      </p>
      <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90 transition-colors"
        >
          Get in Touch <ArrowRight size={16} />
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
        >
          Explore Services
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
