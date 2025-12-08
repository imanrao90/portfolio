import { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
// import { NAV_LINKS } from '../constants';
import { NAV_LINKS } from '../data/constants';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <RouterNavLink
          to="/"
          className="flex items-center gap-2 text-blue-950 font-bold text-xl md:text-2xl"
        >
          <div className="p-2 bg-blue-900 rounded-lg text-white">
            <Code size={20} strokeWidth={3} />
          </div>
          <span>ImanRao</span>
        </RouterNavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                text-sm font-medium transition-colors hover:text-accent
                ${isActive ? 'text-blue-950 font-semibold' : 'text-gray-500'}
              `}
            >
              {link.name}
            </RouterNavLink>
          ))}
          <RouterNavLink
            to="/contact"
            className="px-5 py-2.5 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
          >
            Hire Me
          </RouterNavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-950 p-2 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                text-base font-medium py-2 border-b border-gray-50
                ${isActive ? 'text-blue-950' : 'text-gray-500'}
              `}
            >
              {link.name}
            </RouterNavLink>
          ))}
          <RouterNavLink
            to="/contact"
            className="mt-2 w-full text-center px-6 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Hire Me
          </RouterNavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
