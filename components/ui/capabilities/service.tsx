"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { AnimatedButton } from "@/components/utils";
import imgService from "@/assets/images/capabilities-service.webp";

export default function Service() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  function onScroll(e: Event) {
    let pageTop = window.pageYOffset;
    let pageBottom = pageTop + window.innerHeight;

    if (textRef.current) {
      let posY = textRef.current.offsetTop;

      if (posY < pageBottom) {
        textRef.current.classList.add("service-text-animation");
      } else {
        textRef.current.classList.remove("service-text-animation");
      }
    }
  }

  return (
    <section className="capabilities-service">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-11 py-24 gap-10">
        <div className="col-span-1 description" ref={textRef}>
          <div className="title flex text-2xl md:text-3xl font-bold my-10">
            CUTTING-EDGE SERVICES, INDUSTRY-LEADING INNOVATIONS
          </div>
          <div className="text-xl md:text-2xl text-white font-bold my-5">
            We’re crafting the tools, techniques, and technologies to tackle the
            infrastructure challenges of tomorrow.
          </div>
          <div className="text-sm text-white">
            The future of energy is upon us. We invest in our experts and
            marshal the capabilities of over 200 operating companies to push the
            boundaries of what’s possible. Innovation powers our standing as the
            energy infrastructure solutions partner of choice. Find out more
            about what we do.
          </div>
          <AnimatedButton
            variant="transparent"
            icon="arrow-right"
            className="text-white text-left text-lg md:text-xl my-2"
          >
            GET IN TOUCH
          </AnimatedButton>
        </div>
        <div className="col-span-1 flex my-auto justify-center">
          <Image src={imgService} alt="service" className="logo" />
        </div>
      </div>
    </section>
  );
}
