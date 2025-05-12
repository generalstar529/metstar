'use client'

import { useEffect, useRef } from "react";

import { environments } from "@/constants";
import { IntroCard } from "@/components/utils";

export default function Environment () {

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  });

  function onScroll(e: Event) {
    let pageTop = window.pageYOffset;
    let pageBottom = pageTop + window.innerHeight;

    if(imageRef.current) {
      let posY = imageRef.current.offsetTop;
      
      if(posY < pageBottom) {
        imageRef.current.classList.add('environment-image-animation');
      }
      else {
        imageRef.current.classList.remove('environment-image-animation');
      }
    }
  }

  return (
    <section className="sustainability-environment">
      <div className="container mx-auto p-28">        
        <div className="text-4xl md:text-5xl font-bold sustainability-environment-title">
          ENVIRONMENT
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 sustainability-environment-content" ref={imageRef}>
          {
            environments.map((environmentItem, idx) => (
              <IntroCard
                key={idx}
                photo={environmentItem.photo}
                fullname={environmentItem.fullname}
                introduction={environmentItem.introduction}
                className="text-white"
                readMore={false}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}