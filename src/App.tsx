import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import IslamicValuesPage from "./pages/IslamicValuesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import EventPage from "./pages/EventPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import GalleryPage from "./pages/GalleryPage";

const queryClient = new QueryClient();

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  
    // Reset loading state
    setLoading(true);
  
    const loadingTime = isInitialLoad ? 2000 : 500;
  
    const timer = setTimeout(() => {
      setLoading(false);
      setIsInitialLoad(false);
    }, loadingTime);
  
    return () => clearTimeout(timer);
  }, [location.pathname, isInitialLoad]);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onLoadingComplete={handleLoadingComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/islamic-values" element={<IslamicValuesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/Event" element={<EventPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
