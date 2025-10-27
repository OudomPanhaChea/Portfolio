import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/public/assets";
import ROUTES from "@/utils/routes";
import SocialMedias from "@/utils/Media";
import { CiMail, CiPhone } from "react-icons/ci";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-customized pt-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-start xl:justify-items-center">
          <div className="">
            <div className="float-left w-16 mr-6 mb-2">
              <Image src={assets.Logo} alt="logo" className="w-full" />
            </div>
            <p className="mt-8">
              Designed and developed with dedication, passion, and purpose —
              this website represents my continuous journey of learning and
              creating meaningful digital experiences. Always exploring, always
              improving.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-1">
              {ROUTES.map((route, i) => (
                <li key={i}>
                  <Link
                    href={route.link}
                    className="hover:text-secondary transition-colors"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="flex flex-col gap-3">
              <Link
                href={`mailto:${siteConfig.links.mail}`}
                className="hover:text-secondary transition-colors flex items-center gap-3"
              >
                <CiMail size={20} />
                {siteConfig.links.mail}
              </Link>
              <Link
                href={siteConfig.links.phone}
                className="hover:text-secondary transition-colors flex items-center gap-3"
              >
                <CiPhone size={20} />
                (+855) 85 825 596
              </Link>
            </div>
            <ul className="flex gap-4 mt-2">
              {SocialMedias.map((media, i) => (
                <li key={i}>
                  <Link
                    href={media.link}
                    target="_blank"
                    className="hover:text-secondary transition-colors"
                  >
                    <media.icon size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-3">
            <button className="border overflow-hidden border-white rounded-full text-sm lg:text-base text-white hover:bg-primary-dull transition-colors">
              <a
                href={assets.CV}
                download
                className="inline-block font-medium px-6 lg:px-8 py-3 lg:py-4"
              >
                Download CV
              </a>
            </button>

            <div className="flex cursor-default items-center justify-between gap-4 w-[80%] text-white/50 text-sm">
              <div className="h-px w-[45%] bg-white/50" />
              or
              <div className="h-px w-[45%] bg-white/50" />
            </div>

            <button className="border overflow-hidden border-white rounded-full text-sm lg:text-base text-white hover:bg-primary-dull transition-colors">
              <Link
                href={'#contact'}
                className="inline-block font-medium px-6 lg:px-8 py-3 lg:py-4"
              >
                Hire me
              </Link>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pb-24 md:pb-6 py-6 border-t border-white text-center text-sm opacity-75">
          <p className="text-white dark:text-primary-100">
            © {new Date().getFullYear()}{" "}
            <span className="text-secondary">Chea Oudompanha</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
