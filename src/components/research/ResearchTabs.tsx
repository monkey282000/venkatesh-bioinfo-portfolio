
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, BookOpen } from "lucide-react";
import OngoingProjects from "./OngoingProjects";
import CompletedProjects from "./CompletedProjects";

const ResearchTabs = () => {
  return (
    <Tabs defaultValue="ongoing" className="mt-8">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="ongoing" className="text-lg">
          <Clock className="mr-2" size={18} />
          Ongoing Research
        </TabsTrigger>
        <TabsTrigger value="completed" className="text-lg">
          <BookOpen className="mr-2" size={18} />
          Completed Projects
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="ongoing">
        <OngoingProjects />
      </TabsContent>
      
      <TabsContent value="completed">
        <CompletedProjects />
      </TabsContent>
    </Tabs>
  );
};

export default ResearchTabs;
