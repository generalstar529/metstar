"use client";

import Image from "next/image";
import imgHomeHero from "@/assets/images/home-hero.webp";
import imgHomeHeroDesktop from "@/assets/images/home-hero-desktop.webp";
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
    <section className="home-hero">
      <div className="container mx-auto">
        <div className="h-full text-center flex justify-center">
          <Image
            src={imgHomeHeroDesktop}
            alt="home-hero"
            className="hidden md:block"
            layout="fill"
            style={{ objectFit: "cover" }}
          />
          <Image
            src={imgHomeHero}
            alt="home-hero"
            className="md:hidden"
            layout="fill"
            style={{ objectFit: "cover" }}
          />
          <div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl home-hero-title"
            ref={titleGroupRef}
          >
            <span className="title">OUR PEOPLE POWER MODERN LIFE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
