
import { Card } from "@/components/ui/card";
import { Microscope, Database, Brain, Beaker, FileCode, Layers } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center mb-8">
          <Beaker className="text-bio-blue mr-3" size={28} />
          <h2 className="text-3xl font-bold text-bio-navy">Projects</h2>
        </div>
        <div className="section-header-line"></div>

        <div className="mt-12">
          <Card 
            className="overflow-hidden border-0 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="md:flex relative">
              {/* Animated background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-bio-blue/5 to-bio-lightblue/20 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              
              <div className="bg-bio-blue/5 md:w-1/3 p-8 flex flex-col justify-center relative z-10">
                <div className="mb-6 p-3 bg-white inline-block rounded-lg shadow-sm">
                  <Brain className="text-bio-blue" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-bio-navy mb-3">QSAR based Drug Design of Angiotensin-2</h3>
                <p className="text-bio-blue font-medium mb-2">Alagappa University</p>
                <p className="text-gray-600 text-sm mb-4">2021 - 2023</p>
                
                <div className="mt-6 space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">Technical Skills Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="tech-pill flex items-center">
                        <Brain size={12} className="mr-1" />
                        <span>Machine Learning</span>
                      </div>
                      <div className="tech-pill flex items-center">
                        <FileCode size={12} className="mr-1" />
                        <span>Web Development</span>
                      </div>
                      <div className="tech-pill flex items-center">
                        <Microscope size={12} className="mr-1" />
                        <span>QSAR modeling</span>
                      </div>
                      <div className="tech-pill flex items-center">
                        <Database size={12} className="mr-1" />
                        <span>CADD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8 relative z-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed">
                    Developed a Quantitative Structure-Activity Relationship (QSAR) model for designing drugs targeting Angiotensin-2, 
                    a key protein involved in hypertension. The project aimed to predict the efficacy of potential drug compounds
                    using machine learning techniques.
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-bio-navy text-lg flex items-center">
                      <Layers size={18} className="mr-2 text-bio-blue" />
                      Key Achievements:
                    </h4>
                    <ul className="list-none space-y-3 mt-3">
                      {[
                        "Utilized machine learning techniques to predict the efficacy of potential drug compounds.",
                        "Deployed the model as a web application to allow users to input molecular structures and receive predictions on their potential as Angiotensin-2 inhibitors.",
                        "The research led to a scientific publication (currently under review) that demonstrates the effectiveness of combined AI and ML approaches for drug design.",
                        "Achieved high accuracy in predicting compound bioactivity, potentially accelerating drug discovery processes."
                      ].map((item, i) => (
                        <li key={i} className="pl-6 relative">
                          <span className="absolute left-0 top-2 w-3 h-3 bg-bio-blue rounded-full"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-bio-lightblue/50 p-5 rounded-lg border border-bio-blue/10">
                    <h4 className="font-medium text-bio-navy text-lg mb-3">Project Outcomes:</h4>
                    <p className="text-gray-700">
                      The QSAR model successfully identified several promising compound candidates that showed high predicted binding affinity 
                      to Angiotensin-2. The web application interface made the tool accessible to researchers without extensive computational expertise,
                      demonstrating the practical application of bioinformatics in drug discovery processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
