
import React from "react";
import TreatmentPageTemplate from "@/components/service/TreatmentPageTemplate";
import { getBotoxEnhancedContent, getBotoxVsDysportItems } from "@/data/treatments/botoxContent";
import ServiceComparison from "@/components/service/ServiceComparison";

const BotoxPage = () => {
  const treatmentName = "Botox";
  const serviceSlug = "botox";
  
  // Get enhanced content and comparison data
  const enhancedContent = getBotoxEnhancedContent();
  const botoxVsDysportItems = getBotoxVsDysportItems();
  
  // Custom component to render after the pricing section
  const CustomContent = () => (
    <ServiceComparison
      title="Botox vs. Dysport in NYC: Which Is Better?"
      option1Name="Botox"
      option2Name="Dysport"
      items={botoxVsDysportItems}
      footnote="Most NYC providers offer both – consult for personalized recommendations."
    />
  );
  
  return (
    <TreatmentPageTemplate
      treatmentName={treatmentName}
      serviceSlug={serviceSlug}
      enhancedContent={enhancedContent}
      customContent={<CustomContent />}
    />
  );
};

export default BotoxPage;
