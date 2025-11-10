import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import About from "@/components/About";
import Process from "@/components/Process";
import Machines from "@/components/Machines";
import QualityControl from "@/components/QualityControl";
import Contact from "@/components/Contact";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import LogoHero from "@/components/LogoHero";

const Index = () => {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <LogoHero />
      <Hero />
      <Mission />
      <About />
      <Process />
      <Machines />
      <QualityControl />
      <Contact />
    </>
  );
};

export default Index;
