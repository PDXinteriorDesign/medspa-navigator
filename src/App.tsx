
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceLocationDetail from "./pages/ServiceLocationDetail";
import MedSpas from "./pages/MedSpas";
import MedSpaDetail from "./pages/MedSpaDetail";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="services/:serviceSlug-in-:location" element={<ServiceLocationDetail />} />
            <Route path="locations" element={<Locations />} />
            <Route path="locations/:locationSlug" element={<LocationDetail />} />
            <Route path="medspas" element={<MedSpas />} />
            <Route path="medspas/:medSpaSlug" element={<MedSpaDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
