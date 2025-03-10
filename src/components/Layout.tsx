
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-medspa-cream/30">
      <Helmet>
        <title>MedSpasNYC | Find Top Medical Spas in New York City</title>
        <meta 
          name="description" 
          content="Discover the best medical spas in NYC offering Botox, CoolSculpting, laser hair removal and more. Compare prices, read reviews, and book appointments."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://medspasnyc.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medspasnyc.com" />
        <meta property="og:title" content="MedSpasNYC | Find Top Medical Spas in New York City" />
        <meta property="og:description" content="Discover the best medical spas in NYC offering Botox, CoolSculpting, laser hair removal and more." />
        <meta property="og:image" content="https://medspasnyc.com/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://medspasnyc.com" />
        <meta property="twitter:title" content="MedSpasNYC | Find Top Medical Spas in New York City" />
        <meta property="twitter:description" content="Discover the best medical spas in NYC offering Botox, CoolSculpting, laser hair removal and more." />
        <meta property="twitter:image" content="https://medspasnyc.com/og-image.png" />
        
        {/* Keywords for NYC Medspa Services */}
        <meta name="keywords" content="medical spa NYC, medspa New York, luxury medspa, Botox NYC, fillers Manhattan, laser treatment New York, CoolSculpting NYC, Upper East Side medspa, SoHo medical spa, Brooklyn aesthetic clinic, best med spa NYC, top medspa Manhattan, skincare treatments NYC, anti-aging NYC, cosmetic procedures New York, non-surgical treatments Manhattan" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MedSpasNYC",
            "url": "https://medspasnyc.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://medspasnyc.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MedSpasNYC",
            "url": "https://medspasnyc.com",
            "logo": "https://medspasnyc.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/medspasnyc",
              "https://www.instagram.com/medspasnyc",
              "https://twitter.com/medspasnyc"
            ]
          })}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 lg:px-10 xl:px-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
