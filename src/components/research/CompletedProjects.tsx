
import { BookOpen } from "lucide-react";
import ProjectCard from "./ProjectCard";

const CompletedProjects = () => {
  return (
    <div className="space-y-8">
      <ProjectCard
        title="QSAR Modeling for Drug Discovery"
        date="September 2024"
        description="Developed and evaluated multiple QSAR (Quantitative Structure-Activity Relationship) models for predicting the biological activity of potential drug candidates. The research employed machine learning techniques to build models that can accurately predict how chemical compounds interact with biological targets."
        technologies={["Machine Learning", "Cheminformatics", "Python", "R", "Molecular Descriptors"]}
        team={[
          { initial: "VR", color: "blue-500" },
          { initial: "JD", color: "purple-500" }
        ]}
        status="completed"
        publicationInfo="Published in Journal of Medicinal Chemistry"
        icon={<BookOpen className="text-green-600" size={24} />}
        borderColor="border-green-500"
      />
      
      <ProjectCard
        title="Genomic Analysis of Drug Resistance in Pathogens"
        date="May 2024"
        description="Conducted comprehensive genomic analysis to identify genetic determinants of antimicrobial resistance in pathogenic bacteria. The study utilized next-generation sequencing data and bioinformatics workflows to detect mutations and mobile genetic elements associated with resistance phenotypes."
        technologies={["NGS", "WGS", "Antimicrobial Resistance", "Bioinformatics", "Comparative Genomics"]}
        team={[
          { initial: "VR", color: "blue-500" },
          { initial: "SK", color: "green-500" }
        ]}
        status="completed"
        publicationInfo="Published in Microbial Genomics"
        icon={<BookOpen className="text-green-600" size={24} />}
        borderColor="border-green-500"
      />
    </div>
  );
};

export default CompletedProjects;
