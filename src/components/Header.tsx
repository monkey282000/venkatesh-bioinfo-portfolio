
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Skills', href: '#skills' },
    { title: 'Education', href: '#education' },
    { title: 'Publications', href: '#publications' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        <div>
          <a href="#top" className="font-bold text-xl md:text-2xl text-bio-navy">
            Venkatesh<span className="text-bio-blue">.bio</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-gray-700 hover:text-bio-blue font-medium transition-colors"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          <a 
            href="mailto:venkatbioinfo282@gmail.com"
            className="p-2 text-gray-600 hover:text-bio-blue transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/venkatesh-r-362a9426b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-bio-blue transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/VenkateshRajendran"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-bio-blue transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu} 
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-700 hover:text-bio-blue font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <div className="flex space-x-4 pt-2 border-t border-gray-100 mt-2">
                <a 
                  href="mailto:venkatbioinfo282@gmail.com"
                  className="p-2 text-gray-600 hover:text-bio-blue transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/venkatesh-r-362a9426b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-bio-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/VenkateshRajendran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-bio-blue transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
