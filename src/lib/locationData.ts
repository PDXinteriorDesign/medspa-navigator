export type SubArea = {
  id: string;
  name: string;
  description: string;
  clientele: string;
  popularServices: string[];
  imageUrl: string;
};

export type LocationDetail = {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  subAreas: SubArea[];
  medspaCount: number;
  featured: boolean;
};

export const locationDetails: LocationDetail[] = [
  {
    id: "manhattan",
    slug: "manhattan",
    name: "Manhattan",
    shortDescription: "The heart of New York City's luxury medspa scene",
    description: "Manhattan is home to some of the world's most prestigious medical spas and aesthetic centers, offering cutting-edge treatments in sleek, luxurious settings. From the Upper East Side's high-end clientele seeking premium anti-aging treatments to SoHo's trend-conscious crowd embracing the latest innovations in skincare technology, Manhattan's medspa landscape is as diverse as its neighborhoods.",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    medspaCount: 142,
    featured: true,
    subAreas: [
      {
        id: "upper-east-side",
        name: "Upper East Side",
        description: "The Upper East Side is synonymous with luxury medical aesthetics, hosting numerous high-end medspas that cater to an affluent clientele seeking premium, results-driven treatments in discreet settings.",
        clientele: "High-income professionals, socialites, and residents who prioritize quality and discretion",
        popularServices: ["Botox", "Dermal Fillers", "Laser Resurfacing", "Luxury Facials"],
        imageUrl: "https://images.unsplash.com/photo-1595625516077-3228563ccec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: "upper-west-side",
        name: "Upper West Side",
        description: "The Upper West Side medspa scene embraces a holistic approach to beauty and wellness, with practices that often integrate natural skincare solutions alongside traditional aesthetic treatments.",
        clientele: "Health-conscious residents, academics, and families seeking balanced wellness approaches",
        popularServices: ["Medical-Grade Facials", "Organic Peels", "Non-Invasive Body Contouring", "Holistic Skin Treatments"],
        imageUrl: "https://images.unsplash.com/photo-1622133043744-62402fbd2e70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: "midtown",
        name: "Midtown",
        description: "Midtown's medspas cater to the fast-paced professional crowd with efficient, high-impact treatments that deliver results with minimal downtime, making them popular with the business district's busy executives.",
        clientele: "Business professionals, hotel guests, and time-conscious clients seeking quick results",
        popularServices: ["Express Facials", "Lunchtime Procedures", "Botox", "Laser Hair Removal"],
        imageUrl: "https://images.unsplash.com/photo-1605304978115-40267b3a9ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: "soho",
        name: "SoHo",
        description: "SoHo's trendsetting medspa scene offers cutting-edge treatments in design-forward spaces, attracting a younger, fashion-conscious clientele interested in preventative skincare and subtle enhancements.",
        clientele: "Fashion industry professionals, influencers, and trend-conscious young professionals",
        popularServices: ["Baby Botox", "Lip Fillers", "LED Light Therapy", "Microneedling"],
        imageUrl: "https://images.unsplash.com/photo-1595467959776-6eb7a123d2e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: "chelsea",
        name: "Chelsea",
        description: "Chelsea's medspas blend creativity with science, offering innovative treatments that appeal to the neighborhood's artistic community while emphasizing overall wellness and natural-looking results.",
        clientele: "Artists, designers, gallery owners, and wellness-oriented professionals",
        popularServices: ["Customized Facials", "Wellness Therapies", "Natural Collagen Stimulation", "CBD Treatments"],
        imageUrl: "https://images.unsplash.com/photo-1589395937783-0ea0aceb7ad8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      }
    ]
  },
  {
    id: "tribeca",
    slug: "tribeca",
    name: "Tribeca",
    shortDescription: "Exclusive, discreet luxury medspa experiences",
    description: "Tribeca has established itself as a premier destination for ultra-luxury medspa services, with exclusive clinics offering bespoke treatments to a discerning clientele. The neighborhood's aesthetic centers are known for their privacy, personalized approach, and access to cutting-edge technologies often before they're available elsewhere in the city.",
    imageUrl: "https://images.unsplash.com/photo-1565876427315-7086480146d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    medspaCount: 28,
    featured: true,
    subAreas: [
      {
        id: "tribeca-central",
        name: "Tribeca Central",
        description: "The heart of Tribeca offers some of New York's most exclusive medspa experiences, with celebrity dermatologists and plastic surgeons maintaining discreet practices for high-profile clients.",
        clientele: "Celebrities, finance executives, and luxury condo residents seeking premium, personalized care",
        popularServices: ["Custom Treatment Programs", "Preventative Aging Protocols", "Specialized Injectables", "Bespoke Facials"],
        imageUrl: "https://images.unsplash.com/photo-1622157437361-fd94e5bafdd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      }
    ]
  },
  {
    id: "hamptons",
    slug: "the-hamptons",
    name: "The Hamptons",
    shortDescription: "Seasonal luxury treatments for the summer elite",
    description: "The Hamptons represents the pinnacle of seasonal medspa luxury, with many elite Manhattan practices opening summer locations to serve their clientele who migrate east during the warmer months. From East Hampton's ultra-exclusive clinics to Montauk's more relaxed, wellness-oriented spaces, the area offers diverse aesthetic experiences with an emphasis on discretion and exceptional service.",
    imageUrl: "https://images.unsplash.com/photo-1543855379-ef501d27b451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    medspaCount: 34,
    featured: true,
    subAreas: [
      {
        id: "east-hampton",
        name: "East Hampton",
        description: "East Hampton hosts the most exclusive medspa destinations in the Hamptons, with appointment-only boutique clinics serving ultra-high-net-worth individuals and celebrities seeking privacy and personalized care.",
        clientele: "Celebrities, billionaires, and seasonal residents of luxury estates seeking top-tier treatments",
        popularServices: ["Advanced Anti-Aging Treatments", "Pre-Event Facial Sculpting", "Body Contouring", "Custom Beauty Regimens"],
        imageUrl: "https://images.unsplash.com/photo-1629846950595-21a546f8db2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: "southampton",
        name: "Southampton",
        description: "Southampton's medspa scene caters to affluent professionals and second-home owners seeking sophisticated treatments in elegant surroundings, with many practices focusing on subtle enhancement and maintenance.",
        clientele: "Finance professionals, successful entrepreneurs, and affluent tourists seeking elevated beauty treatments",
        popularServices: ["Preventative Botox", "Natural-Looking Fillers", "Light-Based Therapies", "Luxury Skincare Regimens"],
        imageUrl: "https://images.unsplash.com/photo-1622902312434-a156266ce4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: "montauk",
        name: "Montauk",
        description: "Montauk's medspas embrace the area's more relaxed, beachy vibe, offering wellness-oriented aesthetic treatments that appeal to the younger, surf-centric crowd that flocks to this easternmost point of Long Island.",
        clientele: "Younger vacationers, surf enthusiasts, and boutique hotel guests seeking recovery treatments",
        popularServices: ["Sun Damage Repair", "Hydrating Treatments", "Après-Beach Recovery", "Natural Enhancement Procedures"],
        imageUrl: "https://images.unsplash.com/photo-1609624532689-14118cef8156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: "bridgehampton-sag-harbor",
        name: "Bridgehampton / Sag Harbor",
        description: "The Bridgehampton and Sag Harbor area offers boutique medspa experiences that blend luxury with a more relaxed approach, attracting clients who appreciate personalized service in intimate settings.",
        clientele: "Artists, writers, and wealthy professionals seeking quality treatments with a relaxed atmosphere",
        popularServices: ["Customized Facial Treatments", "Collagen-Boosting Procedures", "Subtle Enhancement Services", "Wellness-Focused Therapies"],
        imageUrl: "https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      }
    ]
  },
  {
    id: "flushing",
    slug: "flushing",
    name: "Flushing",
    shortDescription: "Queens' premier destination for advanced aesthetic treatments",
    description: "Flushing has emerged as a vibrant hub for aesthetic medicine, combining traditional Eastern wellness philosophies with cutting-edge Western treatments. The neighborhood's diverse medical spas offer sophisticated treatments in modern facilities, attracting clients seeking both innovation and value. From advanced laser therapies to personalized skincare solutions, Flushing's aesthetic centers deliver premium services in a uniquely multicultural setting.",
    imageUrl: "/lovable-uploads/e87541f6-3548-4e4c-a9ec-9ce9b67f436e.png",
    medspaCount: 5,
    featured: false,
    subAreas: [
      {
        id: "downtown-flushing",
        name: "Downtown Flushing",
        description: "Downtown Flushing's medical spas combine luxury with accessibility, offering state-of-the-art treatments in modern facilities. The area has become a destination for those seeking quality aesthetic services at competitive prices.",
        clientele: "Young professionals, local residents, and visitors seeking quality treatments",
        popularServices: ["Laser Treatments", "Facial Rejuvenation", "Body Contouring", "Anti-Aging Therapies"],
        imageUrl: "/lovable-uploads/e87541f6-3548-4e4c-a9ec-9ce9b67f436e.png"
      }
    ]
  },
  {
    id: "queens",
    slug: "queens",
    name: "Queens",
    shortDescription: "Discover Queens' diverse aesthetic scene with personalized treatments and exceptional value",
    description: "Queens offers a diverse aesthetic landscape that combines technical expertise with cultural diversity. From Astoria's trendy clinics to Forest Hills' established practices, Queens provides a range of options with practitioners trained in techniques from around the world. The borough's medspas are known for their personalized approach and competitive pricing, making premium aesthetic treatments accessible to a broader clientele. Neighborhoods like Bayside, Long Island City, and Flushing each bring their unique character to the borough's beauty scene.",
    imageUrl: "/lovable-uploads/d1dc3bd2-1851-43b0-96b8-a263de546b2b.png",
    medspaCount: 8,
    featured: false,
    subAreas: [
      {
        id: "astoria",
        name: "Astoria",
        description: "Astoria's aesthetic scene blends trendy, modern approaches with personalized care. The neighborhood's medspas cater to a diverse clientele with innovative treatments and multilingual services.",
        clientele: "Young professionals, families, and diverse local residents seeking accessible luxury treatments",
        popularServices: ["Laser Hair Removal", "Injectable Treatments", "HydraFacial", "Microneedling"],
        imageUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: "forest-hills",
        name: "Forest Hills",
        description: "Forest Hills offers sophisticated aesthetic services in elegant settings. The area's medspas cater to discerning clients who appreciate personalized attention and thorough consultations.",
        clientele: "Established professionals, local residents, and clients seeking premium services at reasonable prices",
        popularServices: ["Chemical Peels", "Advanced Facials", "Body Contouring", "Skin Rejuvenation"],
        imageUrl: "https://images.unsplash.com/photo-1607008829749-c0f284a49841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: "bayside",
        name: "Bayside",
        description: "Bayside's medical spas focus on holistic beauty and wellness, often incorporating both cutting-edge technology and traditional approaches. The neighborhood is known for its attentive service and thorough consultations.",
        clientele: "Health-conscious residents, working professionals, and clients seeking comprehensive wellness solutions",
        popularServices: ["Laser Resurfacing", "Body Treatments", "Customized Facials", "Wellness Therapies"],
        imageUrl: "https://images.pexels.com/photos/5069608/pexels-photo-5069608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "long-island-city",
        name: "Long Island City",
        description: "Long Island City's aesthetic clinics embody a modern, efficient approach with streamlined services for busy professionals. The area is becoming known for specialized body contouring and skin treatments.",
        clientele: "Urban professionals, young residents, and Manhattan commuters seeking convenient, quality treatments",
        popularServices: ["Body Sculpting", "Laser Hair Removal", "Express Facial Treatments", "Non-Invasive Procedures"],
        imageUrl: "https://images.pexels.com/photos/5069611/pexels-photo-5069611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  }
];

export const getLocationBySlug = (slug: string): LocationDetail | undefined => {
  return locationDetails.find(location => location.slug === slug);
};

export const getFeaturedLocations = (): LocationDetail[] => {
  return locationDetails.filter(location => location.featured);
};

export const getNeighborhoodBySlug = (location: LocationDetail, neighborhoodSlug: string): SubArea | undefined => {
  return location.subAreas.find(subArea => subArea.id === neighborhoodSlug);
};

export const getAllNeighborhoods = (): { location: LocationDetail; neighborhood: SubArea }[] => {
  const allNeighborhoods: { location: LocationDetail; neighborhood: SubArea }[] = [];
  
  locationDetails.forEach(location => {
    location.subAreas.forEach(neighborhood => {
      allNeighborhoods.push({
        location,
        neighborhood
      });
    });
  });
  
  return allNeighborhoods;
};
