import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoWeServe from "@/components/WhoWeServe";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ProblemsSection from "@/components/ProblemsSection";
import WhyProblemsHappen from "@/components/WhyProblemsHappen";
import ExecutionPhilosophy from "@/components/ExecutionPhilosophy";
import InstallationProcess from "@/components/InstallationProcess";
import MaintenanceService from "@/components/MaintenanceService";
import AMCSection from "@/components/AMCSection";
import ComparisonTable from "@/components/ComparisonTable";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhoWeServe />
        <WhatWeDoSection />
        <ProblemsSection />
        <WhyProblemsHappen />
        <ExecutionPhilosophy />
        <InstallationProcess />
        <MaintenanceService />
        <AMCSection />
        <ComparisonTable />
        <WhyChooseUs />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
