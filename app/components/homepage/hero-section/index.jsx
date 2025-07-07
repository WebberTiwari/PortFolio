// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center text-center py-20">
      <div className="relative z-10">
        <Image
          src={personalData.profile} // ✅ Make sure this is a static URL or imported image
          alt={personalData.name}
          width={150}
          height={150}
          className="rounded-full border-4 border-[#16f2b3] mb-6"
        />

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Hi, I’m {personalData.name}
        </h1>

        <h2 className="text-lg md:text-2xl text-[#16f2b3] mb-6">
          {personalData.designation}
        </h2>

        <div className="flex gap-4 justify-center mb-6">
          {personalData.github && (
            <Link href={personalData.github} target="_blank" rel="noopener noreferrer">
              <Image src="/icons/github.svg" alt="GitHub" width={32} height={32} />
            </Link>
          )}
          {personalData.linkedIn && (
            <Link href={personalData.linkedIn} target="_blank" rel="noopener noreferrer">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </Link>
          )}
          {personalData.twitter && (
            <Link href={personalData.twitter} target="_blank" rel="noopener noreferrer">
              <Image src="/icons/twitter.svg" alt="Twitter" width={32} height={32} />
            </Link>
          )}
        </div>

        <Link
          href={personalData.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#16f2b3] text-black rounded-full font-semibold hover:bg-[#0dcf96] transition-colors"
        >
          Download Resume
        </Link>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-0"></div>
    </section>
  );
}

export default HeroSection;
