import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">agriculture</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white uppercase leading-none">Saravana</span>
                <span className="text-primary font-bold text-[8px] uppercase tracking-[0.3em]">Exports</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-8">
              Leading exporters of premium agricultural products from India to the world. Committed to quality, sustainability, and trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-slate-50 dark:bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a href="mailto:sakethkamireddy73040@gmail.com" className="w-8 h-8 rounded bg-slate-50 dark:bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Why Us</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/process" className="hover:text-primary transition-colors">Process</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="space-y-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Export Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Global Logistics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-[10px]">Contact Us</h4>
            <ul className="space-y-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>India</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">phone</span>
                <span>+91 8309882456</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">email</span>
                <span>sakethkamireddy73040@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">© 2024 Saravana Exports. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
