"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "@/components/utils/ProjectCard";
import { projectcards } from "@/constants";

interface ProjectProps {
  currentIndex: number;
}

export default function Project({ currentIndex }: ProjectProps) {
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
        imageRef.current.classList.add("project-image-animation");
      } else {
        imageRef.current.classList.remove("project-image-animation");
      }
    }
  }

  return (
    <section className="capabilities-item-project px-10 pb-10">
      <div className="container mx-auto">
        <div className="flex items-end">
          <div className="flex capabilities-item-project-bargroup">
            <span className="capabilities-item-project-bargroup-first hidden lg:block"></span>
            <span className="capabilities-item-project-bargroup-second hidden lg:block"></span>
            <span className="capabilities-item-project-bargroup-third hidden lg:block"></span>
          </div>
          <div className="text-4xl md:text-5xl font-bold ms-0 lg:ms-10 capabilities-item-project-title">
            Projects
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 capabilities-item-project-content mt-5"
          ref={imageRef}
        >
          {projectcards[currentIndex].length ? (
            projectcards[currentIndex].map((carditem, idx) => (
              <ProjectCard
                key={idx}
                photo={carditem.photo}
                title={carditem.title}
                content={carditem.content}
                className="text-black"
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}
