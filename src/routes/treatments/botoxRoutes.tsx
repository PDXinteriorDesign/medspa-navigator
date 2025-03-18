
import React from "react";
import { Route } from "react-router-dom";

// Botox Location Pages
import BotoxManhattan from "../../pages/treatments/locations/BotoxManhattan";
import BotoxSoHo from "../../pages/treatments/locations/BotoxSoHo";
import BotoxUpperEastSide from "../../pages/treatments/locations/BotoxUpperEastSide";
import BotoxTribeca from "../../pages/treatments/locations/BotoxTribeca";
import BotoxMidtown from "../../pages/treatments/locations/BotoxMidtown";
import BotoxBrooklyn from "../../pages/treatments/locations/BotoxBrooklyn";
import BotoxWilliamsburg from "../../pages/treatments/locations/BotoxWilliamsburg";
import BotoxHamptons from "../../pages/treatments/locations/BotoxHamptons";

const BotoxRoutes = (
  <>
    {/* Botox Location Routes */}
    <Route path="botox/manhattan" element={<BotoxManhattan />} />
    <Route path="botox/soho" element={<BotoxSoHo />} />
    <Route path="botox/upper-east-side" element={<BotoxUpperEastSide />} />
    <Route path="botox/tribeca" element={<BotoxTribeca />} />
    <Route path="botox/midtown" element={<BotoxMidtown />} />
    <Route path="botox/brooklyn" element={<BotoxBrooklyn />} />
    <Route path="botox/williamsburg" element={<BotoxWilliamsburg />} />
    <Route path="botox/the-hamptons" element={<BotoxHamptons />} />
    <Route path="botox-in-manhattan" element={<BotoxManhattan />} />
    <Route path="botox-in-soho" element={<BotoxSoHo />} />
    <Route path="botox-in-upper-east-side" element={<BotoxUpperEastSide />} />
    <Route path="botox-in-tribeca" element={<BotoxTribeca />} />
    <Route path="botox-in-midtown" element={<BotoxMidtown />} />
    <Route path="botox-in-brooklyn" element={<BotoxBrooklyn />} />
    <Route path="botox-in-williamsburg" element={<BotoxWilliamsburg />} />
    <Route path="botox-in-the-hamptons" element={<BotoxHamptons />} />
  </>
);

export default BotoxRoutes;
