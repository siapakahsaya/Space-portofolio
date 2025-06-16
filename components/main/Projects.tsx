import React from "react";
import ProjectCard from "../sub/ProjectCard";

enum ProjectCategory {
  WEB = "web",
  MOBILE = "mobile",
  FULLSTACK = "fullstack",
  API = "api"
}

interface Project {
  src: string;
  title: string;
  description: string;
  href: string;
  category?: ProjectCategory;
  technologies?: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      src: "/CardImage.png",
      title: "Portfolio Website",
      description: "Modern portfolio built with Next.js, TypeScript, and Tailwind CSS",
      href: "https://your-portfolio-url.com", // Ubah ke URL yang valid
      category: ProjectCategory.WEB,
      technologies: ["js", "html", "css"]
    },
    // ... rest
  ];

  return (
      <div
          className="flex flex-col items-center justify-center py-20"
          id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Project
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-7xl mx-auto">
          {projects.map((project: Project, index: number) => (
              <ProjectCard
                  key={`project-${index}`} // Better key naming
                  src={project.src}
                  title={project.title}
                  description={project.description}
                  href={project.href}
              />
          ))}
        </div>
      </div>
  );
};

export default Projects;
