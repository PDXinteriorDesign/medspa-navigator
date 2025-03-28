
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is the Best Med Spa in NYC?",
      answer: "The best med spa in NYC depends on your goals. For Botox, top-rated clinics include Glow Aesthetics NYC and Park Avenue Skin Clinic. For laser skin treatments, visit Tribeca Skin Rejuvenation or Upper East Side Aesthetics."
    },
    {
      question: "How Much Does Botox Cost in NYC?",
      answer: "Prices range from $12 – $20 per unit, with an average treatment requiring 20-50 units."
    },
    {
      question: "What Are the Best Non-Surgical Anti-Aging Treatments in NYC?",
      answer: "Botox, dermal fillers, Sofwave skin tightening, RF Microneedling, and PRP facial rejuvenation."
    },
    {
      question: "How Do I Choose the Right NYC Med Spa?",
      answer: "Look for board-certified injectors, verified Google reviews, and high-quality before-and-after photos."
    }
  ];

  return (
    <section className="py-16">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      
      <div className="medspa-container">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8">
          FAQs – NYC Med Spas Explained
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
              {index === 0 && (
                <div className="mt-3">
                  <Link to="/treatments/botox" className="text-sm text-medspa-teal hover:underline">Learn more about Botox treatments</Link>
                </div>
              )}
              {index === 1 && (
                <div className="mt-3">
                  <Link to="/treatments" className="text-sm text-medspa-teal hover:underline">View all treatment options</Link>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
            <Link to="/faq">See More FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
