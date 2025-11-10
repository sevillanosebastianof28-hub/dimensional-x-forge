import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import About from "@/components/About";
import Process from "@/components/Process";
import Machines from "@/components/Machines";
import QualityControl from "@/components/QualityControl";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Hero />
      <Mission />
      <About />
      <Process />
      <Machines />
      <QualityControl />
    </>
  );
};

export default Index;
