
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Server, Cpu, Globe, LineChart } from 'lucide-react';

const SkillCategory = ({ 
  icon: Icon, 
  title, 
  children 
}: { 
  icon: React.ElementType; 
  title: string; 
  children: React.ReactNode;
}) => {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 p-2 rounded-full">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="space-y-4">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

const TechnicalSkill = ({ name, level }: { name: string; level: number }) => {
  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 50) return "Intermediate";
    return "Beginner";
  };

  const getLevelColor = (level: number) => {
    if (level >= 90) return "text-green-600";
    if (level >= 75) return "text-blue-600";
    if (level >= 50) return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100">
      <span className="font-medium">{name}</span>
      <span className={`text-sm font-medium ${getLevelColor(level)}`}>
        {getLevelLabel(level)}
      </span>
    </div>
  );
};

const Skills = () => {
  const programmingSkills = [
    { name: "Java", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "C++", percentage: 75 },
    { name: "JavaScript", percentage: 80 },
    { name: "SQL", percentage: 85 }
  ];

  const technicalSkills = [
    { name: "Software Design", level: 92 },
    { name: "Database Management", level: 85 },
    { name: "System Architecture", level: 80 },
    { name: "DevOps", level: 75 },
    { name: "Cloud Services", level: 78 }
  ];

  const engineeringSkills = [
    { name: "CAD Software", percentage: 85 },
    { name: "Circuit Design", percentage: 90 },
    { name: "Control Systems", percentage: 88 },
    { name: "Simulation Tools", percentage: 80 }
  ];

  return (
    <section id="skills" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've developed a diverse skill set throughout my career, focusing on both technical proficiency and professional capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <SkillCategory icon={Code} title="Programming Languages">
            {programmingSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </SkillCategory>

          <SkillCategory icon={Server} title="Technical Skills">
            {technicalSkills.map((skill, index) => (
              <TechnicalSkill key={index} name={skill.name} level={skill.level} />
            ))}
          </SkillCategory>

          <SkillCategory icon={Cpu} title="Engineering Skills">
            {engineeringSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </SkillCategory>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary/30 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Areas of Interest</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Renewable Energy Systems</li>
              <li>IoT & Smart Infrastructure</li>
              <li>Sustainable Engineering Solutions</li>
              <li>Robotics & Automation</li>
            </ul>
          </div>

          <div className="bg-secondary/30 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <LineChart className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Professional Skills</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Project Management & Leadership</li>
              <li>Problem Solving & Critical Thinking</li>
              <li>Technical Documentation & Communication</li>
              <li>Team Collaboration & Mentoring</li>
              <li>Research & Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
