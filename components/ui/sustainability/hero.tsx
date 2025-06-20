"use client";

import Image from "next/image";
import imgSustainabilityHero from "@/assets/images/sustainability-hero.webp";
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
    <section className="sustainability-hero">
      <div className="container mx-auto">
        <div className="h-full text-left flex">
          <Image
            src={imgSustainabilityHero}
            alt="sustainability-hero"
            layout="fill"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            className="text-lg sm:text-2xl md:text-4xl lg:text-5xl sustainability-hero-title"
            ref={titleGroupRef}
          >
            <div className="title">About Us</div>
          </div>
        </div>
      </div>
    </section>
  );
}
