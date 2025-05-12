'use client'

import { peoplePresident } from "@/constants";
import { IntroCard } from "@/components/utils";

export default function President () {
  return (
    <section className="leadership-president">
      <div className="container mx-auto">        
        <div className="text-4xl md:text-5xl font-bold pt-9 mx-12 lg:mx-28 leadership-president-title">
          REGIONAL PRESIDENTS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 leadership-president-content p-24">
          {
            peoplePresident.map((peopleItem, idx) => (
              <IntroCard
                key={idx}
                photo={peopleItem.photo}
                fullname={peopleItem.fullname}
                role={peopleItem.role}
                introduction={peopleItem.introduction}
                className="text-black"
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}