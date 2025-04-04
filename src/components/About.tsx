
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-bio-navy mb-2">About Me</h2>
        <div className="section-header-line"></div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
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
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="bio-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-bio-lightblue p-3 rounded-full mb-4">
                  <Briefcase className="text-bio-blue" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-1">1+ Year</h3>
                <p className="text-gray-600">Professional Experience</p>
              </CardContent>
            </Card>
            
            <Card className="bio-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-bio-lightblue p-3 rounded-full mb-4">
                  <GraduationCap className="text-bio-blue" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-1">M.Sc.</h3>
                <p className="text-gray-600">Bioinformatics</p>
              </CardContent>
            </Card>
            
            <Card className="bio-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-bio-lightblue p-3 rounded-full mb-4">
                  <Award className="text-bio-blue" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-1">1st Rank</h3>
                <p className="text-gray-600">University Topper</p>
              </CardContent>
            </Card>
            
            <Card className="bio-card">
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
