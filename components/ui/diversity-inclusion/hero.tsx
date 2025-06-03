"use client";

import Image from "next/image";
import imgDiversityHero from "@/assets/images/diversity-hero.webp";
import { useEffect, useRef } from "react";

export default function Hero() {
  const titleGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addClasses();
  }, []);

  async function addClasses() {
    let titles = document.getElementsByClassName("title");
    for (let i = 0; i < titles.length; i++) {
      let title = titles[i];
      title.classList.add(`visible-title${i + 1}`);
    }
  }

  return (
    <section className="diversity-hero">
      <div className="container mx-auto">
        <div className="h-full text-left flex">
          <Image src={imgDiversityHero} alt="diversity-hero" layout="fill" />
          <div
            className="text-lg sm:text-2xl md:text-4xl lg:text-5xl diversity-hero-title"
            ref={titleGroupRef}
          >
            <div className="title">DIVERSITY & INCLUSION</div>
          </div>
        </div>
      </div>
    </section>
  );
}
