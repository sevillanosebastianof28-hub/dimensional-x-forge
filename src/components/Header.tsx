import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-0 bg-background border-b border-border relative z-20 max-w-[1360px] mx-auto">
      <div className="text-2xl font-extrabold text-foreground">DX</div>
      <nav className="hidden md:flex items-center gap-2.5">
        <a href="#" className="text-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground/80">
          Home
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          About Us
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          Services & Capabilities
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          Machine List
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          Gallery
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          RFQ
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
