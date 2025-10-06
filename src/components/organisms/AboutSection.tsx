import { useGSAP } from "@gsap/react";
import { assets } from "../../assets/assets";
import HeadingText from "../molecules/HeadingText";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const AboutSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scrub: true,
        markers: true,
        start: "top top",
        end: "bottom bottom",
      },
    });
  });

  return (
    <section
      id="#about"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-18">
        <div className="flex-center flex-col">
          <HeadingText
            heading={
              <>
                Let's Dive in <span className="text-secondary">About Me</span>{" "}
                Section
              </>
            }
            description="Who am I?"
          />

          <div>
            <div className="relative flex-center h-52 md:h-64 lg:h-64 xl:h-72 mt-20">
              <div className="absolute-y-center z-2">
                <div className="aspect-16/10 h-52 md:h-64 lg:h-60 xl:h-72 relative rounded-lg overflow-hidden ml-12">
                  <img src={assets.PFP} alt="pfp" className="-mt-22 lg:-mt-26 xl:-mt-32" />
                  <div className="w-full h-full absolute top-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>
              <h1 className="text-8xl sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] text-primary leading-18 sm:leading-20 md:leading-24 lg:leading-26 xl:leading-32 font-bold uppercase absolute-y-center [transform:scaleY(1.3)]">
                <span className="!font-[Alpino]">Chea</span><span>{' '}</span>
                <span className="!font-[Alpino] text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] mr-8 lg:ml-0">oudom</span><span className="lg:hidden">{' '}</span>
                <span className="!font-[Alpino]">panha</span>
              </h1>
              <h1 className="text-8xl sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] font-bold uppercase leading-18 sm:leading-20 md:leading-24 lg:leading-26 xl:leading-32 text-stroke text-transparent absolute-y-center z-3 [transform:scaleY(1.3)]">
                <span className="!font-[Alpino]">Chea</span><span>{' '}</span>
                <span className="!font-[Alpino] text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] mr-8 lg:ml-0">oudom</span><span className="lg:hidden">{' '}</span>
                <span className="!font-[Alpino]">panha</span>
              </h1>
            </div>

            <div className="mt-12">
              <p>
                I am a motivated third-year Computer Science student with a
                strong passion for web development, specializing in both
                frontend and backend technologies. Currently, I am building my
                own website using React.js and continuously enhancing my skills
                through self-learning and practical projects. Eager to expand my
                expertise, I plan to explore mobile app development once I
                further solidify my current knowledge. I am seeking internship
                or junior opportunities where I can apply my skills, gain
                hands-on experience, and contribute to impactful projects in the
                tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
