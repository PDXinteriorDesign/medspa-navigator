
import React from "react";
import { Route } from "react-router-dom";

// Botox Location Pages
import BotoxManhattan from "../pages/treatments/locations/BotoxManhattan";
import BotoxBrooklyn from "../pages/treatments/locations/BotoxBrooklyn";
import BotoxSoHo from "../pages/treatments/locations/BotoxSoHo";
import BotoxTribeca from "../pages/treatments/locations/BotoxTribeca";
import BotoxWilliamsburg from "../pages/treatments/locations/BotoxWilliamsburg";
import BotoxMidtown from "../pages/treatments/locations/BotoxMidtown";
import BotoxUpperEastSide from "../pages/treatments/locations/BotoxUpperEastSide";
import BotoxHamptons from "../pages/treatments/locations/BotoxHamptons";

// MicroBotox Location Pages
import MicroBotoxManhattan from "../pages/treatments/locations/MicroBotoxManhattan";
import MicroBotoxBrooklyn from "../pages/treatments/locations/MicroBotoxBrooklyn";
import MicroBotoxSoHo from "../pages/treatments/locations/MicroBotoxSoHo";
import MicroBotoxTribeca from "../pages/treatments/locations/MicroBotoxTribeca";
import MicroBotoxUpperEastSide from "../pages/treatments/locations/MicroBotoxUpperEastSide";
import MicroBotoxWilliamsburg from "../pages/treatments/locations/MicroBotoxWilliamsburg";
import MicroBotoxMidtown from "../pages/treatments/locations/MicroBotoxMidtown";
import MicroBotoxHamptons from "../pages/treatments/locations/MicroBotoxHamptons";

// Fillers Location Pages
import FillersManhattan from "../pages/treatments/locations/FillersManhattan";
import FillersBrooklyn from "../pages/treatments/locations/FillersBrooklyn";
import FillersSoHo from "../pages/treatments/locations/FillersSoHo";
import FillersTribeca from "../pages/treatments/locations/FillersTribeca";
import FillersUpperEastSide from "../pages/treatments/locations/FillersUpperEastSide";
import FillersWilliamsburg from "../pages/treatments/locations/FillersWilliamsburg";
import FillersMidtown from "../pages/treatments/locations/FillersMidtown";
import FillersHamptons from "../pages/treatments/locations/FillersHamptons";

// Kybella Location Pages
import KybellaManhattan from "../pages/treatments/locations/KybellaManhattan";
import KybellaBrooklyn from "../pages/treatments/locations/KybellaBrooklyn";
import KybellaSoHo from "../pages/treatments/locations/KybellaSoHo";
import KybellaTribeca from "../pages/treatments/locations/KybellaTribeca";
import KybellaUpperEastSide from "../pages/treatments/locations/KybellaUpperEastSide";
import KybellaWilliamsburg from "../pages/treatments/locations/KybellaWilliamsburg";
import KybellaMidtown from "../pages/treatments/locations/KybellaMidtown";
import KybellaHamptons from "../pages/treatments/locations/KybellaHamptons";

// PRP Location Pages
import PrpManhattan from "../pages/treatments/locations/PrpManhattan";
import PrpBrooklyn from "../pages/treatments/locations/PrpBrooklyn";
import PrpSoHo from "../pages/treatments/locations/PrpSoHo";
import PrpTribeca from "../pages/treatments/locations/PrpTribeca";
import PrpUpperEastSide from "../pages/treatments/locations/PrpUpperEastSide";
import PrpWilliamsburg from "../pages/treatments/locations/PrpWilliamsburg";
import PrpMidtown from "../pages/treatments/locations/PrpMidtown";
import PrpHamptons from "../pages/treatments/locations/PrpHamptons";

const TreatmentLocationRoutes = (
  <>
    {/* Botox Location Routes */}
    <Route path="treatments/botox/manhattan" element={<BotoxManhattan />} />
    <Route path="treatments/botox/brooklyn" element={<BotoxBrooklyn />} />
    <Route path="treatments/botox/soho" element={<BotoxSoHo />} />
    <Route path="treatments/botox/tribeca" element={<BotoxTribeca />} />
    <Route path="treatments/botox/williamsburg" element={<BotoxWilliamsburg />} />
    <Route path="treatments/botox/midtown" element={<BotoxMidtown />} />
    <Route path="treatments/botox/upper-east-side" element={<BotoxUpperEastSide />} />
    <Route path="treatments/botox/the-hamptons" element={<BotoxHamptons />} />
    
    {/* MicroBotox Location Routes */}
    <Route path="treatments/micro-botox/manhattan" element={<MicroBotoxManhattan />} />
    <Route path="treatments/micro-botox/brooklyn" element={<MicroBotoxBrooklyn />} />
    <Route path="treatments/micro-botox/soho" element={<MicroBotoxSoHo />} />
    <Route path="treatments/micro-botox/tribeca" element={<MicroBotoxTribeca />} />
    <Route path="treatments/micro-botox/upper-east-side" element={<MicroBotoxUpperEastSide />} />
    <Route path="treatments/micro-botox/williamsburg" element={<MicroBotoxWilliamsburg />} />
    <Route path="treatments/micro-botox/midtown" element={<MicroBotoxMidtown />} />
    <Route path="treatments/micro-botox/the-hamptons" element={<MicroBotoxHamptons />} />
    
    {/* Fillers Location Routes */}
    <Route path="treatments/fillers/manhattan" element={<FillersManhattan />} />
    <Route path="treatments/fillers/brooklyn" element={<FillersBrooklyn />} />
    <Route path="treatments/fillers/soho" element={<FillersSoHo />} />
    <Route path="treatments/fillers/tribeca" element={<FillersTribeca />} />
    <Route path="treatments/fillers/upper-east-side" element={<FillersUpperEastSide />} />
    <Route path="treatments/fillers/williamsburg" element={<FillersWilliamsburg />} />
    <Route path="treatments/fillers/midtown" element={<FillersMidtown />} />
    <Route path="treatments/fillers/the-hamptons" element={<FillersHamptons />} />
    
    {/* Kybella Location Routes */}
    <Route path="treatments/kybella/manhattan" element={<KybellaManhattan />} />
    <Route path="treatments/kybella/brooklyn" element={<KybellaBrooklyn />} />
    <Route path="treatments/kybella/soho" element={<KybellaSoHo />} />
    <Route path="treatments/kybella/tribeca" element={<KybellaTribeca />} />
    <Route path="treatments/kybella/upper-east-side" element={<KybellaUpperEastSide />} />
    <Route path="treatments/kybella/williamsburg" element={<KybellaWilliamsburg />} />
    <Route path="treatments/kybella/midtown" element={<KybellaMidtown />} />
    <Route path="treatments/kybella/the-hamptons" element={<KybellaHamptons />} />
    
    {/* PRP Location Routes */}
    <Route path="treatments/prp/manhattan" element={<PrpManhattan />} />
    <Route path="treatments/prp/brooklyn" element={<PrpBrooklyn />} />
    <Route path="treatments/prp/soho" element={<PrpSoHo />} />
    <Route path="treatments/prp/tribeca" element={<PrpTribeca />} />
    <Route path="treatments/prp/upper-east-side" element={<PrpUpperEastSide />} />
    <Route path="treatments/prp/williamsburg" element={<PrpWilliamsburg />} />
    <Route path="treatments/prp/midtown" element={<PrpMidtown />} />
    <Route path="treatments/prp/the-hamptons" element={<PrpHamptons />} />
  </>
);

export default TreatmentLocationRoutes;
