import { assets } from "../../assets/assets";
import HeadingText from "../molecules/HeadingText";

const AboutSection = () => {
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
            <div> 
              <div className="aspect-16/12 h-72 relative rounded-lg overflow-hidden">
                <img src={assets.PFP} alt="pfp" className="-mt-22" />
                <div className="w-full h-full absolute top-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <h1 className="text-8xl font-bold uppercase font-arial">Chea Oudompanha</h1>
              <h1 className="text-8xl font-bold uppercase text-stroke">Chea Oudompanha</h1>
            </div>

            <p>
              I am a motivated third-year Computer Science student with a strong
              passion for web development, specializing in both frontend and
              backend technologies. Currently, I am building my own website
              using React.js and continuously enhancing my skills through
              self-learning and practical projects. Eager to expand my
              expertise, I plan to explore mobile app development once I further
              solidify my current knowledge. I am seeking internship or junior
              opportunities where I can apply my skills, gain hands-on
              experience, and contribute to impactful projects in the tech
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
