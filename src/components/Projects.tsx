
import { Card } from "@/components/ui/card";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-bio-navy mb-2">Projects</h2>
        <div className="section-header-line"></div>

        <div className="mt-8 space-y-8">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="md:flex">
              <div className="bg-bio-blue/10 md:w-1/3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-bio-navy mb-3">QSAR based Drug Design of Angiotensin-2</h3>
                <p className="text-bio-blue font-medium mb-2">Alagappa University</p>
                <p className="text-gray-600 text-sm mb-4">2021 - 2023</p>
                
                <div className="mt-4 space-y-2">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Technical Skills Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="tech-pill">Machine Learning</span>
                      <span className="tech-pill">Web Development</span>
                      <span className="tech-pill">QSAR modeling</span>
                      <span className="tech-pill">CADD</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Developed a Quantitative Structure-Activity Relationship (QSAR) model for designing drugs targeting Angiotensin-2, 
                    a key protein involved in hypertension. The project aimed to predict the efficacy of potential drug compounds
                    using machine learning techniques.
                  </p>
                  
                  <h4 className="font-medium text-bio-navy">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Utilized machine learning techniques to predict the efficacy of potential drug compounds.</li>
                    <li>Deployed the model as a web application to allow users to input molecular structures and receive predictions on their potential as Angiotensin-2 inhibitors.</li>
                    <li>The research led to a scientific publication (currently under review) that demonstrates the effectiveness of combined AI and ML approaches for drug design.</li>
                    <li>Achieved high accuracy in predicting compound bioactivity, potentially accelerating drug discovery processes.</li>
                  </ul>
                  
                  <h4 className="font-medium text-bio-navy">Project Outcomes:</h4>
                  <p className="text-gray-700">
                    The QSAR model successfully identified several promising compound candidates that showed high predicted binding affinity 
                    to Angiotensin-2. The web application interface made the tool accessible to researchers without extensive computational expertise,
                    demonstrating the practical application of bioinformatics in drug discovery processes.
                  </p>
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
