
import { Microscope } from "lucide-react";

const ResearchHeader = () => {
  return (
    <div className="flex items-center mb-2">
      <Microscope className="text-bio-blue mr-2" size={24} />
      <h2 className="text-3xl font-bold text-bio-navy">Research Projects</h2>
      <div className="section-header-line"></div>
    </div>
  );
};

export default ResearchHeader;
