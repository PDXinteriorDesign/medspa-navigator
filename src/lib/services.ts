import { Service } from "./types";

// Mock services data
export const services: Service[] = [
  {
    id: "botox",
    name: "Botox",
    slug: "botox",
    description: "Botox is a popular cosmetic treatment that temporarily reduces or eliminates facial fine lines and wrinkles.",
    imageUrl: "https://images.pexels.com/photos/3985311/pexels-photo-3985311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "micro-botox",
    name: "MicroBotox",
    slug: "micro-botox",
    description: "MicroBotox is an advanced technique that involves injecting multiple micro-droplets of diluted Botox into the dermis layer of the skin for subtle, natural-looking results.",
    imageUrl: "https://images.pexels.com/photos/3985311/pexels-photo-3985311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "fillers",
    name: "Dermal Fillers",
    slug: "fillers",
    description: "Dermal Fillers are injectables that add volume, smooth lines, and enhance facial contours for a more youthful appearance without surgery.",
    imageUrl: "https://images.pexels.com/photos/4586711/pexels-photo-4586711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "kybella",
    name: "Kybella",
    slug: "kybella",
    description: "Kybella is the first and only FDA-approved injectable treatment designed specifically to eliminate submental fullness, commonly known as a double chin.",
    imageUrl: "https://images.pexels.com/photos/7582555/pexels-photo-7582555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "coolsculpting",
    name: "CoolSculpting",
    slug: "coolsculpting",
    description: "CoolSculpting is a non-invasive fat-reduction procedure that freezes and eliminates stubborn fat cells.",
    imageUrl: "https://images.pexels.com/photos/7675410/pexels-photo-7675410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    slug: "laser-hair-removal",
    description: "Laser hair removal is a medical procedure that uses a concentrated beam of light to remove unwanted hair.",
    imageUrl: "https://images.unsplash.com/photo-1598963668990-70ff4eb44252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "photofacials",
    name: "Photofacials",
    slug: "photofacials",
    description: "Photofacials (IPL treatments) use intense pulsed light to reduce skin discoloration, sun damage, and improve overall complexion.",
    imageUrl: "https://images.pexels.com/photos/7446657/pexels-photo-7446657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "carbon-laser-facial",
    name: "Carbon Laser Facial",
    slug: "carbon-laser-facial",
    description: "Carbon Laser Facial is an advanced skin rejuvenation treatment that combines liquid carbon with laser technology for deep cleansing, exfoliation, and improved skin tone and texture.",
    imageUrl: "https://images.pexels.com/photos/12556701/pexels-photo-12556701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "vaginal-rejuvenation",
    name: "Vaginal Rejuvenation",
    slug: "vaginal-rejuvenation",
    description: "Vaginal Rejuvenation encompasses non-surgical treatments designed to address vaginal laxity, dryness, and other intimate concerns using advanced technologies.",
    imageUrl: "https://images.pexels.com/photos/2302908/pexels-photo-2302908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "weight-management",
    name: "Weight Management",
    slug: "weight-management",
    description: "Weight Management Programs combine medical expertise with personalized nutrition and lifestyle guidance, offering effective solutions beyond traditional dieting.",
    imageUrl: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "prp",
    name: "Platelet Rich Plasma",
    slug: "prp",
    description: "Platelet Rich Plasma therapy uses a patient's own blood cells to accelerate healing in a specific area, promoting tissue regeneration and collagen production.",
    imageUrl: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "hydrofacials",
    name: "Hydrofacials",
    slug: "hydrofacials",
    description: "Hydrofacials are advanced, multi-step treatments that cleanse, extract, and hydrate the skin using patented technology for immediate, glowing results.",
    imageUrl: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "chemical-peels",
    name: "Chemical Peels",
    slug: "chemical-peels",
    description: "Chemical peels use carefully formulated solutions to remove damaged outer layers of skin, revealing fresher, younger-looking skin underneath.",
    imageUrl: "https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "microdermabrasion",
    name: "Microdermabrasion",
    slug: "microdermabrasion",
    description: "Microdermabrasion is a minimally invasive procedure that uses fine crystals or a diamond-tip wand to gently exfoliate the skin, improving texture and tone.",
    imageUrl: "https://images.pexels.com/photos/5069611/pexels-photo-5069611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "microneedling",
    name: "Microneedling",
    slug: "microneedling",
    description: "Microneedling is a procedure that uses fine needles to create hundreds of tiny, invisible puncture wounds in the top layer of skin to trigger the body's natural wound healing processes.",
    imageUrl: "https://images.pexels.com/photos/7289740/pexels-photo-7289740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "radio-ultrasound-therapy",
    name: "Radio & Ultrasound Therapy",
    slug: "radio-ultrasound-therapy",
    description: "Radio frequency and ultrasound therapies use energy waves to stimulate collagen production, tighten skin, and reduce fat non-invasively.",
    imageUrl: "https://images.pexels.com/photos/7446976/pexels-photo-7446976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Helper function to get a service by slug
export const getServiceBySlug = (slug: string) => {
  // Special case for laser resurfacing - ensure it always returns a valid service even if not in main list
  if (slug === 'laser-resurfacing') {
    return {
      id: 'laser-resurfacing',
      name: 'Laser Resurfacing',
      slug: 'laser-resurfacing',
      description: 'Laser resurfacing treatments use focused light technology to reduce facial wrinkles, scars and blemishes. The treatment removes skin layer by layer with precision, allowing new skin cells to form, resulting in smoother, younger-looking skin.',
      imageUrl: 'https://images.pexels.com/photos/4586727/pexels-photo-4586727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'laser',
      popular: true
    };
  }
  
  return services.find(service => service.slug === slug);
};

// Helper function to get service IDs
export const getServiceIds = (): string[] => {
  return services.map(service => service.id);
};
