
import React from "react";
import { Route } from "react-router-dom";

// Weight Management Location Pages
import WeightManagementManhattan from "../../pages/treatments/locations/WeightManagementManhattan";
import WeightManagementSoHo from "../../pages/treatments/locations/WeightManagementSoHo";
import WeightManagementUpperEastSide from "../../pages/treatments/locations/WeightManagementUpperEastSide";
import WeightManagementTribeca from "../../pages/treatments/locations/WeightManagementTribeca";
import WeightManagementMidtown from "../../pages/treatments/locations/WeightManagementMidtown";
import WeightManagementBrooklyn from "../../pages/treatments/locations/WeightManagementBrooklyn";
import WeightManagementWilliamsburg from "../../pages/treatments/locations/WeightManagementWilliamsburg";
import WeightManagementHamptons from "../../pages/treatments/locations/WeightManagementHamptons";

const WeightManagementRoutes = (
  <>
    {/* Weight Management Location Routes */}
    <Route path="weight-management/manhattan" element={<WeightManagementManhattan />} />
    <Route path="weight-management/soho" element={<WeightManagementSoHo />} />
    <Route path="weight-management/tribeca" element={<WeightManagementTribeca />} />
    <Route path="weight-management/upper-east-side" element={<WeightManagementUpperEastSide />} />
    <Route path="weight-management/midtown" element={<WeightManagementMidtown />} />
    <Route path="weight-management/brooklyn" element={<WeightManagementBrooklyn />} />
    <Route path="weight-management/williamsburg" element={<WeightManagementWilliamsburg />} />
    <Route path="weight-management/hamptons" element={<WeightManagementHamptons />} />
  </>
);

export default WeightManagementRoutes;
