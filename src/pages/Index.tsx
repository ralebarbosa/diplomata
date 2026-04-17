import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import DestaqueSection from "@/components/landing/DestaqueSection";
import PistaSection from "@/components/landing/PistaSection";
import ConhecaSection from "@/components/landing/ConhecaSection";
import ProjetoArquitetonicoSection from "@/components/landing/ProjetoArquitetonicoSection";
import PlanosSection from "@/components/landing/PlanosSection";
import LocalizacaoAcessoSection from "@/components/landing/LocalizacaoAcessoSection";
import EventosSection from "@/components/landing/EventosSection";
import StatusObraSection from "@/components/landing/StatusObraSection";
import LocalizacaoSection from "@/components/landing/LocalizacaoSection";
import GaleriaSection from "@/components/landing/GaleriaSection";
import CTASection from "@/components/landing/CTASection";
import ContatoSection from "@/components/landing/ContatoSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div>
    <Navbar />
    <HeroSection />
    <DestaqueSection />
    <ConhecaSection />
    <PlanosSection />
    <LocalizacaoAcessoSection />
    <ProjetoArquitetonicoSection />
    <EventosSection />
    <StatusObraSection />
    <PistaSection />
    <LocalizacaoSection />
    <GaleriaSection />
    <CTASection />
    <ContatoSection />
    <Footer />
  </div>
);

export default Index;
