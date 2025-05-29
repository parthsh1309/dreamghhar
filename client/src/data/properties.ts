export interface Property {
  id: number;
  title: string;
  location: string;
  locationDisplay: string;
  type: string;
  price: number;
  priceDisplay: string;
  image: string;
  description: string;
  features: string[];
  area: string;
  bedrooms?: number;
  bathrooms?: number;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "mukherjee-nagar",
    locationDisplay: "Mukherjee Nagar",
    type: "apartment",
    price: 85,
    priceDisplay: "₹85 Lakhs",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Spacious 3BHK apartment with modern amenities and excellent connectivity. Perfect for families looking for comfort and convenience in the heart of North Delhi.",
    features: ["3 Bedrooms", "2 Bathrooms", "Balcony", "Parking", "Lift", "24/7 Security"],
    area: "1200 sq ft",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 2,
    title: "Modern 2BHK Flat",
    location: "gtb-nagar",
    locationDisplay: "GTB Nagar",
    type: "flat",
    price: 65,
    priceDisplay: "₹65 Lakhs",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Well-designed 2BHK flat perfect for small families. Located in the vibrant GTB Nagar area with easy access to metro and shopping centers.",
    features: ["2 Bedrooms", "2 Bathrooms", "Kitchen", "Parking", "Power Backup"],
    area: "950 sq ft",
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 3,
    title: "Premium Duplex",
    location: "hudson-lane",
    locationDisplay: "Hudson Lane",
    type: "duplex",
    price: 120,
    priceDisplay: "₹1.2 Crores",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Luxurious duplex with premium finishes and amenities. Located in the trendy Hudson Lane area, known for cafes and nightlife.",
    features: ["4 Bedrooms", "3 Bathrooms", "Terrace", "Garden", "Parking", "Modular Kitchen"],
    area: "1800 sq ft",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 4,
    title: "Cozy 1BHK Studio",
    location: "outram-lane",
    locationDisplay: "Outram Lane",
    type: "apartment",
    price: 35,
    priceDisplay: "₹35 Lakhs",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Perfect for young professionals and students. Compact yet comfortable living space with modern amenities.",
    features: ["1 Bedroom", "1 Bathroom", "Kitchen", "Furnished", "Wi-Fi Ready"],
    area: "500 sq ft",
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: 5,
    title: "Family Villa",
    location: "shalimar-bagh",
    locationDisplay: "Shalimar Bagh",
    type: "villa",
    price: 250,
    priceDisplay: "₹2.5 Crores",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Spacious villa with garden and premium location. Perfect for large families who value space and privacy.",
    features: ["5 Bedrooms", "4 Bathrooms", "Garden", "Garage", "Swimming Pool", "Security"],
    area: "2500 sq ft",
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 6,
    title: "Modern 2BHK Apartment",
    location: "nirankari-colony",
    locationDisplay: "Nirankari Colony",
    type: "apartment",
    price: 55,
    priceDisplay: "₹55 Lakhs",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Contemporary 2BHK with modern amenities in a peaceful residential area. Great value for money.",
    features: ["2 Bedrooms", "2 Bathrooms", "Balcony", "Lift", "Security", "Club House"],
    area: "850 sq ft",
    bedrooms: 2,
    bathrooms: 2,
  },
];

export const locations = [
  { value: "mukherjee-nagar", label: "Mukherjee Nagar" },
  { value: "gtb-nagar", label: "GTB Nagar" },
  { value: "outram-lane", label: "Outram Lane" },
  { value: "hudson-lane", label: "Hudson Lane" },
  { value: "shalimar-bagh", label: "Shalimar Bagh" },
  { value: "nirankari-colony", label: "Nirankari Colony" },
];

export const propertyTypes = [
  { value: "apartment", label: "Apartment" },
  { value: "flat", label: "Flat" },
  { value: "duplex", label: "Duplex" },
  { value: "villa", label: "Villa" },
];

export const priceRanges = [
  { value: "0-50", label: "Under ₹50 Lakhs" },
  { value: "50-100", label: "₹50L - ₹1 Crore" },
  { value: "100-200", label: "₹1 - ₹2 Crores" },
  { value: "200+", label: "Above ₹2 Crores" },
];
