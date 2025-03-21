
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
    <Route path="treatments/micro-botox/manhattan" element={<MicroBotoxManhattan />} />
    <Route path="treatments/micro-botox/soho" element={<MicroBotoxSoHo />} />
    <Route path="treatments/micro-botox/tribeca" element={<MicroBotoxTribeca />} />
    <Route path="treatments/micro-botox/upper-east-side" element={<MicroBotoxUpperEastSide />} />
    <Route path="treatments/micro-botox/midtown" element={<MicroBotoxMidtown />} />
    <Route path="treatments/micro-botox/brooklyn" element={<MicroBotoxBrooklyn />} />
    <Route path="treatments/micro-botox/williamsburg" element={<MicroBotoxWilliamsburg />} />
    <Route path="treatments/micro-botox/hamptons" element={<MicroBotoxHamptons />} />
  </>
);

export default MicroBotoxRoutes;
