import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "@/components/ScrollToHash";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyGuardX360 from "./pages/WhyGuardX360";
import CaseStudies from "./pages/CaseStudies";
import KnowledgeCenter from "./pages/KnowledgeCenter";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import ChecklistsIndex from "./pages/ChecklistsIndex";
import ChecklistDetail from "./pages/ChecklistDetail";
import Contact from "./pages/Contact";
import PartnerWithUs from "./pages/PartnerWithUs";
import JoinOurTeam from "./pages/JoinOurTeam";
import ChannelPartner from "./pages/ChannelPartner";
import BecomeADealer from "./pages/BecomeADealer";
import NotFound from "./pages/NotFound";
import CCTVSurveillance from "./pages/services/CCTVSurveillance";
import BoomBarrier from "./pages/services/BoomBarrier";
import BiometricAccess from "./pages/services/BiometricAccess";
import SolarFencing from "./pages/services/SolarFencing";
import AnprUhf from "./pages/services/AnprUhf";
import AMC from "./pages/services/AMC";
import AssessmentModernization from "./pages/services/AssessmentModernization";
import HealthScore from "./pages/services/HealthScore";
import ChecklistHub from "./pages/ChecklistHub";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/cctv-surveillance" element={<CCTVSurveillance />} />
              <Route path="/services/boom-barrier-vehicle-access" element={<BoomBarrier />} />
              <Route path="/services/biometric-access-control" element={<BiometricAccess />} />
              <Route path="/services/solar-fencing" element={<SolarFencing />} />
              <Route path="/services/anpr-uhf-vehicle-access" element={<AnprUhf />} />
              <Route path="/services/annual-maintenance-contracts" element={<AMC />} />
              <Route path="/services/security-assessment-modernization" element={<AssessmentModernization />} />
              <Route path="/services/security-health-score" element={<HealthScore />} />
              <Route path="/why-guardx360" element={<WhyGuardX360 />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/knowledge-center" element={<KnowledgeCenter />} />
              <Route path="/knowledge-center/blog" element={<BlogIndex />} />
              <Route path="/knowledge-center/blog/:slug" element={<BlogPost />} />
              <Route path="/knowledge-center/checklists-guides" element={<ChecklistsIndex />} />
              <Route path="/knowledge-center/checklists-guides/:slug" element={<ChecklistDetail />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/partner-with-us" element={<PartnerWithUs />} />
              <Route path="/partner-with-us/join-our-team" element={<JoinOurTeam />} />
              <Route path="/partner-with-us/channel-partner" element={<ChannelPartner />} />
              <Route path="/partner-with-us/become-a-dealer" element={<BecomeADealer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
