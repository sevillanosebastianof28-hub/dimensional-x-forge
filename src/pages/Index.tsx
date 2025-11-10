import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-10">
      <div className="w-full max-w-[1440px] bg-background rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Index;
