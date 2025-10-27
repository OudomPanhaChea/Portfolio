"use client";

import { useGSAP } from "@gsap/react";
import { assets } from "@/public/assets";
import HeadingText from "../HeadingText";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SocialMedias from "@/utils/Media";
import Image from "next/image";

interface Datas {
  label: string;
  amount: number;
}

const datas: Datas[] = [
  {label: 'Years Experience', amount: 1},
  {label: 'Projects Completed', amount: 12},
  {label: 'Clients', amount: 0},
]

const AboutSection = () => {
  const refs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if(!el) return;
      gsap.fromTo(el, {
        innerText: 0,
      }, {
        innerText: datas[i].amount,
        duration: 1,
        ease: 'power1.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        },
        onUpdate: function () {
          el.innerText = `${Math.floor(+el.innerText).toString()}+`;
        }
      })
    })
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "20% 80%",
        end: "40% 20%",
        scrub: 2,
      },
    });

    tl.from(
      "#about #heading, #about #description, #about #pic-n-name", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutme",
        start: "30% 80%",
        end: "50% 20%",
        scrub: 2,
      },
    });

    tl2.from('#about #about-me-para p, #about #experiences div', {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    }).from('#about #medias a', {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    }, '>')

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    tl3.from('#about .name',{
      x: 150,
      y: 150,
    }).to("#name-fill .chea, #name-stroke .chea", {
      x: -50,
      ease: "none",
    }, '<').to("#name-fill .oudom, #name-stroke .oudom", {
      x: 50,
      ease: "none",
    }, "<")
    .to("#name-fill .panha, #name-stroke .panha", {
      x: -30,
      ease: "none",
    },"<")
    .to('#pfp', {
      x: 50,
      ease: "none",
    }, "<");
  });

  return (
    <section
      id="about"
      className="relative bg-white overflow-hidden"
    >
      <div className="container-customized py-18">
        <div className="flex-center flex-col">
          <HeadingText
            heading={
              <>
                {"Let's Dive in"} <span className="text-secondary">About Me</span>{" "}
                Section
              </>
            }
            description="Who am I?"
          />

          <div>
            <div
              id="pic-n-name"
              className="relative flex-center h-52 md:h-64 lg:h-64 xl:h-72 mt-20"
            >
              <div className="absolute-y-center z-2">
                <div
                  id="pfp"
                  className="aspect-16/10 h-52 md:h-64 lg:h-60 xl:h-72 relative rounded-lg overflow-hidden ml-12"
                >
                  <Image
                    src={assets.PFP}
                    alt="pfp"
                    className="-mt-22 lg:-mt-26 xl:-mt-32"
                  />
                  <div className="w-full h-full absolute top-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
              </div>

              <h1
                id="name-fill"
                className="name flex flex-col lg:inline-block w-full lg:w-fit text-8xl sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] text-primary leading-18 sm:leading-20 md:leading-24 lg:leading-26 xl:leading-32 font-bold uppercase absolute-y-center [transform:scaleY(1.3)]"
              >
                <span className="!font-[Sentient] chea">Chea</span>
                <span> </span>
                <span className="!font-[Sentient] oudom text-center lg:text-start text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[12rem] mr-8 lg:ml-0">
                  oudom
                </span>
                <span className="lg:hidden"> </span>
                <span className="!font-[Sentient] panha text-end lg:text-start md:text-[8rem] lg:text-[9rem] xl:text-[12rem]">
                  panha
                </span>
              </h1>
              <h1
                id="name-stroke"
                className="name flex flex-col lg:inline-block w-full lg:w-fit text-8xl sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] font-bold uppercase leading-18 sm:leading-20 md:leading-24 lg:leading-26 xl:leading-32 text-stroke text-transparent absolute-y-center z-3 [transform:scaleY(1.3)]"
              >
                <span className="!font-[Sentient] chea">Chea</span>
                <span> </span>
                <span className="!font-[Sentient] oudom text-center lg:text-start text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[12rem] mr-8 lg:ml-0">
                  oudom
                </span>
                <span className="lg:hidden"> </span>
                <span className="!font-[Sentient] panha text-end lg:text-start md:text-[8rem] lg:text-[9rem] xl:text-[12rem]">
                  panha
                </span>
              </h1>
            </div>

            <div id="aboutme" className="mt-32 lg:mt-40 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div id="about-me-para" className="w-full space-y-6">
                <p className="">
                  I am a motivated third-year Computer Science student with a
                  strong passion for web development, specializing in both
                  frontend and backend technologies. 
                </p>
                <p className="">
                  Currently, I am building my
                  own website using React.js and continuously enhancing my skills
                  through self-learning and practical projects. Eager to expand my
                  expertise, I plan to explore mobile app development once I
                  further solidify my current knowledge. I am seeking internship
                  or junior opportunities where I can apply my skills, gain
                  hands-on experience, and contribute to impactful projects in the
                  tech industry.
                </p>
              </div>

              <div className="w-full">
                <div id="experiences" className="grid grid-cols-3 h-full place-items-center">
                  {datas.map(({ label, amount }, index) => (
                    <div key={index} className="flex flex-col w-full h-32 text-center gap-2 text-primary">
                      <h1 ref={(el) => { if(el) refs.current[index] = el }} className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-secondary font-bold">{amount}+</h1>
                      <h3 className="text-base lg:text-lg xl:text-xl font-medium">{label}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full mt-6 lg:mt-12">
              <div id="medias" className="flex items-center justify-center gap-4">
                {SocialMedias.map((item, i) => (
                  <a href={item.link} target="_blank" key={i} className="block text-primary">
                    <item.icon size={24}/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
