import React from "react";
import { Route } from "react-router-dom";

// Botox Location Pages
import BotoxManhattan from "../pages/treatments/locations/BotoxManhattan";
import BotoxSoHo from "../pages/treatments/locations/BotoxSoHo";
import BotoxUpperEastSide from "../pages/treatments/locations/BotoxUpperEastSide";
import BotoxTribeca from "../pages/treatments/locations/BotoxTribeca";
import BotoxMidtown from "../pages/treatments/locations/BotoxMidtown";
import BotoxBrooklyn from "../pages/treatments/locations/BotoxBrooklyn";
import BotoxWilliamsburg from "../pages/treatments/locations/BotoxWilliamsburg";
import BotoxHamptons from "../pages/treatments/locations/BotoxHamptons";

// MicroBotox Location Pages
import MicroBotoxManhattan from "../pages/treatments/locations/MicroBotoxManhattan";
import MicroBotoxSoHo from "../pages/treatments/locations/MicroBotoxSoHo";
import MicroBotoxUpperEastSide from "../pages/treatments/locations/MicroBotoxUpperEastSide";
import MicroBotoxTribeca from "../pages/treatments/locations/MicroBotoxTribeca";
import MicroBotoxMidtown from "../pages/treatments/locations/MicroBotoxMidtown";
import MicroBotoxBrooklyn from "../pages/treatments/locations/MicroBotoxBrooklyn";
import MicroBotoxWilliamsburg from "../pages/treatments/locations/MicroBotoxWilliamsburg";
import MicroBotoxHamptons from "../pages/treatments/locations/MicroBotoxHamptons";

// Fillers Location Pages
import FillersManhattan from "../pages/treatments/locations/FillersManhattan";
import FillersSoHo from "../pages/treatments/locations/FillersSoHo";
import FillersUpperEastSide from "../pages/treatments/locations/FillersUpperEastSide";
import FillersTribeca from "../pages/treatments/locations/FillersTribeca";
import FillersMidtown from "../pages/treatments/locations/FillersMidtown";
import FillersBrooklyn from "../pages/treatments/locations/FillersBrooklyn";
import FillersWilliamsburg from "../pages/treatments/locations/FillersWilliamsburg";
import FillersHamptons from "../pages/treatments/locations/FillersHamptons";

// Kybella Location Pages
import KybellaManhattan from "../pages/treatments/locations/KybellaManhattan";
import KybellaSoHo from "../pages/treatments/locations/KybellaSoHo";
import KybellaUpperEastSide from "../pages/treatments/locations/KybellaUpperEastSide";
import KybellaTribeca from "../pages/treatments/locations/KybellaTribeca";
import KybellaMidtown from "../pages/treatments/locations/KybellaMidtown";
import KybellaBrooklyn from "../pages/treatments/locations/KybellaBrooklyn";
import KybellaWilliamsburg from "../pages/treatments/locations/KybellaWilliamsburg";
import KybellaHamptons from "../pages/treatments/locations/KybellaHamptons";

// PRP Location Pages
import PrpManhattan from "../pages/treatments/locations/PrpManhattan";
import PrpSoHo from "../pages/treatments/locations/PrpSoHo";
import PrpUpperEastSide from "../pages/treatments/locations/PrpUpperEastSide";
import PrpTribeca from "../pages/treatments/locations/PrpTribeca";
import PrpMidtown from "../pages/treatments/locations/PrpMidtown";
import PrpBrooklyn from "../pages/treatments/locations/PrpBrooklyn";
import PrpWilliamsburg from "../pages/treatments/locations/PrpWilliamsburg";
import PrpHamptons from "../pages/treatments/locations/PrpHamptons";

// Laser Hair Removal Location Pages
import LaserHairRemovalManhattan from "../pages/treatments/locations/LaserHairRemovalManhattan";
import LaserHairRemovalSoHo from "../pages/treatments/locations/LaserHairRemovalSoHo";
import LaserHairRemovalUpperEastSide from "../pages/treatments/locations/LaserHairRemovalUpperEastSide";
import LaserHairRemovalTribeca from "../pages/treatments/locations/LaserHairRemovalTribeca";
import LaserHairRemovalMidtown from "../pages/treatments/locations/LaserHairRemovalMidtown";
import LaserHairRemovalBrooklyn from "../pages/treatments/locations/LaserHairRemovalBrooklyn";
import LaserHairRemovalWilliamsburg from "../pages/treatments/locations/LaserHairRemovalWilliamsburg";
import LaserHairRemovalHamptons from "../pages/treatments/locations/LaserHairRemovalHamptons";

