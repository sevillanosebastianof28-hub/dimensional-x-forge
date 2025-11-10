import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 md:px-10 py-5 bg-background border-b border-border/60">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-cyan-700 rotate-45 flex items-center justify-center text-primary-foreground font-bold text-lg">
          DX
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#" className="text-primary border border-primary/60 rounded-md px-3 py-1 transition hover:bg-primary/10">
          Home
        </a>
        <a href="#" className="hover:text-primary transition">About Us</a>
        <a href="#" className="hover:text-primary transition">Services & Capabilities</a>
        <a href="#" className="hover:text-primary transition">Machine List</a>
        <a href="#" className="hover:text-primary transition">Gallery</a>
        <a href="#" className="hover:text-primary transition">RFQ</a>
        <a href="#" className="hover:text-primary transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
