
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import ServiceLocationDetail from "../pages/ServiceLocationDetail";
import Locations from "../pages/Locations";
import NotFound from "../pages/NotFound";
import FAQ from "../pages/FAQ";
import ClinicDetail from "../pages/ClinicDetail";

// Import route groups
import TreatmentRoutes from "./treatments";
import TreatmentLocationRoutes from "./treatmentLocations";
import LocationLandingRoutes from "./locationLandings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="treatments" element={<Services />} />
        <Route path="treatments/:serviceSlug" element={<ServiceDetail />} />
        
        <Route path="treatments/:serviceSlug/:location" element={<ServiceLocationDetail />} />
        <Route path="treatments/:serviceSlug-in-:location" element={<ServiceLocationDetail />} />
        
        <Route path=":serviceSlug/:location" element={<ServiceLocationDetail />} />
        
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
        
        <Route path=":location/:clinicId" element={<ClinicDetail />} />
        
        {/* Location landing pages */}
        {LocationLandingRoutes}
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
