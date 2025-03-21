
import React from "react";
import { Route } from "react-router-dom";

// Import treatment pages
import BotoxPage from "../pages/treatments/BotoxPage";
import MicroBotoxPage from "../pages/treatments/MicroBotoxPage";
import FillersPage from "../pages/treatments/FillersPage";
import KybellaPage from "../pages/treatments/KybellaPage";
import PrpPage from "../pages/treatments/PrpPage";
import LaserHairRemovalPage from "../pages/treatments/LaserHairRemovalPage";
import CarbonLaserFacialPage from "../pages/treatments/CarbonLaserFacialPage";
import VaginalRejuvenationPage from "../pages/treatments/VaginalRejuvenationPage";
import PhotofacialsPage from "../pages/treatments/PhotofacialsPage";
import LaserResurfacingPage from "../pages/treatments/LaserResurfacingPage";
import CoolSculptingPage from "../pages/treatments/CoolSculptingPage";
import WeightManagementPage from "../pages/treatments/WeightManagementPage";
import ChemicalPeelsPage from "../pages/treatments/ChemicalPeelsPage";
import MicrodermabrasionPage from "../pages/treatments/MicrodermabrasionPage";
import MicroneedlingPage from "../pages/treatments/MicroneedlingPage";
import HydrofacialsPage from "../pages/treatments/HydrofacialsPage";
import TattooRemovalPage from "../pages/treatments/TattooRemovalPage";
import RadioUltrasoundTherapyPage from "../pages/treatments/RadioUltrasoundTherapyPage";

const TreatmentRoutes = (
  <>
    {/* Treatment Type Routes */}
    <Route path="treatments/botox" element={<BotoxPage />} />
    <Route path="treatments/micro-botox" element={<MicroBotoxPage />} />
    <Route path="treatments/fillers" element={<FillersPage />} />
    <Route path="treatments/kybella" element={<KybellaPage />} />
    <Route path="treatments/prp" element={<PrpPage />} />
    <Route path="treatments/laser-hair-removal" element={<LaserHairRemovalPage />} />
    <Route path="treatments/carbon-laser-facial" element={<CarbonLaserFacialPage />} />
    <Route path="treatments/vaginal-rejuvenation" element={<VaginalRejuvenationPage />} />
    <Route path="treatments/photofacials" element={<PhotofacialsPage />} />
    <Route path="treatments/laser-resurfacing" element={<LaserResurfacingPage />} />
    <Route path="treatments/coolsculpting" element={<CoolSculptingPage />} />
    <Route path="treatments/weight-management" element={<WeightManagementPage />} />
    <Route path="treatments/chemical-peels" element={<ChemicalPeelsPage />} />
    <Route path="treatments/microdermabrasion" element={<MicrodermabrasionPage />} />
    <Route path="treatments/microneedling" element={<MicroneedlingPage />} />
    <Route path="treatments/hydrofacials" element={<HydrofacialsPage />} />
    <Route path="treatments/tattoo-removal" element={<TattooRemovalPage />} />
    <Route path="treatments/radio-ultrasound-therapy" element={<RadioUltrasoundTherapyPage />} />
  </>
);

export default TreatmentRoutes;
