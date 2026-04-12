import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Why Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16' 
            : 'bg-transparent h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white">agriculture</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase leading-none">Saravana</span>
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">Exports</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path || (link.path === '/' && location.pathname === '')
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                } transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <Link
              to="/contact"
              className="hidden md:block px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300 rounded text-[10px] font-bold uppercase tracking-widest"
            >
              Get a Quote
            </Link>
            <button
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
              onClick={toggleMenu}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 z-[110] bg-white dark:bg-slate-900 shadow-[-10px_0_30px_-5px_rgba(0,0,0,0.3)] transform transition-transform duration-300 ease-in-out border-l border-slate-200 dark:border-slate-800 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-12">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Navigation</span>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              onClick={toggleMenu}
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-bold uppercase tracking-wider ${
                  location.pathname === link.path ? 'text-primary' : 'text-slate-800 dark:text-slate-200 hover:text-primary'
                } transition-colors`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-10 border-t border-slate-100 dark:border-slate-800">
            <div className="mb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Direct Contact</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">+91 8309882456</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">sakethkamireddy73040@gmail.com</p>
            </div>
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-5 bg-primary text-slate-900 rounded font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20"
              onClick={toggleMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
