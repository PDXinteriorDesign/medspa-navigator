
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceLocationDetail from "./pages/ServiceLocationDetail";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import NeighborhoodDetail from "./pages/NeighborhoodDetail";
import NotFound from "./pages/NotFound";

// Treatment Pages
import BotoxPage from "./pages/treatments/BotoxPage";
import CoolSculptingPage from "./pages/treatments/CoolSculptingPage";
import LaserHairRemovalPage from "./pages/treatments/LaserHairRemovalPage";
import CarbonLaserFacialPage from "./pages/treatments/CarbonLaserFacialPage";
import VaginalRejuvenationPage from "./pages/treatments/VaginalRejuvenationPage";
import WeightManagementPage from "./pages/treatments/WeightManagementPage";
import RadioUltrasoundTherapyPage from "./pages/treatments/RadioUltrasoundTherapyPage";
import LaserResurfacingPage from "./pages/treatments/LaserResurfacingPage";
import MicrodermabrasionPage from "./pages/treatments/MicrodermabrasionPage";
import MicroneedlingPage from "./pages/treatments/MicroneedlingPage";

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
            <Route path="about" element={<About />} />
            <Route path="treatments" element={<Services />} />
            <Route path="treatments/:serviceSlug" element={<ServiceDetail />} />
            <Route path="treatments/:serviceSlug-in-:location" element={<ServiceLocationDetail />} />
            
            <Route path="treatments/botox" element={<BotoxPage />} />
            <Route path="treatments/coolsculpting" element={<CoolSculptingPage />} />
            <Route path="treatments/laser-hair-removal" element={<LaserHairRemovalPage />} />
            <Route path="treatments/carbon-laser-facial" element={<CarbonLaserFacialPage />} />
            <Route path="treatments/vaginal-rejuvenation" element={<VaginalRejuvenationPage />} />
            <Route path="treatments/weight-management" element={<WeightManagementPage />} />
            <Route path="treatments/radio-ultrasound-therapy" element={<RadioUltrasoundTherapyPage />} />
            <Route path="treatments/laser-resurfacing" element={<LaserResurfacingPage />} />
            <Route path="treatments/microdermabrasion" element={<MicrodermabrasionPage />} />
            <Route path="treatments/microneedling" element={<MicroneedlingPage />} />
            
            <Route path="treatments/micro-botox" element={<MicroBotoxPage />} />
            <Route path="treatments/fillers" element={<FillersPage />} />
            <Route path="treatments/kybella" element={<KybellaPage />} />
            <Route path="treatments/prp" element={<PrpPage />} />
            
            <Route path="treatments/photofacials" element={<PhotofacialsPage />} />
            
            <Route path="treatments/chemical-peels" element={<ChemicalPeelsPage />} />
            <Route path="treatments/hydrofacials" element={<HydrofacialsPage />} />
            
            <Route path="locations" element={<Locations />} />
            <Route path="locations/:locationSlug" element={<LocationDetail />} />
            <Route path="locations/:locationSlug/:neighborhoodSlug" element={<NeighborhoodDetail />} />
            
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
