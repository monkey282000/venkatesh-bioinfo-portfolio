
import { Button } from '@/components/ui/button';
import { ChevronDown, Dna, Database, Atom } from 'lucide-react';
import TypedText from './TypedText';
import DnaAnimation from './DnaAnimation';

const Hero = () => {
  return (
    <section id="top" className="min-h-screen relative flex items-center dna-bg overflow-hidden">
      <DnaAnimation />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
      
      {/* Decorative elements */}
      <div className="absolute w-32 h-32 molecule top-1/4 right-1/4 opacity-20"></div>
      <div className="absolute w-20 h-20 molecule top-2/3 right-1/3 opacity-10"></div>
      <div className="absolute w-16 h-16 molecule bottom-1/4 left-1/4 opacity-15"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <p className="text-bio-blue font-medium mb-2 animate-fade-in flex items-center">
            <Dna className="mr-2" size={18} />
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-bio-navy animate-fade-in" style={{animationDelay: '0.2s'}}>
            Venkatesh Rajendran
          </h1>
          
          <div 
            className="text-xl md:text-2xl text-gray-600 font-light mb-6 animate-fade-in" 
            style={{animationDelay: '0.4s'}}
          >
            <TypedText 
              texts={[
                'Bioinformatics Professional',
                'Genomics Specialist',
                'Research Assistant',
                'NGS Data Analyst'
              ]}
              typingSpeed={70}
              className="text-xl md:text-2xl text-gray-600"
            />
          </div>
          
          <p className="text-lg text-gray-700 max-w-2xl mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            Experienced in utilizing <span className="highlight-marker">bioinformatics tools</span> and techniques to analyze 
            biological data effectively. Specializing in <span className="highlight-marker">genomics</span>, <span className="highlight-marker">genetics</span>, and 
            <span className="highlight-marker"> drug discovery</span> research.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button asChild className="bg-bio-blue hover:bg-bio-navy text-white flex items-center">
              <a href="#contact">
                <Database className="mr-2" size={18} />
                Get in Touch
              </a>
            </Button>
            
            <Button asChild variant="outline" className="border-bio-blue text-bio-blue hover:text-bio-blue hover:bg-bio-lightblue/30 flex items-center">
              <a href="#about">
                <Atom className="mr-2" size={18} />
                Learn More
              </a>
            </Button>
          </div>
          
          <div className="mt-10 flex gap-4 animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              University First Rank
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              NGS Specialist
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              3+ Publications
            </div>
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
