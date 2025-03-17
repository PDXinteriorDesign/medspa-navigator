
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
    id: "coolsculpting",
    name: "CoolSculpting",
    slug: "coolsculpting",
    description: "CoolSculpting is a non-invasive fat-reduction procedure that freezes and eliminates stubborn fat cells.",
    imageUrl: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    slug: "laser-hair-removal",
    description: "Laser hair removal is a medical procedure that uses a concentrated beam of light to remove unwanted hair.",
    imageUrl: "https://images.unsplash.com/photo-1598963668990-70ff4eb44252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  }
];

// Helper function to get a service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

// Helper function to get service IDs
export const getServiceIds = (): string[] => {
  return services.map(service => service.id);
};
