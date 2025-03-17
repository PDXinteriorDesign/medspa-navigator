
import React from "react";
import { Route } from "react-router-dom";

// Import Botox Location Pages
import BotoxManhattan from "../pages/treatments/locations/BotoxManhattan";
import BotoxSoHo from "../pages/treatments/locations/BotoxSoHo";
import BotoxTribeca from "../pages/treatments/locations/BotoxTribeca";
import BotoxUpperEastSide from "../pages/treatments/locations/BotoxUpperEastSide";
import BotoxMidtown from "../pages/treatments/locations/BotoxMidtown";
import BotoxBrooklyn from "../pages/treatments/locations/BotoxBrooklyn";
import BotoxWilliamsburg from "../pages/treatments/locations/BotoxWilliamsburg";
import BotoxHamptons from "../pages/treatments/locations/BotoxHamptons";

// Import MicroBotox Location Pages
import MicroBotoxManhattan from "../pages/treatments/locations/MicroBotoxManhattan";
import MicroBotoxSoHo from "../pages/treatments/locations/MicroBotoxSoHo";
import MicroBotoxTribeca from "../pages/treatments/locations/MicroBotoxTribeca";
import MicroBotoxUpperEastSide from "../pages/treatments/locations/MicroBotoxUpperEastSide";
import MicroBotoxMidtown from "../pages/treatments/locations/MicroBotoxMidtown";
import MicroBotoxBrooklyn from "../pages/treatments/locations/MicroBotoxBrooklyn";
import MicroBotoxWilliamsburg from "../pages/treatments/locations/MicroBotoxWilliamsburg";
import MicroBotoxHamptons from "../pages/treatments/locations/MicroBotoxHamptons";

// Import Fillers Location Pages
import FillersManhattan from "../pages/treatments/locations/FillersManhattan";
import FillersSoHo from "../pages/treatments/locations/FillersSoHo";
import FillersTribeca from "../pages/treatments/locations/FillersTribeca";
import FillersUpperEastSide from "../pages/treatments/locations/FillersUpperEastSide";
import FillersMidtown from "../pages/treatments/locations/FillersMidtown";
import FillersBrooklyn from "../pages/treatments/locations/FillersBrooklyn";
import FillersWilliamsburg from "../pages/treatments/locations/FillersWilliamsburg";
import FillersHamptons from "../pages/treatments/locations/FillersHamptons";

// Import Kybella Location Pages
import KybellaManhattan from "../pages/treatments/locations/KybellaManhattan";
import KybellaSoHo from "../pages/treatments/locations/KybellaSoHo";
import KybellaTribeca from "../pages/treatments/locations/KybellaTribeca";
import KybellaUpperEastSide from "../pages/treatments/locations/KybellaUpperEastSide";
import KybellaMidtown from "../pages/treatments/locations/KybellaMidtown";
import KybellaBrooklyn from "../pages/treatments/locations/KybellaBrooklyn";
import KybellaWilliamsburg from "../pages/treatments/locations/KybellaWilliamsburg";
import KybellaHamptons from "../pages/treatments/locations/KybellaHamptons";

// Import PRP Location Pages
import PrpManhattan from "../pages/treatments/locations/PrpManhattan";
import PrpSoHo from "../pages/treatments/locations/PrpSoHo";
import PrpTribeca from "../pages/treatments/locations/PrpTribeca";
import PrpUpperEastSide from "../pages/treatments/locations/PrpUpperEastSide";
import PrpMidtown from "../pages/treatments/locations/PrpMidtown";
import PrpBrooklyn from "../pages/treatments/locations/PrpBrooklyn";
import PrpWilliamsburg from "../pages/treatments/locations/PrpWilliamsburg";
import PrpHamptons from "../pages/treatments/locations/PrpHamptons";

