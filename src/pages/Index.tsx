import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <section className="relative w-full min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
      <Header />
      <Hero />
    </section>
  );
};

export default Index;
