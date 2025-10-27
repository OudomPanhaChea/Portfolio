'use client'
import { assets } from "@/public/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

const dataList = [
  "Continuous Learner",
  "Passionate Problem Solver",
  "Reliable and Collaborative",
  "Strong Technical Foundation",
];

const MyQuoteSection = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#myquote",
        start: "20% 80%",
        end: "40% 20%",
        scrub: 2,
      },
    });

    tl.from(
      "#myquote #image, #myquote h1, #myquote p, #myquote #datalist", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });

  return (
    <section id="myquote" className="relative bg-primary overflow-hidden">
      <div className="container-customized py-24 md:flex items-center justify-center">
        <div id="image" className="w-full md:w-1/2 flex justify-center">
          <Image src={assets.VectorProgrammer} alt="vector" className="lg:scale-120" />
        </div>

        <div className="w-full md:w-1/2 space-y-4 mt-16 md:mt-0">
          <h1 className="text-4xl font-semibold text-white text-center md:text-start">
            Why I&apos;m <span className="text-secondary">Worth</span> Building
            With
          </h1>
          <p className="text-white/50 text-center md:text-start text-sm lg:text-base">
            I believe great projects come from passion, precision, and
            persistence. Every line of code I write carries a purpose to solve
            problems creatively, communicate ideas clearly, and deliver
            meaningful digital experiences that stand out.
          </p>

          <div id="datalist" className="flex items-center justify-center md:justify-start">
            <div className="space-y-2 mt-6">
              {dataList.map((data, i) => {
                const translateValue = (i + 1) * 12;
                return (
                  <p
                    key={i}
                    className={`flex items-center gap-3 text-white text-lg`}
                    style={{ transform: `translateX(${translateValue}px)` }}
                  >
                    <FaRegCircleCheck className="text-secondary" /> {data}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyQuoteSection;
