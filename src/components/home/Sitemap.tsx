
import React from "react";
import { Link } from "react-router-dom";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { Separator } from "@/components/ui/separator";

const Sitemap = () => {
  // Get main categories of treatments
  const treatmentCategories = [
    { name: "Injectables", items: ["botox", "micro-botox", "fillers", "kybella"] },
    { name: "Skin Treatments", items: ["microneedling", "chemical-peels", "hydrofacials", "photofacials", "carbon-laser-facial"] },
    { name: "Body Treatments", items: ["coolsculpting", "weight-management", "radio-ultrasound-therapy"] },
    { name: "Laser Treatments", items: ["laser-hair-removal", "laser-resurfacing"] },
    { name: "Specialty Treatments", items: ["prp", "vaginal-rejuvenation"] }
  ];

  // Get main NYC areas
  const mainAreas = [
    { name: "Manhattan", items: ["upper-east-side", "upper-west-side", "midtown", "tribeca", "soho", "chelsea"] },
    { name: "Brooklyn", items: ["williamsburg"] },
    { name: "The Hamptons", items: ["montauk", "east-hampton", "southampton", "bridgehampton-sag-harbor"] }
  ];

  // Helper function to get readable name from slug
  const getReadableName = (slug: string) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="medspa-container">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8">
          MedSpas NYC Directory
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Treatments Directory */}
          <div>
            <h3 className="text-xl font-serif font-bold text-medspa-dark mb-4">
              Treatments
            </h3>
            
            {treatmentCategories.map((category, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-medium text-medspa-teal mb-3">{category.name}</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {category.items.map((item) => {
                    const serviceObj = services.find(s => s.slug === item);
                    const name = serviceObj ? serviceObj.name : getReadableName(item);
                    
                    return (
                      <li key={item}>
                        <Link 
                          to={`/treatments/${item}`}
                          className="text-gray-700 hover:text-medspa-teal hover:underline text-sm"
                        >
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Locations Directory */}
          <div>
            <h3 className="text-xl font-serif font-bold text-medspa-dark mb-4">
              Locations
            </h3>
            
            {mainAreas.map((area, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-medium text-medspa-teal mb-3">{area.name}</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>
                    <Link 
                      to={`/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-700 hover:text-medspa-teal hover:underline text-sm font-medium"
                    >
                      All {area.name} MedSpas
                    </Link>
                  </li>
                  {area.items.map((item) => {
                    const locationObj = locations.find(l => l.id === item);
                    const name = locationObj ? locationObj.name : getReadableName(item);
                    
                    return (
                      <li key={item}>
                        <Link 
                          to={`/${item}`}
                          className="text-gray-700 hover:text-medspa-teal hover:underline text-sm"
                        >
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {/* Popular Treatment-Location Combinations */}
            <div className="mt-6">
              <h4 className="font-medium text-medspa-teal mb-3">Popular Treatment-Location Searches</h4>
              <ul className="grid grid-cols-1 gap-2">
                <li>
                  <Link 
                    to="/treatments/botox/manhattan"
                    className="text-gray-700 hover:text-medspa-teal hover:underline text-sm"
                  >
                    Botox in Manhattan
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/treatments/laser-hair-removal/brooklyn"
                    className="text-gray-700 hover:text-medspa-teal hover:underline text-sm"
                  >
                    Laser Hair Removal in Brooklyn
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/treatments/fillers/upper-east-side"
                    className="text-gray-700 hover:text-medspa-teal hover:underline text-sm"
                  >
                    Fillers in Upper East Side
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/treatments/coolsculpting/soho"
                    className="text-gray-700 hover:text-medspa-teal hover:underline text-sm"
                  >
                    CoolSculpting in SoHo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-sm text-gray-600 text-center">
          MedSpasNYC is your comprehensive guide to finding the best medical spas and aesthetic treatments across New York City.
        </p>
      </div>
    </section>
  );
};

export default Sitemap;
