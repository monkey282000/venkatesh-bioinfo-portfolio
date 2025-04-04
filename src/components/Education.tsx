
import { Award, CalendarClock, GraduationCap, School, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center mb-8">
          <GraduationCap className="text-bio-blue mr-3" size={28} />
          <h2 className="text-3xl font-bold text-bio-navy">Education</h2>
        </div>
        <div className="section-header-line"></div>
        
        <div className="mt-12 relative">
          {/* Decorative elements */}
          <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-bio-blue via-bio-blue/50 to-transparent rounded"></div>
          
          <div className="space-y-12">
            {/* MSc Education */}
            <div className="timeline-item timeline-bullet">
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-bio-lightblue rounded-lg flex items-center justify-center mr-6 shadow-sm">
                    <School className="text-bio-blue" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl text-bio-navy">M.Sc. in Bioinformatics</h3>
                    <div className="flex items-center text-gray-600 mt-2 mb-3">
                      <span className="font-medium">Alagappa University</span>
                      <span className="mx-2">•</span>
                      <span>Karaikudi, India</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <CalendarClock size={16} className="mr-2" />
                      <span>2021 - 2023</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <div className="flex items-center bg-gradient-to-r from-green-500/20 to-green-400/20 px-4 py-2 rounded-full">
                        <Award size={18} className="text-green-600 mr-2" />
                        <span className="text-green-800 font-medium text-sm">University First Rank holder</span>
                      </div>
                      <div className="bg-bio-lightblue px-4 py-2 rounded-full flex items-center">
                        <BookOpen size={16} className="text-bio-blue mr-2" />
                        <span className="text-bio-navy font-medium text-sm">CGPA: 9.1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* BSc Education */}
            <div className="timeline-item timeline-bullet">
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-bio-lightblue rounded-lg flex items-center justify-center mr-6 shadow-sm">
                    <School className="text-bio-blue" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl text-bio-navy">B.Sc. in Bioinformatics</h3>
                    <div className="flex items-center text-gray-600 mt-2 mb-3">
                      <span className="font-medium">Bishop Heber College</span>
                      <span className="mx-2">•</span>
                      <span>Tiruchirappalli, India</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <CalendarClock size={16} className="mr-2" />
                      <span>2018 - 2021</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <div className="bg-bio-lightblue px-4 py-2 rounded-full flex items-center">
                        <BookOpen size={16} className="text-bio-blue mr-2" />
                        <span className="text-bio-navy font-medium text-sm">CGPA: 8.4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Diploma */}
            <div className="timeline-item timeline-bullet">
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-bio-lightblue rounded-lg flex items-center justify-center mr-6 shadow-sm">
                    <BookOpen className="text-bio-blue" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl text-bio-navy">Diploma in Bioanalytical Techniques</h3>
                    <div className="flex items-center text-gray-600 mt-2 mb-3">
                      <span className="font-medium">Bishop Heber College</span>
                      <span className="mx-2">•</span>
                      <span>Tiruchirappalli, India</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <CalendarClock size={16} className="mr-2" />
                      <span>2018 - 2019</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <div className="bg-bio-lightblue px-4 py-2 rounded-full flex items-center">
                        <Award size={16} className="text-bio-blue mr-2" />
                        <span className="text-bio-navy font-medium text-sm">Grade: A+</span>
                      </div>
                    </div>
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
