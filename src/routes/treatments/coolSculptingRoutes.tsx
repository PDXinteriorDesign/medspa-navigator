
import React from "react";
import { Route } from "react-router-dom";

// CoolSculpting Location Pages
import CoolSculptingManhattan from "../../pages/treatments/locations/CoolSculptingManhattan";
import CoolSculptingSoHo from "../../pages/treatments/locations/CoolSculptingSoHo";
import CoolSculptingUpperEastSide from "../../pages/treatments/locations/CoolSculptingUpperEastSide";
import CoolSculptingTribeca from "../../pages/treatments/locations/CoolSculptingTribeca";
import CoolSculptingMidtown from "../../pages/treatments/locations/CoolSculptingMidtown";
import CoolSculptingBrooklyn from "../../pages/treatments/locations/CoolSculptingBrooklyn";
import CoolSculptingWilliamsburg from "../../pages/treatments/locations/CoolSculptingWilliamsburg";
import CoolSculptingHamptons from "../../pages/treatments/locations/CoolSculptingHamptons";

const CoolSculptingRoutes = (
  <>
    {/* CoolSculpting Location Routes */}
    <Route path="coolsculpting/manhattan" element={<CoolSculptingManhattan />} />
    <Route path="coolsculpting/soho" element={<CoolSculptingSoHo />} />
    <Route path="coolsculpting/upper-east-side" element={<CoolSculptingUpperEastSide />} />
    <Route path="coolsculpting/tribeca" element={<CoolSculptingTribeca />} />
    <Route path="coolsculpting/midtown" element={<CoolSculptingMidtown />} />
    <Route path="coolsculpting/brooklyn" element={<CoolSculptingBrooklyn />} />
    <Route path="coolsculpting/williamsburg" element={<CoolSculptingWilliamsburg />} />
    <Route path="coolsculpting/hamptons" element={<CoolSculptingHamptons />} />
    <Route path="coolsculpting-in-manhattan" element={<CoolSculptingManhattan />} />
    <Route path="coolsculpting-in-soho" element={<CoolSculptingSoHo />} />
    <Route path="coolsculpting-in-upper-east-side" element={<CoolSculptingUpperEastSide />} />
    <Route path="coolsculpting-in-tribeca" element={<CoolSculptingTribeca />} />
    <Route path="coolsculpting-in-midtown" element={<CoolSculptingMidtown />} />
    <Route path="coolsculpting-in-brooklyn" element={<CoolSculptingBrooklyn />} />
    <Route path="coolsculpting-in-williamsburg" element={<CoolSculptingWilliamsburg />} />
    <Route path="coolsculpting-in-the-hamptons" element={<CoolSculptingHamptons />} />
  </>
);

export default CoolSculptingRoutes;
