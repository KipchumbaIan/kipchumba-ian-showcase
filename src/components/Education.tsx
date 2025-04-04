
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileDown, Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationItem = ({ 
  year, 
  degree, 
  institution, 
  description 
}: { 
  year: string;
  degree: string;
  institution: string;
  description: string;
}) => {
  return (
    <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold">{degree}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{year}</span>
          </div>
        </div>
        <p className="text-primary font-medium">{institution}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const EducationAccomplishment = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex space-x-4">
      <div className="bg-primary/10 p-2 rounded-full h-fit">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Education = () => {
  const handleDownloadCV = () => {
    // In a real implementation, this would point to your actual CV file
    alert("CV download functionality would be implemented here with a real file.");
  };

  const educationItems = [
    {
      year: "2015 - 2019",
      degree: "Bachelor of Engineering",
      institution: "University of Engineering and Technology",
      description: "Graduated with honors in Electrical Engineering with a focus on control systems and automation."
    },
    {
      year: "2020 - 2021",
      degree: "Master's in Engineering Management",
      institution: "Technical Institute of Management",
      description: "Specialized in project management and leadership in engineering contexts with distinction."
    },
    {
      year: "2022",
      degree: "Professional Certification",
      institution: "International Engineering Board",
      description: "Received professional certification in specialized engineering practices and standards."
    }
  ];

  const accomplishments = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Graduated top of my class with multiple academic honors and distinctions."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Received recognition for contributions to engineering projects and innovations."
    },
    {
      icon: BookOpen,
      title: "Continued Education",
      description: "Regularly participate in professional development and specialized training programs."
    }
  ];

  return (
    <section id="education" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Qualifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My educational journey has equipped me with the knowledge and skills needed to excel in the engineering field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {educationItems.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold mb-6">Accomplishments</h3>
          <div className="space-y-6">
            {accomplishments.map((item, index) => (
              <EducationAccomplishment key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={handleDownloadCV} 
            className="bg-primary hover:bg-accent text-white"
          >
            <FileDown className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Education;
