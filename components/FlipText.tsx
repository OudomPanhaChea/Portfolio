import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FlipText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState<number>(0);
  const DURATION = 0.25;
  const STAGGER = 0.025;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const currentWord = words[index];
  const nextWord = words[(index + 1) % words.length];

  return (
    <motion.div
      key={currentWord}
      initial='initial'
      animate='animated'
      className="text-center lg:text-start text-4xl xl:text-5xl 2xl:text-6xl w-[24ch] relative font-thin uppercase text-primary leading-12 whitespace-nowrap overflow-hidden"
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h1 className="whitespace-pre">
        {currentWord.split("").map((l, i) => (
          <motion.span 
            className={`inline-block`}
            key={i}
            variants={{
              initial: {
                y: 0
              },
              animated: {
                y: "-100%"
              }
            }}
            transition={{ 
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >{l}</motion.span>
        ))}
      </motion.h1>
      <motion.h1
        className="absolute inset-0 whitespace-pre"
      >
        {nextWord.split("").map((l, i) => (
          <motion.span 
            className="inline-block"
            key={i}
            variants={{
              initial: {
                y: "100%"
              },
              animated: {
                y: 0
              }
            }}
            transition={{ 
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >{l}</motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}

export default FlipText;