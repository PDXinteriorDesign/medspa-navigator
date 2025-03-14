
import { SeoContent, FAQ, PricingItem } from "./serviceTypes";
import { 
  getBotoxContent, 
  getBotoxFaqs, 
  getBotoxPricing 
} from "./serviceContent/botoxContent";
import { 
  getCoolSculptingContent, 
  getCoolSculptingFaqs, 
  getCoolSculptingPricing 
} from "./serviceContent/coolSculptingContent";
import { 
  getLaserHairRemovalContent, 
  getLaserHairRemovalFaqs, 
  getLaserHairRemovalPricing 
} from "./serviceContent/laserHairRemovalContent";
import { 
  getDefaultServiceContent, 
  getDefaultServiceFaqs, 
  getDefaultServicePricing 
} from "./serviceContent/defaultContent";
import {
  getMicroBotoxFaqs,
  getMicroBotoxPricing
} from "./serviceContent/microBotoxContent";
import {
  getFillersFaqs,
  getFillersPricing
} from "./serviceContent/fillersContent";
import {
  getKybellaFaqs,
  getKybellaPricing
} from "./serviceContent/kybellaContent";
import {
  getPrpFaqs,
  getPrpPricing
} from "./serviceContent/prpContent";
import {
  getPhotofacialsFaqs,
  getPhotofacialsPricing
} from "./serviceContent/photofacialsContent";
import {
  getHydrofacialsFaqs,
  getHydrofacialsPricing
} from "./serviceContent/hydrofacialsContent";
import {
  getCarbonLaserFacialFaqs,
  getCarbonLaserFacialPricing
} from "./serviceContent/carbonLaserFacialContent";
import {
  getVaginalRejuvenationFaqs,
  getVaginalRejuvenationPricing
} from "./serviceContent/vaginalRejuvenationContent";
import {
  getRadioUltrasoundFaqs,
  getRadioUltrasoundPricing
} from "./serviceContent/radioUltrasoundContent";
import {
  getLaserResurfacingFaqs,
  getLaserResurfacingPricing
} from "./serviceContent/laserResurfacingContent";
import {
  getMicrodermabrasionFaqs,
  getMicrodermabrasionPricing
} from "./serviceContent/microdermabrasionContent";
import {
  getMicroneedlingFaqs,
  getMicroneedlingPricing
} from "./serviceContent/microneedlingContent";

export * from "./serviceTypes";

export const getServiceSeoContent = (serviceName: string): SeoContent => {
  let contentData;

  switch (serviceName) {
    case "Botox":
      contentData = getBotoxContent();
      break;
    case "CoolSculpting":
      contentData = getCoolSculptingContent();
      break;
    case "Laser Hair Removal":
      contentData = getLaserHairRemovalContent();
      break;
    default:
      contentData = getDefaultServiceContent(serviceName);
  }

  const { content, beforeTreatment, afterTreatment, reviews } = contentData;

  const seoContentObj: SeoContent = {
    introduction: content,
    ...content,
    beforeTreatment,
    afterTreatment,
    reviews,
    map: (callback) => content.map(callback)
  };

  return seoContentObj;
};

export const getServiceFaqs = (serviceName: string): FAQ[] => {
  switch (serviceName) {
    case "Botox":
      return getBotoxFaqs();
    case "CoolSculpting":
      return getCoolSculptingFaqs();
    case "Laser Hair Removal":
      return getLaserHairRemovalFaqs();
    case "MicroBotox":
      return getMicroBotoxFaqs();
    case "Dermal Fillers":
      return getFillersFaqs();
    case "Kybella":
      return getKybellaFaqs();
    case "Platelet Rich Plasma":
      return getPrpFaqs();
    case "Photofacials":
      return getPhotofacialsFaqs();
    case "Hydrofacials":
      return getHydrofacialsFaqs();
    case "Carbon Laser Facial":
      return getCarbonLaserFacialFaqs();
    case "Vaginal Rejuvenation":
      return getVaginalRejuvenationFaqs();
    case "Radio & Ultrasound Therapy":
      return getRadioUltrasoundFaqs();
    case "Laser Resurfacing":
      return getLaserResurfacingFaqs();
    case "Microdermabrasion":
      return getMicrodermabrasionFaqs();
    case "Microneedling":
      return getMicroneedlingFaqs();
    default:
      return getDefaultServiceFaqs(serviceName);
  }
};

export const getServicePricing = (serviceName: string): PricingItem[] => {
  switch (serviceName) {
    case "Botox":
      return getBotoxPricing();
    case "CoolSculpting":
      return getCoolSculptingPricing();
    case "Laser Hair Removal":
      return getLaserHairRemovalPricing();
    case "MicroBotox":
      return getMicroBotoxPricing();
    case "Dermal Fillers":
      return getFillersPricing();
    case "Kybella":
      return getKybellaPricing();
    case "Platelet Rich Plasma":
      return getPrpPricing();
    case "Photofacials":
      return getPhotofacialsPricing();
    case "Hydrofacials":
      return getHydrofacialsPricing();
    case "Carbon Laser Facial":
      return getCarbonLaserFacialPricing();
    case "Vaginal Rejuvenation":
      return getVaginalRejuvenationPricing();
    case "Radio & Ultrasound Therapy":
      return getRadioUltrasoundPricing();
    case "Laser Resurfacing":
      return getLaserResurfacingPricing();
    case "Microdermabrasion":
      return getMicrodermabrasionPricing();
    case "Microneedling":
      return getMicroneedlingPricing();
    default:
      return getDefaultServicePricing(serviceName);
  }
};
