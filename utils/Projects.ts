import { assets } from "@/public/assets";
import { StaticImageData } from "next/image";

export interface ProjectsProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  tech: string[];
}

const ProjectsList: ProjectsProps[] = [
  {
    title: 'Tinh E-commerce',
    description: 'An e-commerce website with full functionalities.',
    image: assets.Tinh,
    link: 'https://react-tinh-web.vercel.app',
    tech: ['RectJs', 'Tailwind', 'MongoDB', 'ExpressJs']
  }, {
    title: 'Mojito Cocktail',
    description: 'An interesting cocktail menu website with animation and best user experience.',
    image: assets.Mojito,
    link: 'https://mojito-cocktails-eta.vercel.app',
    tech: ['ReactJs', 'tailwind', 'GSAP']
  }, {
    title: 'KE Digital Solution',
    description: 'A start up service company website with full details and collaborations.',
    image: assets.KE,
    link: 'https://kedigitalsolution.com',
    tech: ['NextJs', 'tailwind']
  },
];

export default ProjectsList