
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bio-navy py-10 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-xl">
              Venkatesh<span className="text-bio-blue">.bio</span>
            </h3>
            <p className="text-gray-300 mt-2">Bioinformatics Professional</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="mailto:venkatbioinfo282@gmail.com"
              className="text-gray-300 hover:text-bio-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/venkatesh-r-362a9426b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-bio-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/VenkateshRajendran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-bio-blue transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Venkatesh Rajendran. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-400 hover:text-white text-sm">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
