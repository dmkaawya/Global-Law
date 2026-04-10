import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ComingSoon from "./pages/ComingSoon";
import CountrySelector from "./pages/CountrySelector";
import LKCategories from "./pages/LKCategories";
import LKCyber from "./pages/LKCyber";
import LKHome from "./pages/LKHome";
import LKLawDetails from "./pages/LKLawDetails";
import LKAbout from "./pages/LKAbout";
import LKContact from "./pages/LKContact";
import LKCourtSystem from "./pages/LKCourtSystem";
import LKCredits from "./pages/LKCredits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/countries" element={<CountrySelector />} />
          <Route path="/lk" element={<LKHome />} />
          <Route path="/lk/categories" element={<LKCategories />} />
          <Route path="/lk/cyber" element={<LKCyber />} />
          <Route path="/lk/law/:id" element={<LKLawDetails />} />
          <Route path="/lk/about" element={<LKAbout />} />
          <Route path="/lk/contact" element={<LKContact />} />
          <Route path="/lk/court-system" element={<LKCourtSystem />} />
          <Route path="/lk/credits" element={<LKCredits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
