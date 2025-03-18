
import React from "react";
import { Route, Navigate } from "react-router-dom";

// Location Landing Pages
import ManhattanLanding from "../pages/locations/Manhattan";
import SoHoLanding from "../pages/locations/SoHo";
import UpperEastSideLanding from "../pages/locations/UpperEastSide";
import TribecaLanding from "../pages/locations/Tribeca";
import MidtownLanding from "../pages/locations/Midtown";
import BrooklynLanding from "../pages/locations/Brooklyn";
import WilliamsburgLanding from "../pages/locations/Williamsburg";
import HamptonsLanding from "../pages/locations/Hamptons";

const LocationLandingRoutes = (
  <>
    {/* Redirect legacy /locations/ routes to the direct URL */}
    <Route path="locations/manhattan" element={<Navigate to="/manhattan" replace />} />
    <Route path="locations/soho" element={<Navigate to="/soho" replace />} />
    <Route path="locations/upper-east-side" element={<Navigate to="/upper-east-side" replace />} />
    <Route path="locations/tribeca" element={<Navigate to="/tribeca" replace />} />
    <Route path="locations/midtown" element={<Navigate to="/midtown" replace />} />
    <Route path="locations/brooklyn" element={<Navigate to="/brooklyn" replace />} />
    <Route path="locations/williamsburg" element={<Navigate to="/williamsburg" replace />} />
    <Route path="locations/the-hamptons" element={<Navigate to="/the-hamptons" replace />} />
  </>
);

export default LocationLandingRoutes;
