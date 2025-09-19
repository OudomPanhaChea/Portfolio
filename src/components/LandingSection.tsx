import { useGSAP } from "@gsap/react";
import { assets } from "../assets/assets";
import FlipText from "../components/FlipText";
import gsap from "gsap";
import { LuBrain, LuLightbulb } from "react-icons/lu";
import type { IconType } from "react-icons";

const LandingSection = () => {
  const WORDS = ["web developer", "frontend developer", "backend developer"];

  useGSAP(() => {
    gsap.from("#hero h1, #hero p, #hero button", {
      y: 100,
      x: -50,
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.1,
    });

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
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white overflow-hidden pb-16 lg:pb-0"
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
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="px-4 mt-42 sm:mt-32 lg:mt-0 relative z-10 flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 items-center justify-center lg:justify-between min-h-screen">
          {/* left */}
          <div className="w-full lg:mt-32 space-y-3 xl:space-y-5 2xl:space-y-5 flex flex-col items-center lg:items-start">
            <div className="flex items-end gap-1 xl:gap-2">
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
                I am Chea Oudompanha
              </p>
            </div>
            <FlipText words={WORDS} />
            <p className="text-base xl:text-lg text-primary/80 mb-8 leading-relaxed">
              A clean and minimalistic portfilio website.
            </p>
            {/* buttons */}
            <div className="flex items-center gap-4">
              <button className="cursor-pointer bg-primary border-1 border-primary rounded-full text-sm overflow-hidden lg:text-base text-white hover:bg-primary-dull transition-colors font-medium">
                <a href="" className="px-6 lg:px-8 py-3 lg:py-4 block">
                  Download CV
                </a>
              </button>
              <button className="overflow-hidden cursor-pointer border-1 border-primary bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-medium">
                <a href="" className="px-6 lg:px-8 py-3 lg:py-4 block">
                  Explore Web
                </a>
              </button>
            </div>

            <div className="w-full md:w-[110%] xl:w-full pt-28 sm:pt-32 lg:pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 xl:gap-6 max-w-2xl mx-auto lg:mx-0">
                {/* Creativity Card */}
                <ContentCard
                  title="Creativity"
                  subtitle="Bringing Ideas to Life"
                  description="I mix design and code to craft projects that feel fresh and fun."
                  Icon={LuBrain}
                />

                {/* Innovation Card */}
                <ContentCard
                  title="Innovation"
                  subtitle="Fresh Ideas"
                  description="Always exploring new ways to solve challenges."
                  Icon={LuLightbulb}
                />
              </div>
            </div>

            {/*  */}
          </div>
          {/* right */}
          <div className="w-full md:ml-24 xl:ml-0 -mt-24 md:-mt-4 lg:mt-0">
            <div
              id="pic-side"
              className="flex items-center justify-center relative"
            >
              <div className="float flex items-center justify-center overflow-hidden">
                <img
                  id="model"
                  className="w-[40%] md:w-[24%] lg:w-[56%]"
                  src={assets.Profile}
                  alt="profile banner"
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

const ContentCard = ({
  title,
  subtitle,
  description,
  Icon
}: {
  title: string;
  subtitle: string;
  description: string;
  Icon: IconType
}) => {
  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-3 text-primary border-2 border-primary/10 bg-white rounded-xl lg:rounded-2xl hover:shadow-sm transition-shadow cursor-default">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <h4 className="text-xs sm:text-sm font-medium corner-only">{title}</h4>
      </div>
      <h3 className="text-sm md:text-base xl:text-lg font-semibold text-primary">
        {subtitle}
      </h3>
      <p className="text-primary/70 text-xs md:text-sm xl:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default LandingSection;
