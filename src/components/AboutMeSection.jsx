import React from 'react';

export default function AboutMeSection() {
  const skills = [
    'JavaScript, TypeScript',
    'React',
    'Node.js & Express',
    'Python',
    'AWS (Lambda, API Gateway, S3, DynamoDB)',
    'Tailwind CSS',
    'Git & GitHub'
  ];

  return (
    <div className="text-gray-100 dark:text-white">
      <h2 className="text-3xl font-bold mb-10 pb-2 border-b border-white/30 inline-block">
        About Me
      </h2>
      
      <div className="md:flex md:gap-10 items-start mt-8">
        {/* Optional: Placeholder for a profile picture */}
        {/* <div className="md:w-1/4 mb-8 md:mb-0 text-center">
          <img src="/path-to-your-profile-picture.jpg" alt="Prachi Heda" className="rounded-full shadow-lg mx-auto w-48 h-48 object-cover" />
        </div> */} 
        
        <div className="md:flex-1 text-left space-y-6">
          <p className="text-lg leading-relaxed">
            Hi! I'm Prachi — a software engineer who loves building things that are both useful and thoughtfully designed. 
            I got into tech through biology research, where I started making small tools to analyze molecular data, and 
            realized how much I enjoyed solving problems with code. Since then, I've worked across the stack, led projects 
            at hackathons, and explored everything from AWS workflows to building machine learning pipelines. I really enjoy 
            working with others, learning by doing, and turning fun ideas into real, working products.
          </p>
          <p className="text-lg leading-relaxed">
            I care a lot about building clean, reliable systems and making things that feel intuitive to use. Lately I've 
            been drawn to backend and cloud infrastructure — things like setting up CI/CD pipelines, working with Docker, 
            and designing serverless architectures on AWS. But I also have a soft spot for frontend work, especially when 
            it comes to creating lightweight, responsive UIs. I'm always looking to learn something new or dig deeper 
            into the "why" behind how things work.
          </p>

          <div>
            <h3 className="text-2xl font-semibold mb-4 mt-8">Key Skills</h3>
            <ul className="list-none mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-lg">
              {skills.map(skill => (
                <li key={skill} className="bg-white/10 dark:bg-white/5 backdrop-blur-sm p-3 rounded-md shadow-sm hover:bg-white/20 transition-colors break-words">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 mt-8">Currently Up To</h3>
            <p className="text-lg leading-relaxed">
              Right now, I'm exploring serverless patterns on AWS and getting more comfortable with advanced React patterns. 
              I'm also working on a personal iOS app called "1% Better" — it's a small journaling app that lets you track 
              tiny daily wins, tag them with emojis, and look back at past entries. My goal is to keep building things 
              that feel meaningful and to keep growing as a developer, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 