// Carbon Laser Facial Location Pages
import CarbonLaserFacialManhattan from "../pages/treatments/locations/CarbonLaserFacialManhattan";
import CarbonLaserFacialSoHo from "../pages/treatments/locations/CarbonLaserFacialSoHo";
import CarbonLaserFacialUpperEastSide from "../pages/treatments/locations/CarbonLaserFacialUpperEastSide";
import CarbonLaserFacialTribeca from "../pages/treatments/locations/CarbonLaserFacialTribeca";
import CarbonLaserFacialMidtown from "../pages/treatments/locations/CarbonLaserFacialMidtown";
import CarbonLaserFacialBrooklyn from "../pages/treatments/locations/CarbonLaserFacialBrooklyn";
import CarbonLaserFacialWilliamsburg from "../pages/treatments/locations/CarbonLaserFacialWilliamsburg";
import CarbonLaserFacialHamptons from "../pages/treatments/locations/CarbonLaserFacialHamptons";

// Vaginal Rejuvenation Location Pages
import VaginalRejuvenationManhattan from "../pages/treatments/locations/VaginalRejuvenationManhattan";
import VaginalRejuvenationSoHo from "../pages/treatments/locations/VaginalRejuvenationSoHo";
import VaginalRejuvenationUpperEastSide from "../pages/treatments/locations/VaginalRejuvenationUpperEastSide";
import VaginalRejuvenationTribeca from "../pages/treatments/locations/VaginalRejuvenationTribeca";
import VaginalRejuvenationMidtown from "../pages/treatments/locations/VaginalRejuvenationMidtown";
import VaginalRejuvenationBrooklyn from "../pages/treatments/locations/VaginalRejuvenationBrooklyn";
import VaginalRejuvenationWilliamsburg from "../pages/treatments/locations/VaginalRejuvenationWilliamsburg";
import VaginalRejuvenationHamptons from "../pages/treatments/locations/VaginalRejuvenationHamptons";

// Photofacials Location Pages
import PhotofacialsManhattan from "../pages/treatments/locations/PhotofacialsManhattan";
import PhotofacialsSoHo from "../pages/treatments/locations/PhotofacialsSoHo";
import PhotofacialsUpperEastSide from "../pages/treatments/locations/PhotofacialsUpperEastSide";
import PhotofacialsTribeca from "../pages/treatments/locations/PhotofacialsTribeca";
import PhotofacialsMidtown from "../pages/treatments/locations/PhotofacialsMidtown";
import PhotofacialsBrooklyn from "../pages/treatments/locations/PhotofacialsBrooklyn";
import PhotofacialsWilliamsburg from "../pages/treatments/locations/PhotofacialsWilliamsburg";
import PhotofacialsHamptons from "../pages/treatments/locations/PhotofacialsHamptons";

// Laser Resurfacing Location Pages
import LaserResurfacingManhattan from "../pages/treatments/locations/LaserResurfacingManhattan";
import LaserResurfacingSoHo from "../pages/treatments/locations/LaserResurfacingSoHo";
import LaserResurfacingUpperEastSide from "../pages/treatments/locations/LaserResurfacingUpperEastSide";
import LaserResurfacingTribeca from "../pages/treatments/locations/LaserResurfacingTribeca";
import LaserResurfacingMidtown from "../pages/treatments/locations/LaserResurfacingMidtown";
import LaserResurfacingBrooklyn from "../pages/treatments/locations/LaserResurfacingBrooklyn";
import LaserResurfacingWilliamsburg from "../pages/treatments/locations/LaserResurfacingWilliamsburg";
import LaserResurfacingHamptons from "../pages/treatments/locations/LaserResurfacingHamptons";

