
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <Avatar className="mx-auto md:mx-0 mb-6 w-48 h-48">
            <AvatarImage 
              src="/lovable-uploads/9c0f6299-363c-4e70-822c-ed47c655ad16.png" 
              alt="Eng. Kipchumba Ian" 
              className="object-cover"
            />
            <AvatarFallback>KI</AvatarFallback>
          </Avatar>
          <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-gray-700 mb-4">
            Hello! I'm Eng. Kipchumba Ian, a passionate engineer dedicated to creating innovative solutions. 
            With a strong background in technology and a drive for continuous learning, 
            I strive to make meaningful contributions to the tech world.
          </p>
          <p className="text-gray-700">
            My journey is fueled by curiosity, problem-solving, and the excitement of bringing 
            ideas to life through engineering and software development.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Interests</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Software Engineering</li>
            <li>• Web Development</li>
            <li>• Technology Innovation</li>
            <li>• Problem Solving</li>
            <li>• Continuous Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
