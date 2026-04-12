import { motion } from 'framer-motion';

const products = [
  {
    name: 'Banganapalli Mangoes',
    category: 'Fresh Produce',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9x1OF8Kqd0qdzCAGzgkm9WYQiyDOLNJaDWKO4prnVm2gwcwEzU3lqxnqg4hTgvSOkD0nTvTT-Z4MFMEm8PMNIroD4Psdp5GuW7s_6oAB5MPb6PSCEaCezMvXNkwSL2QpPm-CGeC2YwHAj0-PPc2o7WEzmPthQK-ZMm17mtFClzKzGVmgjHpQ_e9U4XdUCaNSuMHs5CWOLIxaaheu-bGOQHtnq0cXLyujLDFELM7ryUBSTry0Y_MH1B4hEyBk_Chqr_5lGCvKnOJJw',
    description: 'Known as the "King of Mangoes" in South India, these large, sweet fruits feature a thin skin and fiberless pulp.',
    specs: [
      { label: 'Weight', value: '300g - 500g' },
      { label: 'Packaging', value: '3kg / 5kg Cartons' },
      { label: 'Temp', value: '13°C (Ventilated)' },
      { label: 'Origin', value: 'Andhra Pradesh' }
    ]
  },
  {
    name: 'Alphonso Mangoes',
    category: 'Fresh Produce',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQCzXebguPhPMDlV72Ig4hjPJ2LrU4PLeGEXNDRzzT1jaHfTGiRXbzF4Sdzml2hpzVS3gbz6pOvi1ilo9AEzSV-ZcTiW83pL9fzPdrjyVYxAxaui7ipK_XrbQeODHvZ6mVMErAOi_wJ2zfxWuWO0rf9hiDsGjOxdpqFMSnDdOm3szynJjjSXRCyEvcm9vimaQU4rpChllKVtAC-0shy60m2SAihLOXZbg_9Rz8w0LMsUloiki3WRUtmaExosccvkRwzCHrMjx3OmYH',
    description: 'The most sought-after variety globally, prized for its sunshine-yellow color and rich, creamy, aromatic flesh.',
    specs: [
      { label: 'Weight', value: '200g - 300g' },
      { label: 'Brix', value: '18° - 22°' },
      { label: 'Treatment', value: 'VHT / Hot Water' },
      { label: 'Origin', value: 'Ratnagiri/Devgad' }
    ]
  },
  {
    name: 'Plain Fox Nuts (Makhana)',
    category: 'Superfood',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFwZsh6LKzH6uV9OR6CmwaiXABUrcmjms36YMNEex1i9YHOhb5dNJqdjXE6WSc9aaGvp2yZRxh2RSkUnaTa8wbFkgh5ofUz7C7Iwrlp3B9CQiiAp_sji4WFQjcRj3z-3ulNs1Mt4oUfezmcRHuABCX7gj3tEA835imPZt3LGlaleNIYAIqCM-qMIWXidkeVbzjYlgrV3HI07hD3U6-V9MluFVETxAsP8iL9d1hbpMLHlUyQZ61OAWjMiD4wExQeexXB15Wj1ulCkdT',
    description: 'Highly nutritious aquatic seeds, puffed and sorted to perfection. A gluten-free, low-calorie snack with high protein.',
    specs: [
      { label: 'Grade', value: 'Premium Handpicked' },
      { label: 'Size', value: '12mm - 18mm' },
      { label: 'Moisture', value: '< 5%' },
      { label: 'Packaging', value: 'Bulk / Retail Bags' }
    ]
  },
  {
    name: 'Red Onion',
    category: 'Vegetables',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUpPN_Sw2BALfYefDwBmXYuNJ-aDwQJMZnnGa-DqZ0C0e-jKGvV9j_NhzQeM9hc1IZWDOrm0nb8DCTLKfQbHI3KaSPmWeLr_Y7ulb0ZJWdvzoU2TZsQ_hnBVunYs6Kl34UXhFqxYPGTfoVSq2tQ-hOenxt0VN-j-AVBzzcUFs6UByEzEjJGUnjnccnqAijJiXCR3lp0JM4yXup9Z2dflHVgdLxhJIKSe3Go5yQlLuB8vgSUUTcLBxFVyd927buCvPQKvghM_YWyGlR',
    description: 'Firm, pungent, and long-lasting red onions sourced from prime agricultural clusters. Excellent for storage and transit.',
    specs: [
      { label: 'Size', value: '45mm - 65mm+' },
      { label: 'Packaging', value: '5kg - 50kg Mesh Bags' },
      { label: 'Quality', value: 'Well-cured skin' },
      { label: 'Container', value: '40ft Reefer' }
    ]
  },
  {
    name: 'Cow/Buffalo Dung Cakes',
    category: 'Traditional',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZc6GEUcPaXu0wncZLYw7Ws6nWhcTx6EJsvEQXx6iFG_5DPFi_HXsEYMB6uekypdFIgBODt-kCiSKWky2dP6SrM8bX6cWW_agqF5VaJvh3URpQkXYwOKeEpFXt7xW0BONiDQWSkzIdRejhNwoQtAYJy_281xIJztsI7cHAGXH3wC9-EPq4lRLp6c_QWn9w-6QNuDb3j4tL-dI6uvGn5ectqZD7AT9_NVLHmiiumbTzslGYWWt13rBFjYGpLfPS3B8VgXFDRv9Bd9UP',
    description: 'Traditional sun-dried cakes used for organic farming, fuel, and religious ceremonies. Completely natural and chemical-free.',
    specs: [
      { label: 'Diameter', value: '4 - 6 inches' },
      { label: 'Process', value: 'Sun-dried' },
      { label: 'Type', value: 'Pure Cow/Buffalo' },
      { label: 'Moisture', value: 'Minimized' }
    ]
  },
  {
    name: 'Dry/Buffalo Cow Dung Powder',
    category: 'Organic Fertilizer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQCzXebguPhPMDlV72Ig4hjPJ2LrU4PLeGEXNDRzzT1jaHfTGiRXbzF4Sdzml2hpzVS3gbz6pOvi1ilo9AEzSV-ZcTiW83pL9fzPdrjyVYxAxaui7ipK_XrbQeODHvZ6mVMErAOi_wJ2zfxWuWO0rf9hiDsGjOxdpqFMSnDdOm3szynJjjSXRCyEvcm9vimaQU4rpChllKVtAC-0shy60m2SAihLOXZbg_9Rz8w0LMsUloiki3WRUtmaExosccvkRwzCHrMjx3OmYH', // Note: reused image from Alphonso in original, might want to check
    description: 'Finely ground, odorless, and dried manure powder. An exceptional soil conditioner and natural fertilizer for global agriculture.',
    specs: [
      { label: 'Texture', value: 'Fine Mesh Powder' },
      { label: 'Organic Matter', value: '> 40%' },
      { label: 'Packing', value: 'LDPE Bags' },
      { label: 'Sterilization', value: 'Steam Treated' }
    ]
  }
];

