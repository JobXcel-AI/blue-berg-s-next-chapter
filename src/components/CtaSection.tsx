import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section id="contact" className="py-24 bg-background">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
        Ready to Elevate Your Technology Strategy?
      </h2>
      <p className="mt-4 text-muted-foreground">
        Whether you need mobile app development, web platforms, e-commerce
        solutions, or engineering leadership — BlueBerg Solutions is here to
        help.
      </p>
      <a
        href="mailto:contact@blue-berg.com"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Let's Talk <ArrowRight size={16} />
      </a>
    </div>
  </section>
);

export default CtaSection;
