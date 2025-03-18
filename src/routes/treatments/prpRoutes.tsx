
import React from "react";
import { Route } from "react-router-dom";

// PRP Location Pages
import PrpManhattan from "../../pages/treatments/locations/PrpManhattan";
import PrpSoHo from "../../pages/treatments/locations/PrpSoHo";
import PrpUpperEastSide from "../../pages/treatments/locations/PrpUpperEastSide";
import PrpTribeca from "../../pages/treatments/locations/PrpTribeca";
import PrpMidtown from "../../pages/treatments/locations/PrpMidtown";
import PrpBrooklyn from "../../pages/treatments/locations/PrpBrooklyn";
import PrpWilliamsburg from "../../pages/treatments/locations/PrpWilliamsburg";
import PrpHamptons from "../../pages/treatments/locations/PrpHamptons";

const PrpRoutes = (
  <>
    {/* PRP Location Routes */}
    <Route path="prp/manhattan" element={<PrpManhattan />} />
    <Route path="prp/soho" element={<PrpSoHo />} />
    <Route path="prp/tribeca" element={<PrpTribeca />} />
    <Route path="prp/upper-east-side" element={<PrpUpperEastSide />} />
    <Route path="prp/midtown" element={<PrpMidtown />} />
    <Route path="prp/brooklyn" element={<PrpBrooklyn />} />
    <Route path="prp/williamsburg" element={<PrpWilliamsburg />} />
    <Route path="prp/hamptons" element={<PrpHamptons />} />
  </>
);

export default PrpRoutes;
