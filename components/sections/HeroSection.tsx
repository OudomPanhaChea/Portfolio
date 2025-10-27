"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { LuBrain, LuLightbulb } from "react-icons/lu";
import { RiCodeSSlashLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import FlipText from "../FlipText";
import ContentCard from "../ContentCard";
import { assets } from "@/public/assets";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const HeroSection = () => {
  const WORDS = ["web developer", "frontend developer", "backend developer"];

  useGSAP(() => {
    gsap.from(
      "#hero h1, #hero #text p, #hero #sub-heading, #hero button, #hero #content1, #hero #content2",
      {
        y: 100,
        x: -50,
        opacity: 0,
        ease: "power1.inOut",
        stagger: 0.1,
      }
    );

    const tl = gsap.timeline();

    tl.from("#model", {
      y: 150,
      x: 100,
      opacity: 0,
      duration: 0.7,
      ease: "power1.inOut",
    })
      .from("#border-bg", {
        x: -50,
        opacity: 0,
        ease: "power1.inOut",
      })
      .from("#sec-bg", {
        x: 50,
        opacity: 0,
        ease: "power1.inOut",
      });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#content-card",
        start: () => (window.innerWidth < 640 ? "10% 40%" : "top center"),
        end: () => (window.innerWidth < 640 ? "60% 30%" : "60% 30%"),
        scrub: 0.5,
      },
    });

    tl2
      .fromTo(
        "#content1 #first",
        { y: 0, opacity: 1 },
        { y: "-100%", opacity: 0, ease: "none" }
      )
      .fromTo(
        "#content1 #sec",
        { y: "0", opacity: 0 },
        { y: "-100%", opacity: 1, ease: "none" },
        "<"
      );

    tl2
      .fromTo(
        "#content2 #first",
        { y: "-100%", opacity: 0 },
        { y: "0", opacity: 1, ease: "none" },
        "<"
      )
      .fromTo(
        "#content2 #sec",
        { y: "-100%", opacity: 1 },
        { y: "0", opacity: 0, ease: "none" },
        "<"
      );

    gsap.utils.toArray<HTMLElement>(".float").forEach((el) => {
      gsap.to(el, {
        y: gsap.utils.random(-30, -10),
        x: gsap.utils.random(0, -5),
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white overflow-hidden pb-2 md:pb-16 lg:pb-0"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-15 blur-[1px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3b3c3f 1.5px, transparent 1px),
            linear-gradient(to bottom, #3b3c3f 1.5px, transparent 1px)
          `,
          backgroundSize: "clamp(120px, 8vw, 150px) clamp(120px, 8vh, 150px)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-70" />

      {/* Content Container */}
      <div className="container-customized">
        <div className="px-4 mt-42 sm:mt-32 lg:mt-0 relative z-10 flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 items-center justify-center lg:justify-between min-h-screen">
          {/* Left Section */}
          <div className="w-full lg:mt-32 space-y-3 xl:space-y-5 2xl:space-y-5 flex flex-col items-center lg:items-start">
            <div id="text" className="flex items-end gap-1 xl:gap-2">
              <h1
                id="greet"
                className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary"
              >
                Greeting!
              </h1>
              <p
                id="name"
                className="text-base xl:text-lg text-primary/80 mb-0.5"
              >
                I am a
              </p>
            </div>

            <FlipText words={WORDS} />

            <p
              id="sub-heading"
              className="text-base xl:text-lg text-primary/80 mb-8 leading-relaxed"
            >
              A clean and minimalistic portfolio website.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button className="bg-primary border overflow-hidden border-primary rounded-full text-sm lg:text-base text-white hover:bg-primary-dull transition-colors">
                <a
                  href={assets.CV}
                  download
                  className="inline-block font-medium px-6 lg:px-8 py-3 lg:py-4"
                >
                  Download CV
                </a>
              </button>
              <button className="overflow-hidden border border-primary text-sm lg:text-base bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
                <Link
                  href="#"
                  className="font-medium inline-block px-6 lg:px-8 py-3 lg:py-4"
                >
                  Explore Web
                </Link>
              </button>
            </div>

            {/* Content Cards */}
            <div
              id="content-card"
              className="w-full md:w-[110%] xl:w-full pt-28 sm:pt-32 lg:pt-4"
            >
              <div className="flex items-stretch bg-white gap-4 md:gap-5 xl:gap-6 max-w-2xl mx-auto lg:mx-0">
                <div id="content1" className="w-1/2">
                  <ContentCard
                    title="Creativity"
                    subtitle="Bringing Ideas to Life"
                    description="I mix design and code to craft projects that feel fresh and fun."
                    Icon={LuBrain}
                    title2="Precision"
                    subtitle2="Clean Code"
                    description2="I write clean code that keeps projects smooth and reliable."
                    Icon2={RiCodeSSlashLine}
                  />
                </div>

                <div id="content2" className="w-1/2">
                  <ContentCard
                    title="Innovation"
                    subtitle="Fresh Ideas"
                    description="Always exploring new ways to solve challenges."
                    Icon={LuLightbulb}
                    title2="Collaboration"
                    subtitle2="Working Together"
                    description2="I value teamwork to turn great ideas into reality."
                    Icon2={FaUsers}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:ml-24 xl:ml-0 -mt-24 md:-mt-4 lg:mt-0">
            <div
              id="pic-side"
              className="flex items-center justify-center relative"
            >
              <div className="float flex items-center justify-center overflow-hidden">
                <Image
                  id="model"
                  src={assets.Profile}
                  alt="profile banner"
                  className="w-[40%] md:w-[24%] lg:w-[56%]"
                  priority
                />
                <div
                  id="main-bg"
                  className="w-[50%] md:w-[30%] lg:w-[68%] h-[50%] bg-primary absolute bottom-0 -z-10 rounded-lg lg:rounded-xl"
                />
                <div
                  id="main-bg-gradient"
                  className="w-[50%] md:w-[30%] lg:w-[68%] h-[50%] bg-gradient-to-t from-primary/80 via-50% via-primary/0 to-primary/0 absolute bottom-0 z-10 rounded-lg lg:rounded-xl"
                />
              </div>
              <div
                id="border-bg"
                className="float w-[50%] md:w-[30%] lg:w-[68%] h-[50%] border-2 border-primary/60 absolute bottom-2 lg:bottom-4 mr-4 lg:mr-8 -z-30 rounded-lg lg:rounded-xl"
              />
              <div
                id="sec-bg"
                className="float w-[50%] md:w-[30%] lg:w-[68%] h-[50%] bg-secondary/60 absolute -bottom-2 lg:-bottom-4 ml-4 lg:ml-8 -z-20 rounded-lg lg:rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
