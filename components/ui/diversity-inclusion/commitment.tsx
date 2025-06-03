"use client";

import { useEffect, useRef } from "react";

import { ProcessCard } from "@/components/utils";
import { processes } from "@/constants";

export default function Commitment() {
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  function onScroll(e: Event) {
    let pageTop = window.pageYOffset;
    let pageBottom = pageTop + window.innerHeight;

    if (textRef1.current) {
      let posY = textRef1.current.offsetTop;

      if (posY < pageBottom) {
        textRef1.current.classList.add("title-animation");
      } else {
        textRef1.current.classList.remove("title-animation");
      }
    }

    if (textRef2.current) {
      let posY = textRef2.current.offsetTop;

      if (posY < pageBottom) {
        textRef2.current.classList.add("text-animation");
      } else {
        textRef2.current.classList.remove("text-animation");
      }
    }
  }

  return (
    <section className="diversity-commitment">
      <div className="container mx-auto">
        <div className="flex mt-5 mx-5">
          <div className="flex diversity-commitment-bargroup me-0 lg:me-10">
            <span className="diversity-commitment-bargroup-first hidden lg:block"></span>
            <span className="diversity-commitment-bargroup-second hidden lg:block"></span>
            <span className="diversity-commitment-bargroup-third hidden lg:block"></span>
          </div>
          <div className="diversity-commitment-content">
            <div
              className="text-4xl md:text-5xl font-bold pt-9 title"
              ref={textRef1}
            >
              DIVERSITY & INCLUSION COMMITMENT
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
              <div className="description" ref={textRef2}>
                <div className="text-lg md:text-xl font-bold text-black mb-10">
                  We are committed to creating a culture of inclusion and
                  belonging, centered on the success of our customers, our
                  people, and our communities.
                </div>
                <div className="text-sm text-black">
                  We strive to recognize and value our differences, and to
                  channel our strengths on behalf of the business. We are
                  focused on diversity and inclusion as we:
                </div>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {processes.map((cardItem, idx) => (
                <ProcessCard
                  key={idx}
                  id={idx + 1}
                  process={cardItem.process}
                  title={cardItem.title}
                  content={cardItem.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
