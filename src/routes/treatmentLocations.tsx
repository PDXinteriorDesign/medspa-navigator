
import React from "react";

// Import route groups for different treatments
import BotoxRoutes from "./treatments/botoxRoutes";
import MicroBotoxRoutes from "./treatments/microBotoxRoutes";
import FillersRoutes from "./treatments/fillersRoutes";
import KybellaRoutes from "./treatments/kybellaRoutes";
import PrpRoutes from "./treatments/prpRoutes";
import LaserHairRemovalRoutes from "./treatments/laserHairRemovalRoutes";
import CarbonLaserFacialRoutes from "./treatments/carbonLaserFacialRoutes";
import VaginalRejuvenationRoutes from "./treatments/vaginalRejuvenationRoutes";
import PhotofacialsRoutes from "./treatments/photofacialsRoutes";
import LaserResurfacingRoutes from "./treatments/laserResurfacingRoutes";
import CoolSculptingRoutes from "./treatments/coolSculptingRoutes";
import WeightManagementRoutes from "./treatments/weightManagementRoutes";

const TreatmentLocationRoutes = (
  <>
    {/* Botox Routes */}
    {BotoxRoutes}
    
    {/* MicroBotox Routes */}
    {MicroBotoxRoutes}
    
    {/* Fillers Routes */}
    {FillersRoutes}
    
    {/* Kybella Routes */}
    {KybellaRoutes}
    
    {/* PRP Routes */}
    {PrpRoutes}
    
    {/* Laser Hair Removal Routes */}
    {LaserHairRemovalRoutes}
    
    {/* Carbon Laser Facial Routes */}
    {CarbonLaserFacialRoutes}
    
    {/* Vaginal Rejuvenation Routes */}
    {VaginalRejuvenationRoutes}
    
    {/* Photofacials Routes */}
    {PhotofacialsRoutes}
    
    {/* Laser Resurfacing Routes */}
    {LaserResurfacingRoutes}
    
    {/* CoolSculpting Routes */}
    {CoolSculptingRoutes}
    
    {/* Weight Management Routes */}
    {WeightManagementRoutes}
  </>
);

export default TreatmentLocationRoutes;
