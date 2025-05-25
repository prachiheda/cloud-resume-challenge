import React from "react";

export default function AboutMeSection() {
  const skills = [
    "JavaScript, TypeScript",
    "React",
    "Node.js & Express",
    "Python",
    "AWS (Lambda, API Gateway, S3, DynamoDB)",
    "Tailwind CSS",
    "Git & GitHub",
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
            Hi! I’m Prachi — a software engineer who loves building things that
            are useful, clean, and fun to use. I got into tech through biology
            research, where I started writing small scripts to make my life
            easier, and realized how much I enjoy solving problems with code.
          </p>
          <p className="text-lg leading-relaxed">
            Lately I’ve been into backend and cloud stuff — CI/CD, Docker,
            serverless AWS setups — but I also really enjoy crafting simple,
            responsive UIs. I like working on things end-to-end, learning by
            doing, and turning fun ideas into real products.
          </p>
          <div>
            <h3 className="text-2xl font-semibold mb-4 mt-8">Key Skills</h3>
            <ul className="list-none mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-lg">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-sm p-3 rounded-md shadow-sm hover:bg-white/20 transition-colors break-words"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 mt-8">
              Currently Up To
            </h3>
            <p className="text-lg leading-relaxed">
              Right now, I’m diving deeper into serverless patterns on AWS and
              exploring more advanced React patterns. I’m also building a
              RAG-based search tool to help hackathon teams find relevant
              projects, tools, and ideas faster. Outside of
              tech, I’ve been learning electric guitar and going to way too many
              concerts lately. I’m always looking for new things to build, new
              skills to pick up, and new sounds to get obsessed with. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
