import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col pt-20">
      <section className="relative min-h-[80vh] flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-background-light dark:bg-background-dark">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase rounded mb-6">Pioneering Organic Exports</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-stone-900 dark:text-white leading-tight mb-8">
              Why Saravana Exports.
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              Commitment to purity, transparency, and global standards. We bridge the gap between India's finest
              organic farms and the world's most discerning markets through chemical-free organic agriculture.
            </p>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            alt="Sunlight hitting a mango orchard at dawn"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsc6uHyHgzrQwMgcN3aCwPm5DzIu5uC7mHtwiMQ9kxOl3Fyb0I1y6Z8WISmz5XUEdDpjDc1KCW3SaF75vij2vCbG7vS47FIJiCKh1cPHy6wdkOiEqY4yFeHLgOArB7AWEnw-znfXwVh1jUCaNmjcmECy4AvV3HtiaUxhBd9YPeGreiXWeD7lFBUkexUGJnRp5aSV0RQwVQgvDTfgErQjmvmQnLbaqnfn-mU77Ddm1ZDLqEnLg302ubfuuXDn0Cms4LbMAZ08c3XV50"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24">
          <div className="md:col-span-7 aspect-[16/9] overflow-hidden rounded-xl">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              alt="Farmer holding premium mangoes"
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPBknmnAfJejgwDFFjGUwCQmJphq-K26X3O2mJ495uHwL5dHSaaqnYI9EEmNIA0M8O437UBt9gaImM0NCvvjLnZi1iHZoVRVLIUGzOIFrdo4PXud54-w9QCIZT8fvAnIX4v3AiJxQKzQg_bpui7NKwtAwm5RCXD-HQVy0C6ozyQNWR9kQI_QckPcoOI-Hya5R6uwyqDCc2emM9JbxNJYos-E61mVqajU6ny6QV87_vLbRaaRaTtMXQRsh6cAIL_e3VTyNsljOa0PN"
            />
          </div>
          <div className="md:col-span-5">
            <h2 className="text-3xl font-display font-bold mb-6 dark:text-white">Purely Organic, Naturally Grown</h2>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
              Our philosophy at Saravana Exports is rooted in chemical-free organic agriculture. We partner with
              farmers who practice traditional, sustainable methods that eliminate synthetic pesticides and
              fertilizers.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              By prioritizing soil health and biodiversity, we ensure that every piece of produce is as nutritious
              as nature intended, meeting the highest organic standards worldwide.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 md:order-1 order-2">
            <h2 className="text-3xl font-display font-bold mb-6 dark:text-white">Farm-to-Port Traceability</h2>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
              Transparency is our hallmark. We maintain complete farm-to-port traceability from the specific farm
              plot to the shipping port. Every shipment carries a digital footprint of its journey.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Saravana Exports ensures rigorous international compliance protocols and adheres to the specific
              phytosanitary and regulatory requirements of every destination country we serve.
            </p>
          </div>
          <div className="md:col-span-7 md:order-2 order-1 aspect-[16/9] overflow-hidden rounded-xl">
            <motion.img 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              alt="Modern logistics warehouse" 
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8DhbwpP6YjLWU0e-eMti4Kg9GZHSlaZvVdLXpxa8RMrVLEwLPhcm52G6pCT6bxQJiUYwI68xcWWOl5v4y1ZvBRUsTIF4Wj7BpKLQpyUepyl33V1yD48DWYDAEkAbS3r2ZPulqyRDy-6qAfS4oblTfzGoqQlOoQmZiUUjYuFZTb8kY2ndurJKLPDKWZ1st-8Uw-DvEHft17kJfcVSRwttfknaJErNWIvq7jDdM5nk1auXcq9qL_NHspJlz6VBH9i8XekHY6y_MhZ_R"
            />
          </div>
        </div>
      </section>

      <section className="bg-stone-100 dark:bg-stone-900/50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold dark:text-white mb-4">Why International Buyers Trust Us</h2>
          <p className="text-stone-500 max-w-2xl mx-auto uppercase tracking-widest text-sm mb-16">Verified Excellence & Global Compliance</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { title: 'FSSAI', desc: 'Food Safety Standard' },
              { title: 'FIEO', desc: 'Export Promotion' },
              { title: 'APEDA', desc: 'Agri-Export Quality' },
              { title: 'PGS', desc: 'Organic Certification' }
            ].map((cert, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-background-dark p-8 rounded-xl border border-stone-200 dark:border-stone-800 flex flex-col items-center"
              >
                <div className="text-primary font-bold text-2xl mb-2">{cert.title}</div>
                <p className="text-xs text-stone-500 uppercase tracking-tighter">{cert.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-12 border-t border-stone-200 dark:border-stone-800">
            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8">Meeting Global Standards</h3>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex flex-col items-center space-y-2">
                <span className="material-symbols-outlined text-4xl">verified</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">EU Standards</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="material-symbols-outlined text-4xl">public</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">Middle East Compliant</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="material-symbols-outlined text-4xl">shield</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">USDA Organic</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
