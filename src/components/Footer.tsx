import logo from "@/assets/blueberg-icon.png";

const Footer = () => (
  <footer className="py-10 bg-muted border-t border-border">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="BlueBerg" width={28} height={28} loading="lazy" />
        <span className="text-sm font-semibold text-foreground">BlueBerg Solutions</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hagberg Consulting LLC. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
