import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import TrustedBy from "@/components/TrustedBy";
import ClientsStrip from "@/components/ClientsStrip";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import StatsBar from "@/components/StatsBar";
import ConstructionServices from "@/components/ConstructionServices";
import OutsourcingServices from "@/components/OutsourcingServices";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutTeam from "@/components/AboutTeam";
import Contact from "@/components/Contact";
import BeforeFooter from "@/components/BeforeFooter";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WelcomePopup from "@/components/WelcomePopup";

export default function Home() {
  return (
    <main className="flex-1">
      <WelcomePopup />
      <Navbar />
      <BackToTop />
      <div className="h-screen flex flex-col">
        <Hero />
      </div>
      <FeaturesBar />
      <TrustedBy />
      <ClientsStrip />
      <ServicesSnapshot />
      <StatsBar />
      <ConstructionServices />
      <OutsourcingServices />
      <FeaturedProjects />
      <AboutTeam />
      <div id="careers" />
      <Contact />
      <BeforeFooter />
      <Footer />
    </main>
  );
}
