
import { Award, CalendarClock } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-bio-navy mb-2">Education</h2>
        <div className="section-header-line"></div>
        
        <div className="mt-8">
          <div className="space-y-8">
            {/* MSc Education */}
            <div className="timeline-item timeline-bullet">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-bold text-xl text-bio-navy">M.Sc. in Bioinformatics</h3>
                <div className="flex items-center text-gray-600 mt-1 mb-3">
                  <span>Alagappa University</span>
                  <span className="mx-2">•</span>
                  <span>Karaikudi, India</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <CalendarClock size={16} className="mr-2" />
                  <span>2021 - 2023</span>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center bg-bio-lightblue/50 px-3 py-1 rounded-full">
                    <Award size={16} className="text-bio-blue mr-2" />
                    <span className="text-bio-navy font-medium text-sm">University First Rank holder</span>
                  </div>
                  <div className="bg-bio-lightblue/50 px-3 py-1 rounded-full text-bio-navy font-medium text-sm">
                    CGPA: 9.1
                  </div>
                </div>
              </div>
            </div>
            
            {/* BSc Education */}
            <div className="timeline-item timeline-bullet">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-bold text-xl text-bio-navy">B.Sc. in Bioinformatics</h3>
                <div className="flex items-center text-gray-600 mt-1 mb-3">
                  <span>Bishop Heber College</span>
                  <span className="mx-2">•</span>
                  <span>Tiruchirappalli, India</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <CalendarClock size={16} className="mr-2" />
                  <span>2018 - 2021</span>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-bio-lightblue/50 px-3 py-1 rounded-full text-bio-navy font-medium text-sm">
                    CGPA: 8.4
                  </div>
                </div>
              </div>
            </div>
            
            {/* Diploma */}
            <div className="timeline-item timeline-bullet">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-bold text-xl text-bio-navy">Diploma in Bioanalytical Techniques</h3>
                <div className="flex items-center text-gray-600 mt-1 mb-3">
                  <span>Bishop Heber College</span>
                  <span className="mx-2">•</span>
                  <span>Tiruchirappalli, India</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <CalendarClock size={16} className="mr-2" />
                  <span>2018 - 2019</span>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-bio-lightblue/50 px-3 py-1 rounded-full text-bio-navy font-medium text-sm">
                    Grade: A+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
