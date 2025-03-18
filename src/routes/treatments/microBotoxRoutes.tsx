
import React from "react";
import { Route } from "react-router-dom";

// MicroBotox Location Pages
import MicroBotoxManhattan from "../../pages/treatments/locations/MicroBotoxManhattan";
import MicroBotoxSoHo from "../../pages/treatments/locations/MicroBotoxSoHo";
import MicroBotoxUpperEastSide from "../../pages/treatments/locations/MicroBotoxUpperEastSide";
import MicroBotoxTribeca from "../../pages/treatments/locations/MicroBotoxTribeca";
import MicroBotoxMidtown from "../../pages/treatments/locations/MicroBotoxMidtown";
import MicroBotoxBrooklyn from "../../pages/treatments/locations/MicroBotoxBrooklyn";
import MicroBotoxWilliamsburg from "../../pages/treatments/locations/MicroBotoxWilliamsburg";
import MicroBotoxHamptons from "../../pages/treatments/locations/MicroBotoxHamptons";

const MicroBotoxRoutes = (
  <>
    {/* MicroBotox Location Routes */}
    <Route path="micro-botox/manhattan" element={<MicroBotoxManhattan />} />
    <Route path="micro-botox/soho" element={<MicroBotoxSoHo />} />
    <Route path="micro-botox/tribeca" element={<MicroBotoxTribeca />} />
    <Route path="micro-botox/upper-east-side" element={<MicroBotoxUpperEastSide />} />
    <Route path="micro-botox/midtown" element={<MicroBotoxMidtown />} />
    <Route path="micro-botox/brooklyn" element={<MicroBotoxBrooklyn />} />
    <Route path="micro-botox/williamsburg" element={<MicroBotoxWilliamsburg />} />
    <Route path="micro-botox/hamptons" element={<MicroBotoxHamptons />} />
  </>
);

export default MicroBotoxRoutes;
