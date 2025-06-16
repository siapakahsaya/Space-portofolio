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
      src: "/nextjs-portfolio.png",
      title: "Portfolio Website",
      description: "Modern portfolio built with Next.js, TypeScript, and Tailwind CSS",
      href: "project/praktikum1/index.html",
      category: ProjectCategory.WEB,
      technologies: ["js", "html", "css"]
    },
    {
      src: "/ecommerce-app.png",
      title: "E-commerce Platform",
      description: "Full-stack e-commerce with authentication and payment integration",
      href: "https://ecommerce-demo.vercel.app",
      category: ProjectCategory.FULLSTACK,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      src: "/mobile-app.png",
      title: "React Native App",
      description: "Cross-platform mobile application with real-time features",
      href: "https://github.com/username/mobile-app",
      category: ProjectCategory.MOBILE,
      technologies: ["React Native", "TypeScript", "Firebase"]
    }
  ];

  return (
      <div
          className="flex flex-col items-center justify-center py-20"
          id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Praktikum 1
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
