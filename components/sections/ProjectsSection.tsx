'use client'
import HeadingText from '../HeadingText'
import ProjectCard from '../ProjectCard'
import ProjectsList from '@/utils/Projects'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ProjectsSection = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "20% 80%",
        end: "40% 20%",
        scrub: 2,
      },
    });

    tl.from(
      "#projects #heading, #projects #description, #projects #projects-grid > div, #projects button", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });

  return (
    <section
      id="projects"
      className="relative bg-white overflow-hidden"
    >
      <div className="container-customized py-20">
        <div>
          <HeadingText
            heading={
              <>
                {"Discovering My"} <span className="text-secondary">Projects</span>
              </>
            }
            description="Through every project, I turn concepts into interactive digital experiences — blending creativity, logic, and precision to craft standout solutions."
          />
        </div>

        <div id='projects-grid' className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-18'>
          {ProjectsList.map((project, i) => (
              <ProjectCard key={i} {...project} />
          ))}
        </div>

        <div className='flex justify-center my-12'>
          <button className="overflow-hidden border border-primary text-sm lg:text-base bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
            <Link 
              href={'https://github.com/OudomPanhaChea'}
              target='_blank'
              className="font-medium inline-block px-6 lg:px-8 py-3 lg:py-4"
            >
              View More
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
