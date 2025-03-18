
import React from "react";
import { Route } from "react-router-dom";

// Laser Hair Removal Location Pages
import LaserHairRemovalManhattan from "../../pages/treatments/locations/LaserHairRemovalManhattan";
import LaserHairRemovalSoHo from "../../pages/treatments/locations/LaserHairRemovalSoHo";
import LaserHairRemovalUpperEastSide from "../../pages/treatments/locations/LaserHairRemovalUpperEastSide";
import LaserHairRemovalTribeca from "../../pages/treatments/locations/LaserHairRemovalTribeca";
import LaserHairRemovalMidtown from "../../pages/treatments/locations/LaserHairRemovalMidtown";
import LaserHairRemovalBrooklyn from "../../pages/treatments/locations/LaserHairRemovalBrooklyn";
import LaserHairRemovalWilliamsburg from "../../pages/treatments/locations/LaserHairRemovalWilliamsburg";
import LaserHairRemovalHamptons from "../../pages/treatments/locations/LaserHairRemovalHamptons";

const LaserHairRemovalRoutes = (
  <>
    {/* Laser Hair Removal Location Routes */}
    <Route path="laser-hair-removal/manhattan" element={<LaserHairRemovalManhattan />} />
    <Route path="laser-hair-removal/soho" element={<LaserHairRemovalSoHo />} />
    <Route path="laser-hair-removal/tribeca" element={<LaserHairRemovalTribeca />} />
    <Route path="laser-hair-removal/upper-east-side" element={<LaserHairRemovalUpperEastSide />} />
    <Route path="laser-hair-removal/midtown" element={<LaserHairRemovalMidtown />} />
    <Route path="laser-hair-removal/brooklyn" element={<LaserHairRemovalBrooklyn />} />
    <Route path="laser-hair-removal/williamsburg" element={<LaserHairRemovalWilliamsburg />} />
    <Route path="laser-hair-removal/hamptons" element={<LaserHairRemovalHamptons />} />
  </>
);

export default LaserHairRemovalRoutes;
