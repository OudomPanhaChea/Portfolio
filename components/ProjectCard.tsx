import Image from "next/image";
import React from "react";
import { ProjectsProps } from "@/utils/Projects";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const ProjectCard: React.FC<ProjectsProps> = ({
  title,
  description,
  image,  
  link,
  tech
}) => {
  return (
    <div className="group relative bg-card overflow-hidden">
      <Link href={link} target="_blank">
        <div className="relative h-60 overflow-hidden rounded-2xl">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
          />

          <div className="absolute z-2 top-4 right-4 w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
            <FiExternalLink className="w-5 h-5 text-primary" />
          </div>

          <div className="hidden group-hover:block transition-all duration-300 absolute z-1 inset-0 bg-linear-to-t from-black/80 to-transparent backdrop-blur-none group-hover:backdrop-blur-[2px]" />

          <div className="absolute z-3 h-full top-50 group-hover:top-0 transition-all duration-300 text-white p-4 space-y-3 flex flex-col justify-end">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
