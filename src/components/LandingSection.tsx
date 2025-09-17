import { assets } from "../assets/assets"
import FlipText from "../components/FlipText";

const LandingSection = () => {
  const WORDS = ["web developer", "frontend developer", "backend developer"];
  return (
    <section id="#home" className="relative min-h-screen bg-white overflow-hidden">
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
        <div className="px-4 relative z-10 flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 items-center justify-center lg:justify-between min-h-screen">
          {/* left */}
          <div className="w-full space-y-3 xl:space-y-5 2xl:space-y-6 flex flex-col items-center lg:items-start">
            <div className="flex items-end gap-1 xl:gap-2">
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary">Greeting!</h1>
              <p className="text-base xl:text-lg text-primary/80 mb-0.5">
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

            {/*  */}
          </div>
          {/* right */}
          <div className="w-full -mt-24 md:-mt-4 lg:mt-0">
            <div className="flex items-center justify-center relative">
              <img className="w-[40%] md:w-[24%] lg:w-[56%]" src={assets.Profile} alt="profile banner" />
              <div className="w-[50%] md:w-[30%] lg:w-[68%] h-[50%] bg-primary absolute bottom-0 -z-10 rounded-lg lg:rounded-xl" />
              <div className="w-[50%] md:w-[30%] lg:w-[68%] h-[50%] bg-gradient-to-t from-primary/80 via-50% via-primary/0 to-primary/0 absolute bottom-0 z-10 rounded-lg lg:rounded-xl" />
              <div className="w-[50%] md:w-[30%] lg:w-[68%] h-[50%] border-2 border-primary/60 absolute bottom-2 lg:bottom-4 mr-4 lg:mr-8 -z-30 rounded-lg lg:rounded-xl" />
              <div className="w-[50%] md:w-[30%] lg:w-[68%] h-[50%] bg-secondary/60 absolute -bottom-2 lg:-bottom-4 ml-4 lg:ml-8 -z-20 rounded-lg lg:rounded-xl" />
              <div className="w-[50%] md:w-[30%] lg:w-[68%] h-[50%] bg-secondary/60 absolute -bottom-2 lg:-bottom-4 ml-4 lg:ml-8 -z-20 rounded-lg lg:rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
