
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, BookOpen, Code, Compass } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardContent className="pt-6">
      <div className="flex flex-col items-center text-center">
        <div className="bg-primary/10 p-3 rounded-full mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const About = () => {
  const cards = [
    {
      icon: User,
      title: "Who I Am",
      description: "An experienced engineer dedicated to creating innovative solutions and pushing technological boundaries."
    },
    {
      icon: BookOpen,
      title: "My Philosophy",
      description: "I believe in combining technical excellence with practical solutions to solve real-world engineering challenges."
    },
    {
      icon: Code,
      title: "What I Do",
      description: "I design, develop, and implement engineering solutions across various domains with a focus on quality and efficiency."
    },
    {
      icon: Compass,
      title: "My Journey",
      description: "My career path has been driven by curiosity and the desire to make a positive impact through technology."
    }
  ];

  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate engineer with expertise in solving complex problems and delivering exceptional results. My approach combines technical knowledge with practical innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, index) => (
            <AboutCard key={index} {...card} />
          ))}
        </div>

        <div className="bg-secondary/50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">My Story</h3>
            <p className="mb-4">
              With a strong foundation in engineering principles and a keen interest in technological advancement, I've dedicated my career to developing solutions that make a difference. My journey began with a fascination for how things work, which evolved into a professional path focused on engineering excellence.
            </p>
            <p className="mb-4">
              Throughout my career, I've worked on diverse projects that have challenged me to think creatively and apply my knowledge in innovative ways. I thrive in environments where problem-solving and technical expertise converge to create meaningful outcomes.
            </p>
            <p>
              I'm driven by the belief that great engineering can transform ideas into reality, and I'm committed to continuous learning and growth in my field. My goal is to contribute to projects that not only meet technical requirements but also deliver value and positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
