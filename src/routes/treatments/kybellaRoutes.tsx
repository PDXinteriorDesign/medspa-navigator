
import React from "react";
import { Route } from "react-router-dom";

// Kybella Location Pages
import KybellaManhattan from "../../pages/treatments/locations/KybellaManhattan";
import KybellaSoHo from "../../pages/treatments/locations/KybellaSoHo";
import KybellaUpperEastSide from "../../pages/treatments/locations/KybellaUpperEastSide";
import KybellaTribeca from "../../pages/treatments/locations/KybellaTribeca";
import KybellaMidtown from "../../pages/treatments/locations/KybellaMidtown";
import KybellaBrooklyn from "../../pages/treatments/locations/KybellaBrooklyn";
import KybellaWilliamsburg from "../../pages/treatments/locations/KybellaWilliamsburg";
import KybellaHamptons from "../../pages/treatments/locations/KybellaHamptons";

const KybellaRoutes = (
  <>
    {/* Kybella Location Routes */}
    <Route path="kybella/manhattan" element={<KybellaManhattan />} />
    <Route path="kybella/soho" element={<KybellaSoHo />} />
    <Route path="kybella/tribeca" element={<KybellaTribeca />} />
    <Route path="kybella/upper-east-side" element={<KybellaUpperEastSide />} />
    <Route path="kybella/midtown" element={<KybellaMidtown />} />
    <Route path="kybella/brooklyn" element={<KybellaBrooklyn />} />
    <Route path="kybella/williamsburg" element={<KybellaWilliamsburg />} />
    <Route path="kybella/hamptons" element={<KybellaHamptons />} />
  </>
);

export default KybellaRoutes;
