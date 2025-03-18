
import React from "react";
import { Route } from "react-router-dom";

// Laser Resurfacing Location Pages
import LaserResurfacingManhattan from "../../pages/treatments/locations/LaserResurfacingManhattan";
import LaserResurfacingSoHo from "../../pages/treatments/locations/LaserResurfacingSoHo";
import LaserResurfacingUpperEastSide from "../../pages/treatments/locations/LaserResurfacingUpperEastSide";
import LaserResurfacingTribeca from "../../pages/treatments/locations/LaserResurfacingTribeca";
import LaserResurfacingMidtown from "../../pages/treatments/locations/LaserResurfacingMidtown";
import LaserResurfacingBrooklyn from "../../pages/treatments/locations/LaserResurfacingBrooklyn";
import LaserResurfacingWilliamsburg from "../../pages/treatments/locations/LaserResurfacingWilliamsburg";
import LaserResurfacingHamptons from "../../pages/treatments/locations/LaserResurfacingHamptons";

const LaserResurfacingRoutes = (
  <>
    {/* Laser Resurfacing Location Routes */}
    <Route path="laser-resurfacing/manhattan" element={<LaserResurfacingManhattan />} />
    <Route path="laser-resurfacing/soho" element={<LaserResurfacingSoHo />} />
    <Route path="laser-resurfacing/upper-east-side" element={<LaserResurfacingUpperEastSide />} />
    <Route path="laser-resurfacing/tribeca" element={<LaserResurfacingTribeca />} />
    <Route path="laser-resurfacing/midtown" element={<LaserResurfacingMidtown />} />
    <Route path="laser-resurfacing/brooklyn" element={<LaserResurfacingBrooklyn />} />
    <Route path="laser-resurfacing/williamsburg" element={<LaserResurfacingWilliamsburg />} />
    <Route path="laser-resurfacing/the-hamptons" element={<LaserResurfacingHamptons />} />
    <Route path="laser-resurfacing-in-manhattan" element={<LaserResurfacingManhattan />} />
    <Route path="laser-resurfacing-in-soho" element={<LaserResurfacingSoHo />} />
    <Route path="laser-resurfacing-in-upper-east-side" element={<LaserResurfacingUpperEastSide />} />
    <Route path="laser-resurfacing-in-tribeca" element={<LaserResurfacingTribeca />} />
    <Route path="laser-resurfacing-in-midtown" element={<LaserResurfacingMidtown />} />
    <Route path="laser-resurfacing-in-brooklyn" element={<LaserResurfacingBrooklyn />} />
    <Route path="laser-resurfacing-in-williamsburg" element={<LaserResurfacingWilliamsburg />} />
    <Route path="laser-resurfacing-in-the-hamptons" element={<LaserResurfacingHamptons />} />
  </>
);

export default LaserResurfacingRoutes;
