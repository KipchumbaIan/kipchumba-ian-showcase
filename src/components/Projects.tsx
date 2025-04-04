
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Home Automation System",
      description: "Designed and implemented a comprehensive IoT-based smart home system with remote monitoring and control capabilities.",
      technologies: ["IoT", "Embedded Systems", "Mobile App", "Cloud Infrastructure"],
      images: [
        "https://images.unsplash.com/photo-1558002038-1055952a6c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3041&q=80",
        "https://images.unsplash.com/photo-1585503418537-88331351ad99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
      ],
      link: "#"
    },
    {
      id: 2,
      title: "Renewable Energy Monitoring Platform",
      description: "Created a web-based dashboard for monitoring and analyzing performance of solar and wind energy installations.",
      technologies: ["React", "Node.js", "Data Visualization", "API Integration"],
      images: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2544&q=80",
        "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      ],
      link: "#"
    },
    {
      id: 3,
      title: "Industrial Automation Solution",
      description: "Developed a control system for manufacturing processes that improved efficiency and reduced operational costs.",
      technologies: ["PLC Programming", "SCADA", "Control Systems", "Industrial IoT"],
      images: [
        "https://images.unsplash.com/photo-1581093458791-9a73e5506470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
        "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
      ],
      link: "#"
    }
  ];

  const [activeProject, setActiveProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setCurrentImage(0);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setCurrentImage(0);
  };

  const nextImage = () => {
    const project = projects[activeProject];
    setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    const project = projects[activeProject];
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const project = projects[activeProject];

  return (
    <section id="projects" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore some of my recent engineering projects and technical achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-xl bg-black aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={project.images[currentImage]} 
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                  aria-label="Next image"
                >
                  <ArrowRight size={20} />
                </button>
              </>
            )}
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-700 mb-6">{project.description}</p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <Button asChild variant="outline">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </a>
              </Button>
            </div>
            
            <div className="mt-auto flex justify-between">
              <Button 
                onClick={prevProject} 
                variant="ghost" 
                className="flex items-center text-primary hover:text-accent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Project
              </Button>
              <Button 
                onClick={nextProject} 
                variant="ghost" 
                className="flex items-center text-primary hover:text-accent"
              >
                Next Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveProject(index);
                setCurrentImage(0);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeProject === index ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