const ProductCard = ({ product }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6 bg-stone-100 dark:bg-stone-800/50">
      <img
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={product.image}
      />
      <div className="absolute top-4 right-4 bg-primary/90 text-background-dark px-3 py-1 rounded-full text-xs font-bold uppercase">
        {product.category}
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-3 dark:text-white">{product.name}</h3>
    <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
      {product.description}
    </p>
    <div className="bg-stone-100 dark:bg-stone-800/40 p-5 rounded-lg border border-stone-200 dark:border-stone-700">
      <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Export Specs</h4>
      <ul className="text-xs space-y-2 font-medium">
        {product.specs.map((spec, idx) => (
          <li key={idx} className="flex justify-between border-b border-stone-200 dark:border-stone-700 pb-1 last:border-0 last:pb-0">
            <span className="opacity-60">{spec.label}</span>
            <span>{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Products = () => {
  return (
    <div className="flex flex-col pt-20">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-semibold tracking-widest uppercase text-xs mb-4 block"
          >
            Our Premium Selection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-stone-900 dark:text-white"
          >
            Products We Export
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed"
          >
            Delivering the finest agricultural and traditional Indian products to global markets. We ensure rigorous
            quality control and professional logistics for every shipment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all py-10 border-t border-stone-200 dark:border-stone-800">
          {[
            { icon: 'verified', text: 'IEC Registered' },
            { icon: 'public', text: 'APEDA Member' },
            { icon: 'eco', text: 'Organic Certified' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="material-icons text-3xl">{item.icon}</span>
              <span className="font-bold text-lg tracking-tighter uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
