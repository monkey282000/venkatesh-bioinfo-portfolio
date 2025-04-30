
import { Beaker, FlaskConical, Microscope } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProteinAnimation from "../ProteinAnimation";
import { useState, useEffect } from "react";

const OngoingProjects = () => {
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
    <div className="space-y-8 relative">
      <div className="absolute right-0 top-0 w-96 h-96 opacity-20 pointer-events-none">
        <ProteinAnimation />
      </div>
      
      <ProjectCard
        title="Metagenomic Analysis of Microbial Communities"
        date="January 2025"
        description="Conducting comprehensive metagenomic analysis of microbial communities from diverse environmental samples. The research employs advanced sequencing technologies and computational methods to identify novel species and functional genes with potential applications in biotechnology and medicine."
        technologies={["Nanopore Sequencing", "Metagenomic Assembly", "Taxonomic Classification", "Functional Annotation"]}
        team={[
          { initial: "VR", color: "blue-500" },
          { initial: "SK", color: "green-500" },
          { initial: "JD", color: "purple-500" }
        ]}
        status="in-progress"
        progress={progress.project1}
        estimatedCompletion="August 2025"
        icon={<Beaker className="text-bio-blue" size={24} />}
        borderColor="border-bio-blue"
      />
      
      <ProjectCard
        title="CRISPR-Cas9 Based Gene Editing for Rare Diseases"
        date="October 2024"
        description="Developing targeted CRISPR-Cas9 gene editing approaches for treating rare genetic disorders. The research focuses on optimizing delivery methods, improving targeting specificity, and reducing off-target effects to enhance therapeutic potential."
        technologies={["CRISPR-Cas9", "Gene Therapy", "AAV Vectors", "Off-target Analysis", "Genomic Medicine"]}
        team={[
          { initial: "VR", color: "blue-500" },
          { initial: "AR", color: "red-500" }
        ]}
        status="in-progress"
        progress={progress.project2}
        estimatedCompletion="December 2025"
        icon={<FlaskConical className="text-green-600" size={24} />}
        borderColor="border-green-500"
      />
      
      <ProjectCard
        title="Long-read Sequencing for Complex Genomic Variants"
        date="March 2025"
        description="Utilizing long-read sequencing technologies to characterize complex genomic variants in human diseases. This project aims to identify structural variants, repetitive elements, and other genomic features that are difficult to detect with short-read sequencing approaches."
        technologies={["Long-read Sequencing", "ONT MinION", "PacBio HiFi", "Structural Variants", "De Novo Assembly"]}
        team={[
          { initial: "VR", color: "blue-500" },
          { initial: "MC", color: "yellow-500" },
          { initial: "PT", color: "indigo-500" }
        ]}
        status="in-progress"
        progress={progress.project3}
        estimatedCompletion="November 2025"
        icon={<Microscope className="text-purple-600" size={24} />}
        borderColor="border-purple-500"
      />
    </div>
  );
};

export default OngoingProjects;
