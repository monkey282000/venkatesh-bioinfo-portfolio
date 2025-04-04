
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const Publications = () => {
  const publications = [
    {
      title: "AI and ML Enhanced Bioactivity Prediction for Hypertension Treatment Targeting Angiotensin II",
      journal: "Computers in Biology and Medicine",
      authors: "Dr. Karthikeyan Muthusamy, Venkatesh Rajendran, Jeyanthi Sankar, Ling Shing Wong",
      status: "Submitted",
      link: "#",
    },
    {
      title: "MULTI-TARGET APPROACH TO IDENTIFY PROMISING POTENTIALS FOR SARS-COV2",
      journal: "World Journal of Pharmacy and Pharmaceutical Sciences",
      authors: "K. Akila, R. Venkatesh, P. Harimithra, et al.",
      status: "Published",
      link: "#",
    },
    {
      title: "Molecular characterization and CRISPR/Cas9 validation of the precursor of egg yolk protein gene, vitellogenin of Leucinodes orbonalis Guen",
      journal: "Gene",
      authors: "K. Ashok, C. N. Bhargava, R. Venkatesh, et al.",
      status: "Published",
      link: "https://doi.org/10.1016/j.gene.2024.148925",
    },
  ];

  const conferences = [
    "Summer school on machine learning in Bioinformatics, HSE University, Aug. 2021",
    "Advanced workshop on NGS, Pondicherry University, Mar. 2023",
    "International conference in Structural Bioinformatics and Computer Aided Drug Design, Alagappa University, Oct. 2019",
    "International conference in Structural Bioinformatics and Computer Aided Drug Design, Alagappa University, Dec. 2022",
    "Introduction to computational Drug Design, Schrodinger and Pharmacy Council of India, 21 Sep - 23 Oct. 2020",
    "One week international E-Workshop on Bioinformatics, Delhi Technological University, 14 Dec - 18 Dec. 2020",
  ];

  const posters = [
    {
      title: "Developing a Cost-Efficient Diagnostic Kit for Rare Genetic Disorders",
      event: "Annual Talk in the INSTEM Conference, August 2024",
    },
    {
      title: "Cataloging actionable pharmacogenomic variants to predict impact and demonstrate utility in Indian clinical practice",
      event: "3rd Rare Genetic Diseases Research Summit - REDRESS – 2024",
    },
  ];

  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-bio-navy mb-2">Publications & Research</h2>
        <div className="section-header-line"></div>
        
        <div className="mt-8 space-y-12">
          {/* Publications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-bio-navy">Scientific Publications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((pub, index) => (
                <div key={index} className="publication-card">
                  <h4 className="font-semibold text-bio-navy mb-2 line-clamp-2">
                    {pub.title}
                  </h4>
                  <p className="text-bio-blue mb-2 text-sm">{pub.journal}</p>
                  <p className="text-gray-600 text-sm mb-3">{pub.authors}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      pub.status === "Published" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {pub.status}
                    </span>
                    {pub.link !== "#" && (
                      <a 
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bio-blue hover:underline flex items-center text-sm"
                      >
                        <span className="mr-1">DOI</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Conferences */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-bio-navy">Conferences & Workshops</h3>
            <Card className="p-6">
              <ul className="space-y-3">
                {conferences.map((conference, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 mt-2 rounded-full bg-bio-blue mr-3"></div>
                    <p className="text-gray-700">{conference}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          {/* Posters */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-bio-navy">Poster Presentations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {posters.map((poster, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-semibold text-bio-navy mb-3">{poster.title}</h4>
                  <p className="text-gray-600 text-sm">{poster.event}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
