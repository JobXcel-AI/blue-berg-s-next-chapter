import { ExternalLink, Clock, Zap, BarChart3 } from "lucide-react";
import mockup from "@/assets/allntime-mockup.png";

const features = [
  { icon: Clock, text: "Effortless time tracking" },
  { icon: Zap, text: "Real-time insights" },
  { icon: BarChart3, text: "Smart reporting" },
];

const ProductSection = () => (
  <section id="product" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent">
            Featured Product
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            All-N-Time
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A powerful, intuitive time tracking application built for modern
            teams and professionals. Track time effortlessly, gain actionable
            insights, and streamline your workflow — all in one beautiful app.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent">
                  <f.icon size={18} />
                </div>
                <span className="text-sm font-medium text-foreground">{f.text}</span>
              </div>
            ))}
          </div>

          <a
            href="https://time.all-n.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Try All-N-Time <ExternalLink size={16} />
          </a>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src={mockup}
            alt="All-N-Time app mockup"
            width={400}
            height={400}
            className="drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ProductSection;
