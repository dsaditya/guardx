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
import Contact from "./pages/Contact";
import PartnerWithUs from "./pages/PartnerWithUs";
import NotFound from "./pages/NotFound";

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
              <Route path="/why-guardx360" element={<WhyGuardX360 />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/knowledge-center" element={<KnowledgeCenter />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/partner-with-us" element={<PartnerWithUs />} />
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
