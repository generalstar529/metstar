"use client";

import Image from "next/image";
import imgPayBenefits from "@/assets/images/pay-benefits.webp";
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
    <section className="pay-benefits-hero">
      <div className="container mx-auto">
        <div className="h-full text-left flex">
          <Image src={imgPayBenefits} alt="culture-hero" layout="fill" />
          <div
            className="text-lg sm:text-2xl md:text-4xl lg:text-5xl pay-benefits-hero-title"
            ref={titleGroupRef}
          >
            <div className="title">PAY & BENEFITS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
