import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileDown, Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cvData } from '@/data/cv-data';

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
  const { toast } = useToast();

  const handleDownloadCV = () => {
    // Create a Blob containing the CV data as text
    const cvContent = `
${cvData.personal.name}
COUNTY    NANDI, KENYA
CELLPHONE  ${cvData.personal.phone}
EMAIL   ${cvData.personal.email}
LINKEDIN  ${cvData.personal.linkedin}

SUMMARY
${cvData.personal.summary}

CAREER OBJECTIVE
${cvData.objective}

EDUCATION
${cvData.education[0].period}             
${cvData.education[0].institution}
${cvData.education[0].degree}
(${cvData.education[0].achievement})

RESEARCH WORK
${cvData.research.period}           
${cvData.research.title}
${cvData.research.points.map(point => '• ' + point).join('\n')}
`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ian_kipchumba_cv.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast({
      title: "CV Download Started",
      description: "Your CV is being downloaded as a text file.",
    });
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            My educational journey has equipped me with the knowledge and skills needed to excel in the engineering field.
          </p>
          <Button 
            onClick={handleDownloadCV} 
            className="bg-primary hover:bg-accent text-white mb-8"
          >
            <FileDown className="mr-2 h-4 w-4" />
            Download Full CV
          </Button>
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
      </div>
    </section>
  );
};

export default Education;
