
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, BookOpen, Microscope, FileCode } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center mb-8">
          <Microscope className="text-bio-blue mr-3" size={28} />
          <h2 className="text-3xl font-bold text-bio-navy">About Me</h2>
        </div>
        <div className="section-header-line"></div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <div className="relative">
              <span className="absolute -left-3 top-0 text-8xl font-serif text-bio-blue opacity-10">"</span>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                I'm an experienced <span className="highlight-marker">bioinformatics professional</span> with over a year of expertise in utilizing bioinformatics tools
                and techniques to analyze biological data effectively. Proficient in programming languages with a solid understanding of
                algorithms and high-performance computing to interpret complex biological mechanisms.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I have demonstrated capability in handling genomic data, RNA sequencing data, and NGS library preparation using platforms like 
                <span className="highlight-marker">P2SOLO</span> and <span className="highlight-marker">ONT Sequencing</span>. I'm adept in
                genomics, genetics, and drug discovery, contributing to significant advancements in research through innovative computational
                approaches and facilitating scientific discovery in biology.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Currently working as a <span className="highlight-marker">Research Assistant</span> at the Tata Institute For Genetic Society in Bangalore,
                focusing on genetic research projects, data analysis, and experimental design while collaborating with a team of scientists.
              </p>
              <span className="absolute -right-3 bottom-0 text-8xl font-serif text-bio-blue opacity-10">"</span>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="#contact" className="text-bio-blue hover:text-bio-navy font-medium flex items-center transition-colors">
                <FileCode className="mr-1" size={18} />
                Contact me
              </a>
              <a href="#publications" className="text-bio-blue hover:text-bio-navy font-medium flex items-center transition-colors">
                <BookOpen className="mr-1" size={18} />
                View publications
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Decorative element */}
            <div className="absolute -z-10 w-64 h-64 bg-bio-blue/5 rounded-full -top-10 -right-10"></div>
            <div className="absolute -z-10 w-40 h-40 bg-bio-blue/5 rounded-full -bottom-10 -left-10"></div>
            
            <Card className="bio-card transform transition-all hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-bio-lightblue p-3 rounded-full mb-4">
                  <Briefcase className="text-bio-blue" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-1">1+ Year</h3>
                <p className="text-gray-600">Professional Experience</p>
              </CardContent>
            </Card>
            
            <Card className="bio-card transform transition-all hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-bio-lightblue p-3 rounded-full mb-4">
                  <GraduationCap className="text-bio-blue" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-1">M.Sc.</h3>
                <p className="text-gray-600">Bioinformatics</p>
              </CardContent>
            </Card>
            
            <Card className="bio-card transform transition-all hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-bio-lightblue p-3 rounded-full mb-4">
                  <Award className="text-bio-blue" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-1">1st Rank</h3>
                <p className="text-gray-600">University Topper</p>
              </CardContent>
            </Card>
            
            <Card className="bio-card transform transition-all hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-bio-lightblue p-3 rounded-full mb-4">
                  <BookOpen className="text-bio-blue" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-1">3+</h3>
                <p className="text-gray-600">Publications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
