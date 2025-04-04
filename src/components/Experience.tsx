
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-bio-navy mb-2">Professional Experience</h2>
        <div className="section-header-line"></div>
        
        <div className="mt-8 space-y-8">
          <div className="experience-card">
            <h3 className="font-semibold text-xl text-bio-navy">Research Assistant</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <span className="font-medium">Tata Institute For Genetic Society</span>
              <span className="mx-2">•</span>
              <span>Bangalore, India</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">November 2023 - Present</p>
            <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
              <li>Working on genetic research projects focused on data analysis and experimental design.</li>
              <li>Collaborating with a team of scientists to support ongoing genetic studies.</li>
              <li>Working on the NGS platform of P2Solo Oxford Nanopore Technology.</li>
            </ul>
          </div>
          
          <div className="experience-card">
            <h3 className="font-semibold text-xl text-bio-navy">Assistant Bioinformatician</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <span className="font-medium">Dr.Omics Research Lab</span>
              <span className="mx-2">•</span>
              <span>New Delhi, India</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">August 2023 - October 2023</p>
            <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
              <li>Assisted in various bioinformatics projects, providing data analysis and interpretation.</li>
              <li>Collaborated with senior researchers to develop and implement bioinformatics tools.</li>
              <li>Conducted research and contributed to the publication of research findings.</li>
            </ul>
          </div>
          
          <div className="experience-card">
            <h3 className="font-semibold text-xl text-bio-navy">Freelance Bioinformatics Consultant</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <span className="font-medium">Self-employed</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">2019 - Present</p>
            <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
              <li>Provided bioinformatics analysis and consulting services for various research projects.</li>
              <li>Developed custom scripts and tools for data processing and analysis, enhancing project efficiency.</li>
              <li>Assisted researchers with genomic data interpretation and analysis workflows.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