// CoolSculpting Location Pages
import CoolSculptingManhattan from "../pages/treatments/locations/CoolSculptingManhattan";
import CoolSculptingSoHo from "../pages/treatments/locations/CoolSculptingSoHo";
import CoolSculptingUpperEastSide from "../pages/treatments/locations/CoolSculptingUpperEastSide";
import CoolSculptingTribeca from "../pages/treatments/locations/CoolSculptingTribeca";
import CoolSculptingMidtown from "../pages/treatments/locations/CoolSculptingMidtown";
import CoolSculptingBrooklyn from "../pages/treatments/locations/CoolSculptingBrooklyn";
import CoolSculptingWilliamsburg from "../pages/treatments/locations/CoolSculptingWilliamsburg";
import CoolSculptingHamptons from "../pages/treatments/locations/CoolSculptingHamptons";

const TreatmentLocationRoutes = (
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
    
    {/* MicroBotox Location Routes */}
    <Route path="micro-botox/manhattan" element={<MicroBotoxManhattan />} />
    <Route path="micro-botox/soho" element={<MicroBotoxSoHo />} />
    <Route path="micro-botox/tribeca" element={<MicroBotoxTribeca />} />
    <Route path="micro-botox/upper-east-side" element={<MicroBotoxUpperEastSide />} />
    <Route path="micro-botox/midtown" element={<MicroBotoxMidtown />} />
    <Route path="micro-botox/brooklyn" element={<MicroBotoxBrooklyn />} />
    <Route path="micro-botox/williamsburg" element={<MicroBotoxWilliamsburg />} />
    <Route path="micro-botox/hamptons" element={<MicroBotoxHamptons />} />
    
    {/* Fillers Location Routes */}
    <Route path="fillers/manhattan" element={<FillersManhattan />} />
    <Route path="fillers/soho" element={<FillersSoHo />} />
    <Route path="fillers/tribeca" element={<FillersTribeca />} />
    <Route path="fillers/upper-east-side" element={<FillersUpperEastSide />} />
    <Route path="fillers/midtown" element={<FillersMidtown />} />
    <Route path="fillers/brooklyn" element={<FillersBrooklyn />} />
    <Route path="fillers/williamsburg" element={<FillersWilliamsburg />} />
    <Route path="fillers/hamptons" element={<FillersHamptons />} />
    
    {/* Kybella Location Routes */}
    <Route path="kybella/manhattan" element={<KybellaManhattan />} />
    <Route path="kybella/soho" element={<KybellaSoHo />} />
    <Route path="kybella/tribeca" element={<KybellaTribeca />} />
    <Route path="kybella/upper-east-side" element={<KybellaUpperEastSide />} />
    <Route path="kybella/midtown" element={<KybellaMidtown />} />
    <Route path="kybella/brooklyn" element={<KybellaBrooklyn />} />
    <Route path="kybella/williamsburg" element={<KybellaWilliamsburg />} />
    <Route path="kybella/hamptons" element={<KybellaHamptons />} />
    
    {/* PRP Location Routes */}
    <Route path="prp/manhattan" element={<PrpManhattan />} />
    <Route path="prp/soho" element={<PrpSoHo />} />
    <Route path="prp/tribeca" element={<PrpTribeca />} />
    <Route path="prp/upper-east-side" element={<PrpUpperEastSide />} />
    <Route path="prp/midtown" element={<PrpMidtown />} />
    <Route path="prp/brooklyn" element={<PrpBrooklyn />} />
    <Route path="prp/williamsburg" element={<PrpWilliamsburg />} />
    <Route path="prp/hamptons" element={<PrpHamptons />} />
    
    {/* Laser Hair Removal Location Routes */}
    <Route path="laser-hair-removal/manhattan" element={<LaserHairRemovalManhattan />} />
    <Route path="laser-hair-removal/soho" element={<LaserHairRemovalSoHo />} />
    <Route path="laser-hair-removal/tribeca" element={<LaserHairRemovalTribeca />} />
    <Route path="laser-hair-removal/upper-east-side" element={<LaserHairRemovalUpperEastSide />} />
    <Route path="laser-hair-removal/midtown" element={<LaserHairRemovalMidtown />} />
    <Route path="laser-hair-removal/brooklyn" element={<LaserHairRemovalBrooklyn />} />
    <Route path="laser-hair-removal/williamsburg" element={<LaserHairRemovalWilliamsburg />} />
    <Route path="laser-hair-removal/hamptons" element={<LaserHairRemovalHamptons />} />
    
    {/* Carbon Laser Facial Location Routes */}
    <Route path="carbon-laser-facial/manhattan" element={<CarbonLaserFacialManhattan />} />
    <Route path="carbon-laser-facial/soho" element={<CarbonLaserFacialSoHo />} />
    <Route path="carbon-laser-facial/tribeca" element={<CarbonLaserFacialTribeca />} />
    <Route path="carbon-laser-facial/upper-east-side" element={<CarbonLaserFacialUpperEastSide />} />
    <Route path="carbon-laser-facial/midtown" element={<CarbonLaserFacialMidtown />} />
    <Route path="carbon-laser-facial/brooklyn" element={<CarbonLaserFacialBrooklyn />} />
    <Route path="carbon-laser-facial/williamsburg" element={<CarbonLaserFacialWilliamsburg />} />
    <Route path="carbon-laser-facial/hamptons" element={<CarbonLaserFacialHamptons />} />
    
    {/* Vaginal Rejuvenation Location Routes */}
    <Route path="vaginal-rejuvenation/manhattan" element={<VaginalRejuvenationManhattan />} />
    <Route path="vaginal-rejuvenation/soho" element={<VaginalRejuvenationSoHo />} />
    <Route path="vaginal-rejuvenation/tribeca" element={<VaginalRejuvenationTribeca />} />
    <Route path="vaginal-rejuvenation/midtown" element={<VaginalRejuvenationMidtown />} />
    <Route path="vaginal-rejuvenation/upper-east-side" element={<VaginalRejuvenationUpperEastSide />} />
    <Route path="vaginal-rejuvenation/brooklyn" element={<VaginalRejuvenationBrooklyn />} />
    <Route path="vaginal-rejuvenation/williamsburg" element={<VaginalRejuvenationWilliamsburg />} />
    <Route path="vaginal-rejuvenation/hamptons" element={<VaginalRejuvenationHamptons />} />
    
    {/* Photofacials Location Routes */}
    <Route path="photofacials/manhattan" element={<PhotofacialsManhattan />} />
    <Route path="photofacials/soho" element={<PhotofacialsSoHo />} />
    <Route path="photofacials/tribeca" element={<PhotofacialsTribeca />} />
    <Route path="photofacials/upper-east-side" element={<PhotofacialsUpperEastSide />} />
    <Route path="photofacials/midtown" element={<PhotofacialsMidtown />} />
    <Route path="photofacials/brooklyn" element={<PhotofacialsBrooklyn />} />
    <Route path="photofacials/williamsburg" element={<PhotofacialsWilliamsburg />} />
    <Route path="photofacials/hamptons" element={<PhotofacialsHamptons />} />
    
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
    
    {/* CoolSculpting Location Routes */}
    <Route path="coolsculpting/manhattan" element={<CoolSculptingManhattan />} />
    <Route path="coolsculpting/soho" element={<CoolSculptingSoHo />} />
    <Route path="coolsculpting/upper-east-side" element={<CoolSculptingUpperEastSide />} />
    <Route path="coolsculpting/tribeca" element={<CoolSculptingTribeca />} />
    <Route path="coolsculpting/midtown" element={<CoolSculptingMidtown />} />
    <Route path="coolsculpting/brooklyn" element={<CoolSculptingBrooklyn />} />
    <Route path="coolsculpting/williamsburg" element={<CoolSculptingWilliamsburg />} />
    <Route path="coolsculpting/hamptons" element={<CoolSculptingHamptons />} />
    <Route path="coolsculpting-in-manhattan" element={<CoolSculptingManhattan />} />
    <Route path="coolsculpting-in-soho" element={<CoolSculptingSoHo />} />
    <Route path="coolsculpting-in-upper-east-side" element={<CoolSculptingUpperEastSide />} />
    <Route path="coolsculpting-in-tribeca" element={<CoolSculptingTribeca />} />
    <Route path="coolsculpting-in-midtown" element={<CoolSculptingMidtown />} />
    <Route path="coolsculpting-in-brooklyn" element={<CoolSculptingBrooklyn />} />
    <Route path="coolsculpting-in-williamsburg" element={<CoolSculptingWilliamsburg />} />
    <Route path="coolsculpting-in-the-hamptons" element={<CoolSculptingHamptons />} />
  </>
);

export default TreatmentLocationRoutes;
