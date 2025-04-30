
import ResearchHeader from "./ResearchHeader";
import ResearchTabs from "./ResearchTabs";
import BackgroundEffect from "./BackgroundEffect";

const Research = () => {
  return (
    <section id="research" className="py-16 relative min-h-screen">
      <BackgroundEffect />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ResearchHeader />
        <ResearchTabs />
      </div>
    </section>
  );
};

export default Research;
