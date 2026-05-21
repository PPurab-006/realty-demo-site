import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'aravalli-heights',
    slug: 'aravalli-heights',
    name: 'Prestige Aravalli Heights',
    type: 'Luxury Apartments',
    location: 'Jagatpura, Jaipur',
    status: 'Under Construction',
    priceRange: '₹1.2 Cr - ₹3.5 Cr',
    config: '2, 3 & 4 BHK',
    area: '1,250 - 3,800 sq.ft.',
    amenities: ['Swimming Pool', 'Clubhouse', 'Gymnasium'],
    description: 'Rising against the majestic Aravalli backdrop, these luxury apartments redefine elevated living with panoramic views and world-class amenities.',
    fullDescription: 'Rising against the majestic Aravalli backdrop, these luxury apartments redefine elevated living with panoramic views and world-class amenities. Experience an architectural marvel that perfectly blends natural beauty with contemporary luxury.',
    gradient: 'from-amber-900/40 via-stone-900/60 to-zinc-950',
    image: '/images/aravalli_heights.png',
    images: ['/images/aravalli_heights.png', '/images/royal_villas.png', '/images/green_enclave.png', '/images/city_centre.png'],
    stats: {
      plotSize: '5 Acres',
      totalUnits: '450',
      area: '1,250 - 3,800 sq.ft.',
      priceRange: '₹1.2 Cr - ₹3.5 Cr',
      reraNo: 'RAJ/RERA/2023/1234'
    },
    detailedAmenities: [
      { category: 'Sports', list: [{ name: 'Swimming Pool', icon: 'Waves' }, { name: 'Tennis Court', icon: 'Circle' }] },
      { category: 'Wellness', list: [{ name: 'Gymnasium', icon: 'Dumbbell' }, { name: 'Yoga Deck', icon: 'Leaf' }] },
      { category: 'Kids Zone', list: [{ name: 'Kids Play Area', icon: 'Baby' }, { name: 'Toddler Pool', icon: 'Droplets' }] },
      { category: 'Security', list: [{ name: '24/7 Security', icon: 'Shield' }, { name: 'CCTV', icon: 'Video' }] }
    ],
    locationHighlights: [
      { name: 'City Center', distance: '15 min' },
      { name: 'Airport', distance: '20 min' },
      { name: 'Railway Station', distance: '25 min' },
      { name: 'International School', distance: '5 min' },
      { name: 'Multi-specialty Hospital', distance: '10 min' }
    ]
  },
  {
    id: 'royal-villas',
    slug: 'royal-villas',
    name: 'Prestige Royal Villas',
    type: 'Premium Villas',
    location: 'Ajmer Road, Jaipur',
    status: 'Ready to Move',
    priceRange: '₹2.8 Cr - ₹6.5 Cr',
    config: '4 & 5 BHK',
    area: '3,500 - 6,200 sq.ft.',
    amenities: ['Private Garden', 'Smart Home', 'Covered Parking'],
    description: 'An exclusive enclave of regal villas where Rajasthani heritage meets contemporary luxury. Each villa is a masterpiece of architectural brilliance.',
    fullDescription: 'An exclusive enclave of regal villas where Rajasthani heritage meets contemporary luxury. Each villa is a masterpiece of architectural brilliance, offering unparalleled privacy, sprawling living spaces, and bespoke finishes.',
    gradient: 'from-emerald-900/40 via-stone-900/60 to-zinc-950',
    image: '/images/royal_villas.png',
    images: ['/images/royal_villas.png', '/images/aravalli_heights.png', '/images/meadows.png', '/images/skyline.png'],
    stats: {
      plotSize: '12 Acres',
      totalUnits: '65',
      area: '3,500 - 6,200 sq.ft.',
      priceRange: '₹2.8 Cr - ₹6.5 Cr',
      reraNo: 'RAJ/RERA/2021/0567'
    },
    detailedAmenities: [
       { category: 'Lifestyle', list: [{ name: 'Private Garden', icon: 'Flower' }, { name: 'Smart Home', icon: 'Cpu' }] },
       { category: 'Convenience', list: [{ name: 'Covered Parking', icon: 'Car' }, { name: 'Maid Room', icon: 'Home' }] },
       { category: 'Security', list: [{ name: 'Video Door Phone', icon: 'Video' }, { name: 'Gated Community', icon: 'Lock' }] }
    ],
    locationHighlights: [
      { name: 'City Center', distance: '20 min' },
      { name: 'Delhi-Jaipur Highway', distance: '5 min' },
      { name: 'Shopping Mall', distance: '10 min' }
    ]
  },
  {
    id: 'green-enclave',
    slug: 'green-enclave',
    name: 'Prestige Green Enclave',
    type: 'Plotted Development',
    location: 'Tonk Road, Jaipur',
    status: 'Coming Soon',
    priceRange: '₹45 Lac - ₹1.2 Cr',
    config: '1,200 - 3,500 sq.ft. Plots',
    area: '1,200 - 3,500 sq.ft.',
    amenities: ['Landscaped Gardens', 'Jogging Track', '24/7 Security'],
    description: 'Build your dream on your terms. Premium plotted development surrounded by lush green landscapes and modern infrastructure.',
    fullDescription: 'Build your dream on your terms. Premium plotted development surrounded by lush green landscapes and modern infrastructure. This master-planned community provides the perfect canvas for your bespoke residence.',
    gradient: 'from-teal-900/40 via-stone-900/60 to-zinc-950',
    image: '/images/green_enclave.png',
    images: ['/images/green_enclave.png', '/images/city_centre.png', '/images/meadows.png'],
    stats: {
      plotSize: '25 Acres',
      totalPlots: '300',
      area: '1,200 - 3,500 sq.ft.',
      priceRange: '₹45 Lac - ₹1.2 Cr',
      reraNo: 'RAJ/RERA/2024/0089'
    },
    detailedAmenities: [
        { category: 'Nature', list: [{ name: 'Landscaped Gardens', icon: 'TreePine' }, { name: 'Water Features', icon: 'Waves' }] },
        { category: 'Fitness', list: [{ name: 'Jogging Track', icon: 'Activity' }, { name: 'Open Gym', icon: 'Dumbbell' }] },
        { category: 'Infrastructure', list: [{ name: 'Underground Wiring', icon: 'Zap' }, { name: 'Blacktop Roads', icon: 'Map' }] }
    ],
    locationHighlights: [
      { name: 'Chokhi Dhani', distance: '5 min' },
      { name: 'Airport', distance: '15 min' },
      { name: 'Ring Road', distance: '2 min' }
    ]
  },
  {
    id: 'city-centre',
    slug: 'city-centre',
    name: 'Prestige City Centre',
    type: 'Commercial & Residential',
    location: 'Mansarovar, Jaipur',
    status: 'Under Construction',
    priceRange: '₹85 Lac - ₹2.8 Cr',
    config: '1, 2 & 3 BHK',
    area: '650 - 2,100 sq.ft.',
    amenities: ['Retail Spaces', 'Rooftop Lounge', 'Co-working'],
    description: 'Where commerce meets comfort. A landmark mixed-use development at the heart of Jaipur\'s thriving commercial district.',
    fullDescription: 'Where commerce meets comfort. A landmark mixed-use development at the heart of Jaipur\'s thriving commercial district. Seamlessly integrating premium retail spaces with upscale residential apartments for a truly cosmopolitan lifestyle.',
    gradient: 'from-blue-900/40 via-stone-900/60 to-zinc-950',
    image: '/images/city_centre.png',
    images: ['/images/city_centre.png', '/images/skyline.png', '/images/aravalli_heights.png'],
    stats: {
      plotSize: '8 Acres',
      totalUnits: '500',
      area: '650 - 2,100 sq.ft.',
      priceRange: '₹85 Lac - ₹2.8 Cr',
      reraNo: 'RAJ/RERA/2023/0445'
    },
    detailedAmenities: [
       { category: 'Commercial', list: [{ name: 'Retail Spaces', icon: 'ShoppingBag' }, { name: 'Co-working', icon: 'Briefcase' }] },
       { category: 'Leisure', list: [{ name: 'Rooftop Lounge', icon: 'Coffee' }, { name: 'Multiplex', icon: 'Film' }] },
       { category: 'Residential', list: [{ name: 'Clubhouse', icon: 'Home' }, { name: 'Swimming Pool', icon: 'Waves' }] }
    ],
    locationHighlights: [
      { name: 'Metro Station', distance: '2 min' },
      { name: 'Hospital', distance: '5 min' },
      { name: 'Educational Institutes', distance: '10 min' }
    ]
  },
  {
    id: 'meadows',
    slug: 'meadows',
    name: 'Prestige Meadows',
    type: 'Premium Apartments',
    location: 'Vaishali Nagar, Jaipur',
    status: 'Ready to Move',
    priceRange: '₹95 Lac - ₹2.2 Cr',
    config: '2 & 3 BHK',
    area: '1,100 - 2,400 sq.ft.',
    amenities: ['Kids Play Area', 'Swimming Pool', 'Clubhouse'],
    description: 'Nestled in serene surroundings, Prestige Meadows offers a tranquil lifestyle with sprawling greens and premium living spaces.',
    fullDescription: 'Nestled in serene surroundings, Prestige Meadows offers a tranquil lifestyle with sprawling greens and premium living spaces. Experience the perfect harmony of nature and modern convenience in Vaishali Nagar.',
    gradient: 'from-violet-900/40 via-stone-900/60 to-zinc-950',
    image: '/images/meadows.png',
    images: ['/images/meadows.png', '/images/royal_villas.png', '/images/aravalli_heights.png'],
    stats: {
      plotSize: '4 Acres',
      totalUnits: '250',
      area: '1,100 - 2,400 sq.ft.',
      priceRange: '₹95 Lac - ₹2.2 Cr',
      reraNo: 'RAJ/RERA/2020/0112'
    },
    detailedAmenities: [
        { category: 'Recreation', list: [{ name: 'Clubhouse', icon: 'Home' }, { name: 'Indoor Games', icon: 'Gamepad2' }] },
        { category: 'Outdoor', list: [{ name: 'Swimming Pool', icon: 'Waves' }, { name: 'Kids Play Area', icon: 'Baby' }] },
        { category: 'Wellness', list: [{ name: 'Meditation Center', icon: 'Flower' }, { name: 'Walking Trail', icon: 'Map' }] }
    ],
    locationHighlights: [
      { name: 'National Highway', distance: '10 min' },
      { name: 'City Center', distance: '25 min' },
      { name: 'Supermarket', distance: '5 min' }
    ]
  },
  {
    id: 'skyline',
    slug: 'skyline',
    name: 'Prestige Skyline',
    type: 'Ultra Luxury',
    location: 'C-Scheme, Jaipur',
    status: 'Coming Soon',
    priceRange: '₹3.5 Cr - ₹8 Cr',
    config: '3, 4 & 5 BHK',
    area: '3,200 - 7,500 sq.ft.',
    amenities: ['Infinity Pool', 'Private Elevator', 'Helipad'],
    description: 'The pinnacle of luxury living. Sky-high residences with unmatched opulence, bespoke interiors, and a private world above the city.',
    fullDescription: 'The pinnacle of luxury living. Sky-high residences with unmatched opulence, bespoke interiors, and a private world above the city. Prestige Skyline is designed for those who accept only the absolute best.',
    gradient: 'from-rose-900/40 via-stone-900/60 to-zinc-950',
    image: '/images/skyline.png',
    images: ['/images/skyline.png', '/images/city_centre.png', '/images/royal_villas.png'],
    stats: {
      plotSize: '3 Acres',
      totalUnits: '40',
      area: '3,200 - 7,500 sq.ft.',
      priceRange: '₹3.5 Cr - ₹8 Cr',
      reraNo: 'RAJ/RERA/2024/0999'
    },
    detailedAmenities: [
        { category: 'Exclusive', list: [{ name: 'Private Elevator', icon: 'ArrowUpCircle' }, { name: 'Helipad', icon: 'Navigation' }] },
        { category: 'Luxury', list: [{ name: 'Infinity Pool', icon: 'Waves' }, { name: 'Spa', icon: 'Flower' }] },
        { category: 'Service', list: [{ name: 'Concierge', icon: 'UserCircle' }, { name: 'Valet Parking', icon: 'Car' }] }
    ],
    locationHighlights: [
      { name: 'Statue Circle', distance: '2 min' },
      { name: 'Secretariat', distance: '5 min' },
      { name: 'Premium Clubs', distance: '5 min' }
    ]
  },
];