// Import Photofacials Location Pages
import PhotofacialsManhattan from "../pages/treatments/locations/PhotofacialsManhattan";
import PhotofacialsSoHo from "../pages/treatments/locations/PhotofacialsSoHo";
import PhotofacialsTribeca from "../pages/treatments/locations/PhotofacialsTribeca";
import PhotofacialsUpperEastSide from "../pages/treatments/locations/PhotofacialsUpperEastSide";
import PhotofacialsMidtown from "../pages/treatments/locations/PhotofacialsMidtown";
import PhotofacialsBrooklyn from "../pages/treatments/locations/PhotofacialsBrooklyn";
import PhotofacialsWilliamsburg from "../pages/treatments/locations/PhotofacialsWilliamsburg";
import PhotofacialsHamptons from "../pages/treatments/locations/PhotofacialsHamptons";

// Import Laser Hair Removal Location Pages
import LaserHairRemovalManhattan from "../pages/treatments/locations/LaserHairRemovalManhattan";
import LaserHairRemovalSoHo from "../pages/treatments/locations/LaserHairRemovalSoHo";
import LaserHairRemovalTribeca from "../pages/treatments/locations/LaserHairRemovalTribeca";
import LaserHairRemovalUpperEastSide from "../pages/treatments/locations/LaserHairRemovalUpperEastSide";
import LaserHairRemovalMidtown from "../pages/treatments/locations/LaserHairRemovalMidtown";
import LaserHairRemovalBrooklyn from "../pages/treatments/locations/LaserHairRemovalBrooklyn";
import LaserHairRemovalWilliamsburg from "../pages/treatments/locations/LaserHairRemovalWilliamsburg";
import LaserHairRemovalHamptons from "../pages/treatments/locations/LaserHairRemovalHamptons";

// Import Carbon Laser Facial Location Pages
import CarbonLaserFacialManhattan from "../pages/treatments/locations/CarbonLaserFacialManhattan";
import CarbonLaserFacialSoHo from "../pages/treatments/locations/CarbonLaserFacialSoHo";
import CarbonLaserFacialTribeca from "../pages/treatments/locations/CarbonLaserFacialTribeca";
import CarbonLaserFacialUpperEastSide from "../pages/treatments/locations/CarbonLaserFacialUpperEastSide";
import CarbonLaserFacialMidtown from "../pages/treatments/locations/CarbonLaserFacialMidtown";
import CarbonLaserFacialBrooklyn from "../pages/treatments/locations/CarbonLaserFacialBrooklyn";
import CarbonLaserFacialWilliamsburg from "../pages/treatments/locations/CarbonLaserFacialWilliamsburg";
import CarbonLaserFacialHamptons from "../pages/treatments/locations/CarbonLaserFacialHamptons";

// Import Vaginal Rejuvenation Location Pages
import VaginalRejuvenationManhattan from "../pages/treatments/locations/VaginalRejuvenationManhattan";
import VaginalRejuvenationSoHo from "../pages/treatments/locations/VaginalRejuvenationSoHo";
import VaginalRejuvenationTribeca from "../pages/treatments/locations/VaginalRejuvenationTribeca";
import VaginalRejuvenationMidtown from "../pages/treatments/locations/VaginalRejuvenationMidtown";
import VaginalRejuvenationUpperEastSide from "../pages/treatments/locations/VaginalRejuvenationUpperEastSide";
import VaginalRejuvenationBrooklyn from "../pages/treatments/locations/VaginalRejuvenationBrooklyn";
import VaginalRejuvenationWilliamsburg from "../pages/treatments/locations/VaginalRejuvenationWilliamsburg";
import VaginalRejuvenationHamptons from "../pages/treatments/locations/VaginalRejuvenationHamptons";

// Import Laser Resurfacing Location Pages
import LaserResurfacingManhattan from "../pages/treatments/locations/LaserResurfacingManhattan";
import LaserResurfacingSoHo from "../pages/treatments/locations/LaserResurfacingSoHo";
import LaserResurfacingTribeca from "../pages/treatments/locations/LaserResurfacingTribeca";
import LaserResurfacingUpperEastSide from "../pages/treatments/locations/LaserResurfacingUpperEastSide";
import LaserResurfacingMidtown from "../pages/treatments/locations/LaserResurfacingMidtown";
import LaserResurfacingBrooklyn from "../pages/treatments/locations/LaserResurfacingBrooklyn";
import LaserResurfacingWilliamsburg from "../pages/treatments/locations/LaserResurfacingWilliamsburg";
import LaserResurfacingHamptons from "../pages/treatments/locations/LaserResurfacingHamptons";

