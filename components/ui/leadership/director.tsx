"use client";

import { peopleDirector } from "@/constants";
import { AnimatedButton, IntroCard } from "@/components/utils";
import Link from "next/link";

export default function Director() {
  return (
    <section className="leadership-director">
      <div className="container mx-auto">
        <div className="text-4xl md:text-5xl font-bold pt-9 mx-12 lg:mx-28 leadership-director-title">
          BOARD OF DIRECTORS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 leadership-director-content p-24">
          {peopleDirector.map((peopleItem, idx) => (
            <IntroCard
              key={idx}
              photo={peopleItem.photo}
              fullname={peopleItem.fullname}
              readMore={false}
            />
          ))}
          <div className="learn-more flex flex-col justify-center text-center mx-auto">
            <div className="text-lg font-bold">
              Want to learn more about our governance at Metstar Premier Era
              Innovations Services?
            </div>
            <Link href="/aboutus">
              <AnimatedButton
                variant="transparent"
                icon="arrow-right"
                className="text-black text-left text-lg md:text-xl my-12 ml-auto"
              >
                LERN MORE
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
