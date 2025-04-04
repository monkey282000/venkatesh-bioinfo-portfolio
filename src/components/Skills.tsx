
import { Card } from "@/components/ui/card";

const Skills = () => {
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

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-bio-navy mb-2">Skills & Expertise</h2>
        <div className="section-header-line"></div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Programming Skills */}
          <Card className="p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-bio-navy">Programming</h3>
            <div className="space-y-4">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Bioanalytical Techniques */}
          <Card className="p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-bio-navy">Bioanalytical Techniques</h3>
            <div className="flex flex-wrap gap-2">
              {bioTechniques.map((technique) => (
                <span key={technique} className="pill">
                  {technique}
                </span>
              ))}
            </div>
          </Card>
          
          {/* Software & Tools */}
          <Card className="p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-bio-navy">Software & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {softwareTools.map((tool) => (
                <span key={tool} className="pill">
                  {tool}
                </span>
              ))}
            </div>
          </Card>
          
          {/* NGS Tools */}
          <Card className="p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-bio-navy">NGS Tools for Downstream Analysis</h3>
            <div className="flex flex-wrap gap-2">
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
