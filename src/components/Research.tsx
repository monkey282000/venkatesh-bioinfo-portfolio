import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Beaker, FlaskConical, Microscope, BookOpen, Clock, AlertCircle } from "lucide-react";
import ProteinAnimation from "./ProteinAnimation";
import { useState, useEffect } from "react";

const Research = () => {
  const [progress, setProgress] = useState({
    project1: 65,
    project2: 42,
    project3: 80
  });

  // Simulate progress changes
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => ({
        project1: Math.min(100, prev.project1 + (Math.random() > 0.5 ? 1 : -1)),
        project2: Math.min(100, prev.project2 + (Math.random() > 0.5 ? 1 : -1)),
        project3: Math.min(100, prev.project3 + (Math.random() > 0.5 ? 1 : -1)),
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="research" className="py-16 relative min-h-screen">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-200 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-60 h-60 rounded-full bg-green-200 filter blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-32 h-32 rounded-full bg-purple-200 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center mb-2">
          <Microscope className="text-bio-blue mr-2" size={24} />
          <h2 className="text-3xl font-bold text-bio-navy">Research Projects</h2>
        </div>
        <div className="section-header-line"></div>
        
        <Tabs defaultValue="ongoing" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="ongoing" className="text-lg">
              <Clock className="mr-2" size={18} />
              Ongoing Research
            </TabsTrigger>
            <TabsTrigger value="completed" className="text-lg">
              <BookOpen className="mr-2" size={18} />
              Completed Projects
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ongoing" className="space-y-8 relative">
            <div className="absolute right-0 top-0 w-96 h-96 opacity-20 pointer-events-none">
              <ProteinAnimation />
            </div>
            
            <Card className="p-6 hover:shadow-lg transition-shadow relative overflow-hidden border-l-4 border-bio-blue">
              <div className="mb-4 flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <div className="bg-bio-blue/10 p-2 rounded-full mr-3">
                      <Beaker className="text-bio-blue" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-bio-navy">Metagenomic Analysis of Microbial Communities</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Started: January 2025</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                  <Clock size={14} className="mr-1" /> In Progress
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">
                Conducting comprehensive metagenomic analysis of microbial communities from diverse environmental samples. 
                The research employs advanced sequencing technologies and computational methods to identify novel species and 
                functional genes with potential applications in biotechnology and medicine.
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Progress</span>
                  <span>{progress.project1}%</span>
                </div>
                <Progress value={progress.project1} className="h-2" />
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tech-pill">Nanopore Sequencing</span>
                <span className="tech-pill">Metagenomic Assembly</span>
                <span className="tech-pill">Taxonomic Classification</span>
                <span className="tech-pill">Functional Annotation</span>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">VR</div>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">SK</div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">JD</div>
                </div>
                <div className="flex items-center text-sm text-yellow-600">
                  <AlertCircle size={14} className="mr-1" />
                  Estimated completion: August 2025
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow relative overflow-hidden border-l-4 border-green-500">
              <div className="mb-4 flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <FlaskConical className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-bio-navy">CRISPR-Cas9 Based Gene Editing for Rare Diseases</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Started: October 2024</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                  <Clock size={14} className="mr-1" /> In Progress
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">
                Developing targeted CRISPR-Cas9 gene editing approaches for treating rare genetic disorders. 
                The research focuses on optimizing delivery methods, improving targeting specificity, and 
                reducing off-target effects to enhance therapeutic potential.
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Progress</span>
                  <span>{progress.project2}%</span>
                </div>
                <Progress value={progress.project2} className="h-2" />
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tech-pill">CRISPR-Cas9</span>
                <span className="tech-pill">Gene Therapy</span>
                <span className="tech-pill">AAV Vectors</span>
                <span className="tech-pill">Off-target Analysis</span>
                <span className="tech-pill">Genomic Medicine</span>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">VR</div>
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">AR</div>
                </div>
                <div className="flex items-center text-sm text-yellow-600">
                  <AlertCircle size={14} className="mr-1" />
                  Estimated completion: December 2025
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow relative overflow-hidden border-l-4 border-purple-500">
              <div className="mb-4 flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <Microscope className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-bio-navy">Long-read Sequencing for Complex Genomic Variants</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Started: March 2025</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                  <Clock size={14} className="mr-1" /> In Progress
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">
                Utilizing long-read sequencing technologies to characterize complex genomic variants in human diseases. 
                This project aims to identify structural variants, repetitive elements, and other genomic features 
                that are difficult to detect with short-read sequencing approaches.
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Progress</span>
                  <span>{progress.project3}%</span>
                </div>
                <Progress value={progress.project3} className="h-2" />
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tech-pill">Long-read Sequencing</span>
                <span className="tech-pill">ONT MinION</span>
                <span className="tech-pill">PacBio HiFi</span>
                <span className="tech-pill">Structural Variants</span>
                <span className="tech-pill">De Novo Assembly</span>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">VR</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white">MC</div>
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">PT</div>
                </div>
                <div className="flex items-center text-sm text-yellow-600">
                  <AlertCircle size={14} className="mr-1" />
                  Estimated completion: November 2025
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-8">
            <Card className="p-6 hover:shadow-lg transition-shadow relative overflow-hidden border-l-4 border-green-500">
              <div className="mb-4 flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <BookOpen className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-bio-navy">QSAR Modeling for Drug Discovery</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Completed: September 2024</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                  <BookOpen size={14} className="mr-1" /> Completed
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">
                Developed and evaluated multiple QSAR (Quantitative Structure-Activity Relationship) models for 
                predicting the biological activity of potential drug candidates. The research employed machine 
                learning techniques to build models that can accurately predict how chemical compounds interact 
                with biological targets.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tech-pill">Machine Learning</span>
                <span className="tech-pill">Cheminformatics</span>
                <span className="tech-pill">Python</span>
                <span className="tech-pill">R</span>
                <span className="tech-pill">Molecular Descriptors</span>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">VR</div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">JD</div>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <BookOpen size={14} className="mr-1" />
                  Published in Journal of Medicinal Chemistry
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow relative overflow-hidden border-l-4 border-green-500">
              <div className="mb-4 flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <BookOpen className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-bio-navy">Genomic Analysis of Drug Resistance in Pathogens</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Completed: May 2024</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                  <BookOpen size={14} className="mr-1" /> Completed
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">
                Conducted comprehensive genomic analysis to identify genetic determinants of antimicrobial 
                resistance in pathogenic bacteria. The study utilized next-generation sequencing data and bioinformatics 
                workflows to detect mutations and mobile genetic elements associated with resistance phenotypes.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tech-pill">NGS</span>
                <span className="tech-pill">WGS</span>
                <span className="tech-pill">Antimicrobial Resistance</span>
                <span className="tech-pill">Bioinformatics</span>
                <span className="tech-pill">Comparative Genomics</span>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">VR</div>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">SK</div>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <BookOpen size={14} className="mr-1" />
                  Published in Microbial Genomics
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Research;
