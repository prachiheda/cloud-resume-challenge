import React from 'react';
import ViewsCount from './components/ViewsCount';
import ProjectCard from './components/ProjectCard';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import PublishedPapersSection from './components/PublishedPapersSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16 md:space-y-24">
        <div className="text-center">
          <ViewsCount /> 
        </div>

        <AboutMeSection id="about-me" />

        {/* AWS Technologies Section */}
        <div id="aws-technologies" className="text-center">
          <h2 className="text-3xl font-bold mb-10 pb-2 border-b border-white/30 inline-block">
            Built with AWS Cloud Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
            {[
              { name: 'AWS Lambda', icon: '⚡' },
              { name: 'DynamoDB', icon: '🗄️' },
              { name: 'S3', icon: '📦' },
              { name: 'CloudFront', icon: '🌐' },
              { name: 'Route 53', icon: '🎯' },
              { name: 'SAM CLI', icon: '🛠️' },
              { name: 'IAM', icon: '🔐' },
              { name: 'Certificate Manager', icon: '🔒' }
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                <span className="text-4xl">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-100 dark:text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-200 dark:text-gray-300 mt-8 text-sm">
            This portfolio is part of the Cloud Resume Challenge, demonstrating hands-on experience with AWS services
          </p>
        </div>

        {/* Projects section */}
        <div id="featured-projects" className="text-center">
          <h2 className="text-3xl font-bold text-white mb-10 pb-2 border-b border-white/30 inline-block">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="UCSD Stories: Amplifying Voices on Homelessness"
              image="/images/stories-ucsd.png"
              techStack="Svelte, Supabase, React, Edge Functions, Webhooks, EmailJS"
              summary="A website accompanying an art installation to foster conversations and share perspectives on homelessness within the community."
              externalLink="https://stories.ucsd.edu"
            />
            <ProjectCard
              title="TenantPal: AI-Powered Legal Aid for Renters (2nd Place @ Groq Hackathon)"
              image="/images/tenantpal.png"
              techStack="Next.js, TypeScript, Tailwind CSS, crewAI, Python, Groq"
              summary="An AI-driven platform using a multi-agent system (crewAI) to help tenants understand legal documents and draft communications to landlords."
              githubLink="https://github.com/prachiheda/tenantpal"
            />
            <ProjectCard
              title="InnovaAI: AI-Powered Startup Validation"
              image="/images/innovaai-pic.jpeg"
              techStack="React, TypeScript, Tailwind CSS, crewAI, Python, FastAPI"
              summary="A multi-agent AI framework (CrewAI) to validate startup ideas by analyzing market trends, business feasibility, and financial projections, providing actionable insights for founders."
              githubLink="https://github.com/prachiheda/inf-loops-sachacks"
              externalLink="https://devpost.com/software/innovaai"
            />
            <ProjectCard
              title="One Percent Journal: Daily Wins Tracker"
              image="/images/onepercent.png"
              imageClassName="object-top"
              techStack="Swift, SwiftUI"
              summary="A lightweight iOS journaling app inspired by Atomic Habits to track small daily achievements and build positive momentum."
              githubLink="https://github.com/prachiheda/OnePercentJounral"
            />
            <ProjectCard
              title="Lynne: Smarter Birth Control Reminders"
              image="/images/lynne.png"
              techStack="React Native, Expo, Google Calendar API, Gemini API"
              summary="An app empowering women with personalized birth control reminders, an AI chatbot for patient advocacy, and educational resources. Built at IrvineHacks 2025."
              githubLink="https://github.com/prachiheda/Lynne"
              externalLink="https://devpost.com/software/lynne-birth-control-tracker"
            />
            <ProjectCard
              title="AccredMed: Nursing Credentialing & Mock Interviews"
              image="/images/accredmed.jpeg"
              techStack="React, Chakra UI, TailwindCSS, Firebase, Agora.io, MongoDB, Express.js, Node.js, Nodemailer"
              summary="A platform for nurses to practice interviewing skills and gain credentials through peer-to-peer mock interviews, featuring automated matching and video call integration."
              externalLink="https://accredmed-client-8ccaece6b750.herokuapp.com"
              githubLink="https://github.com/K-Pat/MediHacks"
              devpostLink="https://devpost.com/software/accredmed"
            />
            <ProjectCard
              title="Sirona Clinical: AI-Powered Patient & Clinical Trial Matching (1st Place @ DiamondHacks)"
              image="/images/sirona-clinical.png"
              techStack="React, Node.js, Express.js, MongoDB, AWS Comprehend Medical, Postman"
              summary="An ML-driven platform connecting patients with suitable clinical trials by analyzing medical records using AWS Comprehend Medical. Features a clinical trial directory and returns estimated match percentages."
              githubLink="https://github.com/vinumaradana/PatientMatch"
              devpostLink="https://devpost.com/software/sirona-clinical"
            />
            <ProjectCard
              title="World Sentimapper: Real-Time News Sentiment Dashboard"
              image="/images/sentimapper.png"
              techStack="Python, RabbitMQ, SQLite, Perplexity Sonar API, Streamlit"
              summary="A real-time dashboard that ingests NYT news via RSS, performs sentiment and theme analysis using Perplexity API, and visualizes news sentiment geographically on a world map."
              githubLink="https://github.com/chriss-mo/world-sentimapper"
            />
            <ProjectCard
              title="prachiblogs.com: Personal Tech & Project Blog"
              image="/images/blog.png"
              techStack="Hugo, GitHub Actions, Markdown"
              summary="A personal blog site built with the Hugo static site generator and deployed via GitHub Actions, featuring articles on technology and projects."
              githubLink="https://github.com/prachiheda/prachiblogs"
              externalLink="https://prachiblogs.com"
            />
            <ProjectCard
              title="Swift iOS Markdown Editor for Blog"
              image="/images/blogapp.png"
              techStack="Swift, SwiftUI, GitHub API, iOS Keychain, UIKit"
              summary="A personal iOS app to write, edit, and push markdown blog posts directly to prachiblogs.com, featuring a custom markdown keyboard toolbar for faster editing."
            />
          </div>
        </div>

        <PublishedPapersSection id="research-papers" />

      </div>
    </div>
  );
}

export default App;