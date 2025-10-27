'use client'

import { Skills } from "@/public/assets"
import HeadingText from "../HeadingText"
import SkillsCard from "../SkillsCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const SkillsSection = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "20% 80%",
        end: "40% 20%",
        scrub: 2,
      },
    });

    tl.from(
      "#skills #heading, #skills #description, #skills #grid1, #skills #grid2", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "40% 80%",
        end: "80% 20%",
        scrub: 2,
      }
    })

    tl2.fromTo('#skills #grid1', {
      x: 200
    }, {
      x: -100
    }).fromTo('#skills #grid2', {
      x: -200
    }, {
      x: 100
    }, '<');

  });

  return (
    <section
      id="skills"
      className="relative bg-white overflow-hidden"
    >
      <div className="container-customized py-20">
        <div>
          <HeadingText
            heading={
              <>
                {"Wanna know about my"} <span className="text-secondary">Skills</span>?
              </>
            }
            description="Since 2023, I have been continuously learning and improving my skills step by step to strengthen my foundation in web development and build high-quality projects."
          />

          <div id="grid" className="pt-24 space-y-12">
            <div id="grid1" className='grid grid-cols-4 lg:grid-cols-8 gap-4 space-y-8'>
              {Skills.slice(0, Skills.length / 2).map((skill, i) => (
                <SkillsCard key={i} {...skill} />
              ))}
            </div>
            <div id="grid2" className='grid grid-cols-4 lg:grid-cols-9 gap-4 space-y-8'>
              {Skills.slice(Skills.length / 2, Skills.length).map((skill, i) => (
                <SkillsCard key={i} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
