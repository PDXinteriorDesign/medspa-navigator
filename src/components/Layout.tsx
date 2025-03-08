
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
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
