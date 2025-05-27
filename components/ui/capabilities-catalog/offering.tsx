"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { Select } from "@/components/utils";

const options = [
  "Electric Power",
  "Energy Efficiency",
  "Safety",
  "Interior Remodeling",
  "Exterior Remodeling",
  "Restoration",
  "Generators",
  "Maintenance Subscriptions",
];

interface IOffer {
  title: string;
  path: string;
  contents: string[][];
}

const offerings: IOffer[] = [
  {
    title: "Electric Power",
    path: "/capabilities/electric-power",
    contents: [
      [
        "Fixtures",
        "Plugs",
        "Breakers",
        "Wiring Pulls",
        "Heavy Ups",
        "Remodels Designs",
      ],
    ],
  },
  {
    title: "Energy Efficiency",
    path: "/capabilities/energy-efficiency",
    contents: [
      [
        "Windows",
        "Attic Insulation",
        "Doors",
        "Lighting",
        "Smart Home Installation",
        "Energy Efficiency Audits",
      ],
    ],
  },
  {
    title: "SAFETY",
    path: "/capabilities/safety",
    contents: [
      [
        "Hand Rail Installation",
        "Safety Audits for Structures and Electrical",
        "Security Systems",
        "Cameras",
        "Door Bells",
        "Mold Inspections and Remedies",
        "Smoke Detectors",
        "Exterior Remodeling",
        "Generators",
        "Maintenance",
      ],
    ],
  },
  {
    title: "Interior Remodeling",
    path: "/capabilities/interior-remodeling",
    contents: [
      [
        "Kitchens",
        "Bathrooms",
        "Basement Finishing",
        "Flooring",
        "Tiling",
        "Carpeting",
        "Painting",
        "Drywall",
        "HVAC",
        "Age-in Place Modifications",
        "Smart Home Installations",
        "Customized Designs",
      ],
    ],
  },
  {
    title: "Exterior Remodeling",
    path: "/capabilities/exterior-remodeling",
    contents: [
      [
        "Lighting Designs",
        "Security Upgrades",
        "Cameras and Doorbells",
        "Gutters and Trim",
        "Garage Door Motors",
        "Roofing",
      ],
    ],
  },
  {
    title: "Restoration",
    path: "/capabilities/restoration",
    contents: [["Fire and Water Damaged Repairs", "Remediation Services"]],
  },
  {
    title: "Generators",
    path: "/capabilities/generators",
    contents: [
      ["Generator Installs", "Service", "Estimates", "Stand By", "Portables"],
    ],
  },
  {
    title: "Maintenance Subscriptions",
    path: "/capabilities/maintenance-subscriptions",
    contents: [
      [
        "Energy Audits",
        "Recaulking Bathrooms and Window",
        "Select Furniture Assembly",
        "Drywall Patches",
        "Faucets",
        "Weather Stripping",
        "Smart Home Set up",
        "Fan Installation",
        "Many More Preventative Maintenance Services",
      ],
    ],
  },
];

export default function Offering() {
  const titleRefs = Array.from({ length: 8 }).map(() =>
    useRef<HTMLDivElement>(null)
  );

  const onChangeSelect = (selectedIndex: any) => {
    const titleTop = titleRefs[selectedIndex].current?.offsetTop;
    if (typeof titleTop === "number") {
      window.scrollTo(window.pageXOffset, titleTop);
    }
  };

  return (
    <section className="capabilities-offering p-10">
      <div className="container">
        <div className="flex justify-between">
          <div className="text-3xl font-bold offering-text">
            CAPABILITY OFFERINGS
          </div>
          <div className="offering-select">
            <Select
              options={options}
              onChange={(e) => onChangeSelect(e.target.selectedIndex)}
            />
          </div>
        </div>
        {offerings.map((offerItem, idx) => (
          <div key={idx} className="my-10" ref={titleRefs[idx]}>
            <div className="text-2xl mb-5">
              <Link href={offerItem.path} className="offering-title font-bold">
                {offerItem.title}
              </Link>
            </div>
            <div className="text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {offerItem.contents.map((contentItems, idx) => (
                <div key={idx}>
                  {contentItems.map((item, id) => (
                    <div className="py-1" key={id}>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
