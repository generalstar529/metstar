"use client";

import { useEffect, useRef } from "react";

import { socials } from "@/constants";
import { IntroCard } from "@/components/utils";

export default function Social() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  function onScroll(e: Event) {
    let pageTop = window.pageYOffset;
    let pageBottom = pageTop + window.innerHeight;

    if (imageRef.current) {
      let posY = imageRef.current.offsetTop;

      if (posY < pageBottom) {
        imageRef.current.classList.add("social-image-animation");
      } else {
        imageRef.current.classList.remove("social-image-animation");
      }
    }
  }

  return (
    <section className="sustainability-social">
      <div className="container mx-auto p-28">
        <div className="text-4xl md:text-5xl font-bold sustainability-social-title">
          SOCIAL
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sustainability-social-content mt-10"
          ref={imageRef}
        >
          {socials.map((socialItem, idx) => (
            <IntroCard
              key={idx}
              photo={socialItem.photo}
              fullname={socialItem.fullname}
              introduction={socialItem.introduction}
              className="text-black"
              readMore={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
