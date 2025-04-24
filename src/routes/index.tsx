
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
import FlushingLanding from "../pages/locations/Flushing";

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
        
        {/* Treatment location pages - must be BEFORE the catch-all clinic route */}
        {TreatmentLocationRoutes}
        
        <Route path="locations" element={<Locations />} />
        
        {/* Direct location URLs - place BEFORE the clinic detail route to avoid conflicts */}
        <Route path="manhattan" element={<ManhattanLanding />} />
        <Route path="soho" element={<SoHoLanding />} />
        <Route path="upper-east-side" element={<UpperEastSideLanding />} />
        <Route path="tribeca" element={<TribecaLanding />} />
        <Route path="midtown" element={<MidtownLanding />} />
        <Route path="brooklyn" element={<BrooklynLanding />} />
        <Route path="williamsburg" element={<WilliamsburgLanding />} />
        <Route path="the-hamptons" element={<HamptonsLanding />} />
        <Route path="flushing" element={<FlushingLanding />} />
        
        {/* We ALSO need a route for LocationDetail with the parameter for URL locations/locationSlug */}
        <Route path="locations/:locationSlug" element={<LocationDetail />} />
        
        {/* This route should be more specific to avoid catching treatment location URLs */}
        <Route path=":location/:clinicId" element={<ClinicDetail />} />
        
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
