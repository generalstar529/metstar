"use client";

import { Input, Select } from "@/components/utils";

const options = [
  "Select a Capability...",
  "All Capabilities",
  "Electric Power",
  "Energy Efficiency",
  "Safety",
  "Interior Remodeling",
  "Exterior Remodeling",
  "Restoration",
  "Generators",
  "Maintenance Subscriptions",
];

export default function Search() {
  return (
    <section className="capabilities-catalog bg-zinc-100 text-center">
      <div className="container mx-auto w-full md:w-7/12 pt-60 pb-10">
        <div className="text-lg md:text-2xl lg:text-4xl text-black font-bold mb-10">
          SEE WHAT METSTAR PREMIER ERA INNOVATIONS CAN DO FOR YOU
        </div>
        {/* <div className="flex justify-center">
          <Input className="w-80" variant="default" placeholder="Enter a search team..." onChange={() => {}} />
          <Select className="w-80" options={options} icon="search" iconPos="right" onChange={() => {}} />
        </div> */}
      </div>
    </section>
  );
}
