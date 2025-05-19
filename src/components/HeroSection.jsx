import React from 'react';

// SVG Icon Components
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GoogleScholarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.242 13.769L0 9.5L12 0l12 9.5l-5.242 4.269C17.548 11.249 14.978 9 12 9s-5.548 2.249-6.758 4.769zM12 10c-3.032 0-5.5 2.467-5.5 5.5s2.468 5.5 5.5 5.5s5.5-2.467 5.5-5.5s-2.468-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"/>
  </svg>
);

const BlogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);

export default function HeroSection() {
  return (
    <div className="text-white pt-12 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Hi, I'm Prachi 👋</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A passionate software engineer specializing in cloud technologies and full-stack development.
            I love building scalable applications and exploring new technologies.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/yourusername" 
               title="GitHub"
               className="bg-white text-blue-700 p-3 rounded-full hover:bg-blue-100 transition-colors flex items-center justify-center shadow-lg">
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/yourusername" 
               title="LinkedIn"
               className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center shadow-lg">
              <LinkedInIcon />
            </a>
            <a href="https://scholar.google.com/citations?user=youruserid" 
               title="Google Scholar"
               className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center shadow-lg">
              <GoogleScholarIcon />
            </a>
            <a href="/blog" 
               title="Blog"
               className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition-colors flex items-center justify-center shadow-lg">
              <BlogIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 