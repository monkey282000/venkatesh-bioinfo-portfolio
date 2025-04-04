
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="min-h-screen relative flex items-center dna-bg">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <p className="text-bio-blue font-medium mb-2 animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-bio-navy animate-fade-in" style={{animationDelay: '0.2s'}}>
            Venkatesh Rajendran
          </h1>
          <div 
            className="text-xl md:text-2xl text-gray-600 font-light mb-6 animate-fade-in" 
            style={{animationDelay: '0.4s'}}
          >
            <div className="typing-container">
              <span className="typing-text">Bioinformatics Professional</span>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            Experienced in utilizing bioinformatics tools and techniques to analyze biological data effectively. 
            Specializing in genomics, genetics, and drug discovery research.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button asChild className="bg-bio-blue hover:bg-bio-navy text-white">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" className="border-bio-blue text-bio-blue hover:text-bio-blue hover:bg-bio-lightblue/30">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="text-bio-blue" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