// Import ServiceLocationDetail for generic location pages
import ServiceLocationDetail from "../pages/ServiceLocationDetail";

const TreatmentLocationRoutes = (
  <>
    {/* Botox location routes */}
    <Route path="botox/manhattan" element={<BotoxManhattan />} />
    <Route path="botox/soho" element={<BotoxSoHo />} />
    <Route path="botox/tribeca" element={<BotoxTribeca />} />
    <Route path="botox/upper-east-side" element={<BotoxUpperEastSide />} />
    <Route path="botox/midtown" element={<BotoxMidtown />} />
    <Route path="botox/brooklyn" element={<BotoxBrooklyn />} />
    <Route path="botox/williamsburg" element={<BotoxWilliamsburg />} />
    <Route path="botox/hamptons" element={<BotoxHamptons />} />
    
    {/* MicroBotox location routes */}
    <Route path="micro-botox/manhattan" element={<MicroBotoxManhattan />} />
    <Route path="micro-botox/soho" element={<MicroBotoxSoHo />} />
    <Route path="micro-botox/tribeca" element={<MicroBotoxTribeca />} />
    <Route path="micro-botox/upper-east-side" element={<MicroBotoxUpperEastSide />} />
    <Route path="micro-botox/midtown" element={<MicroBotoxMidtown />} />
    <Route path="micro-botox/brooklyn" element={<MicroBotoxBrooklyn />} />
    <Route path="micro-botox/williamsburg" element={<MicroBotoxWilliamsburg />} />
    <Route path="micro-botox/hamptons" element={<MicroBotoxHamptons />} />
    
    {/* Fillers location routes */}
    <Route path="fillers/manhattan" element={<FillersManhattan />} />
    <Route path="fillers/soho" element={<FillersSoHo />} />
    <Route path="fillers/tribeca" element={<FillersTribeca />} />
    <Route path="fillers/upper-east-side" element={<FillersUpperEastSide />} />
    <Route path="fillers/midtown" element={<FillersMidtown />} />
    <Route path="fillers/brooklyn" element={<FillersBrooklyn />} />
    <Route path="fillers/williamsburg" element={<FillersWilliamsburg />} />
    <Route path="fillers/hamptons" element={<FillersHamptons />} />
    
    {/* Kybella location routes */}
    <Route path="kybella/manhattan" element={<KybellaManhattan />} />
    <Route path="kybella/soho" element={<KybellaSoHo />} />
    <Route path="kybella/tribeca" element={<KybellaTribeca />} />
    <Route path="kybella/upper-east-side" element={<KybellaUpperEastSide />} />
    <Route path="kybella/midtown" element={<KybellaMidtown />} />
    <Route path="kybella/brooklyn" element={<KybellaBrooklyn />} />
    <Route path="kybella/williamsburg" element={<KybellaWilliamsburg />} />
    <Route path="kybella/hamptons" element={<KybellaHamptons />} />
    
    {/* PRP location routes */}
    <Route path="prp/manhattan" element={<PrpManhattan />} />
    <Route path="prp/soho" element={<PrpSoHo />} />
    <Route path="prp/tribeca" element={<PrpTribeca />} />
    <Route path="prp/upper-east-side" element={<PrpUpperEastSide />} />
    <Route path="prp/midtown" element={<PrpMidtown />} />
    <Route path="prp/brooklyn" element={<PrpBrooklyn />} />
    <Route path="prp/williamsburg" element={<PrpWilliamsburg />} />
    <Route path="prp/hamptons" element={<PrpHamptons />} />
    
    {/* Photofacials location routes */}
    <Route path="photofacials/manhattan" element={<PhotofacialsManhattan />} />
    <Route path="photofacials/soho" element={<PhotofacialsSoHo />} />
    <Route path="photofacials/tribeca" element={<PhotofacialsTribeca />} />
    <Route path="photofacials/upper-east-side" element={<PhotofacialsUpperEastSide />} />
    <Route path="photofacials/midtown" element={<PhotofacialsMidtown />} />
    <Route path="photofacials/brooklyn" element={<PhotofacialsBrooklyn />} />
    <Route path="photofacials/williamsburg" element={<PhotofacialsWilliamsburg />} />
    <Route path="photofacials/hamptons" element={<PhotofacialsHamptons />} />
    
    {/* Laser Hair Removal location routes */}
    <Route path="laser-hair-removal/manhattan" element={<LaserHairRemovalManhattan />} />
    <Route path="laser-hair-removal/soho" element={<LaserHairRemovalSoHo />} />
    <Route path="laser-hair-removal/tribeca" element={<LaserHairRemovalTribeca />} />
    <Route path="laser-hair-removal/upper-east-side" element={<LaserHairRemovalUpperEastSide />} />
    <Route path="laser-hair-removal/midtown" element={<LaserHairRemovalMidtown />} />
    <Route path="laser-hair-removal/brooklyn" element={<LaserHairRemovalBrooklyn />} />
    <Route path="laser-hair-removal/williamsburg" element={<LaserHairRemovalWilliamsburg />} />
    <Route path="laser-hair-removal/hamptons" element={<LaserHairRemovalHamptons />} />
    
    {/* Carbon Laser Facial location routes */}
    <Route path="carbon-laser-facial/manhattan" element={<CarbonLaserFacialManhattan />} />
    <Route path="carbon-laser-facial/soho" element={<CarbonLaserFacialSoHo />} />
    <Route path="carbon-laser-facial/tribeca" element={<CarbonLaserFacialTribeca />} />
    <Route path="carbon-laser-facial/upper-east-side" element={<CarbonLaserFacialUpperEastSide />} />
    <Route path="carbon-laser-facial/midtown" element={<CarbonLaserFacialMidtown />} />
    <Route path="carbon-laser-facial/brooklyn" element={<CarbonLaserFacialBrooklyn />} />
    <Route path="carbon-laser-facial/williamsburg" element={<CarbonLaserFacialWilliamsburg />} />
    <Route path="carbon-laser-facial/hamptons" element={<CarbonLaserFacialHamptons />} />
    
    {/* Vaginal Rejuvenation location routes */}
    <Route path="vaginal-rejuvenation/manhattan" element={<VaginalRejuvenationManhattan />} />
    <Route path="vaginal-rejuvenation/soho" element={<VaginalRejuvenationSoHo />} />
    <Route path="vaginal-rejuvenation/tribeca" element={<VaginalRejuvenationTribeca />} />
    <Route path="vaginal-rejuvenation/midtown" element={<VaginalRejuvenationMidtown />} />
    <Route path="vaginal-rejuvenation/upper-east-side" element={<VaginalRejuvenationUpperEastSide />} />
    <Route path="vaginal-rejuvenation/brooklyn" element={<VaginalRejuvenationBrooklyn />} />
    <Route path="vaginal-rejuvenation/williamsburg" element={<VaginalRejuvenationWilliamsburg />} />
    <Route path="vaginal-rejuvenation/hamptons" element={<VaginalRejuvenationHamptons />} />
    
    {/* Laser Resurfacing location routes */}
    <Route path="laser-resurfacing/manhattan" element={<LaserResurfacingManhattan />} />
    <Route path="laser-resurfacing/soho" element={<LaserResurfacingSoHo />} />
    <Route path="laser-resurfacing/tribeca" element={<LaserResurfacingTribeca />} />
    <Route path="laser-resurfacing/upper-east-side" element={<LaserResurfacingUpperEastSide />} />
    <Route path="laser-resurfacing/midtown" element={<LaserResurfacingMidtown />} />
    <Route path="laser-resurfacing/brooklyn" element={<LaserResurfacingBrooklyn />} />
    <Route path="laser-resurfacing/williamsburg" element={<LaserResurfacingWilliamsburg />} />
    <Route path="laser-resurfacing/hamptons" element={<LaserResurfacingHamptons />} />
    
    {/* Generic treatment location routes */}
    <Route path=":serviceSlug/:location" element={<ServiceLocationDetail />} />
    <Route path=":serviceSlug-in-:location" element={<ServiceLocationDetail />} />
  </>
);

export default TreatmentLocationRoutes;
