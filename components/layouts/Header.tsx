"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { assets } from "@/public/assets";
import ROUTES from "@/utils/routes";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const pathname = usePathname();

  useGSAP(() => {
    gsap.from(".navbar", {
      width: 0,
      height: 40,
      opacity: 0,
      ease: "power1.in",
      duration: 0.6,
    });

    gsap.from(".mobile-nav", {
      y: 100,
      opacity: 0,
      ease: "power1.in",
      duration: 0.6,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".navbar, .mobile-nav",
          start: "top top",
          end: "420% top",
          scrub: true,
        },
      })
      .from(".navbar", {
        backgroundColor: "#28282b",
        ease: "power1.inOut",
        duration: 1,
      });
  });

  return (
    <>
      <div className="w-full md:container mx-auto fixed bottom-0 md:bottom-auto md:top-3 xl:top-4 left-1/2 -translate-x-1/2 z-50 flex justify-center">
        {/* Desktop */}
        <div
          id="navbar"
          className="navbar w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%] mx-2 p-2 lg:mx-4 bg-primary/80 backdrop-blur-sm rounded-full hidden md:flex items-center justify-between"
        >
          <Link href="/" className="ml-8">
            <Image
              src={assets.Logo}
              alt="logo"
              className="w-[24px] lg:w-[28px]"
            />
          </Link>

          <ul className="text-white flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 text-sm">
            {ROUTES.map((route, i) => (
              <li key={i}>
                <Link
                  href={route.link}
                  className={`block px-2 text-white/70 transition hover:text-white ${
                    pathname === route.link ? "font-semibold text-white" : ""
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-6 w-0.5 bg-white/70 rounded-full" />

          <Link
            href="#contact"
            className="bg-white font-medium text-primary rounded-full overflow-hidden py-2.5 lg:py-3 px-4 lg:px-6 text-sm"
          >
            Hire me
          </Link>
        </div>

        {/* Mobile */}
        <div className="w-full px-2 py-3 bg-primary/90 backdrop-blur-sm flex md:hidden items-center justify-between">
          <ul className="text-white w-full flex items-center justify-around text-xs">
            {ROUTES.map((route, i) => (
              <li key={i} className="w-[60px]">
                <Link
                  href={route.link}
                  className={`flex flex-col text-xs items-center gap-2 md:hidden px-2 text-white/70 transition hover:text-white font-light ${
                    pathname === route.link ? "text-white" : ""
                  }`}
                >
                  {pathname === route.link ? (
                    <route.fillIcon size={route.iconSize} />
                  ) : (
                    <route.icon size={route.iconSize} />
                  )}
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/hireme"
            className="absolute right-3 bottom-[110%] bg-primary/90 hover:bg-primary transition backdrop-blur-sm font-medium text-white rounded-full overflow-hidden py-3 px-4 text-sm"
          >
            Hire me
          </Link>
        </div>
      </div>

      <div className="container mx-auto fixed top-3 left-1/2 -translate-x-1/2 z-50 md:hidden block">
        <Link
          href="/"
          className="mobile-nav ml-3 bg-primary w-[60px] h-[60px] flex items-center justify-center rounded-full"
        >
          <Image src={assets.Logo} alt="logo" className="w-[24px]" />
        </Link>
      </div>
    </>
  );
};

export default Header;

