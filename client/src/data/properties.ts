export interface Property {
  id: number;
  title: string;
  location: string;
  locationDisplay: string;
  type: string;
  listingType: 'rent' | 'buy';
  price: number;
  priceDisplay: string;
  image: string;
  images: string[];
  youtubeUrl?: string;
  description: string;
  features: string[];
  area: string;
  bedrooms?: number;
  bathrooms?: number;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury 3BHK Flat ",
    location: "Gtb nagar",
    locationDisplay: "Gtb nagar",
    type: "flat",
    listingType: "buy",
    price: 290,
    priceDisplay: "₹2.9 crore",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1574891287478-4e32b0e1e2bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=TkR10BXZyr4",
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
    listingType: "rent",
    price: 25,
    priceDisplay: "₹25,000/month",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1615875221060-6e1d1d887987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
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
    listingType: "buy",
    price: 120,
    priceDisplay: "₹1.2 Crores",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
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
    listingType: "rent",
    price: 15,
    priceDisplay: "₹15,000/month",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1551447230-e8dfe39b5dc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1571460190358-14cd6ff6bb1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=xm3YgoEiEDc",
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
    listingType: "buy",
    price: 250,
    priceDisplay: "₹2.5 Crores",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1571460189300-1c685eb77c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=YE7VzlLtp-4",
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
    listingType: "rent",
    price: 22,
    priceDisplay: "₹22,000/month",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1571460190358-14cd6ff6bb1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=GXfVc25H9N4",
    description: "Contemporary 2BHK with modern amenities in a peaceful residential area. Great value for money.",
    features: ["2 Bedrooms", "2 Bathrooms", "Balcony", "Lift", "Security", "Club House"],
    area: "850 sq ft",
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 7,
    title: "Spacious 3BHK for Rent",
    location: "mukherjee-nagar",
    locationDisplay: "Mukherjee Nagar",
    type: "apartment",
    listingType: "rent",
    price: 35,
    priceDisplay: "₹35,000/month",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1615875221060-6e1d1d887987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1571460189300-1c685eb77c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=LpnAlGG6Gk8",
    description: "Fully furnished 3BHK apartment perfect for working professionals and families. Prime location with excellent connectivity.",
    features: ["3 Bedrooms", "2 Bathrooms", "Fully Furnished", "WiFi", "Parking", "Security"],
    area: "1100 sq ft",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 8,
    title: "Independent House for Sale",
    location: "shalimar-bagh",
    locationDisplay: "Shalimar Bagh",
    type: "house",
    listingType: "buy",
    price: 180,
    priceDisplay: "₹1.8 Crores",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1571460189298-ef9bd0a14b82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1571460189300-1c685eb77c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=pllRW9wETzw",
    description: "Independent house with modern architecture and ample space. Perfect for families looking for privacy and comfort.",
    features: ["4 Bedrooms", "3 Bathrooms", "Garden", "Parking", "Store Room", "Terrace"],
    area: "2000 sq ft",
    bedrooms: 4,
    bathrooms: 3,
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
  { value: "house", label: "House" },
];

export const listingTypes = [
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
];

export const priceRanges = [
  { value: "0-50", label: "Under ₹50 Lakhs" },
  { value: "50-100", label: "₹50L - ₹1 Crore" },
  { value: "100-200", label: "₹1 - ₹2 Crores" },
  { value: "200+", label: "Above ₹2 Crores" },
];

export const rentRanges = [
  { value: "0-20", label: "Under ₹20K/month" },
  { value: "20-40", label: "₹20K - ₹40K/month" },
  { value: "40-60", label: "₹40K - ₹60K/month" },
  { value: "60+", label: "Above ₹60K/month" },
];

export interface YouTubeVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
}

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "1",
    title: "3 BHK Flat in GTB Nagar Delhi 110009 – Itna Sasta Aur Sundar Ghar Dekha Hai Kabhi? 😲",
    url: "https://youtu.be/TkR10BXZyr4?si=jgTuItUC97CyfovC",
    thumbnail: "https://img.youtube.com/vi/TkR10BXZyr4/maxresdefault.jpg",
    description: "इतना सस्ता और सुंदर 3 BHK घर देखा है कभी? 🏡 Location: GTB Nagar, Delhi – 110009"
  },
  {
    id: "2", 
    title: "Indra Vihar में 2 BHK फ्लैट का शानदार टूर near mukherjee nagar | Budget Friendly Home! ",
    url: "https://youtu.be/LCLYD9dDVlU?si=oKLbVgbIoBHXMaWh",
    thumbnail: "http://img.youtube.com/vi/LCLYD9dDVlU/mqdefault.jpg",
    description: "Virtual tour of premium properties in Mukherjee Nagar area."
  },
  {
    id: "3",
    title: "Park Facing 2BHK 3 Side Corner Flat in Indra Vihar, Delhi | Investment Opportunity | Dream Ghar",
    url: "https://youtu.be/EaN5VgwbUTk?si=AiM40VsFeAWKDkiN", 
    thumbnail: "https://img.youtube.com/vi/EaN5VgwbUTk/maxresdefault.jpg",
    description: "Expert tips and guidance for first-time home buyers in North Delhi."
  },
  {
    id: "4",
    title: "Park Facing 2BHK 3 Side Corner Flat in Indra Vihar, Delhi | Investment Opportunity | Dream Ghar",
    url: "https://youtu.be/EaN5VgwbUTk?si=AiM40VsFeAWKDkiN",
    thumbnail: "https://img.youtube.com/vi/EaN5VgwbUTk/maxresdefault.jpg", 
    description: "Explore the best investment properties in trendy Hudson Lane area."
  },
];
