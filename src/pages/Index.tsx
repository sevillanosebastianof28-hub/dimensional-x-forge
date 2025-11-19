import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Mission from "@/components/Mission";
import About from "@/components/About";
import Process from "@/components/Process";
import Machines from "@/components/Machines";
import QualityControl from "@/components/QualityControl";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Hero />
      <SocialProof />
      <Mission />
      <About />
      <Process />
      <Machines />
      <QualityControl />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
