import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex flex-col pt-20">
      <header className="pt-16 pb-8 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Contact <span className="text-primary">& Global Support</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Connect with us for premium export inquiries. Led by Proprietor <span className="text-slate-900 dark:text-white font-semibold underline decoration-primary/50">K. Saketh Reddy</span>, we ensure excellence in every shipment.
          </motion.p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-5 gap-12 items-start">
        <motion.section 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-xl border border-primary/10 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="material-icons text-primary">send</span>
              Direct Inquiry
            </h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Your Name</label>
                  <input className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4" placeholder="Full Name" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Company Name</label>
                  <input className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4" placeholder="e.g. Global Foods Ltd" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Destination Country</label>
                <select className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4">
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>Singapore</option>
                  <option>Germany</option>
                  <option>Japan</option>
                  <option>USA</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Volume Required</label>
                  <input className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4" placeholder="500" type="number" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Unit</label>
                  <select className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4">
                    <option>Metric Tons (MT)</option>
                    <option>Boxes (5kg)</option>
                    <option>Pallets</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Email Address</label>
                <input className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4" placeholder="procurement@company.com" type="email" />
              </div>
              <button className="w-full bg-primary text-background-dark font-bold py-4 rounded-lg hover:brightness-105 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                Request Quote
              </button>
            </form>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20 flex flex-col gap-3">
              <span className="material-icons text-primary">alternate_email</span>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Official Email</p>
                <a className="font-medium hover:text-primary transition-colors break-all" href="mailto:sakethkamireddy73040@gmail.com">sakethkamireddy73040@gmail.com</a>
              </div>
            </div>
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20 flex flex-col gap-3">
              <span className="material-icons text-primary">person</span>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Proprietor</p>
                <p className="font-medium">K.SAKETH REDDY</p>
              </div>
            </div>
          </div>
          
          <a className="block group" href="https://wa.me/918309882456" target="_blank" rel="noreferrer">
            <div className="bg-[#25D366] text-white p-5 rounded-xl flex items-center justify-between group-hover:brightness-105 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                </div>
                <div>
                  <p class="font-bold text-lg leading-tight">Chat on WhatsApp</p>
                  <p class="text-white/80 text-sm">Call or Chat: +91 8309882456</p>
                </div>
              </div>
              <span className="material-icons transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </a>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-3 h-full"
        >
          <div className="bg-white dark:bg-zinc-900/50 rounded-xl border border-primary/10 overflow-hidden h-full flex flex-col">
            <div className="p-8 border-b border-primary/10 bg-gradient-to-r from-primary/5 to-transparent">
              <h3 className="text-xl font-bold mb-1">Global Distribution Network</h3>
              <p className="text-sm text-slate-500">Saravana Exports' active sourcing hubs and delivery corridors.</p>
            </div>
            <div className="flex-grow relative min-h-[400px] bg-slate-50 dark:bg-zinc-800">
              <img
                alt="Global export network map"
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbYEbB0rTv2bd_mg3FHsycoRxbyrTJDruu8A7kjnGj8Av7-R_39-2Hgd541PzG0P-_OyPelLgYAkwKygZUnPH1e5Y9mGtFNCJKjLvnmaMq38aKlPP9vMTtzAVN3kREvFvMYX6HvbJNx17D2WcnF5wBT5eXvJN7bACagpDKruvHxNI2BXB2Go0JF49BJlBs6tLkXh4AdMc37Z_7xl9agjtaNMTo43lg3c2exrmz9FtcBUYkRAvzqEpnZZkhHe09knP24qqbDFUMRdOn"
              />
              <div className="absolute top-[45%] left-[68%] w-3 h-3 bg-primary rounded-full animate-ping"></div>
              <div className="absolute top-[45%] left-[68%] w-3 h-3 bg-primary rounded-full"></div>
              
              <div className="absolute top-[48%] left-[70%] text-[10px] font-bold uppercase tracking-widest text-primary bg-background-dark px-2 py-1 rounded">
                Primary Origin
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur px-4 py-3 rounded-lg border border-primary/20 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                    <span className="material-icons text-primary text-sm">flight_takeoff</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">Air Express</p>
                    <p className="text-sm font-bold">Fast Delivery</p>
                  </div>
                </div>
                <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur px-4 py-3 rounded-lg border border-primary/20 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                    <span className="material-icons text-primary text-sm">support_agent</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">Response Time</p>
                    <p className="text-sm font-bold">&lt; 2 Hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-primary/10 border-t border-primary/10">
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-primary">Global</p>
                <p className="text-[10px] font-bold uppercase text-slate-500">Reach</p>
              </div>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-[10px] font-bold uppercase text-slate-500">WhatsApp Support</p>
              </div>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-[10px] font-bold uppercase text-slate-500">Quality Assured</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-primary/10">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Registered & Certified Exporter</p>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
          <div className="flex items-center gap-2">
            <span className="material-icons text-2xl">verified</span>
            <span className="font-bold">APEDA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons text-2xl">workspace_premium</span>
            <span className="font-bold">ISO CERTIFIED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons text-2xl">security</span>
            <span className="font-bold">HACCP</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons text-2xl">public</span>
            <span className="font-bold">MSME REGISTERED</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
