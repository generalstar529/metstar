"use client";

import { peopleLeadership } from "@/constants";
import { IntroCard } from "@/components/utils";

export default function Leadership() {
  return (
    <section className="leadership-leader bg-zinc-100">
      <div className="container mx-auto">
        <div className="flex mt-5 mx-11 items-end	">
          <div className="flex leadership-leader-bargroup me-0 lg:me-10">
            <span className="leadership-leader-bargroup-first hidden lg:block"></span>
            <span className="leadership-leader-bargroup-second hidden lg:block"></span>
            <span className="leadership-leader-bargroup-third hidden lg:block"></span>
          </div>
          <div className="text-4xl md:text-5xl font-bold pt-9 leadership-leader-title">
            LEADERSHIP
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 leadership-leader-content p-5 mt-5">
          {peopleLeadership.map((peopleItem, idx) => (
            <IntroCard
              key={idx}
              photo={peopleItem.photo}
              fullname={peopleItem.fullname}
              role={peopleItem.role}
              introduction={peopleItem.introduction}
              className="text-black"
              imgClassName="introcard-image"
              readMore={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
