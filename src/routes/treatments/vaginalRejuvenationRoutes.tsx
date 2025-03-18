
import React from "react";
import { Route } from "react-router-dom";

// Vaginal Rejuvenation Location Pages
import VaginalRejuvenationManhattan from "../../pages/treatments/locations/VaginalRejuvenationManhattan";
import VaginalRejuvenationSoHo from "../../pages/treatments/locations/VaginalRejuvenationSoHo";
import VaginalRejuvenationUpperEastSide from "../../pages/treatments/locations/VaginalRejuvenationUpperEastSide";
import VaginalRejuvenationTribeca from "../../pages/treatments/locations/VaginalRejuvenationTribeca";
import VaginalRejuvenationMidtown from "../../pages/treatments/locations/VaginalRejuvenationMidtown";
import VaginalRejuvenationBrooklyn from "../../pages/treatments/locations/VaginalRejuvenationBrooklyn";
import VaginalRejuvenationWilliamsburg from "../../pages/treatments/locations/VaginalRejuvenationWilliamsburg";
import VaginalRejuvenationHamptons from "../../pages/treatments/locations/VaginalRejuvenationHamptons";

const VaginalRejuvenationRoutes = (
  <>
    {/* Vaginal Rejuvenation Location Routes */}
    <Route path="vaginal-rejuvenation/manhattan" element={<VaginalRejuvenationManhattan />} />
    <Route path="vaginal-rejuvenation/soho" element={<VaginalRejuvenationSoHo />} />
    <Route path="vaginal-rejuvenation/tribeca" element={<VaginalRejuvenationTribeca />} />
    <Route path="vaginal-rejuvenation/midtown" element={<VaginalRejuvenationMidtown />} />
    <Route path="vaginal-rejuvenation/upper-east-side" element={<VaginalRejuvenationUpperEastSide />} />
    <Route path="vaginal-rejuvenation/brooklyn" element={<VaginalRejuvenationBrooklyn />} />
    <Route path="vaginal-rejuvenation/williamsburg" element={<VaginalRejuvenationWilliamsburg />} />
    <Route path="vaginal-rejuvenation/hamptons" element={<VaginalRejuvenationHamptons />} />
  </>
);

export default VaginalRejuvenationRoutes;
