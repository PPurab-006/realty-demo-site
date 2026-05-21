export interface Project {
  id: string;
  name: string;
  type: string;
  location: string;
  status: 'Under Construction' | 'Ready to Move' | 'Coming Soon';
  priceRange: string;
  config: string;
  area: string;
  amenities: string[];
  description: string;
  gradient: string;
  image: string;
  // added for detail page
  slug?: string;
  fullDescription?: string;
  stats?: {
    plotSize?: string;
    totalPlots?: string;
    totalUnits?: string;
    area?: string;
    priceRange?: string;
    reraNo?: string;
  };
  detailedAmenities?: { category: string; list: { name: string; icon: string }[] }[];
  locationHighlights?: { name: string; distance: string }[];
  images?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  project: string;
  rating: number;
  quote: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface Amenity {
  name: string;
  icon: string;
}
