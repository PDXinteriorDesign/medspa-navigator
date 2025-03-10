
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
    default:
      return getDefaultServicePricing(serviceName);
  }
};
