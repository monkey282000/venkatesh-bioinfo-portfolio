import { Button } from '@/components/ui/button';
import { ChevronDown, Dna, Database, Atom, Sparkles, BookOpen } from 'lucide-react';
import TypedText from './TypedText';
import ProteinAnimation from './ProteinAnimation';

const Hero = () => {
  return (
    <section id="top" className="min-h-screen relative flex items-center protein-bg overflow-hidden">
      <ProteinAnimation />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/80"></div>
      
      {/* Decorative elements */}
      <div className="absolute w-32 h-32 molecule top-1/4 right-1/4 opacity-20"></div>
      <div className="absolute w-20 h-20 molecule top-2/3 right-1/3 opacity-10"></div>
      <div className="absolute w-16 h-16 molecule bottom-1/4 left-1/4 opacity-15"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="bg-bio-blue/10 inline-block px-3 py-1 rounded-full animate-fade-in">
            <p className="text-bio-blue font-medium flex items-center">
              <Dna className="mr-2" size={18} />
              Hello, I'm
            </p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-4 text-bio-navy animate-fade-in bg-gradient-to-r from-bio-navy to-bio-blue bg-clip-text text-transparent" 
               style={{animationDelay: '0.2s', lineHeight: '1.1'}}>
            Venkatesh Rajendran
          </h1>
          
          <div 
            className="text-2xl md:text-3xl text-gray-600 font-light mb-6 animate-fade-in" 
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
              className="text-2xl md:text-3xl text-gray-600"
            />
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 animate-fade-in leading-relaxed" 
             style={{animationDelay: '0.6s'}}>
            Experienced in utilizing <span className="highlight-marker">bioinformatics tools</span> and techniques to analyze 
            biological data effectively. Specializing in <span className="highlight-marker">genomics</span>, <span className="highlight-marker">genetics</span>, and 
            <span className="highlight-marker"> drug discovery</span> research.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button asChild className="bg-bio-blue hover:bg-bio-navy text-white flex items-center transform transition-transform hover:scale-105">
              <a href="#contact">
                <Database className="mr-2" size={18} />
                Get in Touch
              </a>
            </Button>
            
            <Button asChild variant="outline" 
                   className="border-bio-blue text-bio-blue hover:text-bio-blue hover:bg-bio-lightblue/30 flex items-center transform transition-transform hover:scale-105">
              <a href="#about">
                <Atom className="mr-2" size={18} />
                Learn More
              </a>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-6 animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="flex items-center bg-white p-2 pl-1 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center text-white mr-2">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-500">Achievement</div>
                <div className="text-sm font-medium">University First Rank</div>
              </div>
            </div>
            
            <div className="flex items-center bg-white p-2 pl-1 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white mr-2">
                <Database size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-500">Specialty</div>
                <div className="text-sm font-medium">NGS Specialist</div>
              </div>
            </div>
            
            <div className="flex items-center bg-white p-2 pl-1 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center text-white mr-2">
                <BookOpen size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-500">Research</div>
                <div className="text-sm font-medium">3+ Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
          <ChevronDown className="text-bio-blue" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
