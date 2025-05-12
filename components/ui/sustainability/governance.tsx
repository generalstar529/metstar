'use client'

import { useEffect, useRef } from "react";

import { governances } from "@/constants";
import { IntroCard } from "@/components/utils";

export default function Governance () {
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
        imageRef.current.classList.add('governance-image-animation');
      }
      else {
        imageRef.current.classList.remove('governance-image-animation');
      }
    }
  }

  return (
    <section className="sustainability-governance">
      <div className="container mx-auto p-28">        
        <div className="text-4xl md:text-5xl font-bold sustainability-governance-title">
          GOVERNANCE
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sustainability-governance-content mt-10" ref={imageRef}>
          {
            governances.map((governanceItem, idx) => (
              <IntroCard
                key={idx}
                photo={governanceItem.photo}
                fullname={governanceItem.fullname}
                introduction={governanceItem.introduction}
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