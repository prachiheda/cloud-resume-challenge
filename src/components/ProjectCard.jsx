import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaClipboardList } from 'react-icons/fa';

export default function ProjectCard({ title, image, techStack, summary, githubLink, externalLink, imageClassName, devpostLink }) {
  return (
    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-xl flex flex-col hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <img src={image} alt={title || 'Project screenshot'} className={`h-48 w-full object-cover ${imageClassName || ''}`} />
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm font-semibold text-indigo-300 dark:text-indigo-200 tracking-wider">{techStack.toUpperCase()}</p>
        <h3 className="mt-2 text-xl font-bold text-white dark:text-gray-100 mb-2">{title || 'Project Title'}</h3>
        <p className="mt-1 text-gray-200 dark:text-gray-300 flex-1 text-sm leading-relaxed">{summary}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-300 hover:text-purple-100 dark:text-purple-200 dark:hover:text-white transition-colors"
            >
              <FaGithub size="1.2em" /> <span className="font-medium">GitHub</span>
            </a>
          )}
          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-300 hover:text-purple-100 dark:text-purple-200 dark:hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size="1.2em" /> <span className="font-medium">Live Demo</span>
            </a>
          )}
          {devpostLink && (
            <a
              href={devpostLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-300 hover:text-purple-100 dark:text-purple-200 dark:hover:text-white transition-colors"
            >
              <FaClipboardList size="1.2em" /> <span className="font-medium">Devpost</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}