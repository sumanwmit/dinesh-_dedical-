export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: 'Prescription' | 'OTC Medicines' | 'Health Devices' | 'Surgical & First Aid' | 'Baby Care' | 'Supplements' | 'Personal Care';
  mrp: number;
  availableQuantity: number;
  expiryDate: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  dosageForm?: string;
  prescriptionRequired: boolean;
  description?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  mrp: number;
  discountPrice: number;
  image: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  prescriptionRequired: boolean;
  tag?: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  keyFeatures: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'devices' | 'products' | 'surgical';
  imageUrl: string;
  caption: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  date: string;
  image: string;
  tips: string[];
}
