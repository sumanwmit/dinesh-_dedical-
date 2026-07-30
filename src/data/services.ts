import { ServiceCategory } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    shortDesc: '100% genuine Allopathic & Ayurvedic prescription drugs with strict quality and temperature controls.',
    fullDesc: 'We stock a comprehensive range of critical prescription medicines across Cardiology, Diabetology, Gastroenterology, Neurology, Oncology, and Antibiotics. Located right near Hospital Mor and Sadar Hospital Jehanabad, we ensure instant availability of doctor-prescribed medications.',
    iconName: 'Pill',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Cold Chain Storage for Insulin, Vaccines & Biologics',
      'Batch Verification & Strict Expiry Checks',
      'Instant Prescription Upload via WhatsApp',
      'Generic & Branded Options Available'
    ]
  },
  {
    id: 'otc-medicines',
    title: 'OTC Medicines & First Aid',
    shortDesc: 'Everyday over-the-counter remedies for fever, digestive care, pain relief, and cough & cold.',
    fullDesc: 'Complete inventory of non-prescription everyday medicines, pain sprays, antacids, ORS hydration salts, antiseptics, and wound care dressings. Fast help from registered pharmacists.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Comprehensive Fever & Cold Supplies',
      'Pain Relief Gels, Oils & Sprays',
      'Digestive & Antacid Formulations',
      'Complete First Aid Kits for Home & Vehicle'
    ]
  },
  {
    id: 'health-devices',
    title: 'Health Devices & Diagnostic Equipment',
    shortDesc: 'Certified digital BP monitors, glucometers, pulse oximeters, nebulizers & thermometers.',
    fullDesc: 'Equip your home with reliable diagnostic tools. We provide tested, brand-warranty medical devices from leading brands like Omron, Accu-Chek, Dr. Trust, and Beurer.',
    iconName: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Upper Arm Automatic BP Monitors',
      'Glucometer Kits & High-Precision Strips',
      'Heavy-Duty Compressor Nebulizers',
      'Infrared Non-Contact Thermometers'
    ]
  },
  {
    id: 'surgical-supplies',
    title: 'Surgical & Hospital Supplies',
    shortDesc: 'Hospital-grade surgical dressings, IV sets, catheters, gloves, masks & sterilizing agents.',
    fullDesc: 'Catering to post-operative patients, clinics, and family home-care needs in Jehanabad. We supply sterile surgical cotton, bandages, cannulas, oxygen accessories, and sanitizers.',
    iconName: 'Syringe',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Sterile Cotton & Micropore Tapes',
      'IV Infusion Sets & Syringes',
      'Hospital Disinfectants & Sanitizers',
      'Orthopedic Braces & Supports'
    ]
  },
  {
    id: 'baby-mother-care',
    title: 'Baby Care & Mother Essentials',
    shortDesc: 'Pediatrician-approved baby foods, formulas, diapers, gentle skincare & maternal supplements.',
    fullDesc: 'Dedicated mother and baby wellness counter. Premium products from Nestle, Himalaya, Pampers, Sebamed, and Lactogen to keep your little ones healthy and happy.',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Stage-wise Infant Cereals & Milk Formulas',
      'Hypoallergenic Baby Skincare & Massage Oils',
      'Ultra-Soft Premium Diapers & Wipes',
      'Pregnancy & Lactation Nutrition Packs'
    ]
  },
  {
    id: 'supplements-wellness',
    title: 'Health Supplements & Immunity Boosters',
    shortDesc: 'Multivitamins, calcium & vitamin D3, protein powders, fish oils & herbal immunity boosters.',
    fullDesc: 'Proactive health care solutions. Certified nutritional supplements to replenish deficiencies, support bone density, strengthen cardiac health, and improve daily vitality.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1550572017-edf706256c38?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Daily Multivitamins & Ginseng Capsules',
      'Calcium & Vitamin D3 Softgels',
      'Whey & Plant Protein Powders',
      'Ayurvedic Immunity Tonics'
    ]
  },
  {
    id: 'personal-care-skincare',
    title: 'Personal Care & Dermatology',
    shortDesc: 'Dermatologist-recommended skin creams, medicated soaps, oral hygiene, and hair care.',
    fullDesc: 'Medicated skincare solutions for acne, dry skin, fungal care, and daily hygiene. Authentic products backed by dermatological testing.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Dermatological Moisturizers & Sunscreens',
      'Medicated Anti-Fungal Soaps & Powders',
      'Gum Care & Oral Antiseptic Mouthwashes',
      'Therapeutic Hair Oils & Shampoos'
    ]
  },
  {
    id: 'whatsapp-quick-order',
    title: 'WhatsApp Prescription Order & Home Pickup Support',
    shortDesc: 'Send a photo of your prescription on WhatsApp (7903430774) for fast bill quote and pickup.',
    fullDesc: 'Save time waiting in queues. Snap your prescription with your phone, send it via WhatsApp, and our pharmacist will pack your order for swift pickup or local delivery in Jehanabad.',
    iconName: 'MessageSquare',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Instant Prescription Review by Certified Pharmacist',
      'Transparent Price Quote Before Packing',
      'Priority Urgent Pickup for Hospital Patients',
      'Friendly Customer Support via Call & WhatsApp'
    ]
  }
];
