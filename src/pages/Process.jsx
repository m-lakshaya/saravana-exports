import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: '01',
    title: 'Farmer Identification',
    icon: 'person_search',
    desc: 'We source exclusively from certified sustainable farms that adhere to international agricultural standards and ethical labor practices.'
  },
  {
    id: '02',
    title: 'Pre-harvest Testing',
    icon: 'science',
    desc: 'Rigorous soil analysis and crop quality checks are conducted before any harvest begins to ensure optimal nutritional value and purity.'
  },
  {
    id: '03',
    title: 'Harvest & Sorting',
    icon: 'agriculture',
    desc: 'Expert harvesting followed by manual grading. Only the finest produce that meets our strict size and quality parameters makes it to the next stage.'
  },
  {
    id: '04',
    title: 'Processing & Lab Testing',
    icon: 'factory',
    desc: 'Utilizing state-of-the-art facilities for processing. Final safety validation is performed in our ISO-certified labs before final approval.'
  },
  {
    id: '05',
    title: 'Packaging & Labelling',
    icon: 'inventory_2',
    desc: 'Eco-friendly packaging designed to preserve freshness and accurate labelling that meets all international customs and consumer standards.'
  },
  {
    id: '06',
    title: 'Shipping & Tracking',
    icon: 'local_shipping',
    desc: 'Efficient global logistics management with real-time tracking, ensuring your cargo arrives safely and on time at any global port.'
  }
];

const Process = () => {
  return (
    <div className="flex flex-col pt-32 pb-20">
      <main className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]"
          >
            Excellence in Motion
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mt-4 text-slate-900 dark:text-white leading-tight"
          >
            Our Export Process
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Ensuring quality from farm to global markets with Saravana Exports' 6-step rigorous, transparent,
            and sustainable supply chain process.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative md:flex items-center justify-between mb-12 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="md:w-[45%]">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-xl group">
                    <span className="text-primary font-bold text-sm tracking-widest">{step.id}.</span>
                    <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full hidden md:flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-white text-sm">{step.icon}</span>
                </div>
                <div className="md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <section className="mt-20 py-24 bg-slate-50 dark:bg-slate-900/50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Get a Custom Export Quote</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Ready to source the finest Indian produce? Contact us today for personalized pricing and logistics
            support for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-primary text-slate-900 font-bold rounded-lg hover:opacity-90 transition-opacity uppercase tracking-wider text-sm">
              Contact Sales
            </Link>
            <Link to="/products" className="w-full sm:w-auto px-10 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all uppercase tracking-wider text-sm">
              View Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
