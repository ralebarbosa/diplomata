import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import DestaqueSection from "@/components/landing/DestaqueSection";
import PistaSection from "@/components/landing/PistaSection";
import ConhecaSection from "@/components/landing/ConhecaSection";
import AtrativosSection from "@/components/landing/AtrativosSection";
import EventosSection from "@/components/landing/EventosSection";
import StatusObraSection from "@/components/landing/StatusObraSection";
import LocalizacaoSection from "@/components/landing/LocalizacaoSection";
import CTASection from "@/components/landing/CTASection";
import ContatoSection from "@/components/landing/ContatoSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div>
    <Navbar />
    <HeroSection />
    <DestaqueSection />
    <PistaSection />
    <ConhecaSection />
    <AtrativosSection />
      <EventosSection />
      <StatusObraSection />
    <LocalizacaoSection />
    <CTASection />
    <ContatoSection />
    <Footer />
  </div>
);

export default Index;
