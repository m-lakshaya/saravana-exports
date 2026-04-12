import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Agricultural landscape"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3RnEWh7zgTOAdFv2pAB2orVOqeW4CD1_0y5Vrgkh5YJhieiymUGB_5_IMqDtveTJjJK4A3zuCet-viyOO6mcyfSYgCSg9oiD6RTJ8P0yx95XHfNhtNgnuvbhbP1LrylZxf9Ng0CwPVpOxnrwtfBNdcnar_NPvUnLjN6QeenPWNeMFnW-vMB_P07L-34kdlx5SHfx22u2XK5ChN_WWgeLZ33emo6o-TlCW_eTuxf1V7yoLjT0iXA3X14_zawZ4qEkQjSxZTg4i79nA"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">India's Premium Export Partner</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-none tracking-tight text-glow">
              Finest Agriculture <br />
              <span className="text-primary">Exports</span> from India
            </h1>
            
            <p className="text-lg md:text-xl text-slate-100 font-light max-w-2xl leading-relaxed">
              Connecting global markets with India's rich agricultural heritage. We deliver premium quality
              produce with uncompromising standards and sustainable practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/products"
                className="px-10 py-5 bg-primary hover:bg-white text-slate-900 font-bold rounded transition-all duration-300 text-center uppercase tracking-widest text-xs flex items-center justify-center gap-2 group"
              >
                Explore Products
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
              <Link
                to="/process"
                className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/30 backdrop-blur-md rounded transition-all duration-300 text-center uppercase tracking-widest text-xs"
              >
                Our Process
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[9px] uppercase tracking-[0.4em]">Discover More</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
          ></motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 rounded shadow-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800"
        >
          <div className="flex flex-col gap-4 px-6 py-4 md:py-0">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-2">Certified Quality</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Adhering to international safety and quality standards for every shipment.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-6 py-4 md:py-0">
            <span className="material-symbols-outlined text-primary text-3xl">language</span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-2">Global Reach</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Efficient logistics network spanning across Europe, Middle East, and Asia.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-6 py-4 md:py-0">
            <span className="material-symbols-outlined text-primary text-3xl">handshake</span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-2">Direct Sourcing</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Working directly with farmers to ensure fair trade and peak freshness.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-32 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <img
                alt="Agriculture quality check"
                className="rounded shadow-2xl relative z-10 w-full aspect-square object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxpFwxzLg-1zw1N-Q39LdXkU8yvVQHBWb2XxsnMVRb_wDJpTZkx6m9uNlEer9FQYVnU_aLr3NG-px2GNpp2zNmhZP7kQWxUBA-zEDJ9kwokq5NT_kAkTUl-9JayTNB69EEBGC_1Xf6j_EFnKwQfzf5qKsjQ_RdzX_X8g-56rVTBZ-IYHR8n3V0tEFmqualJmWD_AJPZjSwckeXQJJkrWDvIkaJ7hGQd-4CH0swg6Be6vZhot3bmWU8uyM1GmygXk8Ishw2xBLJcLG4"
              />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-slate-900 dark:bg-white p-8 rounded shadow-xl z-20 hidden md:block"
              >
                <p className="text-primary text-4xl font-bold">15+</p>
                <p className="text-white dark:text-slate-900 text-[10px] font-bold uppercase tracking-widest">Years Experience</p>
              </motion.div>
            </div>
            
            <div className="space-y-8 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Why Saravana Exports</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 dark:text-white leading-tight">Tradition Meets Global Excellence</h2>
              </motion.div>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light">
                At Saravana Exports, we bridge the gap between India's fertile lands and the global market. Our
                commitment to quality starts at the farm level, ensuring only the finest agricultural products
                reach our clients worldwide.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  "Rigorous Multi-level Quality Checks",
                  "Customized Packaging Solutions",
                  "Real-time Shipment Tracking",
                  "Sustainable Supply Chain"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-6">
                <Link to="/process" className="inline-flex items-center text-slate-900 dark:text-white font-bold group">
                  <span className="border-b-2 border-primary pb-1 group-hover:border-slate-900 dark:group-hover:border-white transition-colors uppercase tracking-widest text-xs">Our Full Process</span>
                  <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
