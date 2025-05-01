
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Dna, Code, Database, ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Programming skills with proficiency levels
  const programmingSkills = [
    { name: "Python (Pandas, PyTorch, NumPy, Scikit-learn)", level: 90 },
    { name: "R (ggplot2)", level: 85 },
    { name: "Bash", level: 80 },
    { name: "Perl", level: 75 },
    { name: "C/C++", level: 70 },
    { name: "SQL", level: 75 },
  ];

  // Bioanalytical techniques
  const bioTechniques = [
    "Molecular Biology Techniques",
    "NGS Analysis",
    "RNA Sequencing",
    "NGS Library Preparation",
    "P2SOLO ONT Sequencing",
    "Adaptive Sequencing",
    "PCR",
    "WGS",
    "Methylation-Specific PCR",
    "DNA Isolation",
    "Bisulfite Conversion"
  ];

  // Software and tools
  const softwareTools = [
    "Schrodinger",
    "AutoDock",
    "AutoDock Vina",
    "Modeller",
    "Discovery Studio",
    "RStudio",
    "NCBI",
    "ExPasy",
    "STAR",
    "Galaxy",
    "DAVID",
    "BLAST",
    "Protparam",
    "Ensembl",
    "IGV",
    "GATK"
  ];

  // NGS tools
  const ngsTools = [
    "MinKnow",
    "EPI2ME",
    "FastQC",
    "fastp",
    "SAMtools",
    "BEDTools",
    "GATK",
    "IGV",
    "bcftools",
    "DeepVariant",
    "PycoMETH",
    "PEPPER Margin DeepVariant",
    "CNVpytor"
  ];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      if (prev.includes(section)) {
        return prev.filter(s => s !== section);
      } else {
        return [...prev, section];
      }
    });
  };

  const isSectionExpanded = (section: string) => {
    return expandedSections.includes(section);
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 binary-bg relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center mb-2">
          <Code className="text-bio-blue mr-2" size={24} />
          <h2 className="text-3xl font-bold text-bio-navy">Skills & Expertise</h2>
        </div>
        <div className="section-header-line"></div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Programming Skills */}
          <Card className="p-6 shadow-sm card-hover">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleSection('programming')}
            >
              <h3 className="text-xl font-semibold text-bio-navy flex items-center">
                <Code className="text-bio-blue mr-2" size={20} />
                Programming
              </h3>
              {isSectionExpanded('programming') ? (
                <ChevronUp className="text-bio-blue" size={20} />
              ) : (
                <ChevronDown className="text-bio-blue" size={20} />
              )}
            </div>
            
            <div className={`space-y-4 ${isSectionExpanded('programming') || expandedSections.length === 0 ? 'mt-6' : 'h-0 overflow-hidden mt-0'}`}>
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Slider 
                    value={[skill.level]} 
                    max={100} 
                    step={1} 
                    className="skill-bar"
                    disabled 
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* Bioanalytical Techniques */}
          <Card className="p-6 shadow-sm card-hover">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleSection('biotech')}
            >
              <h3 className="text-xl font-semibold text-bio-navy flex items-center">
                <Dna className="text-bio-blue mr-2" size={20} />
                Bioanalytical Techniques
              </h3>
              {isSectionExpanded('biotech') ? (
                <ChevronUp className="text-bio-blue" size={20} />
              ) : (
                <ChevronDown className="text-bio-blue" size={20} />
              )}
            </div>
            
            <div className={`flex flex-wrap gap-2 ${isSectionExpanded('biotech') || expandedSections.length === 0 ? 'mt-6' : 'h-0 overflow-hidden mt-0'}`}>
              {bioTechniques.map((technique) => (
                <span key={technique} className="pill">
                  {technique}
                </span>
              ))}
            </div>
          </Card>
          
          {/* Software & Tools */}
          <Card className="p-6 shadow-sm card-hover">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleSection('software')}
            >
              <h3 className="text-xl font-semibold text-bio-navy flex items-center">
                <Database className="text-bio-blue mr-2" size={20} />
                Software & Tools
              </h3>
              {isSectionExpanded('software') ? (
                <ChevronUp className="text-bio-blue" size={20} />
              ) : (
                <ChevronDown className="text-bio-blue" size={20} />
              )}
            </div>
            
            <div className={`flex flex-wrap gap-2 ${isSectionExpanded('software') || expandedSections.length === 0 ? 'mt-6' : 'h-0 overflow-hidden mt-0'}`}>
              {softwareTools.map((tool) => (
                <span key={tool} className="pill">
                  {tool}
                </span>
              ))}
            </div>
          </Card>
          
          {/* NGS Tools */}
          <Card className="p-6 shadow-sm card-hover">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleSection('ngs')}
            >
              <h3 className="text-xl font-semibold text-bio-navy flex items-center">
                <Dna className="text-bio-blue mr-2" size={20} />
                NGS Tools for Downstream Analysis
              </h3>
              {isSectionExpanded('ngs') ? (
                <ChevronUp className="text-bio-blue" size={20} />
              ) : (
                <ChevronDown className="text-bio-blue" size={20} />
              )}
            </div>
            
            <div className={`flex flex-wrap gap-2 ${isSectionExpanded('ngs') || expandedSections.length === 0 ? 'mt-6' : 'h-0 overflow-hidden mt-0'}`}>
              {ngsTools.map((tool) => (
                <span key={tool} className="pill">
                  {tool}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
