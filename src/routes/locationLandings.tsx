
import React from "react";
import { Route } from "react-router-dom";

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
    <Route path="locations/manhattan" element={<ManhattanLanding />} />
    <Route path="locations/soho" element={<SoHoLanding />} />
    <Route path="locations/upper-east-side" element={<UpperEastSideLanding />} />
    <Route path="locations/tribeca" element={<TribecaLanding />} />
    <Route path="locations/midtown" element={<MidtownLanding />} />
    <Route path="locations/brooklyn" element={<BrooklynLanding />} />
    <Route path="locations/williamsburg" element={<WilliamsburgLanding />} />
    <Route path="locations/the-hamptons" element={<HamptonsLanding />} />
  </>
);

export default LocationLandingRoutes;
