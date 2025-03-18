
import React from "react";
import { Route } from "react-router-dom";

// Carbon Laser Facial Location Pages
import CarbonLaserFacialManhattan from "../../pages/treatments/locations/CarbonLaserFacialManhattan";
import CarbonLaserFacialSoHo from "../../pages/treatments/locations/CarbonLaserFacialSoHo";
import CarbonLaserFacialUpperEastSide from "../../pages/treatments/locations/CarbonLaserFacialUpperEastSide";
import CarbonLaserFacialTribeca from "../../pages/treatments/locations/CarbonLaserFacialTribeca";
import CarbonLaserFacialMidtown from "../../pages/treatments/locations/CarbonLaserFacialMidtown";
import CarbonLaserFacialBrooklyn from "../../pages/treatments/locations/CarbonLaserFacialBrooklyn";
import CarbonLaserFacialWilliamsburg from "../../pages/treatments/locations/CarbonLaserFacialWilliamsburg";
import CarbonLaserFacialHamptons from "../../pages/treatments/locations/CarbonLaserFacialHamptons";

const CarbonLaserFacialRoutes = (
  <>
    {/* Carbon Laser Facial Location Routes */}
    <Route path="carbon-laser-facial/manhattan" element={<CarbonLaserFacialManhattan />} />
    <Route path="carbon-laser-facial/soho" element={<CarbonLaserFacialSoHo />} />
    <Route path="carbon-laser-facial/tribeca" element={<CarbonLaserFacialTribeca />} />
    <Route path="carbon-laser-facial/upper-east-side" element={<CarbonLaserFacialUpperEastSide />} />
    <Route path="carbon-laser-facial/midtown" element={<CarbonLaserFacialMidtown />} />
    <Route path="carbon-laser-facial/brooklyn" element={<CarbonLaserFacialBrooklyn />} />
    <Route path="carbon-laser-facial/williamsburg" element={<CarbonLaserFacialWilliamsburg />} />
    <Route path="carbon-laser-facial/hamptons" element={<CarbonLaserFacialHamptons />} />
  </>
);

export default CarbonLaserFacialRoutes;
