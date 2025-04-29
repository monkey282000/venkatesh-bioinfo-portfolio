
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Microscope, Database, Brain, Beaker, FileCode, Layers, Code, Component, Server } from "lucide-react";
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

        <div className="mt-8">
          <Tabs defaultValue="ongoing" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-2">
              <TabsTrigger 
                value="ongoing" 
                className="text-sm md:text-base data-[state=active]:bg-bio-blue data-[state=active]:text-white"
              >
                Ongoing Projects
              </TabsTrigger>
              <TabsTrigger 
                value="completed" 
                className="text-sm md:text-base data-[state=active]:bg-bio-blue data-[state=active]:text-white"
              >
                Completed Projects
              </TabsTrigger>
            </TabsList>
            
            {/* Ongoing Projects Tab */}
            <TabsContent value="ongoing" className="space-y-8 mt-4">
              {/* Project 1 */}
              <Card 
                className="overflow-hidden border-0 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-gradient-to-br from-purple-50 to-indigo-50"
              >
                <div className="md:flex relative">
                  <div className="md:w-1/3 p-8 flex flex-col justify-center relative z-10 bg-indigo-100/40">
                    <div className="mb-6 p-3 bg-white inline-block rounded-lg shadow-sm">
                      <Server className="text-indigo-600" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-indigo-900 mb-3">AI-Powered Protein Structure Prediction</h3>
                    <p className="text-indigo-700 font-medium mb-2">Bioinformatics Lab</p>
                    <p className="text-gray-600 text-sm mb-4">2023 - Present</p>
                    
                    <div className="mt-6 space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Current Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          <div className="tech-pill flex items-center bg-indigo-800 text-white">
                            <Brain size={12} className="mr-1" />
                            <span>Deep Learning</span>
                          </div>
                          <div className="tech-pill flex items-center bg-indigo-800 text-white">
                            <Code size={12} className="mr-1" />
                            <span>Python</span>
                          </div>
                          <div className="tech-pill flex items-center bg-indigo-800 text-white">
                            <Component size={12} className="mr-1" />
                            <span>PyTorch</span>
                          </div>
                          <div className="tech-pill flex items-center bg-indigo-800 text-white">
                            <Database size={12} className="mr-1" />
                            <span>Protein Database</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8 relative z-10">
                    <div className="space-y-5">
                      <p className="text-gray-700 leading-relaxed">
                        Currently developing a novel deep learning approach for predicting protein tertiary structure from sequence data.
                        This project aims to improve accuracy and computational efficiency compared to existing methods in the field.
                      </p>
                      
                      <div>
                        <h4 className="font-medium text-indigo-900 text-lg flex items-center">
                          <Layers size={18} className="mr-2 text-indigo-600" />
                          Current Progress:
                        </h4>
                        <ul className="list-none space-y-3 mt-3">
                          {[
                            "Developed initial neural network architecture based on transformer models.",
                            "Created data pipeline for processing and augmenting protein sequence data.",
                            "Implemented training and validation workflows with PyTorch.",
                            "Currently optimizing model parameters and exploring different architectural variations."
                          ].map((item, i) => (
                            <li key={i} className="pl-6 relative">
                              <span className="absolute left-0 top-2 w-3 h-3 bg-indigo-500 rounded-full"></span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-indigo-100 p-5 rounded-lg border border-indigo-200">
                        <h4 className="font-medium text-indigo-900 text-lg mb-3">Next Milestones:</h4>
                        <p className="text-gray-700 mb-3">
                          The next phase of this project will focus on benchmarking our model against established tools such as AlphaFold and
                          RoseTTAFold, with the goal of publishing results by Q3 2023.
                        </p>
                        <div className="w-full bg-white rounded-full h-2.5">
                          <div className="bg-indigo-600 h-2.5 rounded-full w-[45%]"></div>
                        </div>
                        <p className="text-right text-xs mt-1 text-indigo-800">45% Complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Project 2 */}
              <Card 
                className="overflow-hidden border-0 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50"
              >
                <div className="md:flex relative">
                  <div className="md:w-1/3 p-8 flex flex-col justify-center relative z-10 bg-emerald-100/40">
                    <div className="mb-6 p-3 bg-white inline-block rounded-lg shadow-sm">
                      <Code className="text-emerald-600" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-emerald-900 mb-3">Genomic Data Analysis Platform</h3>
                    <p className="text-emerald-700 font-medium mb-2">National Genomics Institute</p>
                    <p className="text-gray-600 text-sm mb-4">2024 - Present</p>
                    
                    <div className="mt-6 space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Current Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          <div className="tech-pill flex items-center bg-emerald-800 text-white">
                            <Database size={12} className="mr-1" />
                            <span>NoSQL</span>
                          </div>
                          <div className="tech-pill flex items-center bg-emerald-800 text-white">
                            <Component size={12} className="mr-1" />
                            <span>React</span>
                          </div>
                          <div className="tech-pill flex items-center bg-emerald-800 text-white">
                            <Server size={12} className="mr-1" />
                            <span>Node.js</span>
                          </div>
                          <div className="tech-pill flex items-center bg-emerald-800 text-white">
                            <FileCode size={12} className="mr-1" />
                            <span>TypeScript</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8 relative z-10">
                    <div className="space-y-5">
                      <p className="text-gray-700 leading-relaxed">
                        Developing a comprehensive web platform for genomic data analysis and visualization, designed to make advanced
                        genomics accessible to researchers without computational expertise.
                      </p>
                      
                      <div>
                        <h4 className="font-medium text-emerald-900 text-lg flex items-center">
                          <Layers size={18} className="mr-2 text-emerald-600" />
                          Current Progress:
                        </h4>
                        <ul className="list-none space-y-3 mt-3">
                          {[
                            "Designed database schema for efficient storage and retrieval of genomic sequences.",
                            "Built RESTful API endpoints for sequence alignment and analysis.",
                            "Developed interactive visualization components using D3.js.",
                            "Currently implementing user authentication and project management features."
                          ].map((item, i) => (
                            <li key={i} className="pl-6 relative">
                              <span className="absolute left-0 top-2 w-3 h-3 bg-emerald-500 rounded-full"></span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-200">
                        <h4 className="font-medium text-emerald-900 text-lg mb-3">Next Milestones:</h4>
                        <p className="text-gray-700 mb-3">
                          Our immediate focus is on user testing with a small group of researchers, followed by 
                          implementation of feedback before the beta release scheduled for August 2024.
                        </p>
                        <div className="w-full bg-white rounded-full h-2.5">
                          <div className="bg-emerald-600 h-2.5 rounded-full w-[30%]"></div>
                        </div>
                        <p className="text-right text-xs mt-1 text-emerald-800">30% Complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            {/* Completed Projects Tab */}
            <TabsContent value="completed" className="mt-4">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Projects;
