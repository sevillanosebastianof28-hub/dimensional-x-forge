import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="relative w-full min-h-screen bg-background text-foreground">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      <Hero />
    </div>
  );
};

export default Index;
