
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, AlertCircle, BookOpen } from "lucide-react";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  team: { initial: string; color: string }[];
  status: "in-progress" | "completed";
  icon: ReactNode;
  publicationInfo?: string;
  progress?: number;
  estimatedCompletion?: string;
  borderColor: string;
}

const ProjectCard = ({
  title,
  date,
  description,
  technologies,
  team,
  status,
  icon,
  publicationInfo,
  progress,
  estimatedCompletion,
  borderColor
}: ProjectCardProps) => {
  const isCompleted = status === "completed";

  return (
    <Card className={`p-6 hover:shadow-lg transition-shadow relative overflow-hidden border-l-4 ${borderColor}`}>
      <div className="mb-4 flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <div className={`${isCompleted ? 'bg-green-100' : 'bg-' + borderColor.replace('border-', '') + '/10'} p-2 rounded-full mr-3`}>
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-bio-navy">{title}</h3>
          </div>
          <p className="text-sm text-gray-500 mt-1">{`${isCompleted ? 'Completed' : 'Started'}: ${date}`}</p>
        </div>
        <span className={`${isCompleted ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} text-xs font-medium px-2.5 py-0.5 rounded flex items-center`}>
          {isCompleted ? (
            <>
              <BookOpen size={14} className="mr-1" /> Completed
            </>
          ) : (
            <>
              <Clock size={14} className="mr-1" /> In Progress
            </>
          )}
        </span>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      {!isCompleted && progress !== undefined && (
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-pill">{tech}</span>
        ))}
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <div className="flex space-x-2">
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`w-8 h-8 rounded-full bg-${member.color} flex items-center justify-center text-white`}
            >
              {member.initial}
            </div>
          ))}
        </div>
        <div className={`flex items-center text-sm ${isCompleted ? 'text-green-600' : 'text-yellow-600'}`}>
          {isCompleted ? (
            <>
              <BookOpen size={14} className="mr-1" />
              {publicationInfo}
            </>
          ) : (
            <>
              <AlertCircle size={14} className="mr-1" />
              {`Estimated completion: ${estimatedCompletion}`}
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
