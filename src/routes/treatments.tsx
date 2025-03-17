
import React from "react";
import { Route } from "react-router-dom";

// Treatment Pages
import BotoxPage from "../pages/treatments/BotoxPage";
import CoolSculptingPage from "../pages/treatments/CoolSculptingPage";
import LaserHairRemovalPage from "../pages/treatments/LaserHairRemovalPage";
import CarbonLaserFacialPage from "../pages/treatments/CarbonLaserFacialPage";
import VaginalRejuvenationPage from "../pages/treatments/VaginalRejuvenationPage";
import WeightManagementPage from "../pages/treatments/WeightManagementPage";
import RadioUltrasoundTherapyPage from "../pages/treatments/RadioUltrasoundTherapyPage";
import LaserResurfacingPage from "../pages/treatments/LaserResurfacingPage";
import MicrodermabrasionPage from "../pages/treatments/MicrodermabrasionPage";
import MicroneedlingPage from "../pages/treatments/MicroneedlingPage";

// Injectable Treatment Pages
import MicroBotoxPage from "../pages/treatments/MicroBotoxPage";
import FillersPage from "../pages/treatments/FillersPage";
import KybellaPage from "../pages/treatments/KybellaPage";
import PrpPage from "../pages/treatments/PrpPage";

// Laser Treatment Pages
import PhotofacialsPage from "../pages/treatments/PhotofacialsPage";
import TattooRemovalPage from "../pages/treatments/TattooRemovalPage";

// Facial Treatment Pages
import ChemicalPeelsPage from "../pages/treatments/ChemicalPeelsPage";
import HydrofacialsPage from "../pages/treatments/HydrofacialsPage";

const TreatmentRoutes = (
  <>
    <Route path="treatments/botox" element={<BotoxPage />} />
    <Route path="treatments/coolsculpting" element={<CoolSculptingPage />} />
    <Route path="treatments/laser-hair-removal" element={<LaserHairRemovalPage />} />
    <Route path="treatments/carbon-laser-facial" element={<CarbonLaserFacialPage />} />
    <Route path="treatments/vaginal-rejuvenation" element={<VaginalRejuvenationPage />} />
    <Route path="treatments/weight-management" element={<WeightManagementPage />} />
    <Route path="treatments/radio-ultrasound-therapy" element={<RadioUltrasoundTherapyPage />} />
    <Route path="treatments/laser-resurfacing" element={<LaserResurfacingPage />} />
    <Route path="treatments/microdermabrasion" element={<MicrodermabrasionPage />} />
    <Route path="treatments/microneedling" element={<MicroneedlingPage />} />
    
    <Route path="treatments/micro-botox" element={<MicroBotoxPage />} />
    <Route path="treatments/fillers" element={<FillersPage />} />
    <Route path="treatments/kybella" element={<KybellaPage />} />
    <Route path="treatments/prp" element={<PrpPage />} />
    
    <Route path="treatments/photofacials" element={<PhotofacialsPage />} />
    <Route path="treatments/tattoo-removal" element={<TattooRemovalPage />} />
    
    <Route path="treatments/chemical-peels" element={<ChemicalPeelsPage />} />
    <Route path="treatments/hydrofacials" element={<HydrofacialsPage />} />
  </>
);

export default TreatmentRoutes;
