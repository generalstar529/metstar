"use client";

import { AnimatedButton } from "@/components/utils";
import { useEffect, useRef } from "react";

interface INewsItem {
  title: string;
  content: string;
}

const news: INewsItem[] = [
  {
    title: "Environment",
    content:
      "Building the infrastructure that connects people to the power they need inevitably generates risks to the environment. We use great care to minimize the environmental impact of our projects. At Metstar Premier Era Innovations we are continually innovating to better preserve biodiversity and protect sensitive ecosystems. We are looking to the future and actively reducing the carbon footprint of our operations. We know that a brighter future means a healthier environment.",
  },
  {
    title: "Social",
    content:
      "People are the heart of what we do, and why we do it. We welcome and empower employees from all backgrounds to build successful careers and give back to the communities where we live and work. We know that our company can only succeed if we enhance the lives of our employees and our communities.",
  },
  {
    title: "Governance",
    content:
      "At Metstar Premier Era Innovations we do it right the first time. We are serious about maintaining a culture of empowerment and inclusion. Our policies and code of conduct were created to treat all people with dignity and respect.",
  },
  {
    title: "Impact",
    content:
      "We recognize our unique position as the world shifts to renewable energy. We have the expertise and capabilities needed to support this transition. From connecting renewable energy sources to the grid to the installation of battery storage systems, Metstar Premier Era Innovations is building tomorrow’s energy infrastructure today.",
  },
];

export default function Summary() {
  const newsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  function onScroll(e: Event) {
    let pageTop = window.pageYOffset;
    let pageBottom = pageTop + window.innerHeight;

    if (newsContainerRef.current) {
      let posY = newsContainerRef.current.offsetTop;

      if (posY < pageBottom) {
        addClasses();
      } else {
        removeClasses();
      }
    }
  }

  async function addClasses() {
    let sections = document.getElementsByClassName("tag");
    for (let i = 0; i < sections.length; i++) {
      let tag = sections[i];
      tag.classList.add(`visible-tag${i + 1}`);
    }
  }

  function removeClasses() {
    let sections = document.getElementsByClassName("tag");
    for (let i = 0; i < sections.length; i++) {
      let tag = sections[i];
      tag.classList.remove(`visible-tag${i + 1}`);
    }
  }

  return (
    <section className="sustainability-summary bg-zinc-100">
      <div className="container p-1 w-11/12 mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 my-10 news-container"
          ref={newsContainerRef}
        >
          {news.map((newsItem, idx) => (
            <section key={idx} className="tag">
              <div className="flex flex-col h-full px-4 py-2">
                <div className="text-2xl font-bold text-black mb-10">
                  {newsItem.title}
                </div>
                <div className="mb-10 tracking-normal">{newsItem.content}</div>
                {/* <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-md md:text-lg my-12 mt-auto'>
                      LERAN MORE
                    </AnimatedButton> */}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
