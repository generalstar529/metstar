"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Tag, Button, AnimatedButton, ImageCard } from "../../utils";
import imgEngineer from "@/assets/images/engineer.webp";
import imgWelder from "@/assets/images/welder.webp";
// import Carousel from 'react-grid-carousel'

interface ICareerItem {
  title: string;
  contents: string[];
}

const careers: ICareerItem[] = [
  {
    title: "Electric Power",
    contents: [
      "Lineworker",
      "Foreman",
      "Project Manger",
      "Safety Coordinator",
      "Groundworker",
      "And Many More...",
    ],
  },
  {
    title: "Energy Efficiency",
    contents: [
      "Project Coordinator",
      "Project Engineer",
      "Project Manager",
      "Welder",
      "Pipefitter",
      "And Many More...",
    ],
  },
  {
    title: "Safety",
    contents: [
      "Project Construction Coordinator",
      "Site Quality Coordinator",
      "Site Saftey Coordinator",
      "Solar Installer",
      "Turbine Installer",
      "And Many More...",
    ],
  },
  {
    title: "Interior Remodeling",
    contents: [
      "Aerial Lineman",
      "Fiber Splicer",
      "Horizontal Directional Drill Locator",
      "Project Controls Coordinator",
      "Antenna Array Technician",
      "And Many More...",
    ],
  },
  {
    title: "Exterior Remodeling",
    contents: [
      "Emergency",
      "Management Services Manager",
      "Environmental Civill Engineer",
      "Helicopter Pilot",
      "Environmental Compliance Officer",
      "Procurement Specialist",
      "And May More...",
    ],
  },
  {
    title: "Restoration",
    contents: [
      "Distribution Planning Engineer",
      "Substation Planner",
      "Transmission Engineer",
      "GIS Specialist",
      "Surveyor",
      "And Many More...",
    ],
  },
  {
    title: "Generators",
    contents: [
      "Distribution Planning Engineer",
      "Project Engineer",
      "Transmission Engineer",
      "Environmental Civil Engineer",
      "GIS Specialist",
      "And Many More...",
    ],
  },
];

export default function Career() {
  return (
    <section className="home-career">
      <div className="container mx-auto">
        <span className="home-career-bar hidden lg:block mb-5 mx-11"></span>
        <Tag variant="danger" className="p-3 mx-11 tracking-wider font-bold">
          CAREERS
        </Tag>
        <div className="flex mt-5 mx-11">
          <div className="flex home-career-bargroup me-0 lg:me-10">
            <span className="home-career-bargroup-first hidden lg:block"></span>
            <span className="home-career-bargroup-second hidden lg:block"></span>
            <span className="home-career-bargroup-third hidden lg:block"></span>
          </div>
          <div className="text-4xl md:text-5xl font-bold pt-9 home-career-title">
            POWER UP
            <br />
            YOUR CAREER
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 bg-zinc-100 py-28 px-11 home-career-content">
          <div>
            <div className="py-12">
              <span>
                Whether you are searching for the next step in your career, or
                considering a career in the trades, there are more opportunities
                than ever to chart your path at Metstar Premier Era Innovations.
                With more than 200 operating companies, the right job for you is
                a click away.
              </span>
            </div>

            {/* Disable cause there is no Careers page. */}
            {/* <div className="flex py-12">
              <Link href="careers">
                <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-lg md:text-xl my-12'>
                  LEARN MORE
                </AnimatedButton>
              </Link>
            </div> */}

            {/* <Carousel
              cols={1}
              rows={1}
              gap={10}
              showDots={true}
              style={{ width: "100%", height: "100%" }}
              loop
            >
              <Carousel.Item>
                <Image
                  src={imgEngineer}
                  alt="engineer"
                  style={{ width: "100%", height: "100%" }}
                ></Image>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  src={imgWelder}
                  alt="welder"
                  style={{ width: "100%", height: "100%" }}
                ></Image>
              </Carousel.Item>
            </Carousel> */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 mt-3 lg:mt-0">
            {careers.map((careerItem, idx) => (
              <div key={idx} className="mb-7">
                <div className="text-xl font-bold text-black mb-3">
                  {careerItem.title}
                </div>
                {careerItem.contents.map((contentItem, contentIdx) => (
                  <div key={contentIdx}>{contentItem}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
