
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import ServiceLocationDetail from "../pages/ServiceLocationDetail";
import Locations from "../pages/Locations";
import LocationDetail from "../pages/LocationDetail";
import NotFound from "../pages/NotFound";
import FAQ from "../pages/FAQ";
import ClinicDetail from "../pages/ClinicDetail";

// Import route groups
import TreatmentRoutes from "./treatments";
import TreatmentLocationRoutes from "./treatmentLocations";
import LocationLandingRoutes from "./locationLandings";

// Import individual location pages
import ManhattanLanding from "../pages/locations/Manhattan";
import SoHoLanding from "../pages/locations/SoHo";
import UpperEastSideLanding from "../pages/locations/UpperEastSide";
import TribecaLanding from "../pages/locations/Tribeca";
import MidtownLanding from "../pages/locations/Midtown";
import BrooklynLanding from "../pages/locations/Brooklyn";
import WilliamsburgLanding from "../pages/locations/Williamsburg";
import HamptonsLanding from "../pages/locations/Hamptons";
import ChelseaLanding from "../pages/locations/Chelsea"; 
import MontaukLanding from "../pages/locations/Montauk";
import UpperWestSideLanding from "../pages/locations/UpperWestSide";
import SouthamptonLanding from "../pages/locations/Southampton";
import EastHamptonLanding from "../pages/locations/EastHampton";
import BridgehamptonSagHarborLanding from "../pages/locations/BridgehamptonSagHarbor";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="treatments" element={<Services />} />
        <Route path="treatments/:serviceSlug" element={<ServiceDetail />} />
        
        {/* Treatment location routes */}
        <Route path="treatments/:serviceSlug/:location" element={<ServiceLocationDetail />} />
        <Route path="treatments/:serviceSlug-in-:location" element={<ServiceLocationDetail />} />
        
        {/* Legacy redirects */}
        <Route 
          path="services/:serviceSlug-in-:location" 
          element={<Navigate to="/treatments/:serviceSlug-in-:location" replace />} 
        />
        <Route 
          path="services/:serviceSlug/:location" 
          element={<Navigate to="/treatments/:serviceSlug/:location" replace />} 
        />
        
        <Route path="faq" element={<FAQ />} />
        
        {/* Treatment type pages */}
        {TreatmentRoutes}
        
        {/* Treatment location pages */}
        {TreatmentLocationRoutes}
        
        <Route path="locations" element={<Locations />} />
        
        {/* Redirect location pages with 'locations/' prefix to direct URL */}
        <Route path="locations/:locationSlug" element={<Navigate to="/:locationSlug" replace />} />
        
        {/* Direct location URLs - place BEFORE the clinic detail route to avoid conflicts */}
        <Route path="manhattan" element={<ManhattanLanding />} />
        <Route path="soho" element={<SoHoLanding />} />
        <Route path="upper-east-side" element={<UpperEastSideLanding />} />
        <Route path="tribeca" element={<TribecaLanding />} />
        <Route path="midtown" element={<MidtownLanding />} />
        <Route path="brooklyn" element={<BrooklynLanding />} />
        <Route path="williamsburg" element={<WilliamsburgLanding />} />
        <Route path="the-hamptons" element={<HamptonsLanding />} />
        <Route path="chelsea" element={<ChelseaLanding />} />
        <Route path="montauk" element={<MontaukLanding />} />
        <Route path="upper-west-side" element={<UpperWestSideLanding />} />
        <Route path="southampton" element={<SouthamptonLanding />} />
        <Route path="east-hampton" element={<EastHamptonLanding />} />
        <Route path="bridgehampton-sag-harbor" element={<BridgehamptonSagHarborLanding />} />
        
        {/* Clinic detail page AFTER specific location routes */}
        <Route path=":location/:clinicId" element={<ClinicDetail />} />
        
        {/* This route should NOT catch location/:clinicId patterns */}
        <Route path=":serviceSlug/:location" element={<ServiceLocationDetail />} />
        
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
