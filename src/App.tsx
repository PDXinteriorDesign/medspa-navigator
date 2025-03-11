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
import NeighborhoodDetail from "./pages/NeighborhoodDetail";
import NotFound from "./pages/NotFound";

// Treatment Pages
import BotoxPage from "./pages/treatments/BotoxPage";
import CoolSculptingPage from "./pages/treatments/CoolSculptingPage";
import LaserHairRemovalPage from "./pages/treatments/LaserHairRemovalPage";
import SkinResurfacingPage from "./pages/treatments/SkinResurfacingPage";

// Injectable Treatment Pages
import MicroBotoxPage from "./pages/treatments/MicroBotoxPage";
import FillersPage from "./pages/treatments/FillersPage";
import KybellaPage from "./pages/treatments/KybellaPage";
import PrpPage from "./pages/treatments/PrpPage";

// Laser Treatment Pages
import PhotofacialsPage from "./pages/treatments/PhotofacialsPage";

// Facial Treatment Pages
import ChemicalPeelsPage from "./pages/treatments/ChemicalPeelsPage";
import HydrofacialsPage from "./pages/treatments/HydrofacialsPage";

// Location Landing Pages
import ManhattanLanding from "./pages/locations/Manhattan";
import SoHoLanding from "./pages/locations/SoHo";
import UpperEastSideLanding from "./pages/locations/UpperEastSide";
import TribecaLanding from "./pages/locations/Tribeca";
import MidtownLanding from "./pages/locations/Midtown";
import BrooklynLanding from "./pages/locations/Brooklyn";
import WilliamsburgLanding from "./pages/locations/Williamsburg";
import ParkSlopeLanding from "./pages/locations/ParkSlope";
import HamptonsLanding from "./pages/locations/Hamptons";

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
            
            {/* Original Treatment Pages */}
            <Route path="services/botox" element={<BotoxPage />} />
            <Route path="services/coolsculpting" element={<CoolSculptingPage />} />
            <Route path="services/laser-hair-removal" element={<LaserHairRemovalPage />} />
            <Route path="services/skin-resurfacing" element={<SkinResurfacingPage />} />
            
            {/* Injectable Treatment Pages */}
            <Route path="services/micro-botox" element={<MicroBotoxPage />} />
            <Route path="services/fillers" element={<FillersPage />} />
            <Route path="services/kybella" element={<KybellaPage />} />
            <Route path="services/prp" element={<PrpPage />} />
            
            {/* Laser Treatment Pages */}
            <Route path="services/photofacials" element={<PhotofacialsPage />} />
            
            {/* Facial Treatment Pages */}
            <Route path="services/chemical-peels" element={<ChemicalPeelsPage />} />
            <Route path="services/hydrofacials" element={<HydrofacialsPage />} />
            
            <Route path="locations" element={<Locations />} />
            <Route path="locations/:locationSlug" element={<LocationDetail />} />
            <Route path="locations/:locationSlug/:neighborhoodSlug" element={<NeighborhoodDetail />} />
            <Route path="medspas" element={<MedSpas />} />
            <Route path="medspas/:medSpaSlug" element={<MedSpaDetail />} />
            
            <Route path="locations/manhattan" element={<ManhattanLanding />} />
            <Route path="locations/soho" element={<SoHoLanding />} />
            <Route path="locations/upper-east-side" element={<UpperEastSideLanding />} />
            <Route path="locations/tribeca" element={<TribecaLanding />} />
            <Route path="locations/midtown" element={<MidtownLanding />} />
            <Route path="locations/brooklyn" element={<BrooklynLanding />} />
            <Route path="locations/williamsburg" element={<WilliamsburgLanding />} />
            <Route path="locations/park-slope" element={<ParkSlopeLanding />} />
            <Route path="locations/the-hamptons" element={<HamptonsLanding />} />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
